import { Clock, MapPin } from "lucide-react"
import type { ScheduleEvent } from "@/lib/data/schedule"

const eventStyles = {
  general: "border-l-4 border-l-primary bg-card",
  plenary: "border-l-4 border-l-primary bg-primary/5",
  invited: "border-l-4 border-l-blue-500 bg-blue-500/5",
  break: "border-l-4 border-l-muted-foreground/40 bg-muted/50",
  special: "border-l-4 border-l-amber-500 bg-amber-500/5",
}

export function ScheduleItem({
  event,
}: {
  event: ScheduleEvent
}) {
  return (
    <div
      className={`flex h-full flex-col justify-center gap-2 rounded-lg border p-3 transition-shadow duration-200 hover:shadow-md sm:p-4 ${eventStyles[event.type]}`}
    >
      <h4 className="font-semibold leading-snug">
        {event.title}
      </h4>

      {event.location && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>{event.location}</span>
        </div>
      )}
    </div>
  )
}