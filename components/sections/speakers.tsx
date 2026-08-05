"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function Speakers() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
        <section id="speakers" className="w-full py-12 md:py-24 lg:py-10 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Conferencistas Invitados</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-2">
              {[
                {
                  name: "Dr. Jahir Orozco",
                  summary: "Profesor asociado de la Universidad de Antioquia y líder del Grupo Tandem Max Planck en Nanobioingeniería, con una trayectoria internacional en química analítica y nanobiotecnología.",
                  description: "Profesor Asociado y líder del Grupo Tandem Max Planck en Nanobioingeniería de la Universidad de Antioquia. Es químico de esta institución y doctor en Química por la Universidad de Barcelona (España). Ha realizado estancias posdoctorales en Francia, Estados Unidos y España, y ha dirigido a más de 20 estudiantes de posgrado. Desde 2022 figura entre el 2% de los científicos más influyentes del mundo en Química Analítica y es miembro correspondiente de la Academia Colombiana de Ciencias Exactas, Físicas y Naturales. Sus líneas de investigación se centran en el desarrollo de (bio)sensores, nanomateriales, nano(micro)transportadores, nano(micro)motores, electroquímica y herramientas analíticas para aplicaciones ambientales y biomédicas.",
                  institution: "Universidad de Antioquia",
                  image: "/speakers/siqui3/jahir.webp",
                  link: "https://www.udea.edu.co/wps/portal/udea/web/inicio/investigacion/grupos-investigacion/max-planck/nanobioengineering/Contenido/asMenuLateral/members",
                },
                {
                  name: "Dr. Karol Zapata",
                  summary: "Ingeniera biológica y doctora en Biotecnología con amplia experiencia en investigación, docencia y desarrollo de soluciones en nanotecnología y alimentos.",
                  description: "Ingeniera Biológica, Magíster en Ciencia y Tecnología de Alimentos y Doctora en Biotecnología por la Universidad Nacional de Colombia. Es docente e investigadora de la Universidad Nacional de Colombia, con más de 15 años de experiencia en investigación y 9 años de experiencia docente, enfocada en nanotecnología, biotecnología, química de alimentos, materiales avanzados y formulación de proyectos. Su producción científica incluye 38 publicaciones, 28 ponencias nacionales e internacionales, 2 capítulo de libro y 2 patentes. Ha recibido 20 reconocimientos académicos y científicos, entre los que destacan el Premio Nacional L'Oréal-UNESCO \"Para las Mujeres en la Ciencia\" y el reconocimiento como una de los 100 Nuevos Líderes de Colombia 2025, distinciones que resaltan su aporte al desarrollo de la ciencia, la innovación y la formación de nuevas generaciones.",
                  institution: "Universidad Nacional de Colombia",
                  image: "/speakers/siqui3/karol_zapata.webp?height=300&width=300",
                  link: "https://orcid.org/0000-0003-0850-4556",
                }
              ].map((speaker, index) => {
                const isExpanded = expandedIndex === index

                return (
                <Card key={index} className="overflow-hidden">
                  <div className="overflow-hidden p-4 pb-0">
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mx-auto block w-full max-w-[270px] cursor-pointer"
                      aria-expanded={isExpanded}
                      aria-label={isExpanded ? `Ocultar información de ${speaker.name}` : `Mostrar más información sobre ${speaker.name}`}
                    >
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          width={220}
                          height={220}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                    </button>
                  </div>
                  <CardContent className="p-4 pt-3">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold sm:text-2xl">{speaker.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {isExpanded ? speaker.description : speaker.summary}
                      </p>
                      <p className="text-sm font-medium">{speaker.institution}</p>
                      <div className="flex flex-col items-start gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setExpandedIndex(isExpanded ? null : index)}
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          {isExpanded ? "Mostrar menos" : "Mostrar más"}
                        </button>
                        {speaker.link && (
                          <a
                            href={speaker.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            Ver perfil
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                )
              })}
            </div>
          </div>
        </section>
  )
}
