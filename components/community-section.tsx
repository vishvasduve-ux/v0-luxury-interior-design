'use client'

import Image from "next/image"
import { Users, Lightbulb, Calendar, Award } from "lucide-react"

const communityFeatures = [
  {
    icon: Users,
    title: "Networking Events",
    description: "Monthly meetups, workshops, and social events to connect with like-minded professionals"
  },
  {
    icon: Lightbulb,
    title: "Knowledge Sharing",
    description: "Expert talks, skill-building sessions, and industry insights from thought leaders"
  },
  {
    icon: Calendar,
    title: "Community Calendar",
    description: "Curated events and activities designed to foster collaboration and growth"
  },
  {
    icon: Award,
    title: "Member Benefits",
    description: "Exclusive discounts, partnerships, and opportunities for member businesses"
  },
]

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/community-team.jpg"
                alt="Community at ISKO LIVE SPACE"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-red-600 text-white p-6 rounded-xl shadow-2xl">
              <div className="text-4xl font-serif font-bold">500+</div>
              <div className="text-sm uppercase tracking-wider">Active Members</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-red-600" />
              <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">Community First</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              More Than Just a
              <span className="text-red-600 block">Workspace</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ISKO LIVE SPACE is built on the foundation of community collaboration. We believe in creating an ecosystem where professionals, entrepreneurs, and creators can connect, learn, and grow together.
            </p>

            {/* Features Grid */}
            <div className="space-y-6">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Line */}
            <div className="absolute -bottom-12 -left-12 w-24 h-24 border-l-2 border-b-2 border-red-600 rounded-bl-2xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
