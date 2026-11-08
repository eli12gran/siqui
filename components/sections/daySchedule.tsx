import { Clock } from "lucide-react"
import { ScheduleItem } from "./scheduleItem"

import type {
  DaySchedule as DayScheduleType,
  ScheduleBlock,
  Auditorium,
} from "@/lib/data/schedule"

// Creates a link to the complete presentation information.
function TalkLink({ talkId }: { talkId: string }) {
  return (
    <a
      href={`#talk-${talkId.toLowerCase()}`}
      className="flex min-h-[78px] items-center justify-center rounded-lg border border-primary/20 bg-primary/5 p-4 font-bold text-primary transition-all hover:border-primary hover:bg-primary/10 hover:shadow-md"
    >
      {talkId}
      <span className="ml-2 text-xs font-normal text-muted-foreground">
        Ver presentación →
      </span>
    </a>
  )
}

function DiscussionLink() {
  return (
    <a
      href="#discussion"
      className="flex h-full items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 font-bold text-amber-700 transition-all hover:border-amber-500 hover:bg-amber-500/10 hover:shadow-md dark:text-amber-400"
    >
      Conversatorio
      <span className="ml-2 text-xs font-normal text-muted-foreground">
        Ver detalles →
      </span>
    </a>
  )
}

// Displays one row of the schedule.
function ScheduleRow({ block }: { block: ScheduleBlock }) {
  // CASE 1: The block is a general event.
  if (block.type === "event") {
    const event = block.event
    const isBoth = event.auditorium === "both"

    return (
      <div className="grid grid-cols-1 gap-2 border-b py-3 last:border-b-0 md:grid-cols-[110px_1fr_1fr] md:gap-3">

        {/* Time */}
        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground md:items-start md:pt-4">
          <Clock className="h-4 w-4 shrink-0" />
          <span>{event.time}</span>
        </div>

        {/* Event in Auditorium 3 or both auditoriums */}
        <div className={isBoth ? "md:col-span-2" : "min-w-0"}>
          {!isBoth && event.auditorium === 3 && (
            <span className="mb-1 block text-xs font-medium text-muted-foreground md:hidden">
              Auditorio 3
            </span>
          )}

          {event.auditorium === 3 || isBoth ? (
  event.title === "Conversatorio" ? (
    <DiscussionLink />
  ) : (
    <ScheduleItem event={event} />
  )
) : null}
        </div>

        {/* Event in Auditorium 2 */}
        {!isBoth && event.auditorium === 2 && (
          <div className="min-w-0">
            <span className="mb-1 block text-xs font-medium text-muted-foreground md:hidden">
              Auditorio 2
            </span>

            <ScheduleItem event={event} />
          </div>
        )}
      </div>
    )
  }

  // CASE 2: The block contains parallel presentations.
  const session = block.session

  // Find the presentation assigned to each auditorium.
  const getTalk = (auditorium: Auditorium) => {
    return session.talks.find(
      (talk) => talk.auditorium === auditorium
    )
  }

  const talk3 = getTalk(3)
  const talk2 = getTalk(2)

  return (
    <div className="grid grid-cols-1 gap-2 border-b py-3 last:border-b-0 md:grid-cols-[110px_1fr_1fr] md:gap-3">

      {/* Time */}
      <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground md:items-start md:pt-4">
        <Clock className="h-4 w-4 shrink-0" />
        <span>{session.time}</span>
      </div>

{/* Auditorium 3 */}
<div className="min-w-0 flex flex-col gap-2">
  <span className="text-xs font-medium text-muted-foreground">
    Auditorio 3
  </span>

  {talk3 && <TalkLink talkId={talk3.talkId} />}
</div>

{/* Auditorium 2 */}
<div className="min-w-0 flex flex-col gap-2">
  <span className="text-xs font-medium text-muted-foreground">
    Auditorio 2
  </span>

  {talk2 && <TalkLink talkId={talk2.talkId} />}
</div>
    </div>
  )
}

// Displays the complete schedule for one day.
export function DaySchedule({
  day,
}: {
  day: DayScheduleType
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <h3 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
        {day.date}
      </h3>

      <div className="overflow-hidden rounded-xl border bg-card p-3 shadow-sm sm:p-5">

        {/* Column headers */}
        <div className="mb-2 hidden grid-cols-[110px_1fr_1fr] gap-3 border-b pb-4 md:grid">
          <div className="text-sm font-semibold text-muted-foreground">
            Horario
          </div>

          <div className="text-center text-sm font-bold">
            Auditorio 3
            <span className="block text-xs font-normal text-muted-foreground">
              Bloque 11
            </span>
          </div>

          <div className="text-center text-sm font-bold">
            Auditorio 2
            <span className="block text-xs font-normal text-muted-foreground">
              Bloque 11
            </span>
          </div>
        </div>

        {/* Schedule rows */}
        <div>
          {day.blocks.map((block, index) => (
            <ScheduleRow
              key={`${day.date}-${index}`}
              block={block}
            />
          ))}
        </div>
      </div>
    </div>
  )
}