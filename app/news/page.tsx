"use client"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import React, { useState } from "react"

export default function NewsPage() {
  // Mock news data - in a real app, this would come from the database
  const featuredNews = {
    id: 1,
    title: "Annual Sports Day Celebration 2025",
    excerpt: "Our students showcased their athletic talents and team spirit during the annual sports day celebration.",
    content:
      "The annual sports day was a tremendous success with students participating in various sporting activities...",
    image: "/images/gallery/e3.jpg",
    author: "School Administration",
    publishedAt: "2025-03-15",
    category: "Events",
  }

  const newsArticles = [
    {
      id: 2,
      title: "Cultural Heritage Week Celebrations",
      excerpt:
        "Students celebrated Uganda's rich cultural heritage through traditional dances, music, and storytelling.",
      image: "/images/ev2.jpg",
      author: "Cultural Department",
      publishedAt: "2025-03-10",
      category: "Culture",
    },
    {
      id: 3,
      title: "New ICT Laboratory Officially Opened",
      excerpt: "State-of-the-art computer laboratory enhances digital literacy education for all students.",
      image: "/images/ict.jpg",
      author: "ICT Department",
      publishedAt: "2025-03-05",
      category: "Facilities",
    },
    {
      id: 4,
      title: "Library Expansion Project Completed",
      excerpt: "Our expanded library now offers more resources and comfortable reading spaces for students.",
      image: "/images/lib.jpg",
      author: "Library Team",
      publishedAt: "2025-02-28",
      category: "Facilities",
    },
    {
      id: 5,
      title: "Fun Day Activities Bring Joy to Students",
      excerpt: "Students enjoyed various recreational activities including bouncing castles and games.",
      image: "/images/gallery/e6.jpg",
      author: "Activities Coordinator",
      publishedAt: "2025-02-20",
      category: "Events",
    },
    {
      id: 6,
      title: "Academic Excellence Awards Ceremony",
      excerpt: "Outstanding students recognized for their academic achievements and exemplary conduct.",
      image: "/images/award.jpg",
      author: "Academic Office",
      publishedAt: "2025-02-15",
      category: "Academics",
    },
  ]

  const categories = ["All", "Events", "Academics", "Culture", "Facilities", "Sports"]

  // Add state for email
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Add a handler for subscribe
  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter a valid email address.")
      return
    }
    // Here you would send the email to your backend or API
    setMessage("Thank you for subscribing!")
    setEmail("")
  }

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Latest Updates</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">School News & Events</h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                Stay updated with the latest happenings, achievements, and events at Bugema Adventist Primary School.
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Story</h2>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-emerald-100 text-emerald-800">{featuredNews.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredNews.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {featuredNews.author}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredNews.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent News</h2>
              <p className="text-xl text-gray-600">Catch up on all the latest school activities and achievements</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-emerald-100 text-emerald-800 text-xs">{article.category}</Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-emerald-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, events, and important announcements directly in your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button
                className="bg-orange-600 hover:bg-orange-700 px-8 py-3"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
            {message && <p className="mt-4 text-orange-200">{message}</p>}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}