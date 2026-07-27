import { CommitteeGroup } from "@/components/memorias/committee-group"
import type { CommitteesData } from "@/lib/data/editions/types"

function PillHeading({ children }: { children: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
      <div className="inline-block rounded-lg bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
        {children}
      </div>
    </div>
  )
}

export function CommitteesSection({
  heading,
  description,
  organizador,
  logistico,
  cientifico,
}: CommitteesData) {
  return (
    <section id="committees" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{heading}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12 space-y-12">
          <div className="space-y-12">
            <PillHeading>Comité Organizador</PillHeading>
            {organizador.map((subgroup) => (
              <CommitteeGroup key={subgroup.university} title={subgroup.university} members={subgroup.members} />
            ))}
          </div>

          <div>
            <PillHeading>Comité Logístico</PillHeading>
            <CommitteeGroup members={logistico} />
          </div>

          <div>
            <PillHeading>Comité Científico</PillHeading>
            <CommitteeGroup
              members={cientifico}
              gridClassName="grid gap-6 sm:grid-cols-3 lg:grid-cols-3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
