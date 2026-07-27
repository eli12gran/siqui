import type { TimelineItem } from "@/lib/data/editions/types"

export function EditionTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-10 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary">
      {items.map((item, index) => (
        <div key={index} className="relative pl-10">
          <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white z-10 transition-transform hover:scale-110 hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]" />
          <h4 className="text-xl font-semibold">
            {item.emoji} {item.title}
          </h4>
          <p className="text-muted-foreground mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
