import Header from "@/components/header"
import IskoHero from "@/components/isko-hero"
import AmenitiesSection from "@/components/amenities-section"
import PricingSection from "@/components/pricing-section"
import CommunitySection from "@/components/community-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <IskoHero />
      <AmenitiesSection />
      <PricingSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
