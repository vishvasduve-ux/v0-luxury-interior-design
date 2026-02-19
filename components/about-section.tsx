import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Complete turnkey interior solutions",
  "In-house design & execution team",
  "Premium material sourcing",
  "Dedicated project management",
  "Transparent pricing & timelines",
  "Post-completion support",
]

const processSteps = [
  { step: "01", title: "Consultation", desc: "Site visit & requirement analysis" },
  { step: "02", title: "Design", desc: "Concept development & 3D visualization" },
  { step: "03", title: "Execution", desc: "Turnkey project implementation" },
  { step: "04", title: "Handover", desc: "Quality check & project delivery" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Interior Workers team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-red-600 text-white p-6 rounded-xl shadow-2xl">
              <div className="text-4xl font-serif font-bold">10+</div>
              <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
            </div>

            {/* Decorative Line */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-red-600 rounded-tl-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-red-600" />
              <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              Crafting Workspaces
              <span className="text-red-600 block">That Inspire</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Interior Workers is Jaipur&apos;s trusted partner for premium commercial interior 
              design and turnkey execution. With over a decade of experience, we transform 
              ordinary spaces into extraordinary workplaces.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Our strength lies in seamless vendor coordination, quality craftsmanship, and 
              unwavering commitment to timelines. From corporate offices to coworking spaces, 
              we deliver interiors that reflect your brand&apos;s identity and enhance productivity.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-2xl font-serif text-red-600 mb-1">{item.step}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
