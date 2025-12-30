"use client"

import Image from "next/image"
import React, { useState, useEffect } from "react"

export function Hero() {
  // Set target date (you can change this to your desired launch date)
  const targetDate = new Date("2026-01-20T23:59:59").getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        })
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const numbers = [
    timeLeft.days.toString().padStart(2, '0'),
    timeLeft.hours.toString().padStart(2, '0'),
    timeLeft.minutes.toString().padStart(2, '0'),
    timeLeft.seconds.toString().padStart(2, '0')
  ]
  const labels = ["DAYS", "HOURS", "MINUTES", "SECONDS"]
  
  // Define colors for each countdown element - more subtle like the reference
  const getCountdownColor = (index: number) => {
    switch (index) {
      case 0: return '#6B9AFF' // Days - lighter blue
      case 1: return '#8B7CF6' // Hours - lighter purple
      case 2: return '#6B9AFF' // Minutes - lighter blue  
      case 3: return '#8B7CF6' // Seconds - lighter purple
      default: return '#6B9AFF'
    }
  }

  return (
    <section 
      className="relative mx-auto max-w-7xl px-6 pt-20 pb-32"
      style={{
        // backgroundImage: 'url(/galaxy.jpg)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
      }}
    >

      <svg 
        width="520"
        height="201"
        viewBox="0 0 300 844" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          width: '1040px',
          height: '720px',
          top: '-80px',
          left: '-451px',
          // transform: 'rotate(90deg)',
          opacity: 1,
          zIndex: 1
        }}
      >
        <g filter="url(#filter0_f_174_15400)">
          <ellipse cx="-0.500004" cy="384" rx="260" ry="100.5" transform="rotate(-90 -0.500004 384)" fill="#3B70DC" style={{fill:'#3B70DC', fillOpacity:1}}/>
        </g>
        <defs>
          <filter id="filter0_f_174_15400" x="-301" y="-76" width="601" height="920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_174_15400"/>
          </filter>
        </defs>
      </svg>
      <svg 
        width="520"
        height="201"
        viewBox="0 0 300 844" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          width: '1040px',
          height: '720px',
          top: '-80px',
          right: '-670px',
          // transform: 'rotate(90deg)',
          opacity: 1,
          zIndex: 1
        }}
      >
        <g filter="url(#filter0_f_174_15400)">
          <ellipse cx="-0.500004" cy="384" rx="260" ry="100.5" transform="rotate(-90 -0.500004 384)" fill="#ADA8E5" style={{fill:'#ADA8E5', fillOpacity:1}}/>
        </g>
        <defs>
          <filter id="filter0_f_174_15400" x="-301" y="-76" width="601" height="920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_174_15400"/>
          </filter>
        </defs>
      </svg>

      {/* White diagonal SVG */}
      {/* <svg 
        width="372"
        height="505"
        viewBox="0 0 324 520" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          width: '372px',
          height: '505px',
          top: '-85px',
          left: '-148px',
          transform: 'rotate(0deg)',
          opacity: 0.25,
          zIndex: 1
        }}
      >
        <g filter="url(#filter0_f_174_15395)">
          <path d="M124 420L-148 -85H-51L224 420H124Z" fill="white" style={{fill:'white', fillOpacity:1}}/>
        </g>
        <defs>
          <filter id="filter0_f_174_15395" x="-248" y="-185" width="572" height="705" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_174_15395"/>
          </filter>
        </defs>
      </svg> */}

      {/* Fourth white diagonal SVG */}
      {/* <svg 
        width="372"
        height="505"
        viewBox="0 0 289 523" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          width: '372px',
          height: '505px',
          top: '-82px',
          left: '1251.5px',
          transform: 'rotate(-180deg)',
          opacity: 1,
          zIndex: 1
        }}
      >
        <g filter="url(#filter0_f_174_15397_unique)">
          <path d="M200 423L472 -82H375L100 423H200Z" fill="white" style={{fill:'white', fillOpacity:1}}/>
        </g>
        <defs>
          <filter id="filter0_f_174_15397_unique" x="0" y="-182" width="572" height="705" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_174_15397_unique"/>
          </filter>
        </defs>
      </svg> */}

      {/* Fifth white diagonal SVG */}
      {/* <svg 
        width="372"
        height="505"
        viewBox="0 0 475 523" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          width: '372px',
          height: '505px',
          top: '-82px',
          left: '1065px',
          transform: 'rotate(-180deg)',
          opacity: 1,
          zIndex: 1
        }}
      >
        <g filter="url(#filter0_f_174_15398)">
          <path d="M200 423L472 -82H375L100 423H200Z" fill="white" style={{fill:'white', fillOpacity:1}}/>
        </g>
        <defs>
          <filter id="filter0_f_174_15398" x="0" y="-182" width="572" height="705" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_174_15398"/>
          </filter>
        </defs>
      </svg> */}

      {/* New white diagonal SVG */}
      {/* <svg 
        width="372"
        height="505"
        viewBox="0 0 289 523" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          width: '372px',
          height: '505px',
          top: '-82px',
          left: '1251.5px',
          transform: 'rotate(-180deg)',
          opacity: 1,
          zIndex: 1
        }}
      >
        <g filter="url(#filter0_f_174_15397_new)">
          <path d="M200 423L472 -82H375L100 423H200Z" fill="white" style={{fill:'white', fillOpacity:1}}/>
        </g>
        <defs>
          <filter id="filter0_f_174_15397_new" x="0" y="-182" width="572" height="705" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_174_15397_new"/>
          </filter>
        </defs>
      </svg> */}

      <div className="text-center relative z-10">
        <h1 
          className="mx-auto p-2 max-w-6xl font-extrabold tracking-tight text-transparent bg-clip-text relative"
          style={{
            fontWeight: 800,
            fontSize: '64px',
            lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center',
            backgroundImage: 'url(/ewqew.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#271F7B'
          }}
        >
          <span className="block mb-3">The AI Tool for AI Tools</span>
          <span className="block mb-3">is Coming Soon</span>
        </h1>

        {/* <Image src={'/line.png'} alt="" width={700} height={700} className=" mx-auto"/> */}

      </div>
      {/* countdown - grid: number | dot | number | dot | number | dot | number */}
        <div 
          className="mx-auto mt-10 mb-8 px-6 relative z-10"
          style={{
            width: '848px',
            height: '176px',
            gap: '32px',
            transform: 'rotate(0deg)',
            opacity: 1,
            // mixBlendMode: 'plus-darker',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-7 md:items-center md:gap-y-0 md:gap-x-8 items-center justify-center w-full">
            {numbers.map((num, idx) => (
              <React.Fragment key={idx}>
                {/* number block */}
                <div className="col-span-1 flex flex-col items-center">
                  <div
                    className="font-extrabold leading-none"
                    style={{
                      fontSize: 'clamp(4.5rem, 9vw, 9rem)',
                      color: getCountdownColor(idx),
                      // backdropFilter: 'blur(30px)',
                      WebkitBackdropFilter: 'blur(30px)',
                      textShadow: '2px 4px 20px #FFFFFF',
                      filter: 'drop-shadow(0px 0px 50px rgba(73, 36, 188, 0.2))'
                    }}
                  >
                    {num}
                  </div>
                  <div className="mt-6 text-sm tracking-[0.36em] font-semibold text-gray-600">{labels[idx]}</div>
                </div>

                {/* separator (on md screens): colon dots */}
                {idx < numbers.length - 1 && (
                  <div className="hidden md:flex col-span-1 items-center justify-center -mt-6">
                    <div className="flex flex-col items-center gap-2">
                      <span className="block w-2 h-2 rounded-full bg-gray-400" />
                      <span className="block w-2 h-2 rounded-full bg-gray-400" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
      </div>


        <Image src={'/line.png'} alt="" width={700} height={700} className=" mx-auto"/>

        <p className="text-center mt-3 font-semibold">
            We're working hard to bring you an incredible experience. Stay
            <span className="block"> tuned for updates and be the first to know when we launch.</span>
        </p>
    </section>
  )
}
