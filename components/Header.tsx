"use client"

import Image from "next/image"
import { useState } from "react"
import { SubmitToolModal } from "./SubmitToolModal"

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const scrollToNotificationForm = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('notification-form')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  
  return (
    <header className="w-full z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-8 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <div className="relative h-24 w-24 shrink-0">
                <Image src="/logo_name.png" alt="Nebula Logo" fill className="object-contain" />
              </div>
            </a>
          </div>
            
          {/* <div className="col-span-4 hidden md:flex justify-center">
            <nav className="flex items-center gap-8 text-sm text-neutral-900 font-semibold dark:text-neutral-200">
                <div className="h-8 w-px bg-neutral-300 dark:bg-neutral-600" />
              <a className="hover:underline" href="#">Home</a>
              <a className="hover:underline" href="#">Categories</a>
              <a className="hover:underline" href="#">FAQ's</a>
              <a className="hover:underline" href="#">Blogs</a>
            </nav>
          </div> */}


          <div className="flex items-center gap-4">
            {/* <form className="hidden lg:flex items-center rounded-full bg-white/60 dark:bg-black/30 px-6 py-4  shadow-xl backdrop-blur-md max-w-[400px] w-full gap-3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M17.7013 16.2973L14.4709 13.091C16.9933 9.86254 16.7278 5.26296 13.8291 2.36617C12.3024 0.840332 10.2668 0 8.09837 0C5.93001 0 3.89434 0.840332 2.36761 2.36617C0.840845 3.892 0 5.92635 0 8.09342C0 10.2605 0.840845 12.2949 2.36761 13.8207C3.89438 15.3465 5.92997 16.1868 8.09837 16.1868C9.89057 16.1868 11.6607 15.5898 13.0768 14.462L16.2851 17.7125C16.4842 17.9115 16.7276 18 16.9932 18C17.2587 18 17.5021 17.8894 17.7014 17.7125C18.0996 17.3366 18.0996 16.6954 17.7012 16.2973L17.7013 16.2973ZM14.2054 8.09338C14.2054 9.72978 13.5638 11.2555 12.4132 12.4054C11.2626 13.5554 9.71376 14.1965 8.09852 14.1965C6.48329 14.1965 4.93452 13.5553 3.78386 12.4054C2.63321 11.2555 1.99166 9.70763 1.99166 8.09338C1.99166 6.45699 2.63325 4.93131 3.78386 3.78136C4.93448 2.6314 6.48329 1.99025 8.09852 1.99025C9.73592 1.99025 11.2625 2.63144 12.4132 3.78136C13.5636 4.93111 14.2054 6.45695 14.2054 8.09338Z" fill="#021838" />
            </svg>

              <input
                aria-label="search"
                placeholder="Search anything"
                className="bg-transparent text-sm outline-none placeholder:text-neutral-500 w-full"
              />
              <button type="submit" className="text-sm font-medium text-purple-600">
                Search
              </button>
            </form> */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors border border-purple-500 text-purple-700 hover:bg-purple-50 relative z-50 pointer-events-auto"
              style={{
                background: 'linear-gradient(97.97deg, rgba(79, 33, 196, 0.2) 0%, rgba(79, 33, 196, 0.02) 100%)',
                boxShadow: `
                  0px 0px 10px 0px #FFFFFF inset,
                  5px 10px 20px 0px #FFFFFF inset
                `
              }}
            >
              + Submit Tool
            </button>
            <button 
              onClick={scrollToNotificationForm}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white shadow-[0_12px_40px_rgba(99,102,241,0.18)] relative overflow-hidden cursor-pointer z-50 pointer-events-auto"
              style={{
                backgroundImage: 'url(/ewqew.png)',
                backgroundSize: 'fit',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <span className="relative z-10">Get Started</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Submit Tool Modal */}
      <SubmitToolModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  )
}
