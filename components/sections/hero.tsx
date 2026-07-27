import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full py-2 md:py-2 lg:py-4 bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-5">

          {/* Image on Top */}
          <Image
            src="/Logo_2026.webp"
            width={800}
            height={800}
            alt="Conference Banner"
            className="w-full max-w-4xl rounded-xl object-contain"
          />

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/memories/MEMORIAS_II_SIQUI.pdf"
              passHref
              legacyBehavior
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="inline-flex text-lg items-center gap-2">
                Descarga las memorias de SIQUI 2025
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            {/* <Link
              href="/templates/Programacion_SIQUI-1.pdf"
              passHref
              legacyBehavior
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="inline-flex text-lg items-center gap-2">
                Ver programación (PDF)
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            { <Link
              href="/templates/PROGRAMACION_POSTER - SIQUI_16-Oct.pdf"
              passHref
              legacyBehavior
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button size="lg" variant="outline" className="inline-flex text-lg items-center gap-2">
              Ver listado Póster (PDF)
              <ExternalLink className="h-4 w-4" />
            </Button>
            </Link> } */}
          </div>

          {/* Details Row */}
          <div className="flex flex-col gap-2 text-xl text-muted-foreground md:flex-row md:gap-6 justify-center items-center space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>12 y 13 de noviembre, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Universidad de Medellín, Medellín, Antioquia</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>evento gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
