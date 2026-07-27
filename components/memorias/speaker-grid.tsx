import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import type { Speaker } from "@/lib/data/editions/types"

export function SpeakerGrid({ speakers }: { speakers: Speaker[] }) {
  return (
    <section id="speakers" className="w-full py-0 md:py-0 lg:py-0 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">Conferencistas Invitados</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold">{speaker.name}</h3>
                  {speaker.formacion && (
                    <p className="text-sm text-muted-foreground">{speaker.formacion}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{speaker.role}</p>
                  <p className="text-sm font-medium">{speaker.institution}</p>
                  {speaker.link && (
                    <a
                      href={speaker.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                    >
                      Ver perfil
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
