// app/about/page.tsx


import { Footer } from "@/components/layout/footer"
import { AboutSection } from "@/components/sections/about-section"

export default function AboutPage() {

  return (
    <div className="min-h-screen flex flex-col">
    

      <main className="flex-grow">
        <AboutSection />
      </main>

      <Footer />
    </div>
  )
}

