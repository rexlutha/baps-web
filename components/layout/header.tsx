"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

type NavigationItem = {
  name: string
  href?: string
  subLinks?: { label: string; href: string }[]
}

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    subLinks: [
      { label: "Our Team", href: "/about/team" },
      { label: "Mission", href: "/about/mission" },
      { label: "History", href: "/about/history" },
    ],
  },
  {
    name: "Academics",
    subLinks: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Staff", href: "/academics/staff" },
      { label: "Admissions", href: "/academics/admissions" },
    ],
  },
  {
    name: "News",
    subLinks: [
      { label: "Latest News", href: "/news/latest" },
      { label: "Press Releases", href: "/news/press" },
    ],
  },
  {
    name: "Events",
    subLinks: [
      { label: "Upcoming Events", href: "/events/upcoming" },
      { label: "Past Events", href: "/events/past" },
    ],
  },
  {
    name: "Contact",
    subLinks: [
      { label: "Contact Form", href: "/contact/form" },
      { label: "Locations", href: "/contact/locations" },
    ],
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-baps.jpeg"
            alt="Bugema Adventist Primary School Logo"
            width={40}
            height={40}
            className="h-8 w-8 rounded"
            priority
          />
          <span className="font-bold text-xl">Bugema Adventist Primary School</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) =>
            item.subLinks ? (
              <div key={item.name} className="relative">
                <button
                  className="text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.name ? null : item.name)
                  }
                  onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                >
                  {item.name}
                </button>
                {openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow z-10">
                    {item.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.href ? (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ) : null
          )}
          <Button asChild>
            <Link href="/admin">Admin</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) =>
                item.href ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : item.subLinks ? (
                  <div key={item.name} className="flex flex-col">
                    <span className="text-sm font-medium px-2 py-1">{item.name}</span>
                    <div className="ml-4 flex flex-col">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="text-sm px-2 py-1 hover:bg-gray-100 rounded"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
              <Button asChild>
                <Link href="/admin" onClick={() => setIsOpen(false)}>
                  Admin
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
