import Image from "next/image"
import type { GalleryItem } from "@/lib/data/editions/types"

export function MediaGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, index) =>
        item.type === "video" ? (
          <video
            key={index}
            src={item.src}
            width={item.width}
            height={item.height}
            autoPlay
            muted
            loop
            className={item.className}
          />
        ) : (
          <Image
            key={index}
            src={item.src}
            alt={item.alt ?? ""}
            width={item.width}
            height={item.height}
            className={item.className}
          />
        )
      )}
    </div>
  )
}
