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
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <span className="text-red-600 text-xs uppercase tracking-[0.25em] font-light">Process</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 font-light tracking-tight">
            Our Design Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Four seamless steps to transform your vision into reality
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="group p-10 bg-card rounded-3xl border border-border/20 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Step Number */}
                  <div className="text-6xl font-serif text-red-600/15 mb-6 group-hover:text-red-600/30 transition-colors font-light">{step.number}</div>

                  {/* Content */}
                  <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-red-600 transition-colors font-light">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed font-light">{step.description}</p>

                  {/* Payment Info */}
                  <div className="pt-6 border-t border-border/10 group-hover:border-red-600/20 transition-colors">
                    <p className="text-red-600 text-sm font-light tracking-wide">{step.payment}</p>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-red-600/20 border border-red-600/30 rounded-full flex items-center justify-center hover:bg-red-600/40 transition-all">
                      <ArrowRight className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Button asChild className="bg-red-600 hover:bg-red-500 text-white px-12 py-4 text-lg font-light tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20">
            <a href="#contact">Begin Your Transformation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
