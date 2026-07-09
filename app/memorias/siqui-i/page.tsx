import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function SiquiIPage() {
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

        <div className="space-y-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SIQUI I</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Memorias de la primera edición
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Aquí podrás ubicar la historia institucional y los materiales de la primera versión del simposio cuando estén listos.
            </p>
          </div>

          <div className="rounded-xl border bg-muted/30 p-8 text-center">
            <h2 className="text-2xl font-semibold">Próximamente</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Esta vista está preparada para recibir el contenido de SIQUI I sin mezclarlo con la página principal del evento nuevo.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border">
            <Image
              src="/1.webp"
              alt="Portada del simposio"
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
