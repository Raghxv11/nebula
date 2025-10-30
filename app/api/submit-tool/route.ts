import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Send email using Resend
    try {
      const emailData = await resend.emails.send({
        from: 'Nebula AI <onboarding@resend.dev>',
        to: 'team@thenebula.ai', // your inbox
        subject: `New Tool Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F21C4; border-bottom: 2px solid #4F21C4; padding-bottom: 10px;">
              🚀 New Tool Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Submission Details</h3>
              
              <div style="margin: 15px 0;">
                <strong style="color: #4F21C4;">Name:</strong>
                <span style="margin-left: 10px;">${name}</span>
              </div>
              
              <div style="margin: 15px 0;">
                <strong style="color: #4F21C4;">Email:</strong>
                <span style="margin-left: 10px;">${email}</span>
              </div>
              
              <div style="margin: 15px 0;">
                <strong style="color: #4F21C4;">Tool Description:</strong>
                <div style="margin-top: 10px; padding: 15px; background-color: white; border-left: 4px solid #4F21C4; border-radius: 4px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background-color: #e8f2ff; border-radius: 8px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                📅 <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
                🌐 <strong>Source:</strong> Nebula AI Website Tool Submission Form
              </p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #999; font-size: 12px;">
              This email was sent from the Nebula AI tool submission form.
            </div>
          </div>
        `,
      })

      console.log('Email sent successfully:', emailData)
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      // Don't fail the request if email fails, but log it
    }

    // Log the submission
    console.log('Tool submission received:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Tool submission received successfully!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing tool submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}