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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">Our Services</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Comprehensive Design & Execution
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we handle every aspect of your interior design project
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
