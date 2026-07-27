import type { ThematicLinesData } from "@/lib/data/editions/types"

export function ThematicLines({ intro, items }: ThematicLinesData) {
  return (
    <div className="space-y-4">
      <h3 className="text-1xl font-bold">Líneas temáticas</h3>
      <p className="text-muted-foreground">{intro}</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-justified gap-4 rounded-lg border p-4 transition-shadow duration-200 hover:shadow-lg transform hover:scale-[1.01]"
          >
            <h4 className="text-l">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
