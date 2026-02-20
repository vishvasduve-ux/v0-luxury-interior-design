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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">Success Stories</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join 500+ satisfied customers who've transformed their spaces with ISKO LIVE SPACE
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-300">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-red-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
