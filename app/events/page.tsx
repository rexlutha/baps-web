// app/page.tsx

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { EventsSection } from "@/components/sections/events-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <EventsSection />
      </main>
      <Footer />
    </div>
  )
}
