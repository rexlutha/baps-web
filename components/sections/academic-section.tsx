import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Heart } from "lucide-react"

export function AcademicsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Academic Programs</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Our academic programs are designed to equip students with knowledge, critical thinking,
          and practical skills across a wide range of disciplines.
        </p>

        {/* Academic Section Video */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zIYOYZFPrb4?si=g1ohKMshrKOib049"
              title="Academic Programs Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* UPPER */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Primary</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Mathematics</li>
              <li>English</li>
              <li>Science</li>
              <li>Social studies</li>
            </ul>
          </div>

          {/* LOWER CLASSES */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Pre primary</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Mathematics</li>
              <li>English</li>
              <li>Health habits</li>
              <li>Literacy one</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
