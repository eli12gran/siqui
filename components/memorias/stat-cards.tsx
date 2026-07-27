import type { StatCard } from "@/lib/data/editions/types"

export function StatCards({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((stat, index) => (
        <div key={index} className="rounded-lg border p-6 text-center">
          <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
