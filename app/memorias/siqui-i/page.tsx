import { EditionHeader } from "@/components/memorias/edition-header"
import { MemoriesSection } from "@/components/memorias/memories-section"
import { EditionOverview } from "@/components/memorias/edition-overview"
import { EditionTimeline } from "@/components/memorias/edition-timeline"
import { MediaGallery } from "@/components/memorias/media-gallery"
import { StatCards } from "@/components/memorias/stat-cards"
import { PieChartCard } from "@/components/memorias/pie-chart-card"
import { GeographicDistribution } from "@/components/memorias/geographic-distribution"
import { siquiI } from "@/lib/data/editions/siqui-i"

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
