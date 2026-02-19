import { Wrench, Users, Clock } from "lucide-react"

const trustCards = [
  {
    icon: Wrench,
    title: "Turnkey Execution",
    description: "Complete end-to-end project management from design to handover",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled professionals with 10+ years in commercial interiors",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed timelines with milestone-based project tracking",
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {trustCards.map((card, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 p-6 bg-card rounded-lg border border-border hover:border-red-600/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                <card.icon className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
