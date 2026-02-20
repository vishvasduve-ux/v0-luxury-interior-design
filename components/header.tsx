"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#amenities", label: "Amenities" },
  { href: "#pricing", label: "Pricing" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-serif text-lg font-bold">IS</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-foreground font-serif text-base tracking-wide font-semibold">ISKO</span>
              <span className="text-red-600 font-serif text-xs tracking-widest">LIVE SPACE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-red-600 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:9887726552" className="flex items-center gap-2 text-muted-foreground hover:text-red-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">9887726552</span>
            </a>
            <Button asChild className="bg-red-600 hover:bg-red-500 text-white">
              <a href="#contact">Book Tour</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-red-600 transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href="tel:9887726552" className="flex items-center gap-2 text-red-600">
                <Phone className="w-4 h-4" />
                <span>9887726552</span>
              </a>
              <Button asChild className="w-full bg-red-600 hover:bg-red-500 text-white">
                <a href="#contact">Book Tour</a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
