"use client"

import React from "react"
import Image from "next/image"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}

interface TopFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function TopFeature({ icon, title, description }: TopFeatureProps) {
  return (
    <div className="flex flex-col items-start text-left text-white max-w-64">
      <div className="mb-3 text-white">
        {icon}
      </div>
      <h4 className="text-sm font-medium mb-2">{title}</h4>
      <p className="text-xs text-white/80 leading-relaxed">{description}</p>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="relative z-10 bg-[#D2DFF7] pt-48">
      <svg width="full" height="full" className="bg-[#5D53CD]" viewBox="0 0 1440 515" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="720.5" cy="140.5" rx="955.5" ry="257.5" fill="url(#paint0_radial_174_6379)" />
        <text x="720" y="200" textAnchor="middle" className="fill-white text-4xl md:text-5xl font-bold leading-tight">
          <tspan x="720" dy="0">Nebula AI is not just an AI tool for AI tools.</tspan>
          <tspan x="720" dy="60">It will be an Ecosystem for AI tools</tspan>
        </text>
        <defs>
        <radialGradient id="paint0_radial_174_6379" cx="51.05%" cy="31.55%" r="69.5%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5D53CD"/>
        <stop offset="100%" stopColor="#AEA8EA"/>
        </radialGradient>
        </defs>
      </svg>


      <div className="relative bg-[#5D53CD] pt-10 ">
        {/* Top 4 features */}
        <div className="mx-auto max-w-6xl px-6 -mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <TopFeature
              icon={
                <svg width="24" height="24" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2953 1.12487C17.9641 0.437451 17.2642 0 16.4955 0C15.7268 0 15.0332 0.437451 14.6957 1.12487L10.6774 9.3927L1.70335 10.7176C0.953426 10.83 0.328493 11.355 0.0972674 12.0736C-0.133958 12.7923 0.0535219 13.586 0.590964 14.1172L7.10277 20.5602L5.56543 29.6654C5.44044 30.4153 5.75291 31.1778 6.3716 31.6215C6.99028 32.0652 7.80894 32.1214 8.48387 31.7652L16.5018 27.4844L24.5197 31.7652C25.1946 32.1214 26.0132 32.0714 26.6319 31.6215C27.2506 31.1715 27.5631 30.4153 27.4381 29.6654L25.8945 20.5602L32.4063 14.1172C32.9438 13.586 33.1375 12.7923 32.9 12.0736C32.6625 11.355 32.0438 10.83 31.2939 10.7176L22.3136 9.3927L18.2953 1.12487Z" fill="white" />
                </svg>

              }
              title="A trusted hub for reviews and credibility"
              description=""
            />
            <TopFeature
              icon={
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.79096 24.0529L7.85981 22.1218C7.32858 21.5906 7.14109 20.8219 7.37858 20.1094C7.56607 19.5532 7.81606 18.8283 8.11604 17.9971H1.50389C0.966417 17.9971 0.466443 17.7096 0.197707 17.2409C-0.0710294 16.7722 -0.0647798 16.1972 0.210206 15.7348L3.49128 10.2039C4.30374 8.8353 5.77242 7.99786 7.35983 7.99786H12.5033C12.6533 7.74788 12.8033 7.51665 12.9533 7.29167C18.0718 -0.257758 25.6964 -0.507738 30.2461 0.329698C30.9711 0.460938 31.5336 1.02964 31.6711 1.75459C32.5085 6.31049 32.2523 13.9287 24.7089 19.047C24.4902 19.197 24.2527 19.347 24.0027 19.497V24.6403C24.0027 26.2277 23.1653 27.7026 21.7966 28.5088L16.2656 31.7898C15.8031 32.0648 15.2282 32.071 14.7594 31.8023C14.2907 31.5336 14.0032 31.0399 14.0032 30.4961V23.7967C13.122 24.1029 12.3533 24.3529 11.7721 24.5404C11.0721 24.7653 10.3097 24.5716 9.78471 24.0529H9.79096ZM24.0027 10.4977C24.6657 10.4977 25.3016 10.2343 25.7704 9.7655C26.2392 9.29669 26.5026 8.66085 26.5026 7.99786C26.5026 7.33487 26.2392 6.69904 25.7704 6.23023C25.3016 5.76143 24.6657 5.49805 24.0027 5.49805C23.3397 5.49805 22.7039 5.76143 22.235 6.23023C21.7662 6.69904 21.5028 7.33487 21.5028 7.99786C21.5028 8.66085 21.7662 9.29669 22.235 9.7655C22.7039 10.2343 23.3397 10.4977 24.0027 10.4977Z" fill="white" />
                </svg>

              }
              title="A launchpad for partnerships and influencer collaborations"
              description=""
            />
            <TopFeature
              icon={
                <svg width="24" height="24" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0C7.6875 0 5 2.6875 5 6V16C5 19.3125 7.6875 22 11 22C14.3125 22 17 19.3125 17 16V6C17 2.6875 14.3125 0 11 0ZM3 13.5C3 12.6687 2.33125 12 1.5 12C0.66875 12 0 12.6687 0 13.5V16C0 21.5688 4.1375 26.1687 9.5 26.9V29H6.5C5.66875 29 5 29.6688 5 30.5C5 31.3312 5.66875 32 6.5 32H11H15.5C16.3312 32 17 31.3312 17 30.5C17 29.6688 16.3312 29 15.5 29H12.5V26.9C17.8625 26.1687 22 21.5688 22 16V13.5C22 12.6687 21.3312 12 20.5 12C19.6688 12 19 12.6687 19 13.5V16C19 20.4188 15.4187 24 11 24C6.58125 24 3 20.4188 3 16V13.5Z" fill="white" />
                </svg>

              }
              title="A venue for live events and webinars with the most influential voices in AI"
              description=""
            />
            <TopFeature
              icon={
                <svg width="24" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2222 0H9.77778C8.30556 0 7.10556 1.19219 7.16111 2.63594C7.17222 2.92578 7.18333 3.21563 7.2 3.5H1.33333C0.594444 3.5 0 4.08516 0 4.8125C0 9.87656 1.86111 13.3984 4.36111 15.7883C6.82222 18.1453 9.82222 19.332 12.0333 19.9336C13.3333 20.2891 14.2222 21.3555 14.2222 22.4273C14.2222 23.5703 13.2778 24.5 12.1167 24.5H10.6667C9.68333 24.5 8.88889 25.282 8.88889 26.25C8.88889 27.218 9.68333 28 10.6667 28H21.3333C22.3167 28 23.1111 27.218 23.1111 26.25C23.1111 25.282 22.3167 24.5 21.3333 24.5H19.8833C18.7222 24.5 17.7778 23.5703 17.7778 22.4273C17.7778 21.3555 18.6611 20.2836 19.9667 19.9336C22.1833 19.332 25.1833 18.1453 27.6444 15.7883C30.1389 13.3984 32 9.87656 32 4.8125C32 4.08516 31.4056 3.5 30.6667 3.5H24.8C24.8167 3.21563 24.8278 2.93125 24.8389 2.63594C24.8944 1.19219 23.6944 0 22.2222 0ZM2.71667 6.125H7.40556C7.91111 11.0523 9.02778 14.3445 10.2889 16.5484C8.90556 15.9469 7.46667 15.0992 6.22222 13.907C4.44444 12.2063 3 9.75078 2.72222 6.125H2.71667ZM25.7833 13.907C24.5389 15.0992 23.1 15.9469 21.7167 16.5484C22.9778 14.3445 24.0944 11.0523 24.6 6.125H29.2889C29.0056 9.75078 27.5611 12.2063 25.7889 13.907H25.7833Z" fill="white" />
                </svg>

              }
              title="A place where awards and certifications highlight the best and most underrated tools in the galaxy"
              description=""
            />
          </div>
        </div>

        {/* Central cosmic character */}


        <div className=" max-h-full ">
          <Image
          src="/ring.png"
          alt="ring"
          width={1000}
          height={1000}
          className="object-cover w-full h-96 "
          style={{
            opacity: 1,
            mixBlendMode: 'screen'
          }}
          priority
        />
        </div>

        <div className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative w-96 h-96 flex items-center justify-center">
            <Image
              src="/cosmic-character-with-phone.png"
              alt="Cosmic character with phone"
              width={300}
              height={300}
              className="object-contain top-40 mt-10"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  )
}