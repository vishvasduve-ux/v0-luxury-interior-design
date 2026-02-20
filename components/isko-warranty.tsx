'use client'

import { Shield, Zap, Hammer, Award } from 'lucide-react'

const warranties = [
  {
    icon: Shield,
    title: 'Modular Products',
    duration: '10 Years',
    description: 'Comprehensive warranty on all modular cabinets, wardrobes, and furniture',
  },
  {
    icon: Hammer,
    title: 'On-site Services',
    duration: '1 Year',
    description: 'Coverage on painting, electrical, plumbing, and construction work',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    duration: 'Lifetime',
    description: 'Free maintenance and support for as long as you need',
  },
  {
    icon: Zap,
    title: 'Premium Materials',
    duration: '5 Years',
    description: 'Warranty on flooring, lighting, and electrical installations',
  },
]

export default function IskoWarranty() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <span className="text-red-600 text-xs uppercase tracking-[0.25em] font-light">Warranty & Support</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 font-light tracking-tight">
            Your Investment Protected
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Industry-leading warranty coverage with lifetime support. We stand by our quality.
          </p>
        </div>

        {/* Warranty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {warranties.map((warranty, index) => {
            const Icon = warranty.icon
            return (
              <div key={index} className="group p-10 bg-card rounded-3xl border border-border/20 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-2 text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-red-600/5 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-red-600/15 transition-colors border border-red-600/10 group-hover:border-red-600/30">
                  <Icon className="w-10 h-10 text-red-600" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-red-600 transition-colors font-light">{warranty.title}</h3>
                <p className="text-4xl font-serif text-red-600 mb-5 font-light">{warranty.duration}</p>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{warranty.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 p-12 bg-gradient-to-br from-red-600/10 to-background border border-red-600/15 rounded-3xl text-center">
          <h3 className="text-3xl font-serif text-foreground mb-8 font-light">Why Choose ISKO</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group hover:-translate-y-2 transition-all duration-300">
              <p className="font-serif text-foreground mb-3 group-hover:text-red-600 transition-colors text-lg font-light">No Hidden Costs</p>
              <p className="text-muted-foreground font-light leading-relaxed">Transparent pricing with comprehensive all-inclusive quotes</p>
            </div>
            <div className="group hover:-translate-y-2 transition-all duration-300">
              <p className="font-serif text-foreground mb-3 group-hover:text-red-600 transition-colors text-lg font-light">Flexible Payments</p>
              <p className="text-muted-foreground font-light leading-relaxed">EMI options available from leading financial partners</p>
            </div>
            <div className="group hover:-translate-y-2 transition-all duration-300">
              <p className="font-serif text-foreground mb-3 group-hover:text-red-600 transition-colors text-lg font-light">Expert Support</p>
              <p className="text-muted-foreground font-light leading-relaxed">Dedicated support team available for continuous assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
