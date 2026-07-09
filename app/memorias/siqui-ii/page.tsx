import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, Download } from "lucide-react"
import AttendeeTypeChart from "@/components/ui/attendee-type-pie-chart"
import TopicsChart from "@/components/ui/topics-pie-chart"

export default function SiquiIiPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-20">
        <div className="mb-8">
          <Link href="/memorias">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a memorias
            </Button>
          </Link>
        </div>

        <div className="space-y-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SIQUI II</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Memorias de la segunda edición
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Esta página reúne los contenidos de la edición anterior en un espacio independiente, separado del contenido principal del evento nuevo.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/memories/MEMORIAS_II_SIQUI.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                Descarga las memorias del SIQUI 2025
                <Download className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="gap-2">
                Volver al evento principal
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="rounded-xl border bg-muted/30 p-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold">
                1 de noviembre de 2024
              </div>
              <h2 className="text-2xl font-bold">Universidad de Medellín, Colombia</h2>
              <p className="text-muted-foreground">
                Con motivo de la celebración del Día del Químico en Colombia, el grupo de investigación Materiales con Impacto organizó el Simposio de Química – UdeMedellín.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border">
              <Image
                src="/memories/premiacion1.webp"
                alt="Premiación del simposio"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl border">
              <Image
                src="/memories/colegio_poster.webp"
                alt="Pósters del simposio"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-xl border p-8">
            <h3 className="mb-8 text-center text-2xl font-bold">Estadísticos del evento 2024</h3>
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="rounded-lg border p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">180+</div>
                <div className="text-sm text-muted-foreground">Participantes</div>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Regiones representadas</div>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">110</div>
                <div className="text-sm text-muted-foreground">Presentaciones y pósters</div>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <AttendeeTypeChart />
              <TopicsChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
