"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative py-16 text-white overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, #fff 3.44%, rgba(255, 0, 255, 0) 100%),
          url(/galaxy.jpg)
        `,
        backgroundSize: 'cover',
        // backgroundPosition: '',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-purple-400/20 via-transparent to-blue-400/20"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Newsletter signup */}
        <div 
          className="backdrop-blur-xl rounded-full p-6 mb-12 w-full  max-w-7xl h-[100px] mx-auto"
          style={{
            background: '#900B9A66',
            backdropFilter: 'blur(50px)',
            justifyContent: 'space-between',
            opacity: 1,
            padding: '24px'
          }}
        >
          <div className="flex items-center justify-between gap-6 h-full">
            <div className="shrink-0">
              <h3 className="text-3xl font-bold text-white">Subscribe to our newsletter</h3>
            </div>
            <div className="flex items-center">
              <div className="flex items-center bg-white rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-80 px-6 py-3 bg-transparent text-gray-700 placeholder-gray-500 outline-none border-none"
                />
                <button className="px-6 py-3 bg-transparent text-purple-600 font-medium hover:bg-purple-50 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-2 ">
            <div className="flex items-center gap-3 mb-4">
                <Image src={'/logo_name.png'} alt="" width={100} height={100} />
            </div>
            <p className="text-white mb-4">2025 Nebula Inc ©</p>
            <div className="flex items-center gap-4 text-sm text-white">
              <a href="/docs/Terms%20and%20Conditions%20for%20Nebula.docx" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="/docs/Privacy%20Policy%20for%20Nebula.docx" className="hover:text-white transition-colors">Privacy policy</a>
              <a href="/docs/Cookie%20Policy.docx" className="hover:text-white transition-colors">Cookie policy</a>
            </div>
          </div>
          {/* Simple footer nav */}
          <div className="flex flex-col justify-start">
            <h4 className="font-semibold mb-4">Navigate</h4>
            <div className="space-y-2 text-white">
              <a href="#" className="block hover:text-white transition-colors">Home</a>
              <a href="/submit-tool" className="block hover:text-white transition-colors">Submit Tool</a>
              <a href="mailto:team@thenebula.ai" className="block hover:text-white transition-colors">Contact Us</a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a href="https://www.youtube.com/@AI.TheNebula" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg width="20" height="14" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 2.65c-.275-1.03-1.085-1.84-2.114-2.114C19.43 0 12 0 12 0S4.57 0 2.616.536C1.586.811.776 1.62.502 2.65 0 4.604 0 8.5 0 8.5s0 3.896.502 5.85c.274 1.03 1.084 1.84 2.114 2.114C4.57 17 12 17 12 17s7.43 0 9.384-.536c1.029-.274 1.839-1.084 2.114-2.114C24 12.396 24 8.5 24 8.5s0-3.896-.502-5.85ZM9.545 12.227V4.773L15.818 8.5 9.545 12.227Z" fill="white"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/thenebula.ai" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="white"/>
                    <path d="M17.4 0H6.6A6.6 6.6 0 0 0 0 6.6v10.8A6.6 6.6 0 0 0 6.6 24h10.8A6.6 6.6 0 0 0 24 17.4V6.6A6.6 6.6 0 0 0 17.4 0Zm4.8 17.4a4.8 4.8 0 0 1-4.8 4.8H6.6a4.8 4.8 0 0 1-4.8-4.8V6.6A4.8 4.8 0 0 1 6.6 1.8h10.8a4.8 4.8 0 0 1 4.8 4.8v10.8Z" fill="white"/>
                    <circle cx="18.6" cy="5.4" r="1.2" fill="white"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.983 3.5A2.484 2.484 0 1 0 4.98 8.47h.03a2.484 2.484 0 1 0-.027-4.97ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.08V21H19v-5.35c0-1.28-.03-2.93-1.78-2.93-1.78 0-2.05 1.39-2.05 2.83V21h-4V9Z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}