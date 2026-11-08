import { UserRound, Users } from "lucide-react"

import {
  talks,
  sessionGroups,
} from "@/lib/data/talks"

import { TalkCard } from "./talkCard"

export function Talks() {
  return (
    <section
      id="talks"
      className="w-full py-12 md:py-20"
    >
      <div className="container px-4 md:px-6">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Presentaciones orales
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Charlas
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Conoce las investigaciones y propuestas
            presentadas durante el simposio.
          </p>
        </div>

        {/* Presentation groups */}
        <div className="mx-auto max-w-6xl space-y-14">

          {sessionGroups.map((group, index) => {
            const groupTalks = group.talkIds
              .map((id) =>
                talks.find((talk) => talk.id === id)
              )
              .filter((talk) => talk !== undefined)

            const day =
              group.date === "2026-11-12"
                ? "Jueves 12 de noviembre"
                : "Viernes 13 de noviembre"

            return (
              <div
                key={`${group.date}-${group.auditorium}`}
                className="space-y-6"
              >

                {/* Group heading */}
                <div>
                  <p className="text-sm font-medium text-primary">
                    {day}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Auditorio {group.auditorium}
                    <span className="ml-2 text-base font-normal text-muted-foreground">
                      · Bloque 11
                    </span>
                  </h3>
                </div>

                {/* Moderators */}
                <div className="rounded-xl border bg-muted/30 p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />

                    <h4 className="font-semibold">
                      Moderadores de sesión
                    </h4>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <UserRound className="h-4 w-4 text-primary" />
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Chair
                        </p>

                        <p className="font-medium">
                          {group.chair}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <UserRound className="h-4 w-4 text-primary" />
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Co-chair
                        </p>

                        <p className="font-medium">
                          {group.coChair}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Talks */}
                <div className="grid gap-4 md:grid-cols-2">
                  {groupTalks.map((talk) => (
                    <TalkCard
                      key={talk.id}
                      talk={talk}
                    />
                  ))}
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}