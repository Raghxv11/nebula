"use client"

// import React from "react"
import Image from "next/image"

export function CosmicVision() {
  return (
    <section className="relative pt-24 bg-[#D2DFF7]">
      {/* Curved top border */}
      <div className="absolute top-0 left-0 w-full h-16">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* White background */}
          <rect width="1200" height="120" fill="white" />
          {/* Blue curved section */}
          <path
            d="M0 20C400 140 800 140 1200 40V120H0V40Z"
            fill="#D2DFF7"
          />
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Nebula AI's <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-800 to-slate-600">
                Cosmic Horizon
              </span>
            </h2>

            <div className="space-y-4 text-slate-700 text-lg leading-relaxed max-w-lg">
              <p>
                Nebula AI today is an AI tool for AI tools. But our vision is much larger — a full ecosystem:
              </p>

              <p>
                We imagine a future where every user can discover, sign up for, pay, and manage their AI tools directly through Nebula — seamlessly, securely, and for free.
              </p>
            </div>
          </div>

          {/* Right side - 3D cosmic elements */}
          <div className=" absolute h-96 lg:h-full top-80 left-[88%] transform -translate-x-1/2 -translate-y-1/2 z-40">
            {/* Space character - positioned in top right */}
            <div className=" relative  w-96 h-96 flex items-center justify-center">
                <Image
                  src="/space-character.png"
                  alt="Space character"
                  fill
                  className="object-contain scale-200 top-40 mt-10 w-full h-full"
                  priority
                />
            </div>

            {/* Orbital rings - centered */}
            <div className="absolute h-96 top-1/3 left-1/5 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-96 h-96">
                <Image
                  src="/orbital-rings.png"
                  alt="Orbital rings"
                  fill
                  className="object-contain scale-200 top-40 mt-10 w-full h-full"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <svg width="full" height="full" className=" z-40  absolute" viewBox="0 0 1438 133" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1438 132.693C1260.27 78.1349 1003.74 43.8766 718.5 43.8766C432.723 43.8766 175.766 78.2635 -2 133V0H1438V132.693Z" fill="#D2DFF7" />
      </svg>

    </section>
  )
}