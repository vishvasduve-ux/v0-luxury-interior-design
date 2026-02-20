import Header from "@/components/header"
import IskoInteriorHero from "@/components/isko-interior-hero"
import IskoServices from "@/components/isko-services"
import IskoPortfolio from "@/components/isko-portfolio"
import IskoPricing from "@/components/isko-pricing"
import IskoTestimonials from "@/components/isko-testimonials"
import IskoProcess from "@/components/isko-process"
import IskoWarranty from "@/components/isko-warranty"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <IskoInteriorHero />
      <IskoServices />
      <IskoPortfolio />
      <IskoPricing />
      <IskoTestimonials />
      <IskoProcess />
      <IskoWarranty />
      <ContactSection />
      <Footer />
    </main>
  )
}
