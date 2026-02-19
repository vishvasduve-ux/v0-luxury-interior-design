"use client"

import { 
  Building2, 
  Hammer, 
  LayoutGrid, 
  GlassWater, 
  Lightbulb, 
  Paintbrush, 
  Armchair,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Turnkey Interior Execution",
    description: "Complete office interior solutions from concept to completion. We handle design, procurement, and execution under one roof.",
    features: ["Project Management", "Vendor Coordination", "Quality Assurance"],
  },
  {
    icon: Hammer,
    title: "Civil & Masonry Work",
    description: "Structural modifications, partition walls, and civil repairs with precision engineering and quality materials.",
    features: ["Brick Work", "Plastering", "Waterproofing"],
  },
  {
    icon: LayoutGrid,
    title: "False Ceiling",
    description: "Premium gypsum and grid false ceilings that enhance aesthetics while providing acoustic and thermal benefits.",
    features: ["Gypsum Ceiling", "Grid Ceiling", "Designer Patterns"],
  },
  {
    icon: GlassWater,
    title: "Glass Partition",
    description: "Modern toughened glass partitions and sliding systems for elegant space division with maximum transparency.",
    features: ["Toughened Glass", "Sliding Systems", "Frosted Options"],
  },
  {
    icon: Lightbulb,
    title: "Electrical & Lighting",
    description: "Complete electrical infrastructure and ambient lighting solutions designed for efficiency and aesthetics.",
    features: ["LED Systems", "Panel Work", "Smart Controls"],
  },
  {
    icon: Paintbrush,
    title: "Painting & Polishing",
    description: "Premium paints and wood polish finishes that add character and protection to your workspace.",
    features: ["Premium Paints", "Wood Polish", "Texture Finishes"],
  },
  {
    icon: Armchair,
    title: "Furniture & Modular Work",
    description: "Custom furniture and modular workstations designed for functionality, comfort, and style.",
    features: ["Custom Furniture", "Modular Workstations", "Storage Solutions"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">What We Offer</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Comprehensive Interior
            <span className="text-red-600 block">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From structural work to finishing touches, we deliver complete interior solutions 
            for corporate offices, commercial spaces, and premium workplaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-red-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-red-600" />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-600 to-transparent" />
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-600 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 font-medium transition-colors"
          >
            Discuss Your Project Requirements
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
