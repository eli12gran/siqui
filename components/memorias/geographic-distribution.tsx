import Image from "next/image"
import type { RegionShare } from "@/lib/data/editions/types"

type GeographicDistributionProps = {
  image: string
  regions: RegionShare[]
}

export function GeographicDistribution({ image, regions }: GeographicDistributionProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center border rounded-lg p-6">
      <div className="w-full lg:w-2/3">
        <Image
          src={image}
          alt="Distribución geográfica"
          width={800}
          height={400}
          className="rounded-lg w-full h-auto object-contain"
        />
      </div>

      <div className="w-full lg:w-1/3 space-y-2">
        <h4 className="font-bold text-lg mb-2">Participación por región</h4>
        <ul className="space-y-2 text-sm">
          {regions.map((region, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: region.color }} />
              <span>{region.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
