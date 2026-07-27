import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Memories() {
  return (
    <section id="memories" className="w-full py-12 md:py-24 lg:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Memorias
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Memorias históricas</h2>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SIQUI I</p>
            <h3 className="mt-3 text-2xl font-semibold">Primera edición</h3>
            <p className="mt-3 text-muted-foreground">
              Revisa el contexto de la primera versión del simposio.
            </p>
            <Link href="/memorias/siqui-i" className="mt-6 inline-flex">
              <Button variant="outline">Ver SIQUI I</Button>
            </Link>
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SIQUI II</p>
            <h3 className="mt-3 text-2xl font-semibold">Segunda edición</h3>
            <p className="mt-3 text-muted-foreground">
              Accede a las memorias y materiales de la edición anterior.
            </p>
            <Link href="/memorias/siqui-ii" className="mt-6 inline-flex">
              <Button variant="outline">Ver SIQUI II</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
