import { CommitteeMemberCard } from "@/components/memorias/committee-member-card"
import type { CommitteeMember } from "@/lib/data/editions/types"

type CommitteeGroupProps = {
  title?: string
  members: CommitteeMember[]
  gridClassName?: string
}

export function CommitteeGroup({ title, members, gridClassName }: CommitteeGroupProps) {
  const defaultGridClassName =
    members.length === 1
      ? "grid gap-6 sm:grid-cols-1 place-items-center"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-2"

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {title && <h4 className="text-center text-lg font-bold">{title}</h4>}
      <div className={gridClassName ?? defaultGridClassName}>
        {members.map((member, index) => (
          <CommitteeMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  )
}
