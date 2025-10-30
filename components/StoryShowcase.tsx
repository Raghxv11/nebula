"use client"

import Image from "next/image"
import React from "react"

interface ToolCardProps {
  title: string
  subtitle: string
  useCase: string
  views: string
  comments: string
  rating: number
  size?: "small" | "large"
  className?: string
}

function ToolCard({ title, subtitle, useCase, views, comments, rating, size = "small", className = "" }: ToolCardProps) {
  return (
    <div className={`rounded-3xl bg-linear-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg ${size === "large" ? "h-80" : "h-64"} ${className}`}>
      {/* Card header with logo placeholder */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500 text-white font-bold">
          Fi
        </div>
        {size === "large" && (
          <div className="rounded-lg bg-white/10 p-2">
            <div className="h-16 w-24 rounded bg-white/20 flex items-center justify-center">
              <span className="text-red-500 font-bold text-xl">{title}</span>
            </div>
          </div>
        )}
      </div>

      {/* Tool info */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-blue-100">{subtitle}</p>
      </div>

      {/* Use case with magic wand icon */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm text-blue-100">Use Case</span>
        <div className="text-pink-300">✨</div>
      </div>

      {/* Stats and rating */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-blue-100">
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            {views}
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            {comments}
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-blue-300"}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
          <span className="ml-1 text-sm text-blue-100">{rating}</span>
        </div>
      </div>
    </div>
  )
}

export function StoryShowcase() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Tool cards showcase */}
          <div className="relative">
            {/* Background cards */}
            <div className="gap-4 px-8 bg-[#729BE6] rounded-4xl">
                <Image src={'/story.png'} alt="" width={500} height={500} className="w-full" />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              The Origin of <br />
              <span className="text-blue-500">Nebula AI's Orbit</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By the end of 2024, more than 400 million people were using AI every single day — yet fewer than 1% of the 30,000+ AI tools on the market received meaningful organic traffic. Most users simply didn't know how to discover, learn, or try new AI tools.
              </p>

              <p>
                <strong>Adrian Nunez, CEO & Co-Founder, and Raghav Bansal, CTO & Co-Founder of Nebula AI</strong>, saw this gap as an opportunity to build the infrastructure that could fuel the next stage of the AI boom.
              </p>

              <p>
                Launched in early 2025, Nebula AI has evolved into the world's only platform designed to give users everything they need to find the best AI tool for any task — completely free. At the same time, Nebula AI provides AI tool creators with a trusted place to showcase their work, earn credibility, and connect with real users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}