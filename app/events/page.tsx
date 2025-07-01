// app/events/page.tsx
import { EventsSection } from "@/components/sections/events-section"

import { Footer } from "@/components/layout/footer"

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <EventsSection />
      </main>
      <Footer />
    </div>
  )
}
