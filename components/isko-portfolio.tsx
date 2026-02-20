'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const portfolios = [
  { id: 1, category: 'Living Room', title: 'Modern Minimalist', image: '/images/portfolio-modern-living.jpg' },
  { id: 2, category: 'Kitchen', title: 'Luxury Modular Kitchen', image: '/images/portfolio-kitchen.jpg' },
  { id: 3, category: 'Bedroom', title: 'Master Suite Design', image: '/images/portfolio-bedroom.jpg' },
  { id: 4, category: 'Wardrobe', title: 'Premium Storage', image: '/images/portfolio-modular.jpg' },
]

export default function IskoPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Wardrobe']

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <span className="text-red-600 text-xs uppercase tracking-[0.25em] font-light">Portfolio</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 font-light tracking-tight">
            Design Masterpieces
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Curated collection of our finest projects showcasing innovation, elegance, and exceptional craftsmanship.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-red-600/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolios.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/20 hover:border-red-600/20 transition-all duration-700 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden bg-secondary">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm text-red-400 mb-2">{item.category}</p>
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <button className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-5 py-2 bg-background/90 backdrop-blur-md text-xs font-light text-red-600 rounded-full border border-red-600/20">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-full text-foreground hover:border-red-600 hover:text-red-600 transition-all duration-300"
          >
            Explore More Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
