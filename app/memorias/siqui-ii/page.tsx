import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronRight, Download,ExternalLink } from "lucide-react"
import AttendeeTypeChartV2 from "@/components/ui/attendee-type-pie-chart-V2"
import TopicsChartV2 from "@/components/ui/topics-pie-chart-V2"

export default function SiquiIiPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 pt-4 pb-12 md:px-6 lg:pt-6 lg:pb-20">
        <div className="mb-4">
          <Link href="/memorias">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a memorias
            </Button>
          </Link>
        </div>

        <div className="space-y-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              SIQUI II
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-2xl">
              Memorias de la segunda edición - 2025
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/memories/MEMORIAS_II_SIQUI.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                Descarga las memorias del SIQUI 2025
                <Download className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="gap-2">
                Volver al evento principal
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="flex justify-center overflow-hidden rounded-xl">
            <Image
              src="/gallery/1.webp"
              alt="Portada del simposio"
              width={600}
              height={300}
              className="h-auto max-w-full object-cover"
            />
          </div>

        <section id="memories" className="w-full py-0 md:py-0 lg:py-0 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl py-12">
              {/* 2025 Edition Overview */}
              <div className="flex flex-col items-center justify-justified space-y-4 text-justified">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold">
                  21 y 22 de octubre de 2025
                </div>
              <h2 className="text-2xl font-bold">Universidad de Medellín, Colombia</h2>
              <p className="text-muted-foreground">
                En el marco del año internacional de la Ciencia y la Tecnología Cuánticas, proclamado por la Naciones unidas para conmemorar el centenario del desarrollo de la mecánica cuántica, se realizó el II Simposio de Química - UdeMedellín, una iniciativa que se sumó a la celebración internacional promovida por la UNESCO durante el año 2025.
              </p>
              <p className="text-muted-foreground">
                Bajo el eje temático de lo cuántico, el simposio propuso un espacio de encuentro para explorar las conexiones entre la química, la ciencia y la tecnología cuánticas, así como sus implicaciones en diferentes ámbitos de la investigación, la educación, la innovación y la vida cotidiana. El evento buscó promover el intercambio de conocimientos y la colaboración entre estudiantes, docentes, investigadores y personas interesadas en las ciencias químicas y áreas afines.
              </p>
              <p className="text-muted-foreground">  
                La jornada fue un espacio accesible, participativo e interdisciplinario, en el que el conocimiento científico pudo compartirse, cuestionarse y conectarse con diferentes contextos. Desde esta perspectiva, el simposio resaltó el papel de la química como una disciplina capaz de establecer puentes entre los fundamentos del mundo cuántico y sus aplicaciones en la sociedad.
              </p>
              <h3 className="text-1xl font-bold">
                Líneas temáticas
              </h3>
              <p className="text-muted-foreground">
                El programa del II Simposio de Química – UdeMedellín abordó diversas áreas de la química y las ciencias relacionadas, entre ellas:
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                    {[
                      {
                        name: "⚛️​ Química inorgánica, orgánica, analítica, fisicoquímica y computacional.",
                      },
                      {
                        name: "🔬​ Química de materiales avanzados, nanomateriales y catálisis.",
                      },
                      {
                        name: "🌱​ Energía renovable, química verde, sostenibilidad y economía circular.",
                      },
                      {
                        name: "💡 Innovación, educación e impacto social de la química.",
                      },
                      {
                        name: "🏭 Aplicaciones industriales, políticas científicas y regulación en tecnologías químicas.",
                      },
                    ].map((member, index) => (
                      <div key={index} className="flex items-justified gap-4 rounded-lg border p-4 transition-shadow duration-200 hover:shadow-lg transform hover:scale-[1.01]">
                        <div>
                          <h4 className="text-l">{member.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>

            {/* Statistics Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">Estadísticos del evento 2025</h3>
                  {/* Attendance Stats */}
                <div className="grid gap-6 md:grid-cols-3 mb-12">
                  <div className="rounded-lg border p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">187</div>
                    <div className="text-sm text-muted-foreground">Participantes</div>
                  </div>
                  <div className="rounded-lg border p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">11</div>
                    <div className="text-sm text-muted-foreground">Regiones representadas, nacionales e internacionales</div>
                  </div>
                  <div className="rounded-lg border p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">86</div>
                    <div className="text-sm text-muted-foreground">Presentaciones y Pósters</div>
                  </div>
                </div>
            
                {/* attendee statistics */}
                <div className="grid gap-8 md:grid-cols-2 mb-12">
                <AttendeeTypeChartV2 />
                <TopicsChartV2 />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

              {/* Keynote Speakers */}
        <section id="speakers" className="w-full py-0 md:py-0 lg:py-0 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">Conferencistas Invitados</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Albeiro Restrepo",
                  role: "Profesor titular, Instituto de Química. Codirector del grupo de Química-Física Teórica, clasificado A1 por Minciencias. Investigador senior.",
                  institution: "Universidad de Antioquia",
                  image: "/speakers/albeiro.webp?height=300&width=300",
                  link: "https://scholar.google.es/citations?user=nfjNsG4AAAAJ&hl=es",
                },
                {
                  name: "Dr. César Pulgarín",
                  role: "Profesor Emérito EPFL (Suiza). Miembro honorario de la Academia Colombiana de Ciencias Exactas Físicas y Naturales",
                  institution: "EPFL (Suiza)",
                  image: "/speakers/Cesar_Pulgarin.webp?height=300&width=300",
                  link: "https://people.epfl.ch/cesar.pulgarin?lang=en",
                },
                {
                  name: "Dr. Sixto Malato",
                  role: "Profesor e Investigador OPI (España)",
                  institution: "Centro de Investigaciones Energéticas, Medioambientales y Tecnológicas (CIEMAT) (Ministerio de Economía y Competitividad de España)",
                  image: "/speakers/Sixto_Malato.webp?height=300&width=300",
                  link: "https://www.psa.es/es/unidades/tsa/personal/smalato.php",
                },
                {
                  name: "Dr. Johnatan Diosa",
                  formacion: "Doctor en Ciencias Químicas, Universidad de Antioquia",
                  role: "Especialista I+D Síntesis y mezclas",
                  institution: "Andercol S.A.S.",
                  image: "/speakers/johnatan_diosa.webp?height=300&width=300",
                  link: "https://www.linkedin.com/in/johnatan-diosa-arango-17185b37/",
                },
                {
                  name: "Dr. Claudia Correa",
                  formacion: "Magister en Educación y Doctora en Humanidades y Artes con mención en Ciencias de la Educación",
                  role: "Docente",
                  institution: "Institución Educativa Pueblo Nuevo, Amalfi, Antioquia",
                  image: "/speakers/claudia_correa.jpeg",
                },
                {
                  name: "Isabel Oller Alberola",
                  role: "Editora de las revistas: Water Science and Technology, Journal of Environmental Chemical Engineering y Water",
                  institution: "Plataforma Solar de Almería (CIEMAT), España. Unidad de Tratamientos Solares del Agua",
                  image: "/speakers/isabel_oller.jpeg",
                  link: "https://www.psa.es/es/unidades/tsa/personal/ioller.php",
                }
              ].map((speaker, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
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

                {/* Committees */}
                <section id="committees" className="w-full py-12 md:py-24 lg:py-32">
                  <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-3 text-center">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comités de SIQUI 2025</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Conozca a los reconocidos expertos que revisan las presentaciones y organizan el evento.
                        </p>
                      </div>
                    </div>
                    <div className="mx-auto max-w-5xl py-12">
                      <div className="space-y-12">
                        {/* Scientific Committee */}
                        <div className="space-y-12">
          {/* <h3 className="text-center text-2xl font-bold">Comité Organizador</h3>  */}
          <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
                Comité Organizador
              </div>
            </div>
          </div>
        </div>
          {/* Universidad de Medellín */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <h4 className="text-center text-lg font-bold">Universidad de Medellín</h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  name: "María Angélica Forgionny",
                  image: "/speakers/angelica.webp?height=150&width=150",
                },
                {
                  name: "Carlos Jiménez",
                  image: "/speakers/carlos.webp?height=150&width=150",
                },
                {
                  name: "Nancy Acelas",
                  image: "/speakers/nancy_arelas.webp?height=150&width=150",
                },
                {
                  name: "Maria Isabel Mejía",
                  image: "/speakers/maria_isabel.webp?height=150&width=150",
                },
              ].map((member, index) => (
                <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
          {/* Universidad de Antioquia */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <h4 className="text-center text-lg font-bold">Universidad de Antioquia</h4>
            <div className="grid gap-6 sm:grid-cols-1 place-items-center">
              {[
                {
                  name: "Ricardo Torres",
                  image: "/speakers/Ricardo_Torres.webp?height=150&width=150",
                },
              ].map((member, index) => (
                <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
          {/* Universidad Nacional de Colombia */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h4 className="text-center text-lg font-bold">Universidad Nacional de Colombia</h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  name: "Farid Cortés",
                  image: "/speakers/Farid_Cortes.webp?height=150&width=150",
                },
                {
                  name: "Camilo Franco",
                  image: "/speakers/Camilo_Franco.webp?height=150&width=150",
                },
              ].map((member, index) => (
                <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      {/*Program Committee*/}
        <div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
                  Comité Logístico
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {[
        {
          name: "Valentina Miranda",
          role: "Estudiante de Computación Científica",
          affiliation: "Universidad de Medellín",
          image: "/speakers/vale.webp?height=150&width=150",
        },
        {
          name: "Emanuel Cabrera",
          role: "Estudiante de Computación Científica",
          affiliation: "Universidad de Medellín",
          image: "/speakers/emanuel.webp?height=150&width=150",
        },
        {
          name: "Valentina Ospina",
          role: "Ingeniera ambiental. Asistente de Investigación",
          affiliation: "Universidad de Medellín",
          image: "/speakers/valen_ospina.jpeg?height=150&width=150",
        },
        {
          name: "Elizabeth Granda",
          role: "Estudiante de Computación Científica",
          affiliation: "Universidad de Medellín",
          image: "/speakers/eli.webp?height=150&width=150",
        },
          ].map((member, index) => (
            <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <p className="text-xs">{member.affiliation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        
        {/* Organizing Committee */}
        <div>
          {/* <h3 className="mb-6 text-center text-2xl font-bold">Comité Científico</h3> */}
          <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
              Comité Científico
              </div>
            </div>
        </div>
      </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
            {[
              {
                name: "Francisco Nuñez",
                affiliation: "Universidad Nacional de Colombia",
              },
              {
                name: "Jazmín Porras",
                affiliation: "Corporación Universitaria Remington",
              },
              {
                name: "Carolina Ramírez",
                affiliation: "Instituto Tecnológico Metropolitano",
              },
              {
                name: "Efraím Serna",
                affiliation: "Universidad de Antioquia",
              },
              {
                name: "Gina Hincapié Triviño",
                affiliation: "Universidad Nacional de Colombia (Bogotá)",
              },
              {
                name: "Natalia Súarez",
                affiliation: "Universidad de Antioquia",
              },
              {
                name: "Viviana Ospina",
                affiliation: "Universidad Utrecht, Países Bajos",
              },
              {
                name: "Sol Milena Mejía Chica",
                affiliation: "Universidad Javeriana",
              },
              {
                name: "Alejandro Vasquez",
                affiliation: "Universidad Arturo Prat, Chile",
              },
              {
                name: "Camilo Franco",
                affiliation: "Universidad Nacional de Colombia (Medellín)",
              },
              {
                name: "Maria Angélica Prada",
                affiliation: "Universidad de Antioquia",
              },
              {
                name: "Jorge Gallego",
                affiliation: "Universidad de Medellín",
              },
              {
                name: "Marcela Paredes",
                affiliation: "Fundación Universitaria Navarra (Huila)",
              },
              {
                name: "David Morales",
                affiliation: "Universidad Nacional Autónoma de México, Ciudad de México",
              },
              {
                name: "Ariel Cadena",
                affiliation: "Universidad Nacional de Colombia (Bogotá)",
              },
              {
                name: "Leidy Hoyos",
                affiliation: "Tecnológico de Antioquia",
              },
              {
                name: "Lina Paola Higuita",
                affiliation: "PPG Colombia",
              },
              {
                name: "Camilo Castro",
                affiliation: "Universidad de Antioquia",
              },
              {
                name: "Sergio Valencia",
                affiliation: "Tecnológico de Antioquia",
              },
            ].map((member, index) => (
              <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
                <div>
                  <h4 className="font-bold">{member.name}</h4>
                  <p className="text-xs">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>
      </main>
    </div>
  )
}