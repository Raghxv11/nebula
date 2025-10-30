"use client"

import Image from "next/image"
import React from "react"

interface CompanyLogoProps {
  name: string
  className?: string
}

function CompanyLogo({ name, className = "" }: CompanyLogoProps) {
  return (
    <div className={`flex items-center justify-center px-6 py-3 ${className}`}>
      <span className="text-white/90 font-medium text-lg">{name}</span>
    </div>
  )
}

interface NewsCardProps {
  title: string
  description: string
  image?: string
}

function NewsCard({ title, description }: NewsCardProps) {
  return (
    <div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl  p-6 shadow-lg hover:shadow-xl transition-shadow"
      style={{
        border: '1px solid',
        borderColor: '#AEA8EA'
        // borderImage: 'linear-gradient(180deg, #669CEC 0%, #AEA8EA 100%) 1'
      }}
    >
      {/* Placeholder image */}
      <div className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-300 rounded-lg mb-4"></div>
      
      <h3 className="font-semibold text-slate-900 text-lg mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      
        <button 
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-purple-500 rounded-full text-purple-700 hover:bg-purple-50 transition-colors"
          style={{
            background: 'linear-gradient(97.97deg, rgba(79, 33, 196, 0.2) 0%, rgba(79, 33, 196, 0.02) 100%)',
            // border: '1px solid',
            // borderImage: 'linear-gradient(0deg, #4F21C4, #4F21C4) 1',
            boxShadow: `
              0px 0px 10px 0px #FFFFFF inset,
              5px 10px 20px 0px #FFFFFF inset
            `
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.75 0C8.26602 0 7.875 0.391016 7.875 0.875C7.875 1.35898 8.26602 1.75 8.75 1.75H11.0113L5.50703 7.25703C5.16523 7.59883 5.16523 8.15391 5.50703 8.4957C5.84883 8.8375 6.40391 8.8375 6.7457 8.4957L12.25 2.98867V5.25C12.25 5.73398 12.641 6.125 13.125 6.125C13.609 6.125 14 5.73398 14 5.25V0.875C14 0.391016 13.609 0 13.125 0H8.75ZM2.1875 0.875C0.978906 0.875 0 1.85391 0 3.0625V11.8125C0 13.0211 0.978906 14 2.1875 14H10.9375C12.1461 14 13.125 13.0211 13.125 11.8125V8.75C13.125 8.26602 12.734 7.875 12.25 7.875C11.766 7.875 11.375 8.26602 11.375 8.75V11.8125C11.375 12.0531 11.1781 12.25 10.9375 12.25H2.1875C1.94687 12.25 1.75 12.0531 1.75 11.8125V3.0625C1.75 2.82188 1.94687 2.625 2.1875 2.625H5.25C5.73398 2.625 6.125 2.23398 6.125 1.75C6.125 1.26602 5.73398 0.875 5.25 0.875H2.1875Z" fill="#4F2BBE" />
          </svg>

          Read Article
        </button>
    </div>
  )
}

export function TrustedCompanies() {
  const companies = [
    "Lovable", "make", "ElevenLabs", "descript", "Otter",
    "nvideo", "Airtable", "bubble", "OpusClip", "synthesie",
    "mailer", "Base 44", "MURF STUDIO", "KLING AI", "ElevenLabs"
  ]

  const newsArticles = [
    {
      title: "Nebula AI Launches Revolutionary Platform",
      description: "Comprehensive coverage of our platform launch and vision for AI tool discovery."
    },
    {
      title: "AI Tool Discovery Gets Major Update",
      description: "Expert commentary on how Nebula AI is changing the AI landscape."
    },
    {
      title: "Building the AI Ecosystem for Nebula AI",
      description: "In-depth feature on our mission and the technology behind our platform."
    }
  ]

  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Trusted Companies Section */}
        <div className="mb-16">
          <div className=" rounded-3xl p-8 lg:py-12 lg:px-0 backdrop-blur-xl" 
            style={{
              background: `
                radial-gradient(79.19% 79.19% at 50% 0%, rgba(27, 21, 87, 0.54) 0%, rgba(27, 21, 87, 0.9) 100%),
                url(/form-bg.jpg)
              `,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Trusted by 2,000+ <br />
                Leading AI Companies
              </h2>
              <p className="text-purple-100 max-w-2xl mx-auto">
                Discover the comprehensive suite of features that 
              </p>
              <p className="text-purple-100 max-w-2xl mx-auto">
                will revolutionize AI tool discovery
              </p>
            </div>

            {/* Company Logos Grid */}
            <Image src={'/company.png'} alt="" width={1000} height={1000} className="w-full bg-transparent " />
            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {companies.map((company, index) => (
                <CompanyLogo
                  key={index}
                  name={company}
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                />
              ))}
            </div> */}
          </div>
        </div>

        {/* News Headlines Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Nebula AI in the Headlines
            </h2>
              <button 
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-purple-500 rounded-full text-purple-700 hover:bg-purple-50 transition-colors"
              style={{
                background: 'linear-gradient(97.97deg, rgba(79, 33, 196, 0.2) 0%, rgba(79, 33, 196, 0.02) 100%)',
                // border: '1px solid',
                // borderImage: 'linear-gradient(0deg, #4F21C4, #4F21C4) 1',
                boxShadow: `
                  0px 0px 10px 0px #FFFFFF inset,
                  5px 10px 20px 0px #FFFFFF inset
                `
              }}
            >
              Explore more
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
              />
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}