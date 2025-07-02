// app/page.tsx

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { NewsSection } from "@/components/sections/news-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
