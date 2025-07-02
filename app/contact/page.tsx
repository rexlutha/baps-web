// app/page.tsx

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
