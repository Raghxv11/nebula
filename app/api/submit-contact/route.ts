import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

async function ensureContactSheet(sheets: any, spreadsheetId: string) {
  try {
    // Check if Contact sheet exists
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });
    
    const contactSheet = spreadsheet.data.sheets?.find((sheet: any) => 
      sheet.properties.title === 'Contact'
    );
    
    if (!contactSheet) {
      // Create Contact sheet if it doesn't exist
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{
            addSheet: {
              properties: {
                title: 'Contact',
                gridProperties: {
                  rowCount: 1000,
                  columnCount: 10
                }
              }
            }
          }]
        }
      });
      
      // Add headers to the new Contact sheet
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Contact!A1:G1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [['Timestamp', 'First Name', 'Last Name', 'Email', 'Company', 'Subject', 'Message']]
        }
      });
    }
    
    return true;
  } catch (error) {
    console.log('Could not create Contact sheet:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Setup Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get current timestamp
    const timestamp = new Date().toISOString();

    // Prepare data for Google Sheets - Contact form data
    const values = [
      [
        timestamp,
        firstName,
        lastName,
        email,
        company || 'N/A',
        subject,
        message
      ]
    ];

    // Try to append to Contact sheet first, fallback to Sheet1 with different columns
    const spreadsheetId = process.env.GOOGLE_CONTACT_SHEET_ID || process.env.GOOGLE_SHEET_ID;
    
    if (!spreadsheetId) {
      return NextResponse.json(
        { error: 'Google Sheet ID not configured' },
        { status: 500 }
      );
    }
    
    // Ensure Contact sheet exists or create it
    const contactSheetExists = await ensureContactSheet(sheets, spreadsheetId);
    
    if (contactSheetExists) {
      // Use Contact sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Contact!A:G',
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });
    } else {
      // Fallback to Sheet1 with columns H onwards to avoid conflict with notification form
      console.log('Using Sheet1 columns H:N for contact form data');
      
      // Check if headers exist in H1:N1, if not add them
      try {
        const headerCheck = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: 'Sheet1!H1:N1',
        });
        
        if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
          // Add headers for contact form in columns H:N
          await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: 'Sheet1!H1:N1',
            valueInputOption: 'RAW',
            requestBody: {
              values: [['Timestamp', 'First Name', 'Last Name', 'Email', 'Company', 'Subject', 'Message']]
            }
          });
        }
      } catch (headerError) {
        console.log('Could not check/add headers:', headerError);
      }
      
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!H:N',
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}