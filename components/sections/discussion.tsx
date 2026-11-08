import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

import { discussion } from "@/lib/data/discussion"

export function Discussion() {
  return (
    <section
      id="discussion"
      className="w-full py-12 md:py-20"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-primary/5">

          <div className="p-6 sm:p-10">

            {/* Section heading */}
            <div className="mb-6">
              <span className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Conversatorio
              </span>

              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {discussion.title}
              </h2>
            </div>

            {/* Event information */}
            <div className="mb-8 flex flex-col gap-3 border-y py-5 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-6">

              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>{discussion.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{discussion.time}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{discussion.location}</span>
              </div>

            </div>

            {/* Participants */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />

                <h3 className="text-lg font-semibold">
                  Panelistas
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {discussion.participants.map((participant) => (
  <div
    key={participant.name}
    className="rounded-lg border bg-background p-4"
  >
    <p className="font-semibold">
      {participant.name}
    </p>

    <p className="mt-1 text-sm text-muted-foreground">
      {participant.role}
    </p>
  </div>
))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}