import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutSection } from "@/components/sections/about-section"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 space-y-12">

        {/* Headmaster's Message Section */}
        <section className="max-w-4xl mx-auto bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/head.jpg"
              alt="Headmaster"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Message from the Headmaster</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to our school. We are committed to nurturing every student’s potential and building a
              strong foundation for their future. Our dedicated staff and vibrant learning environment ensure
              that all students grow academically, socially, and morally. Thank you for being part of our
              community.
            </p>
            <p className="mt-4 text-gray-600 italic">— Mr. John Doe, Headmaster</p>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        

        {/* School Bus Section */}
        <section className="max-w-4xl mx-auto mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Our School Bus</h2>
          <p className="text-gray-700 mb-6">
            We provide safe and reliable school transport for our students. Our bus is well maintained
            and driven by trained professionals.
          </p>
          <Image
            src="/van.jpg"
            alt="School Bus"
            width={800}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </section>

      </main>
      <Footer />
    </div>
  )
}
