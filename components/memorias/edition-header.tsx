import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, Download } from "lucide-react"
import type { CoverImage } from "@/lib/data/editions/types"

type EditionHeaderProps = {
  label: string
  title: string
  downloadCta?: { href: string; label: string }
  coverImage?: CoverImage
}

export function EditionHeader({ label, title, downloadCta, coverImage }: EditionHeaderProps) {
  return (
    <>
      <div className="mb-4">
        <Link href="/memorias">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a memorias
          </Button>
        </Link>
      </div>

      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{label}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-2xl">{title}</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        {downloadCta && (
          <Link href={downloadCta.href} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              {downloadCta.label}
              <Download className="h-4 w-4" />
            </Button>
          </Link>
        )}
        <Link href="/">
          <Button size="lg" variant="outline" className="gap-2">
            Volver al evento principal
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {coverImage && (
        <div className="flex justify-center overflow-hidden rounded-xl">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            width={coverImage.width}
            height={coverImage.height}
            className="h-auto max-w-full object-cover"
          />
        </div>
      )}
    </>
  )
}
