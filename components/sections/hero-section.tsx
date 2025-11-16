import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Excellence in <span className="text-primary">Christian Education</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Nurturing young minds with values, knowledge, and character development in a caring Christian
                environment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/gate.JPG"
              alt="Bugema Adventist Primary School"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-gray-100 py-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Bugema Adventist Primary School</h1>
        <p className="mb-8 text-lg text-gray-700">Empowering students for a brighter future.</p>
        {/* Online Video */}
        <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/RIlvM4ylrMk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
