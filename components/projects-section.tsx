"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Maximize2, ArrowUpRight } from "lucide-react"

const categories = ["All Projects", "Completed", "Ongoing", "Office Spaces"]

const projects = [
  {
    id: 1,
    title: "Pricels Cloud Solutions Private Limited",
    location: "ML Tower, Teja Circle, Gopalpura Bypass Rd, Mansarovar, Jaipur",
    area: "8,500 sq.ft",
    category: "Completed",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "S & S Enterprises - Jaquar Authorized Dealer",
    location: "SBBJ Officers Colony, Mohan Nagar, Mansarovar, Jaipur",
    area: "5,200 sq.ft",
    category: "Completed",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Gatim Corporate Office",
    location: "Tonk Rd, Kailash Puri Colony, Jaipur",
    area: "6,200 sq.ft",
    category: "Ongoing",
    image: "/images/project-3.jpg",
  },
  {
    id: 4,
    title: "Premium Tech Startup Hub",
    area: "4,800 sq.ft",
    category: "Office Spaces",
    image: "/images/project-4.jpg",
  },
  {
    id: 5,
    title: "Corporate Finance Center",
    area: "7,500 sq.ft",
    category: "Completed",
    image: "/images/project-1.jpg",
  },
  {
    id: 6,
    title: "Modern Coworking Space",
    area: "9,200 sq.ft",
    category: "Office Spaces",
    image: "/images/project-2.jpg",
  },
  {
    id: 7,
    title: "Executive Business Center",
    area: "5,800 sq.ft",
    category: "Ongoing",
    image: "/images/project-3.jpg",
  },
  {
    id: 8,
    title: "Innovation Hub Office",
    area: "10,500 sq.ft",
    category: "Completed",
    image: "/images/project-4.jpg",
  },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Our Portfolio</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Featured
            <span className="text-primary ml-3">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore our collection of premium commercial interiors crafted with precision, 
            creativity, and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-red-600/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-red-600/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* View Button */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-red-600" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-background/80 backdrop-blur-sm text-xs font-medium text-red-600 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {project.location && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-full text-foreground hover:border-red-600 hover:text-red-600 transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
