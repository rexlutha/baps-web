"use client"

import Image from "next/image"

const galleryImages = [
  { src: "/gallery/class.jpg", caption: "Students in Class" },
  { src: "/gallery/game.jpg", caption: "Break Time Moments" },
  { src: "/gallery/dormitory.jpg", caption: "Student Dormitory" },
]

export function GallerySection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our School Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-md group">
            <Image
              src={image.src}
              alt={image.caption}
              width={400}
              height={300}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full p-2 text-center text-sm">
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
