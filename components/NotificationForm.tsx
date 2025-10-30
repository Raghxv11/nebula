"use client"

import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export function NotificationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    interest: "AI Tool Discovery",
    newsletter: false,
    earlyAccess: false
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
      const response = await fetch('/api/submit-form', {
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
          interest: "AI Tool Discovery",
          newsletter: false,
          earlyAccess: false
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
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-6xl bg-[#e7e6fb] pb-3 rounded-3xl">
        {/* Main card with starry background */}
        <div 
          className="relative overflow-hidden rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl "
          style={{
            backgroundImage: 'url(/form-bg.jpg)',
            backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backgroundRepeat: ''
          }}
        >
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/50 to-indigo-900/70"></div> */}
          
          <div className="relative grid lg:grid-cols-2 gap-12 p-12">
            {/* Left side - Form content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">
                  Get Notified When<br />We Launch
                </h2>
                <p className="text-md text-slate-300 leading-relaxed">
                  Be among the first to experience the future of AI tool discovery.<br />
                  Join thousands of early adopters waiting for launch.
                </p>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 0C9.68208 0 9.86417 0.0392773 10.0304 0.113904L17.4839 3.25216C18.3548 3.61744 19.0039 4.46976 19 5.49882C18.9802 9.39513 17.3652 16.524 10.545 19.7643C9.88396 20.0786 9.11604 20.0786 8.455 19.7643C1.63481 16.524 0.0198096 9.39513 1.80044e-05 5.49882C-0.00394032 4.46976 0.645225 3.61744 1.51606 3.25216L8.97354 0.113904C9.13583 0.0392773 9.31792 0 9.5 0ZM9.5 2.62372V17.4705C14.9625 14.8468 16.431 9.03771 16.4667 5.55381L9.5 2.62372Z" fill="white" />
                    </svg>
                  <span>Spam-free</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM6.83594 6.83594C7.20312 6.46875 7.79687 6.46875 8.16016 6.83594L9.99609 8.67188L11.832 6.83594C12.1992 6.46875 12.793 6.46875 13.1562 6.83594C13.5195 7.20312 13.5234 7.79687 13.1562 8.16016L11.3203 9.99609L13.1562 11.832C13.5234 12.1992 13.5234 12.793 13.1562 13.1562C12.7891 13.5195 12.1953 13.5234 11.832 13.1562L9.99609 11.3203L8.16016 13.1562C7.79297 13.5234 7.19922 13.5234 6.83594 13.1562C6.47266 12.7891 6.46875 12.1953 6.83594 11.832L8.67188 9.99609L6.83594 8.16016C6.46875 7.79297 6.46875 7.19922 6.83594 6.83594Z" fill="white"/>
                </svg>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.78571 5.625V7.5H12.2143V5.625C12.2143 3.89844 10.7759 2.5 9 2.5C7.22411 2.5 5.78571 3.89844 5.78571 5.625ZM3.21429 7.5V5.625C3.21429 2.51953 5.8058 0 9 0C12.1942 0 14.7857 2.51953 14.7857 5.625V7.5H15.4286C16.8469 7.5 18 8.62109 18 10V17.5C18 18.8789 16.8469 20 15.4286 20H2.57143C1.15313 20 0 18.8789 0 17.5V10C0 8.62109 1.15313 7.5 2.57143 7.5H3.21429Z" fill="white" />
                    </svg>
                  <span>Privacy protected</span>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {/* <label className="text-sm text-slate-400">First Name</label> */}
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <label className="text-sm text-slate-400">Last Name</label> */}
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  {/* <label className="text-sm text-slate-400">Email</label> */}
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur"
                    placeholder="Email"
                  />
                </div>

                {/* Interest dropdown */}
                <div className="space-y-2">
                  <label className="text-sm text-slate-200">What interests you most?</label>
                  <div className="relative">
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur appearance-none cursor-pointer"
                    >
                      <option value="AI Tool Discovery">AI Tool Discovery</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Data Analysis">Data Analysis</option>
                      <option value="Automation">Automation</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: !!checked }))}
                      className="mt-1 border-white/20 bg-white/10 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-slate-200 leading-relaxed cursor-pointer">
                      I'd like to receive the weekly Nebula AI newsletter with the latest AI tool updates and insights
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="earlyAccess"
                      checked={formData.earlyAccess}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, earlyAccess: !!checked }))}
                      className="mt-1 border-white/20 bg-white/10 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <label htmlFor="earlyAccess" className="text-sm text-slate-200 leading-relaxed cursor-pointer">
                      Send me exclusive early access updates and beta invitations
                    </label>
                  </div>
                </div>

                {/* Submit button */}
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
                        <span className="relative z-10">Submitting...</span>
                      </>
                    ) : (
                      <span className="relative z-10">Notify Me at Launch</span>
                    )}
                  </button>

                  {/* Success message */}
                  {submitState.isSuccess && (
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Successfully submitted! We'll notify you when we launch.</span>
                    </div>
                  )}

                  {/* Error message */}
                  {submitState.error && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
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

        {/* Stats section */}
        <div className="mt-0 grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-12 py-8">
          <div className="flex items-center justify-center gap-3">
            <div className="text-4xl md:text-5xl font-bold text-[#2B2D62]">5M+</div>
            <div className="text-sm text-slate-700 tracking-wide">Aggregate Views</div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-4xl md:text-5xl font-bold text-[#2B2D62]">15k+</div>
            <div className="text-sm text-slate-700 tracking-wide">Social Media Followers</div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-4xl md:text-5xl font-bold text-[#2B2D62]">2k+</div>
            <div className="text-sm text-slate-700 tracking-wide">Partnerships</div>
          </div>
        </div>
      </div>
    </section>
  )
}