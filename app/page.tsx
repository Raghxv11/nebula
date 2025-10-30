import { DotPattern } from "@/components/ui/dot-pattern"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { NotificationForm } from "@/components/NotificationForm"
import { StoryShowcase } from "@/components/StoryShowcase"
import { CosmicVision } from "@/components/CosmicVision"
import { FeaturesSection } from "@/components/FeaturesSection"
import { TrustedCompanies } from "@/components/TrustedCompanies"
import { NewsletterSection } from "@/components/NewsletterSection"
import { ContactFooter } from "@/components/ContactFooter"
import { WhatNebulaAIBringsToLife } from "@/components/WhatNebulaAIBringsToLife"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* background image (place the provided image at public/nebula-bg.jpg) */}
        {/* <img aria-hidden src="/nebula-bg.jpg" alt="nebula background" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-30" /> */}

        <DotPattern  />
        <Header />
        <main className="relative z-10">
          <Hero />
          <NotificationForm />
          <StoryShowcase />
          <CosmicVision />
          <FeaturesSection />
          <WhatNebulaAIBringsToLife />
          <TrustedCompanies />
          <NewsletterSection />
          <Contact />
        </main>
        <Footer />
        {/* <ContactFooter /> */}
      </div>
    </>
  )
}
