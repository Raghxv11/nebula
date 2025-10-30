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
    <section className="py-24 bg-white z-20">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Left side - Contact info */}
          <div className="space-y-8 ">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600 max-w-md">
                Have questions about Nebula AI? Want to partner with us? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <div className="text-lg text-slate-900">hello@company.com</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <div className="text-lg text-slate-900">+1 (555) 123-4567</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <div className="text-lg text-slate-900">
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10  text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.9912 7.97497C35.016 8.32495 35.016 8.67501 35.016 9.025C35.016 19.6999 26.9735 32 12.2742 32C7.74557 32 3.53873 30.6749 0 28.375C0.643426 28.45 1.26202 28.475 1.9302 28.475C5.66683 28.475 9.10661 27.2 11.8535 25.025C8.33948 24.95 5.39467 22.625 4.38005 19.425C4.87502 19.4999 5.36991 19.55 5.88963 19.55C6.60725 19.55 7.32494 19.4499 7.99305 19.275C4.33062 18.5249 1.5837 15.275 1.5837 11.35V11.25C2.64774 11.85 3.88516 12.225 5.19662 12.275C3.04369 10.8249 1.63321 8.34996 1.63321 5.54994C1.63321 4.04997 2.02907 2.67497 2.72201 1.47496C6.65669 6.37496 12.5711 9.57491 19.203 9.92496C19.0793 9.32496 19.005 8.70002 19.005 8.07501C19.005 3.62496 22.5685 0 26.9981 0C29.2995 0 31.3781 0.974998 32.8382 2.55C34.6446 2.20002 36.3769 1.52498 37.9112 0.600004C37.3172 2.47505 36.0552 4.05005 34.3972 5.04998C36.0057 4.87506 37.5648 4.42496 39 3.80003C37.9113 5.39996 36.5502 6.8249 34.9912 7.97497Z" fill="#5D53CD" />
                </svg>

              </a>
              <a href="#" className="w-10 h-10  text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.7143 0H2.27857C1.02143 0 0 1.03571 0 2.30714V29.6929C0 30.9643 1.02143 32 2.27857 32H29.7143C30.9714 32 32 30.9643 32 29.6929V2.30714C32 1.03571 30.9714 0 29.7143 0ZM9.67143 27.4286H4.92857V12.1571H9.67857V27.4286H9.67143ZM7.3 10.0714C5.77857 10.0714 4.55 8.83571 4.55 7.32143C4.55 5.80714 5.77857 4.57143 7.3 4.57143C8.81429 4.57143 10.05 5.80714 10.05 7.32143C10.05 8.84286 8.82143 10.0714 7.3 10.0714ZM27.45 27.4286H22.7071V20C22.7071 18.2286 22.6714 15.95 20.2429 15.95C17.7714 15.95 17.3929 17.8786 17.3929 19.8714V27.4286H12.65V12.1571H17.2V14.2429H17.2643C17.9 13.0429 19.45 11.7786 21.7571 11.7786C26.5571 11.7786 27.45 14.9429 27.45 19.0571V27.4286Z" fill="#5D53CD" />
                </svg>

              </a>
              <a href="#" className="w-10 h-10  text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors">
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0377 25.7664C11.0377 25.8987 10.8847 26.0046 10.6917 26.0046C10.4722 26.0244 10.3192 25.9185 10.3192 25.7664C10.3192 25.634 10.4722 25.5281 10.6651 25.5281C10.8647 25.5083 11.0377 25.6142 11.0377 25.7664ZM8.96855 25.4686C8.92198 25.6009 9.05504 25.7531 9.25464 25.7928C9.42762 25.859 9.62722 25.7928 9.66714 25.6605C9.70706 25.5281 9.58065 25.376 9.38105 25.3164C9.20807 25.2701 9.01512 25.3363 8.96855 25.4686ZM11.9093 25.3561C11.7163 25.4024 11.5833 25.5281 11.6032 25.6803C11.6232 25.8127 11.7962 25.8987 11.9958 25.8524C12.1887 25.8061 12.3218 25.6803 12.3018 25.548C12.2819 25.4223 12.1022 25.3363 11.9093 25.3561ZM16.2871 0C7.05907 0 0 6.96763 0 16.1453C0 23.4835 4.64395 29.763 11.2772 31.973C12.1288 32.1252 12.4282 31.6025 12.4282 31.1724C12.4282 30.7621 12.4083 28.4991 12.4083 27.1096C12.4083 27.1096 7.75101 28.1021 6.77298 25.1377C6.77298 25.1377 6.01452 23.2122 4.92339 22.7159C4.92339 22.7159 3.3998 21.6771 5.02984 21.6969C5.02984 21.6969 6.68649 21.8293 7.59798 23.4041C9.05504 25.9582 11.4968 25.2238 12.4482 24.787C12.6012 23.7283 13.0337 22.9939 13.5127 22.5571C9.79355 22.1469 6.04113 21.6109 6.04113 15.2454C6.04113 13.4258 6.54677 12.5126 7.61129 11.348C7.43831 10.9179 6.87278 9.14461 7.78427 6.85515C9.1748 6.42505 12.375 8.64172 12.375 8.64172C13.7056 8.27117 15.1361 8.07928 16.5532 8.07928C17.9704 8.07928 19.4008 8.27117 20.7315 8.64172C20.7315 8.64172 23.9317 6.41843 25.3222 6.85515C26.2337 9.15122 25.6681 10.9179 25.4952 11.348C26.5597 12.5192 27.2117 13.4324 27.2117 15.2454C27.2117 21.6308 23.2929 22.1403 19.5738 22.5571C20.1859 23.0799 20.7048 24.0724 20.7048 25.6274C20.7048 27.8573 20.6849 30.6166 20.6849 31.1592C20.6849 31.5893 20.9909 32.112 21.8359 31.9598C28.4891 29.763 33 23.4835 33 16.1453C33 6.96763 25.5151 0 16.2871 0ZM6.46694 22.8218C6.38044 22.888 6.4004 23.0402 6.51351 23.1659C6.61996 23.2718 6.77298 23.3181 6.85948 23.2321C6.94597 23.1659 6.92601 23.0137 6.8129 22.888C6.70645 22.7821 6.55343 22.7358 6.46694 22.8218ZM5.74839 22.2858C5.70182 22.3719 5.76835 22.4777 5.90141 22.5439C6.00786 22.6101 6.14093 22.5902 6.1875 22.4976C6.23407 22.4116 6.16754 22.3057 6.03448 22.2395C5.90141 22.1998 5.79496 22.2197 5.74839 22.2858ZM7.90403 24.6415C7.79758 24.7275 7.8375 24.926 7.99052 25.0517C8.14355 25.2039 8.33649 25.2238 8.42298 25.1179C8.50948 25.0319 8.46956 24.8334 8.33649 24.7076C8.19012 24.5555 7.99052 24.5356 7.90403 24.6415ZM7.14557 23.6688C7.03911 23.735 7.03911 23.907 7.14557 24.0592C7.25202 24.2114 7.43165 24.2775 7.51815 24.2114C7.6246 24.1254 7.6246 23.9533 7.51815 23.8011C7.425 23.6489 7.25202 23.5828 7.14557 23.6688Z" fill="#5D53CD" />
                </svg>


              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    placeholder="Mohammed Thufail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    placeholder="Mohammed Thufail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="hello@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Xonotic"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                >
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Support</option>
                  <option>Press</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                  required
                ></textarea>
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
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <span className="relative z-10">Send Message</span>
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