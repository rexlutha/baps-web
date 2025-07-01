import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Heart } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "We offer a robust academic curriculum enhanced with project-based learning and digital literacy to prepare students for real-world challenges.",
    image: "/eeducation.jpg",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description:
      "Our educators are dedicated professionals who foster personalized learning experiences, guiding students with care and expertise.",
    image: "/teacher.jpg",
  },
  {
    icon: Award,
    title: "Character Building",
    description:
      "Daily devotionals, value-based education, and leadership programs help students build strong character and integrity.",
    image: "/building.jpg",
  },
  {
    icon: Heart,
    title: "Caring Environment",
    description:
      "We cultivate a school culture rooted in empathy, discipline, and mutual respect—ensuring every child feels safe and supported.",
    image: "/environment.jpg",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Top Banner Image */}
        <div className="mb-16">
          <Image
            src="/gate.jpg" // Ensure this file exists
            alt="Bugema Adventist Primary Campus"
            width={100}
            height={500}
            className="rounded-xl w-full h-auto object-cover shadow-lg"
            priority
          />
        </div>

        {/* Heading and Introduction */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose Bugema Adventist Primary?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Bugema Adventist Primary, our mission is to provide a holistic and Christ-centered education. We empower students to grow academically, spiritually, and socially—becoming responsible global citizens with strong moral values.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                {/* Feature Image */}
                <div className="w-full h-40 mx-auto mb-4 rounded-lg overflow-hidden shadow">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Feature Icon */}
                <div className="w-10 h-10 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                  {feature.icon && <feature.icon className="w-5 h-5 text-primary" />}
                </div>

                {/* Title and Description */}
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
