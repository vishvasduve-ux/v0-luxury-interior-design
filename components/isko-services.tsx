'use client'

import { LayoutGrid, Sofa, Zap, Hammer, Palette, DoorOpen } from 'lucide-react'

const services = [
  {
    icon: LayoutGrid,
    title: 'Full Home Design',
    description: 'Complete interior design solution for your entire home with premium finishes',
  },
  {
    icon: Sofa,
    title: 'Modular Furniture',
    description: 'Custom modular kitchens, wardrobes, and furniture solutions',
  },
  {
    icon: Palette,
    title: 'Wall Design & Painting',
    description: 'Creative wall treatments, accent walls, and professional painting',
  },
  {
    icon: DoorOpen,
    title: 'False Ceiling',
    description: 'Modern false ceiling designs with integrated lighting solutions',
  },
  {
    icon: Zap,
    title: 'Electrical Work',
    description: 'Professional electrical installation and smart lighting solutions',
  },
  {
    icon: Hammer,
    title: 'Civil Work',
    description: 'Structural modifications and civil construction services',
  },
]

export default function IskoServices() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <span className="text-red-600 text-xs uppercase tracking-[0.25em] font-light">Premium Services</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 font-light tracking-tight">
            Bespoke Interior Solutions
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive design and execution services tailored to your vision. Every detail crafted with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-card rounded-2xl border border-border/30 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative z-10 w-14 h-14 bg-red-600/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600/15 transition-all duration-300 border border-red-600/10 group-hover:border-red-600/30">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-2xl font-serif text-foreground mb-4 group-hover:text-red-600 transition-colors duration-300 font-light">
                  {service.title}
                </h3>
                <p className="relative z-10 text-muted-foreground leading-relaxed font-light">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
