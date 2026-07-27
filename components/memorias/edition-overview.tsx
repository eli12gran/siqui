import type { EditionOverview as EditionOverviewData } from "@/lib/data/editions/types"

export function EditionOverview({ date, university, paragraphs }: EditionOverviewData) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-justify">
      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold">
        {date}
      </div>
      <h3 className="text-2xl font-bold">{university}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
