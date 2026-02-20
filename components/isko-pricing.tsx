'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    category: '2 BHK',
    price: '₹3.5L',
    description: 'Full home interior design & execution',
    features: ['Modular Kitchen', 'Wardrobes', 'False Ceiling', 'Flooring', '1 Year Warranty'],
  },
  {
    category: '3 BHK',
    price: '₹4.5L',
    description: 'Complete home transformation',
    features: ['Modular Kitchen', 'Wardrobes', 'False Ceiling', 'Wall Design', 'Electrical Work', '1 Year Warranty'],
    featured: true,
  },
  {
    category: '4 BHK',
    price: '₹5.5L',
    description: 'Premium luxury home design',
    features: ['Modular Kitchen', 'Wardrobes', 'False Ceiling', 'Wall Design', 'Electrical Work', 'Lighting Design', '2 Year Warranty'],
  },
]

export default function IskoPricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">Pricing</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Designs for Every Budget
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. All prices include design, execution, and warranty
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.featured
                  ? 'bg-red-600/5 border-red-600 ring-2 ring-red-600 ring-offset-2 ring-offset-background scale-105'
                  : 'bg-card border-border hover:border-red-600/50'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{plan.category}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif text-red-600">{plan.price}</span>
                  <span className="text-muted-foreground">*</span>
                </div>
                <p className="text-muted-foreground text-sm mt-4">{plan.description}</p>
              </div>

              {/* CTA */}
              <Button
                asChild
                className={`w-full mb-8 ${
                  plan.featured
                    ? 'bg-red-600 hover:bg-red-500 text-white'
                    : 'bg-card border border-border text-foreground hover:border-red-600 hover:text-red-600'
                }`}
              >
                <a href="#contact">Get Free Quote</a>
              </Button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            *Prices are approximate and may vary based on design complexity, materials, and location. 
            <a href="#contact" className="text-red-600 hover:text-red-500 ml-1">Book a free consultation</a>
          </p>
        </div>
      </div>
    </section>
  )
}
