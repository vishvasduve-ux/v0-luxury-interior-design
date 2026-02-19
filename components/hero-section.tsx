"use client"

import Image from "next/image"
import { Phone, MessageCircle, Calendar, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-office.jpg"
          alt="Premium office interior design"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        {/* Red accent line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 via-red-600/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">
              Jaipur&apos;s Premium Interior Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground leading-tight mb-6">
            Premium Commercial
            <span className="block text-red-600">Interior Design</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-sans font-light mt-2">
              & Turnkey Execution
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            From concept to completion — creating offices that inspire productivity, 
            innovation, and success. Transform your workspace with precision and elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 h-14 text-base"
            >
              <a href="tel:9887726552">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 gap-2 px-8 h-14 text-base bg-transparent"
            >
              <a href="https://wa.me/919887726552" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary gap-2 px-8 h-14 text-base bg-transparent"
            >
              <a href="#contact">
                <Calendar className="w-5 h-5" />
                Book Free Site Visit
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-serif text-red-600 mb-1">30+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Projects Done</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-serif text-red-600 mb-1">5</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-serif text-red-600 mb-1">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-red-600 to-transparent" />
    </section>
  )
}
