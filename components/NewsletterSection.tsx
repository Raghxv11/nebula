"use client"

import React from "react"

export function NewsletterSection() {
  return (
    <div className="">      
    <svg width="full" height="full" className=" absolute" viewBox="0 0 1440 133" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1440 132.693C1262.27 78.1349 1005.74 43.8766 720.5 43.8766C434.723 43.8766 177.766 78.2635 0 133V0H1440V132.693Z" fill="white" />
    </svg>
    
    <section className="relative -z-10 pt-44 pb-24 bg-[#162F60] -mt-10 text-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content and stats */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Stay in Orbit: The Newsletter
                <br />
                AI Enthusiasts Trust
              </h2>
              <p className="text-blue-200 text-lg max-w-lg leading-relaxed">
                AI moves fast. Nebula AI moves faster. Stay in orbit with the #1 weekly AI newsletter — curated by Nebula's experts to bring you the most important AI tools, updates, and insights in one place.
              </p>
            </div>

            {/* Stats - horizontal layout with separators */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-5xl font-bold text-white">#1</div>
                <div className="text-blue-200 text-sm mt-1">Weekly AI Newsletter</div>
              </div>
              <div className="w-px h-16 bg-blue-300/30"></div>
              <div>
                <div className="text-5xl font-bold text-white">65%</div>
                <div className="text-blue-200 text-sm mt-1">Open Rate</div>
              </div>
              <div className="w-px h-16 bg-blue-300/30"></div>
              <div>
                <div className="text-5xl font-bold text-white">5.0/5.0</div>
                <div className="text-blue-200 text-sm mt-1">Reader Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Newsletter preview card */}
          <div className="relative top-32 -z-20">
            <div className=" rounded-4xl p-2 border border-gray-600  bg-[#1f448e]">
              <div className="bg-[#18397b] backdrop-blur-sm rounded-4xl p-8 border border-blue-300/30 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Nebula AI Weekly</h3>
                <p className="text-blue-200">October 30, 2025</p>
              </div>

              <div className="space-y-3">
                <div className="bg-[#072f80] rounded-3xl p-5 border border-blue-300/20 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">Weekly Rankings of Top AI Tools</h4>
                      <p className="text-blue-100 text-sm">Game-changing tools that caught our attention</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#072f80] rounded-3xl p-5 border border-blue-300/20 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">Market Analysis</h4>
                      <p className="text-blue-100 text-sm">AI trends and what they mean for users</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#072f80] rounded-3xl p-5 border border-blue-300/20 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">Expert Insights</h4>
                      <p className="text-blue-100 text-sm">How to choose the right AI tool for your workflow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </div>
  )
}