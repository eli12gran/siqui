import type { Metadata } from "next"
import { EditionHeader } from "@/components/memorias/edition-header"
import { MemoriesSection } from "@/components/memorias/memories-section"
import { EditionOverview } from "@/components/memorias/edition-overview"
import { EditionTimeline } from "@/components/memorias/edition-timeline"
import { MediaGallery } from "@/components/memorias/media-gallery"
import { StatCards } from "@/components/memorias/stat-cards"
import { PieChartCard } from "@/components/memorias/pie-chart-card"
import { GeographicDistribution } from "@/components/memorias/geographic-distribution"
import { siquiI } from "@/lib/data/editions/siqui-i"

export const metadata: Metadata = {
  title: "Memorias SIQUI I (2024)",
  description:
    "Memorias de la primera edición del Simposio de Química UdeMedellín, realizada el 1 de noviembre de 2024: fotos, estadísticas y momentos destacados del día.",
  openGraph: {
    url: "/memorias/siqui-i",
    siteName: "SIQUI UdeMedellín",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/memories/grupal.webp", width: 1502, height: 879, alt: "SIQUI I 2024" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@siquiudem",
    images: ["/memories/grupal.webp"],
  },
}

export default function SiquiIPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 pt-4 pb-12 md:px-6 lg:pt-6 lg:pb-20">
        <div className="space-y-10">
          <EditionHeader label={siquiI.label} title={siquiI.title} />

          <MemoriesSection>
            <EditionOverview {...siquiI.overview} />

            <div className="grid gap-8 lg:grid-cols-2">
              <EditionTimeline items={siquiI.timeline} />
              <MediaGallery items={siquiI.gallery} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">{siquiI.statsHeading}</h3>
              <div className="space-y-8">
                <StatCards stats={siquiI.stats} />
                <div className="grid gap-8 md:grid-cols-2">
                  <PieChartCard {...siquiI.attendeeChart} wrapperClassName="max-w-4xl" />
                  <PieChartCard {...siquiI.topicsChart} wrapperClassName="max-w-5xl" />
                </div>
                <GeographicDistribution {...siquiI.geographic} />
              </div>
            </div>
          </MemoriesSection>
        </div>
      </main>
    </div>
  )
}
