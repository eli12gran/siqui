import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen } from "lucide-react"

export default function MemoriesLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
            <BookOpen className="mr-2 h-4 w-4" />
            Memorias históricas
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Explora las memorias de las ediciones previas
          </h1>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="flex h-full flex-col justify-between p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SIQUI I</p>
                <h2 className="mt-3 text-2xl font-semibold">Memorias de la primera edición</h2>
                <p className="mt-3 text-muted-foreground">
                  Revisa la historia del evento inaugural, sus ponencias destacadas y el contexto académico que dio origen al simposio.
                </p>
              </div>
              <Link href="/memorias/siqui-i" className="mt-6 inline-flex">
                <Button className="w-full">
                  Ver memorias de SIQUI I
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="flex h-full flex-col justify-between p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SIQUI II</p>
                <h2 className="mt-3 text-2xl font-semibold">Memorias de la segunda edición</h2>
                <p className="mt-3 text-muted-foreground">
                  Consulta las memorias de la segunda edición del simposio, incluyendo el material descargable y el resumen del evento.
                </p>
              </div>
              <Link href="/memorias/siqui-ii" className="mt-6 inline-flex">
                <Button className="w-full">
                  Ver memorias de SIQUI II
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <Link href="/">
            <Button variant="outline">Volver al inicio</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
