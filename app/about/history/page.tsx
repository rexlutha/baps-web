// app/about/page.tsx


import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="p-8 space-y-12">
          <section>
            <h1 className="text-2xl font-bold mb-4">Our Team</h1>
            <p>Meet the dedicated staff and leadership of Bugema Adventist Primary School.</p>
          </section>
          <section>
            <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
            <p>Our mission is to provide quality Adventist education in a nurturing environment.</p>
          </section>
          <section>
            <h1 className="text-2xl font-bold mb-4">Our History</h1>
            <p>Bugema Adventist Primary School has a rich history of academic excellence and spiritual growth.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

