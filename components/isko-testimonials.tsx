'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Singh',
    role: 'Homeowner',
    content: 'The team transformed our 3BHK apartment into a modern masterpiece. Professional, punctual, and perfect execution!',
    rating: 5,
  },
  {
    name: 'Rajesh Patel',
    role: 'Corporate Office',
    content: 'ISKO designed our office space beautifully. Great balance of aesthetics and functionality. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Anjali Verma',
    role: 'Homeowner',
    content: 'The free consultation was incredibly helpful. They understood my vision and delivered beyond expectations.',
    rating: 5,
  },
  {
    name: 'Deepak Kumar',
    role: 'Homeowner',
    content: 'No hidden costs, transparent pricing, and excellent quality. The warranty gives great peace of mind.',
    rating: 5,
  },
]

export default function IskoTestimonials() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <span className="text-red-600 text-xs uppercase tracking-[0.25em] font-light">Testimonials</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 font-light tracking-tight">
            Loved by 500+ Homeowners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Transforming homes, one space at a time. Hear from our delighted clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group p-10 bg-card rounded-2xl border border-border/20 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm">
              {/* Rating */}
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg mb-8 leading-relaxed font-light">"{testimonial.content}"</p>

              {/* Author */}
              <div className="pt-6 border-t border-border/10 group-hover:border-red-600/20 transition-colors">
                <p className="font-serif text-foreground text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground font-light mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
