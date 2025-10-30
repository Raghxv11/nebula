"use client"

import React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div 
      className="rounded-3xl p-6 hover:shadow-md transition-shadow "
      style={{
        background: 'linear-gradient(62.59deg, rgba(207, 224, 249, 0.3) 0%, rgba(174, 168, 234, 0.06) 100%)',
        // border: '1px solid',
        borderImage: 'linear-gradient(180deg, #669CEC 0%, #AEA8EA 100%) 1',
        boxShadow: `
          5px 5px 30px 0px #5D53CD33 inset,
          -5px -5px 30px 0px #3B70DC33 inset,
          0px 0px 20px 0px #3B70DC33
        `,
      }}
    >
      <div className="mb-6">
        <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function WhatNebulaAIBringsToLife() {
  return (
    <div className="bg-white py-16 pt-20 -z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          {/* Left side - What Nebula AI Brings to Life */}
          <div className="space-y-6 flex justify-between">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              What Nebula AI <br />
              Brings to Life
            </h2>
            
            <div>            
            <p className="text-slate-600 leading-relaxed">
              Discover the comprehensive suite of features that
            </p>
            <p className="text-slate-600 leading-relaxed">
                 will revolutionize AI tool discovery
            </p>

            {/* Pagination dots */}
            <div className="flex items-center gap-2 mt-6">
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
              <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
              <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
              <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
            </div>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3.75V6C21 8.07187 16.2984 9.75 10.5 9.75C4.70156 9.75 0 8.07187 0 6V3.75C0 1.67812 4.70156 0 10.5 0C16.2984 0 21 1.67812 21 3.75ZM18.4313 10.0641C19.4062 9.71719 20.3016 9.27188 21 8.72344V13.5C21 15.5719 16.2984 17.25 10.5 17.25C4.70156 17.25 0 15.5719 0 13.5V8.72344C0.698437 9.27656 1.59375 9.71719 2.56875 10.0641C4.67344 10.8141 7.47656 11.25 10.5 11.25C13.5234 11.25 16.3266 10.8141 18.4313 10.0641ZM0 16.2234C0.698437 16.7766 1.59375 17.2172 2.56875 17.5641C4.67344 18.3141 7.47656 18.75 10.5 18.75C13.5234 18.75 16.3266 18.3141 18.4313 17.5641C19.4062 17.2172 20.3016 16.7719 21 16.2234V20.25C21 22.3219 16.2984 24 10.5 24C4.70156 24 0 22.3219 0 20.25V16.2234Z" fill="white" />
                </svg>

              }
              title="World's Strongest AI Database"
              description="50+ databases on 30,000+ tools with comprehensive analysis and insights"
            />
            
            <FeatureCard
              icon={
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0C15.8297 0 16.5 0.670312 16.5 1.5V4.5H22.125C23.9906 4.5 25.5 6.00938 25.5 7.875V20.625C25.5 22.4906 23.9906 24 22.125 24H7.875C6.00938 24 4.5 22.4906 4.5 20.625V7.875C4.5 6.00938 6.00938 4.5 7.875 4.5H13.5V1.5C13.5 0.670312 14.1703 0 15 0ZM9.75 18C9.3375 18 9 18.3375 9 18.75C9 19.1625 9.3375 19.5 9.75 19.5H11.25C11.6625 19.5 12 19.1625 12 18.75C12 18.3375 11.6625 18 11.25 18H9.75ZM14.25 18C13.8375 18 13.5 18.3375 13.5 18.75C13.5 19.1625 13.8375 19.5 14.25 19.5H15.75C16.1625 19.5 16.5 19.1625 16.5 18.75C16.5 18.3375 16.1625 18 15.75 18H14.25ZM18.75 18C18.3375 18 18 18.3375 18 18.75C18 19.1625 18.3375 19.5 18.75 19.5H20.25C20.6625 19.5 21 19.1625 21 18.75C21 18.3375 20.6625 18 20.25 18H18.75ZM12.375 12C12.375 11.5027 12.1775 11.0258 11.8258 10.6742C11.4742 10.3225 10.9973 10.125 10.5 10.125C10.0027 10.125 9.52581 10.3225 9.17418 10.6742C8.82254 11.0258 8.625 11.5027 8.625 12C8.625 12.4973 8.82254 12.9742 9.17418 13.3258C9.52581 13.6775 10.0027 13.875 10.5 13.875C10.9973 13.875 11.4742 13.6775 11.8258 13.3258C12.1775 12.9742 12.375 12.4973 12.375 12ZM19.5 13.875C19.9973 13.875 20.4742 13.6775 20.8258 13.3258C21.1775 12.9742 21.375 12.4973 21.375 12C21.375 11.5027 21.1775 11.0258 20.8258 10.6742C20.4742 10.3225 19.9973 10.125 19.5 10.125C19.0027 10.125 18.5258 10.3225 18.1742 10.6742C17.8225 11.0258 17.625 11.5027 17.625 12C17.625 12.4973 17.8225 12.9742 18.1742 13.3258C18.5258 13.6775 19.0027 13.875 19.5 13.875ZM2.25 10.5H3V19.5H2.25C1.00781 19.5 0 18.4922 0 17.25V12.75C0 11.5078 1.00781 10.5 2.25 10.5ZM27.75 10.5C28.9922 10.5 30 11.5078 30 12.75V17.25C30 18.4922 28.9922 19.5 27.75 19.5H27V10.5H27.75Z" fill="white" />
                </svg>

              }
              title="Specialized ChatGPT"
              description="Trained on our database for best-in-class recommendations"
            />
            
            <FeatureCard
              icon={
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 6C4.5 4.4087 5.13214 2.88258 6.25736 1.75736C7.38258 0.632141 8.9087 0 10.5 0C12.0913 0 13.6174 0.632141 14.7426 1.75736C15.8679 2.88258 16.5 4.4087 16.5 6C16.5 7.5913 15.8679 9.11742 14.7426 10.2426C13.6174 11.3679 12.0913 12 10.5 12C8.9087 12 7.38258 11.3679 6.25736 10.2426C5.13214 9.11742 4.5 7.5913 4.5 6ZM0 22.6078C0 17.9906 3.74063 14.25 8.35781 14.25H12.6422C17.2594 14.25 21 17.9906 21 22.6078C21 23.3766 20.3766 24 19.6078 24H1.39219C0.623438 24 0 23.3766 0 22.6078ZM28.5609 24H22.0969C22.35 23.5594 22.5 23.0484 22.5 22.5V22.125C22.5 19.2797 21.2297 16.725 19.2281 15.0094C19.3406 15.0047 19.4484 15 19.5609 15H22.4391C26.6156 15 30 18.3844 30 22.5609C30 23.3578 29.3531 24 28.5609 24ZM20.25 12C18.7969 12 17.4844 11.4094 16.5328 10.4578C17.4563 9.21094 18 7.66875 18 6C18 4.74375 17.6906 3.55781 17.1422 2.51719C18.0141 1.87969 19.0875 1.5 20.25 1.5C23.1516 1.5 25.5 3.84844 25.5 6.75C25.5 9.65156 23.1516 12 20.25 12Z" fill="white" />
                </svg>

              }
              title="Beginner-Friendly Interface"
              description="Designed to help anyone find, learn, and try AI tools effortlessly"
            />
            
            {/* <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
              title="Premium Tool Reviews"
              description="In-depth analysis and user reviews for every tool in our extensive database"
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}