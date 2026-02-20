'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IskoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-coworking.jpg"
          alt="ISKO LIVE SPACE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/50" />
      </div>

      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 via-red-600/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">
              Jaipur's Premium Coworking Community
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground leading-tight mb-6">
            Where Professionals
            <span className="block text-red-600">Connect & Collaborate</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Join ISKO LIVE SPACE - a vibrant coworking community designed for entrepreneurs, freelancers, and growing teams. Flexible workspaces, premium amenities, and endless networking opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-red-600 hover:bg-red-500 text-white h-14 text-base">
              <a href="#pricing">Explore Membership</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border hover:border-red-600/50 h-14 text-base"
            >
              <a href="https://wa.me/919887726552">
                <span>Schedule Tour</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mt-16">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-serif text-red-600 mb-1">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Active Members</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-serif text-red-600 mb-1">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Access</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-serif text-red-600 mb-1">12+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Amenities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-red-600 to-transparent" />
    </section>
  )
}
