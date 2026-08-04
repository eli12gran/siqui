import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Inscriptions } from "@/components/sections/inscriptions"
import { Speakers } from "@/components/sections/speakers"
import { Memories } from "@/components/sections/memories"
import { Schedule } from "@/components/sections/schedule"
import { Venue } from "@/components/sections/venue"
import { Sponsors } from "@/components/sections/sponsors"
import { RegistrationCta } from "@/components/sections/registration-cta"
import { Footer } from "@/components/sections/footer"

export default function ScientificEventPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Inscriptions />
        < Speakers />
        <Memories />
        <Schedule />
        <Venue />
        <Sponsors />
        <RegistrationCta />
      </main>
      <Footer />
    </div>
  )
}
