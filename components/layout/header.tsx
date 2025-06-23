"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Menu, GraduationCap, ChevronDown, Search, Bell, Phone, Mail } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Our Story", href: "/about" },
      { name: "Our Mission", href: "/about#mission" },
      { name: "Our Impact", href: "/about#impact" },
      { name: "Our Team", href: "/about#team" },
    ],
  },
  { name: "Academics", href: "/academics" },
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+256 741 949 648</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>bugemaadv@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Excellence in Christian Education</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">Bugema Adventist Primary</span>
              <span className="text-xs text-muted-foreground">The fear of God is the beginning of wisdom</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              {searchOpen ? (
                <div className="flex items-center">
                  <Input placeholder="Search..." className="w-64 h-9" onBlur={() => setSearchOpen(false)} autoFocus />
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="h-9 w-9">
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative h-9 w-9 hidden md:flex">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">3</Badge>
            </Button>

            {/* Admin Button */}
            <Button asChild className="hidden md:flex">
              <Link href="/admin">Admin Portal</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>

                  {/* Mobile Navigation */}
                  {navigation.map((item) => (
                    <div key={item.name} className="space-y-2">
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <div className="font-medium text-foreground border-b pb-2">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-sm font-medium transition-colors hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Mobile Actions */}
                  <div className="pt-4 border-t space-y-3">
                    <Button asChild className="w-full">
                      <Link href="/admin" onClick={() => setIsOpen(false)}>
                        Admin Portal
                      </Link>
                    </Button>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Notifications</span>
                      <Badge variant="secondary">3 new</Badge>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t space-y-2">
                    <div className="text-sm font-medium">Quick Contact</div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>+256 741 949 648</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>bugemaadv@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
