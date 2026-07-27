import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, ExternalLink } from "lucide-react"
import { FaXTwitter, FaInstagram } from "react-icons/fa6"

export function Venue() {
  return (
    <section id="venue" className="w-full py-12 md:py-24 lg:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Ubicación
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Información del lugar</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              El SIQUI 2026 se llevará a cabo en las instalaciones de la Universidad de Medellín
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Campus UdeM</h3>
              <p className="text-muted-foreground">
                Un lugar equipado con los implementos necesarios para una experiencia amena y significativa en el SIQUI 2025.
                Llegar a nuestro Campus Vivo es muy sencillo usando el transporte público integrado, Metro de Medellín.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-muted-foreground">Cra. 87 #30-65, Medellín, Belén, Antioquia</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">siquiudem@udemedellin.edu.co</p>
                  <p className="text-sm text-muted-foreground">siquiudem@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FaXTwitter className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">@siquiudem</p>
                  <p className="text-sm text-muted-foreground">@ConMpac</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FaInstagram className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">@materialesconimpacto</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
            <Button variant="outline" className="inline-flex items-center gap-2" asChild>
              <Link
                href="https://www.metrodemedellin.gov.co/hs-fs/hubfs/v1-mapa%20esquematico-2021%20(1).webp?width=1200&height=1638&name=v1-mapa%20esquematico-2021%20(1).webp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mapa de Metro Medellín
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2436516604885!2d-75.61255342500957!3d6.231576693756585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44298d0551a085%3A0xd6c06b6158ba814d!2sUniversidad%20de%20Medell%C3%ADn!5e0!3m2!1ses-419!2sco!4v1743790557531!5m2!1ses-419!2sco"
              width="600"
              height="800"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-video h-full w-full rounded-xl">
            </iframe>
        </div>
        </div>
      </div>
    </section>
  )
}
