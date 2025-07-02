"use client"

import Image from "next/image"

export function AcademicsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Academics</h2>
        <p className="text-gray-600 text-lg">
          We are committed to academic excellence, holistic education, and character building.
        </p>
      </div>

      {/* Curriculum Overview */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/alpha.jpg"
            alt="Curriculum Overview"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Curriculum Overview</h3>
          <p className="text-gray-700">
            Our school follows the Uganda National Primary Curriculum, infused with values of Adventist education.
            We aim to nurture learners spiritually, mentally, socially, and physically for balanced growth.
          </p>
        </div>
      </div>

      {/* Subjects Offered */}
      <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Subjects Offered</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-800 list-disc list-inside">
          <li>English Language</li>
          <li>Mathematics</li>
          <li>Science</li>
          <li>Social Studies</li>
          <li>Religious Education</li>
          <li>Luganda / Local Language</li>
          <li>Physical Education</li>
          <li>Art and Crafts</li>
        </ul>
      </div>

      {/* Academic Calendar */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/notice.jpg"
            alt="Academic Calendar"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Academic Calendar</h3>
          <p className="text-gray-700 mb-2">
            The school year is divided into three academic terms:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Term 1:</strong> February – April</li>
            <li><strong>Term 2:</strong> May – August</li>
            <li><strong>Term 3:</strong> September – November</li>
          </ul>
        </div>
      </div>

      {/* Co-curricular Activities */}
<div className="flex flex-col md:flex-row items-center gap-8">
  <div className="md:w-1/2">
    <Image
      src="/break.jpg" // Replace with your actual image filenames
      alt="Co-curricular Activities"
      width={600}
      height={400}
      className="rounded-2xl shadow-md object-cover w-full"
    />
  </div>
  <div className="md:w-1/2 bg-white p-6 shadow-md rounded-2xl">
    <h3 className="text-2xl font-semibold mb-4">Co-curricular Activities</h3>
    <p className="text-gray-700 mb-3">
      We encourage students to engage in activities beyond the classroom, such as:
    </p>
    <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
      <li>Music & Choir</li>
      <li>Sports (Football, Netball)</li>
      <li>Scouting & Pathfinders</li>
      <li>Public Speaking</li>
      <li>School Clubs</li>
      <li>Art and Drama</li>
    </ul>
  </div>
</div>

    </section>
  )
}
