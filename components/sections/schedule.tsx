import { Clock, MapPin } from "lucide-react"
import { thursdaySessions, fridaySessions, type Session } from "@/lib/data/schedule"

function SessionItem({ session }: { session: Session }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center transition-shadow duration-200 hover:shadow-lg transform hover:scale-[1.01]">
      <div className="flex w-full flex-col gap-1 md:w-1/5">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-base font-medium">{session.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-10 text-muted-foreground" />
          <span className="text-s text-muted-foreground">{session.location}</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{session.title}</h3>
        {session.speaker && <p className="text-base text-muted-foreground">{session.speaker}</p>}
      </div>
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" className="w-full py-12 md:py-24 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Cronograma
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Programación del Evento</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una jornada de charlas inspiradoras, invitados especiales
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-3xl mb-4">Jueves 12 de noviembre</h3>
          <div className="space-y-6">
            {thursdaySessions.map((session, index) => (
              <SessionItem key={index} session={session} />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-1">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-3xl mb-4">Viernes 13 de noviembre</h3>
          <div className="space-y-6">
            {fridaySessions.map((session, index) => (
              <SessionItem key={index} session={session} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
