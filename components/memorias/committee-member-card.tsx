import Image from "next/image"
import type { CommitteeMember } from "@/lib/data/editions/types"

export function CommitteeMemberCard({ name, image, role, affiliation }: CommitteeMember) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-4">
      {image && (
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
      )}
      <div>
        <h4 className="font-bold">{name}</h4>
        {role && <p className="text-sm text-muted-foreground">{role}</p>}
        {affiliation && <p className="text-xs">{affiliation}</p>}
      </div>
    </div>
  )
}
