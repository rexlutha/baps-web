import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutSection } from "@/components/sections/about-section"
import { GallerySection } from "@/components/sections/gallery-section"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 space-y-12">

        {/* Headmaster's Message */}
        {/* ... your existing headmaster code here ... */}

        {/* About Section */}
        <AboutSection />

        {/* Gallery Section */}
        <GallerySection />

      </main>
      <Footer />
    </div>
  )
}
