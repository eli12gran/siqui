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
                  name: "Dra. Karol Zapata",
                  summary: "Ingeniera biológica y doctora en Biotecnología con amplia experiencia en investigación, docencia y desarrollo de soluciones en nanotecnología y alimentos.",
                  description: "Ingeniera Biológica, Magíster en Ciencia y Tecnología de Alimentos y Doctora en Biotecnología por la Universidad Nacional de Colombia. Es docente e investigadora de la Universidad Nacional de Colombia, con más de 15 años de experiencia en investigación y 9 años de experiencia docente, enfocada en nanotecnología, biotecnología, química de alimentos, materiales avanzados y formulación de proyectos. Su producción científica incluye 38 publicaciones, 28 ponencias nacionales e internacionales, 2 capítulo de libro y 2 patentes. Ha recibido 20 reconocimientos académicos y científicos, entre los que destacan el Premio Nacional L'Oréal-UNESCO \"Para las Mujeres en la Ciencia\" y el reconocimiento como una de los 100 Nuevos Líderes de Colombia 2025, distinciones que resaltan su aporte al desarrollo de la ciencia, la innovación y la formación de nuevas generaciones.",
                  institution: "Universidad Nacional de Colombia",
                  image: "/speakers/siqui3/karol_zapata.webp?height=300&width=300",
                  link: "https://orcid.org/0000-0003-0850-4556",
                },
                {
                  name: "Dr. Javier Antonio Arcibar",
                  summary: "Ingeniero Químico y Doctor en Ciencias Aplicadas, y actualmente es investigador del CIMAV e Investigador Nacional Nivel 2. Sus líneas de investigación se enfocan en la revalorización de residuos, el desarrollo de adsorbentes y nuevos materiales catódicos para baterías. Es vicepresidente de la Asociación Mexicana de Adsorción.",
                  description: "Originario de San Luis Potosí, México, es Ingeniero Químico por la Universidad Autónoma de San Luis Potosí, Y doctor en Ciencias Aplicadas en Ciencias Ambientales por el IPICYT.  Realizó una estancia posdoctoral en la Universidad de la Ciudad de Nueva York en el grupo de la Dra. Del 2015 al 2025 fue investigador del Centro de Innovación aplicada en Tecnologías competitivas (CIATEC) en Guanajuato México donde dirigió más de 10 proyectos de investigación e innovación en las áreas de agua y energía. Desde el 2025 es investigador del Centro de Investigación en Materiales Avanzados (CIMAV) en el departamento de medio ambiente y energía. Es investigador nacional nivel 2, es vicepresidente de la Asociación Mexicana de Adsorción, miembro de la Asociación Mexicana del carbón y de la Asociación Internacional de Adsorción. Sus intereses están relacionados con la revalorización de residuos, el desarrollo y estudio de adsorbentes y la investigación de nuevos materiales catódicos para baterías. Lo más importante, es fanático del buen café.",
                  institution: "Centro de Investigación en Materiales Avanzados (CIMAV)",
                  image: "/speakers/siqui3/javier_arcibar.webp?height=300&width=300",
                  link: "https://orcid.org/0000-0002-6826-8666"
                },
                {
                  name: "Dra. Alexa González Posada",
                  summary: "Química y doctora en Ciencias Químicas de la Universidad de Antioquia, con trayectoria en investigación, docencia universitaria y gestión de proyectos técnico-científicos orientados a la industria.",
                  description: "Alexa González Posada es química y doctora en Ciencias Químicas de la Universidad de Antioquia. Cuenta con trayectoria en investigación, docencia universitaria y gestión de proyectos técnico-científicos orientados a la industria. Su trabajo se ha centrado en el estudio fisicoquímico de materiales y en el uso de técnicas analíticas aplicadas a la investigación, el desarrollo, la innovación y el control de calidad.\n\nActualmente se desempeña como representante de Ventas Consultivas y Proyectos en Cecoltec Services S.A.S., donde asesora a empresas de las industrias farmacéutica, cosmética, alimentaria, agroindustrial y de materiales. Su labor comprende la identificación de necesidades técnicas y la formulación de alternativas analíticas dirigidas al desarrollo de productos, la optimización de procesos y la toma de decisiones con fundamento científico.\n\nAsimismo, ha desarrollado una labor docente en el ámbito universitario, en la que articula su formación académica con el conocimiento adquirido en el entorno productivo. Desde este enfoque, promueve una visión aplicada de la química, destaca su estrecha relación con la industria y fomenta su uso para responder a desafíos concretos.",
                  institution: "Cecoltec Services S.A.S.",
                  image: "/speakers/siqui3/alexa_gonzalez.webp",
                  link: "https://orcid.org/0000-0001-9688-619X"
                },
                {
                  name: "Dr. Simón Yobanny Reyes López",
                  summary: "Químico de la Universidad de Guanajuato y Doctor en Ciencias de los Materiales de la Universidad Michoacana de San Nicolás de Hidalgo. Actualmente es Profesor Investigador e Investigador Nacional Nivel II. Su investigación se enfoca en nanomateriales y compósitos con aplicaciones biomédicas y ambientales, especialmente en procesos de detección y remoción de contaminantes.",
                  description: "Químico de la Universidad de Guanajuato y Doctor en Ciencias de los Materiales de la Universidad Michoacana de San Nicolás de Hidalgo. Desde 2012 se desempeña como Profesor Investigador en el Instituto de Ciencias Biomédicas de la Universidad Autónoma de Ciudad Juárez y cuenta con el reconocimiento de Investigador Nacional Nivel II. A lo largo de su trayectoria ha participado en proyectos de investigación, evaluación de propuestas científicas y formación de estudiantes de pregrado y posgrado.\n\nSu producción científica incluye más de 100 artículos indexados, libros y capítulos de libro, con más de 2500 citas independientes. Asimismo, ha dirigido numerosas tesis de licenciatura, maestría y doctorado, y ha participado ampliamente en congresos nacionales e internacionales.\n\nSus líneas de investigación se centran en el desarrollo de nanomateriales, nanopartículas, nanofibras y compósitos para aplicaciones biomédicas y ambientales. Entre sus principales áreas de interés se encuentran la detección y remoción de contaminantes, los materiales nanoestructurados para espectroscopia infrarroja y Raman, y el desarrollo de compósitos con propiedades adsorbentes y bactericidas.",
                  institution: "Instituto de Ciencias Biomédicas de la Universidad Autónoma de Ciudad Juárez",
                  image: "/speakers/siqui3/reyes.jpeg",
                  link: "https://orcid.org/0000-0002-9017-3233"
                },
                {
                  name: "Dr. Alejandro Vásquez-Espinal",
                  summary: "Químico de la Universidad de Antioquia y Doctor en Fisicoquímica Molecular por la Universidad Andrés Bello, Chile. Actualmente es académico e investigador de la Universidad Arturo Prat, Chile. Su investigación se enfoca en química teórica y computacional, el estudio del enlace químico y la estructura electrónica, con aplicaciones en el diseño de nanomateriales para almacenamiento de hidrógeno y catálisis.",
                  description: "Químico de la Universidad de Antioquia y doctor en Fisicoquímica Molecular de la Universidad Andrés Bello, Chile. Realizó un postdoctorado en el Departamento de Física Aplicada del Centro de Investigación y de Estudios Avanzados del IPN (Cinvestav), Unidad Mérida, México. Actualmente se desempeña como académico e investigador de la Facultad de Ciencias de la Salud de la Universidad Arturo Prat, Chile.\n\nSu investigación se centra en la química teórica y computacional, con énfasis en el estudio del enlace químico, la aromaticidad y la estructura electrónica de clústeres atómicos y compuestos con coordinación no convencional. Mediante métodos de química cuántica y simulación molecular, estudia la relación entre estructura, estabilidad y reactividad para orientar el diseño de nanomateriales con potenciales aplicaciones en el almacenamiento de hidrógeno y la catálisis.",
                  institution: "Universidad Arturo Prat, Iquique, Chile",
                  image: "/speakers/siqui3/Alejandro_V.jpeg",
                  link: "https://www.scopus.com/authid/detail.uri?authorId=56108486100"
                },
                {
                  name: "Prof. María Eugenia Acevedo Rojas",
                  summary: "Docente Química y Medio Ambiente, Lic. en Biología y Química, UdeA. Magister en Psicopedagogía, UdeA. Especialista en Evaluación Pedagógica, UCatolica de Manizales. 45 años de ejercicio docente: básica, media y pregrado",
                  description: "Docente Química y Medio Ambiente, Lic. en Biología y Química, UdeA. Magister en Psicopedagogía, UdeA. Especialista en Evaluación Pedagógica, UCatolica de Manizales. 45 años de ejercicio docente: básica, media y pregrado",
                  institution: "Institución Educativa Gómez Plata, Antiquia",
                  image: "/speakers/siqui3/maria_eugenia_acevedo.webp"
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
                      <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
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
