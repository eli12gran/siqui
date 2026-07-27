import type { Metadata } from "next"
import { EditionHeader } from "@/components/memorias/edition-header"
import { MemoriesSection } from "@/components/memorias/memories-section"
import { EditionOverview } from "@/components/memorias/edition-overview"
import { ThematicLines } from "@/components/memorias/thematic-lines"
import { StatCards } from "@/components/memorias/stat-cards"
import { PieChartCard } from "@/components/memorias/pie-chart-card"
import { SpeakerGrid } from "@/components/memorias/speaker-grid"
import { CommitteesSection } from "@/components/memorias/committees-section"
import { siquiII } from "@/lib/data/editions/siqui-ii"

export const metadata: Metadata = {
  title: "Memorias SIQUI II (2025)",
  description:
    "Memorias de la segunda edición del Simposio de Química UdeMedellín, realizada el 21 y 22 de octubre de 2025: ponentes, comités y estadísticas del evento.",
  openGraph: {
    url: "/memorias/siqui-ii",
    siteName: "SIQUI Universidad de Medellín",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/gallery/1.webp", width: 1417, height: 755, alt: "SIQUI II 2025" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@siquiudem",
    images: ["/gallery/1.webp"],
  },
}

export default function SiquiIIPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 pt-4 pb-12 md:px-6 lg:pt-6 lg:pb-20">
        <div className="space-y-10">
          <EditionHeader
            label={siquiII.label}
            title={siquiII.title}
            downloadCta={siquiII.downloadCta}
            coverImage={siquiII.coverImage}
          />

          <MemoriesSection>
            <EditionOverview {...siquiII.overview} />
            <ThematicLines {...siquiII.thematicLines} />

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">{siquiII.statsHeading}</h3>
              <div className="space-y-8">
                <StatCards stats={siquiII.stats} />
                <div className="grid gap-8 md:grid-cols-2">
                  <PieChartCard {...siquiII.attendeeChart} wrapperClassName="max-w-4xl" />
                  <PieChartCard {...siquiII.topicsChart} wrapperClassName="max-w-5xl" />
                </div>
              </div>
            </div>
          </MemoriesSection>

          <SpeakerGrid speakers={siquiII.speakers} />
          <CommitteesSection {...siquiII.committees} />
        </div>
      </main>
    </div>
  )
}
