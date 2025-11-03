"use client"

import React, { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "General Inquiry",
    message: ""
  })

  const [submitState, setSubmitState] = useState<{
    isLoading: boolean;
    isSuccess: boolean;
    error: string | null;
  }>({
    isLoading: false,
    isSuccess: false,
    error: null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset submit state
    setSubmitState({ isLoading: true, isSuccess: false, error: null })

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitState({ isLoading: false, isSuccess: true, error: null })
        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          subject: "General Inquiry",
          message: ""
        })
      } else {
        setSubmitState({ 
          isLoading: false, 
          isSuccess: false, 
          error: result.error || 'Something went wrong' 
        })
      }
    } catch (error) {
      setSubmitState({ 
        isLoading: false, 
        isSuccess: false, 
        error: 'Network error. Please try again.' 
      })
    }
  }
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600 max-w-md">
                Have questions about Nebula AI? Want to partner with us? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <div className="text-lg text-slate-900">team@thenebula.ai</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <div className="text-lg text-slate-900">
                  San Francisco, CA
                
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://www.youtube.com/@AI.TheNebula" className="w-10 h-10 text-[#5D53CD] rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 2.65c-.275-1.03-1.085-1.84-2.114-2.114C19.43 0 12 0 12 0S4.57 0 2.616.536C1.586.811.776 1.62.502 2.65 0 4.604 0 8.5 0 8.5s0 3.896.502 5.85c.274 1.03 1.084 1.84 2.114 2.114C4.57 17 12 17 12 17s7.43 0 9.384-.536c1.029-.274 1.839-1.084 2.114-2.114C24 12.396 24 8.5 24 8.5s0-3.896-.502-5.85ZM9.545 12.227V4.773L15.818 8.5 9.545 12.227Z" fill="currentColor"/>
                </svg>

              </a>
              <a href="https://linkedin.com/company/the-nebula" className="w-10 h-10 text-[#5D53CD] rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.7143 0H2.27857C1.02143 0 0 1.03571 0 2.30714V29.6929C0 30.9643 1.02143 32 2.27857 32H29.7143C30.9714 32 32 30.9643 32 29.6929V2.30714C32 1.03571 30.9714 0 29.7143 0ZM9.67143 27.4286H4.92857V12.1571H9.67857V27.4286H9.67143ZM7.3 10.0714C5.77857 10.0714 4.55 8.83571 4.55 7.32143C4.55 5.80714 5.77857 4.57143 7.3 4.57143C8.81429 4.57143 10.05 5.80714 10.05 7.32143C10.05 8.84286 8.82143 10.0714 7.3 10.0714ZM27.45 27.4286H22.7071V20C22.7071 18.2286 22.6714 15.95 20.2429 15.95C17.7714 15.95 17.3929 17.8786 17.3929 19.8714V27.4286H12.65V12.1571H17.2V14.2429H17.2643C17.9 13.0429 19.45 11.7786 21.7571 11.7786C26.5571 11.7786 27.45 14.9429 27.45 19.0571V27.4286Z" fill="currentColor" />
                </svg>

              </a>
              <a href="https://www.instagram.com/thenebula.ai" className="w-10 h-10 text-[#5D53CD] rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="currentColor"/>
                  <path d="M17.4 0H6.6A6.6 6.6 0 0 0 0 6.6v10.8A6.6 6.6 0 0 0 6.6 24h10.8A6.6 6.6 0 0 0 24 17.4V6.6A6.6 6.6 0 0 0 17.4 0Zm4.8 17.4a4.8 4.8 0 0 1-4.8 4.8H6.6a4.8 4.8 0 0 1-4.8-4.8V6.6A4.8 4.8 0 0 1 6.6 1.8h10.8a4.8 4.8 0 0 1 4.8 4.8v10.8Z" fill="currentColor"/>
                  <circle cx="18.6" cy="5.4" r="1.2" fill="currentColor"/>
                </svg>


              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => {
                      console.log('First name changed:', e.target.value);
                      setFormData(prev => ({ ...prev, firstName: e.target.value }));
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white relative z-10 cursor-text"
                    required
                    disabled={submitState.isLoading}
                    style={{ pointerEvents: 'auto', userSelect: 'text' }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => {
                      console.log('Last name changed:', e.target.value);
                      setFormData(prev => ({ ...prev, lastName: e.target.value }));
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white relative z-10 cursor-text"
                    required
                    disabled={submitState.isLoading}
                    style={{ pointerEvents: 'auto', userSelect: 'text' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      console.log('Email changed:', e.target.value);
                      setFormData(prev => ({ ...prev, email: e.target.value }));
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white relative z-10 cursor-text"
                    required
                    disabled={submitState.isLoading}
                    style={{ pointerEvents: 'auto', userSelect: 'text' }}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => {
                      console.log('Company changed:', e.target.value);
                      setFormData(prev => ({ ...prev, company: e.target.value }));
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white relative z-10 cursor-text"
                    disabled={submitState.isLoading}
                    style={{ pointerEvents: 'auto', userSelect: 'text' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    console.log('Subject changed:', e.target.value);
                    setFormData(prev => ({ ...prev, subject: e.target.value }));
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white cursor-pointer relative z-10"
                  disabled={submitState.isLoading}
                  style={{ pointerEvents: 'auto' }}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Support">Support</option>
                  <option value="Press">Press</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    console.log('Message changed:', e.target.value);
                    setFormData(prev => ({ ...prev, message: e.target.value }));
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none bg-white relative z-10 cursor-text"
                  required
                  disabled={submitState.isLoading}
                  style={{ pointerEvents: 'auto', userSelect: 'text' }}
                />
              </div>

            <div className="space-y-3">
              <button 
                className="inline-flex border border-white items-center gap-2 px-5 py-2 rounded-full text-white shadow-[0_12px_40px_rgba(99,102,241,0.18)] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                    backgroundImage: 'url(/ewqew.png)',
                    backgroundSize: 'fit',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                type="submit"
                disabled={submitState.isLoading}
                >
                {submitState.isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Success message */}
              {submitState.isSuccess && (
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {/* Error message */}
              {submitState.error && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{submitState.error}</span>
                </div>
              )}
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}