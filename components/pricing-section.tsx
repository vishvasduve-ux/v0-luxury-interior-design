'use client'

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Hot Desk",
    price: "₹2,499",
    period: "/month",
    description: "Perfect for flexible workers",
    features: [
      "Unlimited hot desk access",
      "Business address",
      "High-speed WiFi",
      "Member lounge access",
      "Meeting room - 2 hrs/month",
      "Parking facility",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Dedicated Desk",
    price: "₹5,999",
    period: "/month",
    description: "For focused individuals",
    features: [
      "Dedicated workspace",
      "Premium business address",
      "High-speed WiFi",
      "Member lounge access",
      "Meeting room - 8 hrs/month",
      "24/7 access",
      "Parking facility",
      "Phone line",
    ],
    cta: "Choose Plan",
    highlighted: true,
  },
  {
    name: "Private Office",
    price: "₹12,999",
    period: "/month",
    description: "For teams & companies",
    features: [
      "Private furnished office",
      "Premium business address",
      "High-speed WiFi",
      "Member lounge access",
      "Unlimited meeting rooms",
      "24/7 access",
      "Dedicated parking",
      "Dedicated phone line",
      "Admin support",
    ],
    cta: "Book Office",
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">Flexible Plans</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Simple & Transparent
            <span className="text-red-600 block">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs. All plans include premium amenities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                plan.highlighted
                  ? "bg-red-600/5 border-red-600/50 transform md:scale-105"
                  : "bg-card border-border"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name & Price */}
              <h3 className="text-2xl font-serif text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-serif text-red-600">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={
                  plan.highlighted
                    ? "w-full bg-red-600 hover:bg-red-500 text-white h-12"
                    : "w-full bg-card border border-border hover:border-red-600/50 text-foreground h-12"
                }
              >
                <a href="https://wa.me/919887726552">{plan.cta}</a>
              </Button>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl opacity-30">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-600 to-transparent" />
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-red-600 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include GST • Annual plans available at 15% discount • Flexible payment options
          </p>
          <Button asChild variant="outline" className="border-border hover:border-red-600/50">
            <a href="#contact">Contact Sales for Custom Plans</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
