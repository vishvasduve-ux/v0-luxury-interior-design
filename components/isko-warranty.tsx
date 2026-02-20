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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">Warranty & Support</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Quality Assurance & Warranty
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rest easy knowing your investment is protected with our comprehensive warranty coverage
          </p>
        </div>

        {/* Warranty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {warranties.map((warranty, index) => {
            const Icon = warranty.icon
            return (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-300 text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-red-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">{warranty.title}</h3>
                <p className="text-3xl font-serif text-red-600 mb-4">{warranty.duration}</p>
                <p className="text-muted-foreground text-sm">{warranty.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 p-8 bg-red-600/5 border border-red-600/20 rounded-2xl text-center">
          <h3 className="text-2xl font-serif text-foreground mb-4">Premium Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">No Hidden Costs</p>
              <p>Transparent pricing with all-inclusive quotes</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Flexible Payment</p>
              <p>EMI options available from leading financial partners</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Expert Support</p>
              <p>Dedicated support team available for 24/7 assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
