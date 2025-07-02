import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AcademicsSection } from "@/components/sections/academics-section"

export default function AcademicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AcademicsSection />
      </main>
      <Footer />
    </div>
  )
}
