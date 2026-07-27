import type { ReactNode } from "react"

export function MemoriesSection({ children }: { children: ReactNode }) {
  return (
    <section id="memories" className="w-full py-0 md:py-0 lg:py-0 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl py-12 space-y-8">{children}</div>
      </div>
    </section>
  )
}
