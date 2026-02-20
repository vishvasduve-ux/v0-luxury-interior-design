'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function IskoInteriorHero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-coworking.jpg"
          alt="ISKO LIVE SPACE - Premium Interior Design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">
              Transform Your Space
            </span>
            <div className="w-12 h-px bg-red-600" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8 tracking-tight">
            Elevate Your
            <span className="block text-red-600 font-light">Living Space</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Bespoke interior design & luxury execution. Where sophistication meets functionality. 
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-red-600 hover:bg-red-500 text-white px-8 py-6 text-lg">
              <a href="#contact">Get Free Quote</a>
            </Button>
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-6 text-lg">
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-16 mt-24 pt-16 border-t border-white/10">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-serif text-red-600 mb-3 font-light">30+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-light">Premium Projects</div>
              <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">Completed Homes</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-serif text-red-600 mb-3 font-light">5+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-light">Years Crafting</div>
              <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">Exceptional Spaces</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-serif text-red-600 mb-3 font-light">500+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-light">Happy Clients</div>
              <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">Trusted Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-red-600 text-sm uppercase tracking-wider mb-4 text-center">Scroll</div>
        <div className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-red-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
