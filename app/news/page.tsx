import { NewsSection } from "@/components/sections/news-section"

import { Footer } from "@/components/layout/footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
