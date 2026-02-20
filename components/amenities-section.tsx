'use client'

import Image from "next/image"
import { Coffee, Wifi, Users, Monitor, Zap, MapPin } from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "100+ Mbps internet connectivity throughout the space"
  },
  {
    icon: Users,
    title: "Meeting Rooms",
    description: "Fully equipped conference rooms with AV facilities"
  },
  {
    icon: Coffee,
    title: "Refreshment Zone",
    description: "Complimentary coffee, tea, and refreshments for members"
  },
  {
    icon: Monitor,
    title: "Tech Infrastructure",
    description: "Latest equipment and tools for seamless productivity"
  },
  {
    icon: Zap,
    title: "24/7 Access",
    description: "Round-the-clock access to your dedicated or hot desk"
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Centrally located with easy accessibility and parking"
  },
]

const showcases = [
  {
    image: "/images/amenities-workspace.jpg",
    title: "Dedicated Workspaces",
    description: "Ergonomic desks designed for maximum productivity and comfort"
  },
  {
    image: "/images/amenities-meeting-room.jpg",
    title: "Meeting Rooms",
    description: "Professional conference rooms equipped with modern technology"
  },
  {
    image: "/images/amenities-lounge.jpg",
    title: "Community Lounge",
    description: "Relax and network in our comfortable breakout areas"
  },
]

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">World-Class Facilities</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Premium Amenities for
            <span className="text-red-600 block">Your Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to thrive in your professional journey
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                <amenity.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{amenity.title}</h3>
              <p className="text-muted-foreground">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Showcase Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-foreground mb-10 text-center">
            Explore Our <span className="text-red-600">Spaces</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {showcases.map((showcase, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={showcase.image}
                    alt={showcase.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold text-white mb-2">{showcase.title}</h4>
                  <p className="text-gray-200 text-sm">{showcase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-card rounded-2xl border border-red-600/30 p-12 text-center">
          <h3 className="text-2xl font-serif text-foreground mb-4">Ready to Experience ISKO?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a complimentary tour of our space and discover why 500+ professionals choose ISKO LIVE SPACE
          </p>
          <a
            href="https://wa.me/919887726552"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-medium transition-colors"
          >
            Schedule a Tour Today
          </a>
        </div>
      </div>
    </section>
  )
}
