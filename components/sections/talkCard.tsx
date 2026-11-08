import type { Talk } from "@/lib/data/talks"

export function TalkCard({
  talk,
}: {
  talk: Talk
}) {
  return (
    <article
      id={`talk-${talk.id.toLowerCase()}`}
      className="scroll-mt-24 rounded-lg border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
          {talk.id}
        </span>
      </div>

      <h4 className="mb-2 font-semibold leading-snug">
        {talk.title}
      </h4>

      <p className="text-sm text-muted-foreground">
        {talk.speaker}
      </p>
    </article>
  )
}