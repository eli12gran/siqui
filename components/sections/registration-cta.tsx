import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { FaXTwitter, FaInstagram } from "react-icons/fa6"

export function RegistrationCta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-justify">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">¿Listo para unirte?</h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
            Pronto estarán disponibles las inscripciones y más información sobre el SIQUI 2026. Te invitamos a ser parte de un encuentro en el que la ciencia, la innovación y el compromiso con la sociedad se unen para explorar el papel de la química en la construcción de un futuro más sostenible.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            {/*
            <Button asChild size="lg" variant="secondary" className="inline-flex items-center gap-2">
              <Link href="/templates/Programa_SIQUI_2025.pdf" target="_blank" rel="noopener noreferrer">
                Ver programa (PDF)
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            */}
            <Button
              size="lg"
              variant="outline"
              className="inline-flex items-center gap-2 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="mailto:siquiudem@udemedellin.edu.co">
              Contáctenos
              <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="inline-flex items-center gap-2">
              <Link href="https://x.com/siquiudem" target="_blank" rel="noopener noreferrer">
                @siquiudem
                <FaXTwitter className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="inline-flex items-center gap-2 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="https://www.instagram.com/materialesconimpacto/">
              @materialesconimpacto
              <FaInstagram className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
