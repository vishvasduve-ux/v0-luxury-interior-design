'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Meet with our designers to understand your vision, requirements, and budget',
    payment: '5% advance',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Receive detailed 3D designs, material samples, and comprehensive project plan',
    payment: '60% on approval',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our team handles all construction, installation, and quality checks',
    payment: 'Remaining balance',
  },
  {
    number: '04',
    title: 'Final Handover',
    description: 'Move in and enjoy your beautiful new space with 1-2 year warranty coverage',
    payment: 'Fully paid',
  },
]

export default function IskoProcess() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">Process</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent process from consultation to completion
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="p-8 bg-card rounded-2xl border border-border hover:border-red-600/50 transition-all duration-300 h-full flex flex-col">
                  {/* Step Number */}
                  <div className="text-5xl font-serif text-red-600/20 mb-4">{step.number}</div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{step.description}</p>

                  {/* Payment Info */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-red-600 font-medium text-sm">{step.payment}</p>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild className="bg-red-600 hover:bg-red-500 text-white px-8 py-6 text-lg">
            <a href="#contact">Start Your Journey Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
