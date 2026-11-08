import {
  thursdaySchedule,
  fridaySchedule,
} from "@/lib/data/schedule"

import { DaySchedule } from "./daySchedule"
import { Talks } from "./talks"
import { Discussion } from "./discussion"

export function Schedule() {
  return (
    <section
      id="schedule"
      className="w-full py-12 md:py-20"
    >
      <div className="container px-4 md:px-6">

        {/* Main heading */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-3 inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Cronograma
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Programación del Evento
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground md:text-lg">
            Una jornada de conocimiento, investigación e
            intercambio de experiencias en torno a la química
            y su impacto en la sociedad.
          </p>
        </div>

        {/* Daily schedules */}
        <div className="space-y-12">
          <DaySchedule day={thursdaySchedule} />

          <DaySchedule day={fridaySchedule} />
        </div>

        {/* Oral presentations */}
        <div className="mt-20 border-t pt-12">
          <Talks />
        </div>

        {/* Discussion panel */}
        <div className="mt-12 border-t pt-12">
          <Discussion />
        </div>

      </div>
    </section>
  )
}