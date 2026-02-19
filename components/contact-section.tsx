"use client"

import React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", phone: "", email: "", requirement: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-red-600" />
            <span className="text-red-600 text-sm uppercase tracking-[0.3em] font-medium">Get In Touch</span>
            <div className="w-12 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Let&apos;s Discuss Your
            <span className="text-red-600 block">Project</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to transform your workspace? Get in touch for a free consultation 
            and site visit. We&apos;re here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:9887726552"
                className="group p-6 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Call Us</div>
                <div className="text-lg font-semibold text-foreground">9887726552</div>
              </a>

              <a
                href="https://wa.me/919887726552"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                <div className="text-lg font-semibold text-foreground">Message Us</div>
              </a>

              <a
                href="mailto:info@interiorworkers.com"
                className="group p-6 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="text-lg font-semibold text-foreground break-all">info@interiorworkers.com</div>
              </a>

              <div className="group p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">Working Hours</div>
                <div className="text-lg font-semibold text-foreground">Mon - Sat: 10AM - 7PM</div>
              </div>
            </div>

            {/* Address */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Visit Our Office</div>
                  <div className="text-foreground font-medium">
                    Bella Vista, Partkar Colony<br />
                    Mansarovar, Jaipur, Rajasthan
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d75.7873!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMansarovar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Interior Workers Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 lg:p-10 rounded-2xl border border-border">
            <h3 className="text-2xl font-serif text-foreground mb-2">Request a Quote</h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 text-center bg-red-600/10 rounded-xl">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Thank You!</h4>
                <p className="text-muted-foreground">
                  We&apos;ve received your enquiry and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-secondary border-border focus:border-red-600 h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98877 26552"
                      className="bg-secondary border-border focus:border-red-600 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-secondary border-border focus:border-red-600 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirement" className="block text-sm font-medium text-foreground mb-2">
                    Project Requirements
                  </label>
                  <Textarea
                    id="requirement"
                    required
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    placeholder="Tell us about your project - type of space, approximate area, budget range, timeline..."
                    rows={4}
                    className="bg-secondary border-border focus:border-red-600 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-red-600 hover:bg-red-500 text-white text-base font-medium"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
