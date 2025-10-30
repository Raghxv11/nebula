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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-2 ">
            <div className="flex items-center gap-3 mb-4">
                <Image src={'/logo_name.png'} alt="" width={100} height={100} />
            </div>
            <p className="text-white mb-4">2023 Nebula Inc ©</p>
            <div className="flex items-center gap-4 text-sm text-white">
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie policy</a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold mb-4">Tool Examples</h4>
            <div className="space-y-2 text-white">
              <a href="#" className="block hover:text-white transition-colors">Tool Lorem</a>
              <a href="#" className="block hover:text-white transition-colors">Design Tool</a>
              <a href="#" className="block hover:text-white transition-colors">Product tool 1</a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4">Stay Live</h4>
            <div className="space-y-2 text-white">
              <a href="#" className="block hover:text-white transition-colors">Design</a>
              <a href="#" className="block hover:text-white transition-colors">Video</a>
              <a href="#" className="block hover:text-white transition-colors">Gaming</a>
              <a href="#" className="block hover:text-white transition-colors">Audio</a>
              <a href="#" className="block hover:text-white transition-colors">Productivity</a>
            </div>
          </div>

          {/* Social links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.812 0.001H4.145C1.855 0.001 0 1.836 0 4.1V9.868C0 12.132 1.856 13.968 4.145 13.968H15.812C18.102 13.968 19.957 12.132 19.957 9.868V4.1C19.957 1.836 18.101 0 15.812 0V0.001ZM13.009 7.264L7.552 9.839C7.51872 9.85503 7.48192 9.86237 7.44503 9.86035C7.40815 9.85834 7.37237 9.84702 7.34103 9.82746C7.3097 9.8079 7.28382 9.78073 7.2658 9.74848C7.24779 9.71622 7.23822 9.67994 7.238 9.643V4.334C7.23867 4.29687 7.24872 4.26052 7.26722 4.22832C7.28573 4.19613 7.31208 4.16914 7.34382 4.14988C7.37556 4.13061 7.41167 4.11969 7.44877 4.11814C7.48587 4.11659 7.52276 4.12445 7.556 4.141L13.014 6.876C13.0504 6.89413 13.0809 6.92214 13.102 6.95683C13.1232 6.99151 13.1341 7.03145 13.1336 7.07207C13.1331 7.11269 13.1211 7.15234 13.0991 7.18646C13.077 7.22059 13.0458 7.24781 13.009 7.265V7.264Z" fill="white" />
                </svg>

              </a>
              <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.014 3.865V6.613H0V9.973H2.014V19.959H6.148V9.974H8.923C8.923 9.974 9.183 8.363 9.309 6.601H6.165V4.303C6.165 3.96 6.615 3.498 7.061 3.498H9.315V0H6.251C1.911 0 2.014 3.363 2.014 3.865Z" fill="white" />
                </svg>

              </a>
              {/* <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect width="20" height="20" fill="url(#pattern0_174_6414)" />
                  <defs>
                  <pattern id="pattern0_174_6414" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use transform="scale(0.00195312)"/>
                  </pattern>
                  <image id="image0_174_6414" width="512" height="512" preserveAspectRatio="none" />
                  </defs>
                </svg>

              </a>
              <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.162 0C3.79343 0.00211646 2.48153 0.546785 1.5139 1.51461C0.546266 2.48243 0.00185136 3.79443 0 5.163C0.00158743 6.53192 0.546023 7.84433 1.5139 8.81239C2.48178 9.78046 3.79408 10.3251 5.163 10.327C6.53209 10.3254 7.84465 9.78084 8.81275 8.81275C9.78084 7.84465 10.3254 6.53209 10.327 5.163C10.3249 3.79408 9.77994 2.48188 8.81169 1.51419C7.84343 0.546504 6.53092 0.00232267 5.162 0.0010004V0ZM5.162 8.319C4.32524 8.319 3.52276 7.9866 2.93108 7.39492C2.3394 6.80324 2.007 6.00076 2.007 5.164C2.007 4.32724 2.3394 3.52476 2.93108 2.93308C3.52276 2.3414 4.32524 2.009 5.162 2.009C5.99876 2.009 6.80124 2.3414 7.39292 2.93308C7.9846 3.52476 8.317 4.32724 8.317 5.164C8.317 6.00076 7.9846 6.80324 7.39292 7.39492C6.80124 7.9866 5.99876 8.319 5.162 8.319Z" fill="white" />
                </svg>
              </a> */}
              <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.959 11.693V19.072H15.681V12.187C15.681 10.457 15.062 9.277 13.514 9.277C12.332 9.277 11.628 10.073 11.319 10.842C11.206 11.117 11.177 11.5 11.177 11.885V19.072H6.897C6.897 19.072 6.955 7.412 6.897 6.203H11.177V8.027L11.149 8.069H11.177V8.027C11.745 7.152 12.76 5.901 15.033 5.901C17.848 5.901 19.959 7.741 19.959 11.693ZM2.421 0C0.958 0 0 0.96 0 2.223C0 3.458 0.93 4.447 2.365 4.447H2.393C3.886 4.447 4.813 3.458 4.813 2.223C4.787 0.96 3.887 0 2.422 0H2.421ZM0.254 19.072H4.532V6.203H0.254V19.072Z" fill="white" />
                </svg>

              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}