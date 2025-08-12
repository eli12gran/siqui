import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AttendeeTypeChart from "@/components/ui/attendee-type-pie-chart";
import TopicsChart from "@/components/ui/topics-pie-chart";
import { Calendar, Clock, MapPin, Users, Mail, ExternalLink, ChevronRight, Download } from "lucide-react"
import { FaXTwitter, FaInstagram } from "react-icons/fa6"


export default function ScientificEventPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">SIQUI</span>
            <span className="text-muted-foreground">2025</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Sobre SIQUI
            </Link>
            <Link href="#inscriptions" className="text-sm font-medium hover:text-primary">
              Inscripciones
            </Link>
            <Link href="#speakers" className="text-sm font-medium hover:text-primary">
              Ponentes
            </Link>
            <Link href="#committees" className="text-sm font-medium hover:text-primary">
              Comités
            </Link>
            <Link href="#memories" className="text-sm font-medium hover:text-primary">
              Memorias
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:text-primary">
              Cronograma
            </Link>
            <Link href="#venue" className="text-sm font-medium hover:text-primary">
              Lugar
            </Link>
            <Link href="#sponsors" className="text-sm font-medium hover:text-primary">
              Apoya
            </Link>
          </nav>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeMbw3r26MFEzr-IC7XXXYfn4o_XtrKOHHiMYL_KRrdTfuK3g/viewform" 
                  passHref legacyBehavior
                  target="_blank"
                  rel="noopener noreferrer">
            <Button>Registrate acá</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-2 md:py-2 lg:py-4 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-5">
              
              {/* Image on Top */}
              <Image
                src="/1.webp"
                width={800}
                height={800}
                alt="Conference Banner"
                className="w-full max-w-4xl rounded-xl object-contain"
              />

              {/* Buttons */}
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeMbw3r26MFEzr-IC7XXXYfn4o_XtrKOHHiMYL_KRrdTfuK3g/viewform"
                  passHref
                  legacyBehavior
                >
                  <Button size="lg" className="inline-flex text-lg items-center gap-2">
                    Regístrate acá
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href="https://docs.google.com/document/d/1FHvBjdXH4eJ828lF3preHnQWOsEZhbna/edit?usp=sharing&ouid=115148655397799654178&rtpof=true&sd=true"
                  passHref
                  legacyBehavior
                >
                <Button size="lg" variant="outline" className="inline-flex text-lg items-center gap-2">
                  Descarga formato resumen
                  <ExternalLink className="h-4 w-4" />
                </Button>
                </Link>
              </div>

              {/* Details Row */}
              <div className="flex flex-col gap-2 text-xl text-muted-foreground md:flex-row md:gap-6 justify-center items-center space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Octubre 21 y 22, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Universidad de Medellín, Medellín, Antioquia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>evento gratuito</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-15">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6 max-w-5xl mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre el evento</h2>
                <p className="text-muted-foreground md:text-xl leading-relaxed">
                  En el marco del Año Internacional de la Ciencia y la Tecnología Cuánticas, proclamado por las Naciones Unidas para conmemorar 
                  el centenario del desarrollo de la mecánica cuántica en 2025, el II Simposio de Química – UdeMedellín se une a esta celebración global liderada por la UNESCO.
                  Esta iniciativa internacional busca promover la colaboración científica, fortalecer la educación y abordar los grandes desafíos del 
                  siglo XXI a través de la ciencia y la tecnología. En sintonía con este llamado, nuestro simposio adopta el tema "Lo cuántico" como eje inspirador, 
                  resaltando su impacto y conexiones desde la química. Queremos hacer de esta jornada un espacio accesible, participativo y transformador, 
                  donde el conocimiento se comparta, se cuestione y se conecte con las personas. Invitamos a estudiantes, docentes, investigadores y entusiastas de la ciencia 
                  a ser parte de un evento que celebra la curiosidad, la interdisciplinariedad y el potencial de la química como puente entre el mundo cuántico y la vida cotidiana. 
                  Todas las áreas de la química y ciencias afines son bienvenidas.
                </p>
              </div>
            </div>
            
            <div className="mx-auto max-w-5xl py-7">
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col justify-center space-y-4 max-w-3xl">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Líneas temáticas</h2>
                  </div>
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
                          <h4 className="text-xl font-bold">{member.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inscriptions Section */}
        <section id="inscriptions" className="w-full py-7 bg-muted/50">
        <div className="container px-4 md:px-6 space-y-12">
          {/* Heading and Description */}
          <div className="text-center space-y-6">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Inscripciones
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Participa en el Simposio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Inscríbete como asistente o presenta tu proyecto. Aquí encontrarás el formulario de inscripción, las plantillas necesarias y fechas importantes.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ten en cuenta que, para participar en modalidad de póster o charla, es necesario que envíes el resumen de tu trabajo usando la plantilla.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeMbw3r26MFEzr-IC7XXXYfn4o_XtrKOHHiMYL_KRrdTfuK3g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg mt-4"
            >
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
                Formulario de inscripción
              </button>
            </a>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: "Plantilla resumen del proyecto",
                link: "/templates/Formato_Resumen_SIQUIUDEM.docx",
              },
              {
                label: "Plantilla para póster",
                link: "/templates/Plantilla_poster_SIQUI.pptx",
              },
              {
                label: "Plantilla presentación de diapositivas",
                link: "/templates/Plantilla_SIQUI.pptx",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 border rounded-lg hover:shadow transition"
              >
                <span className="font-medium text-lg text-left">{item.label}</span>
                <Download className="w-5 h-5 text-primary" />

              </a>
            ))}
          </div>

          {/* Important Dates */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-center">Fechas importantes</h3>
            <ul className="space-y-4">
              <li className="flex text-lg items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <span>
                  <strong>Fecha límite para envío de resúmenes:</strong> 01 de septiembre de 2025
                </span>
              </li>
              <li className="flex text-lg items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <span>
                  <strong>Cierre de inscripciones generales:</strong> 30 de septiembre de 2025
                </span>
              </li>
            </ul>
          </div>
        </div>
        </section>

        {/* Keynote Speakers */}
        <section id="speakers" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conferencistas Invitados</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Albeiro Restrepo",
                  role: "Profesor titular, Instituto de Química. Codirector del grupo de Química-Física Teórica, clasificado A1 por Minciencias. Investigador senior.",
                  institution: "Universidad de Antioquia",
                  image: "/albeiro.webp?height=300&width=300",
                  link: "https://scholar.google.es/citations?user=nfjNsG4AAAAJ&hl=es",
                },
                {
                  name: "Dr. César Pulgarín",
                  role: "Profesor Emérito EPFL (Suiza). Miembro honorario de la Academia Colombiana de Ciencias Exactas Físicas y Naturales",
                  institution: "EPFL (Suiza)",
                  image: "/Cesar_Pulgarin.webp?height=300&width=300",
                  link: "https://people.epfl.ch/cesar.pulgarin?lang=en",
                },
                {
                  name: "Dr. Sixto Malato",
                  role: "Profesor e Investigador OPI (España)",
                  institution: "Centro de Investigaciones Energéticas, Medioambientales y Tecnológicas (CIEMAT) (Ministerio de Economía y Competitividad de España)",
                  image: "/Sixto_Malato.webp?height=300&width=300",
                  link: "https://www.psa.es/es/unidades/tsa/personal/smalato.php",
                },
                {
                  name: "Dr. Johnatan Diosa",
                  formacion: "Doctor en Ciencias Químicas, Universidad de Antioquia",
                  role: "Especialista I+D Síntesis y mezclas",
                  institution: "Andercol S.A.S.",
                  image: "/johnatan_diosa.webp?height=300&width=300",
                  link: "https://www.linkedin.com/in/johnatan-diosa-arango-17185b37/",
                },
                {
                  name: "Dr. Claudia Correa",
                  formacion: "Magister en Educación y Doctora en Humanidades y Artes con mención en Ciencias de la Educación",
                  role: "Docente",
                  institution: "Institución Educativa Pueblo Nuevo, Amalfi, Antioquia",
                  image: "/claudia_correa.jpeg",
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
          image: "/angelica.webp?height=150&width=150",
        },
        {
          name: "Carlos Jiménez",
          image: "/carlos.webp?height=150&width=150",
        },
        {
          name: "Nancy Acelas",
          image: "/nancy_arelas.webp?height=150&width=150",
        },
        {
          name: "Maria Isabel Mejía",
          image: "/maria_isabel.webp?height=150&width=150",
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
          image: "/Ricardo_Torres.webp?height=150&width=150",
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
          image: "/Farid_Cortes.webp?height=150&width=150",
        },
        {
          name: "Camilo Franco",
          image: "/Camilo_Franco.webp?height=150&width=150",
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
                  {/* <h3 className="mb-6 text-center text-2xl font-bold">Comité Logístico</h3> */}
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
                        image: "/vale.webp?height=150&width=150",
                      },
                      {
                        name: "Emanuel Cabrera",
                        role: "Estudiante de Computación Científica",
                        affiliation: "Universidad de Medellín",
                        image: "/emanuel.webp?height=150&width=150",
                      },
                      {
                        name: "Valentina Ospina",
                        role: "Ingeniera ambiental. Asistente de Investigación",
                        affiliation: "Universidad de Medellín",
                        image: "/valen_ospina.jpeg?height=150&width=150",
                      },
                      {
                        name: "Elizabeth Granda",
                        role: "Estudiante de Computación Científica",
                        affiliation: "Universidad de Medellín",
                        image: "/eli.webp?height=150&width=150",
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

        {/* Memories */}
        <section id="memories" className="w-full py-12 md:py-24 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  SIQUI I (evento pasado)
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Memorias</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Highlights y estadísticos del evento en 2024.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              {/* 2024 Edition Overview */}
              <div className="flex flex-col items-center justify-justified space-y-4 text-justified">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold">
                    1 de noviembre de 2024
                  </div>
                  <h3 className="text-2xl font-bold">Universidad de Medellín, Colombia</h3>
                  <p className="text-muted-foreground">
                    Con motivo de la celebración del Día del Químico en Colombia, el grupo de investigación Materiales con Impacto (Mat&mpac) organizó el <strong> Simposio de Química – UdeMedellín</strong>, un espacio académico dedicado a la socialización de avances en investigación en química y áreas afines.
                  </p>

                  <p className="text-muted-foreground">
                    El evento, completamente gratuito y presencial, reunió a profesores, estudiantes e investigadores de niveles académicos desde la Educación Media, pasando por Pregrado, Maestría y hasta Doctorado.Se contó con 180 participantes de regiones como Bogotá, Risaralda, Valle del Cauca, Santander, Cauca, Boyacá, Caldas, San Andrés Islas y Antioquia, además de visitantes de México (Hidalgo, Querétaro y Ciudad de México).
                  </p>

                  <p className="text-muted-foreground">
                    Se contó con espacios para acercar a académicos con dinámica de investigación en empresas e industria, además de reconocer el valor de la educación media como base para generar investigación universitaria de calidad.
                  </p>

                  <p className="text-muted-foreground">
                    A continuación, te compartimos los momentos más destacados del día:
                  </p>
                
                </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative space-y-10 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary">

                  {/* Registro y bienvenida */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white z-10 transition-transform hover:scale-110 hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]"></div>

                    <h4 className="text-xl font-semibold">🕘 Registro y bienvenida</h4>
                    <p className="text-muted-foreground mt-1">
                      Desde primeras horas de la mañana, los asistentes se dieron cita en el campus para realizar el registro. Posteriormente, se dio inicio al evento con una cálida ceremonia de bienvenida, donde se presentó la agenda del día.
                    </p>
                  </div>

                  {/* Conferencias y charlas */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white z-10 transition-transform hover:scale-110 hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]"></div>

                    <h4 className="text-xl font-semibold">🎤 Conferencias y charlas destacadas</h4>
                    <p className="text-muted-foreground mt-1">
                      Durante la mañana y parte de la tarde se llevaron a cabo conferencias de invitados especiales, así como presentaciones orales de participantes destacados por los proyectos que enviaron, lo que enriqueció aún más la jornada académica.
                    </p>
                  </div>

                  {/* Sesión de pósters */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white z-10 transition-transform hover:scale-110 hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]"></div>

                    <h4 className="text-xl font-semibold">🧾 Sesión de pósters</h4>
                    <p className="text-muted-foreground mt-1">
                      En la tarde se realizó la sesión de pósters, un espacio de intercambio académico donde se presentaron diversos proyectos de investigación, generando conversaciones enriquecedoras entre asistentes y ponentes.
                    </p>
                  </div>

                  {/* Premiación */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white z-10 transition-transform hover:scale-110 hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]"></div>

                    <h4 className="text-xl font-semibold">🏆 Premiación</h4>
                    <p className="text-muted-foreground mt-1">
                      Al finalizar el día se otorgaron reconocimientos. Mención a los tres primeros puestos en la sesión de Pósters. Además, el premio "Mi póster favorito", elegido por votación de los asistentes, fue entregado a un proyecto presentado por estudiantes de educación media de la subregión norte del Departamento de Antioquia, destacando el talento emergente en la ciencia.
                    </p>
                  </div>

                  {/* Clausura */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white z-10 transition-transform hover:scale-110 hover:shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]"></div>

                    <h4 className="text-xl font-semibold">🎭 Clausura y muestra cultural</h4>
                    <p className="text-muted-foreground mt-1">
                      La ceremonia de clausura incluyó agradecimientos a todos los asistentes, así como una muestra cultural que cerró el evento con un toque artístico y festivo.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/*image 1 */}
                  <Image
                    src="/memories/premiacion1.webp"
                    width={200}
                    height={300}
                    alt="charlas"
                    className="rounded-lg object-cover"
                  />

                  <Image
                    src="/memories/colegio_poster.webp"
                    width={400}
                    height={300}
                    alt="charlas"
                    className="rounded-lg object-cover"
                  />

                  <video
                    src="/memories/clausura.webm"
                    width={200}
                    height={200}
                    autoPlay
                    muted
                    loop
                    className="rounded-lg object-cover -mt-10"
                  />

                  <video
                    src="/memories/grito_simposio.webm"
                    width={300}
                    height={600}
                    autoPlay
                    muted
                    loop
                    className="rounded-lg object-cover"
                  />

                  <video
                    src="/memories/inauguracion.webm"
                    width={160}
                    height={200}
                    autoPlay
                    muted
                    loop
                    className="rounded-lg object-cover"
                  />

                  <Image
                    src="/memories/inauguracion2.webp"
                    width={300}
                    height={300}
                    alt="asistentes"
                    className="rounded-lg object-cover"
                  />

                  <Image
                    src="/memories/grupal.webp"
                    width={300}
                    height={300}
                    alt="asistentes"
                    className="rounded-lg object-cover -mt-10"
                  />

                </div>

              </div>
            </div>

              {/* Statistics Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-8">Estadísticos del evento 2024</h3>

                {/* Attendance Stats */}
                <div className="grid gap-6 md:grid-cols-3 mb-12">
                  <div className="rounded-lg border p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">180+</div>
                    <div className="text-sm text-muted-foreground">Participantes</div>
                  </div>
                  <div className="rounded-lg border p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Regiones representadas, nacionales e internacionales</div>
                  </div>
                  <div className="rounded-lg border p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">110</div>
                    <div className="text-sm text-muted-foreground">Presentaciones y Pósters</div>
                  </div>
                </div>

                {/* attendee statistics */}
                <div className="grid gap-8 md:grid-cols-2 mb-12">
                  <AttendeeTypeChart />
                  <TopicsChart />
                </div>
                
                {/* Geographic Distribution */}
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-center border rounded-lg p-6">
                  {/* Map Image */}
                  <div className="w-full lg:w-2/3">
                    <Image
                      src="/Colombia_America.webp"
                      alt="Distribución geográfica"
                      width={800}
                      height={400}
                      className="rounded-lg w-full h-auto object-contain"
                    />
                  </div>

                  {/* Region Legend */}
                  <div className="w-full lg:w-1/3 space-y-2">
                    <h4 className="font-bold text-lg mb-2">Participación por región</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f19756' }}></span>
                        <span>Antioquia: Medellín, Gómez Plata, Caldas  – 40.7%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff7f27' }}></span>
                        <span>México: Hidalgo, Querétaro y Ciudad de México – 14.8%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2998fb' }}></span>
                        <span>Bogotá – 14.8%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#60e1fb' }}></span>
                        <span>Cauca: Popayán, Totoró – 7.4%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f7b2fb' }}></span>
                        <span>Valle del Cauca: Cali – 7.4%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#a08afb' }}></span>
                        <span>Risaralda: Pereira – 3.7%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#effb61' }}></span>
                        <span>Boyacá: Tunja – 3.7%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#a1fb8e' }}></span>
                        <span>Santander: Bucaramanga – 3.7%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fb7635' }}></span>
                        <span>San Andrés – 3.7%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Cronograma
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Programación del Evento</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un día completo de charlas inspiradoras, invitados especiales
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-3xl mb-4">Martes 21 de octubre</h3>
              <div className="space-y-6">
                {[
                  {
                    time: "15:00 - 16:00",
                    title: "Registro e inscripciones",
                    location: "pendiente",
                  },
                  {
                    time: "16:00 - 17:00",
                    title: "Conferencia plenaria 1",
                    speaker: "Dr. Sixto Malato",
                    location: "pendiente",
                  },
                ].map((session, index) => (
                  <div key={index} className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center transition-shadow duration-200 hover:shadow-lg transform hover:scale-[1.01]">
                    <div className="flex w-full flex-col gap-1 md:w-1/5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-base font-medium">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-base text-muted-foreground">{session.location}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{session.title}</h3>
                      {session.speaker && <p className="text-base text-muted-foreground">{session.speaker}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-1">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-3xl mb-4">Miércoles 22 de octubre</h3>
              <div className="space-y-6">
                {[
                  {
                    time: "07:30 - 08:00",
                    title: "Registro e inscripciones",
                    location: "pendiente",
                  },
                  {
                    time: "08:00 - 08:15",
                    title: "Apertura y bienvenida",
                    location: "pendiente",
                  },
                  {
                    time: "8:15 - 9:15",
                    title: "Conferencia plenaria 2: Mecánica cuántica y evolución molecular",
                    speaker: "Dr. Albeiro Restrepo",
                    location: "pendiente",
                  },
                  {
                    time: "9:15 - 9:45",
                    title: "Charlas 1-2",
                    speaker: "Pendiente",
                    location: "pendiente",
                  },
                  {
                    time: "9:45 - 10:15",
                    title: "Conferencista invitado: Química en la Industria",
                    speaker: "Jonathan Diosa",
                    location: "pendiente",
                  },
                  {
                    time: "10:15 - 10:30",
                    title: "Coffee Break",
                  },
                  {
                    time: "10:30 - 11:30",
                    title: "Charlas 3-6",
                    speaker: "Pendiente",
                    location: "pendiente",
                  },
                  {
                    time: "11:30 - 12:00",
                    title: "Conferencista invitado: Química desde la educación media",
                    speaker: "Claudia Correa",
                    location: "pendiente"
                  },
                  {
                    time: "10:15 - 10:30",
                    title: "Almuerzo libre",
                  },
                  {
                    time: "14:00 - 15:00",
                    title: "Conferencia plenaria 3: Procesos avanzados de oxidación",
                    speaker: "César Pulgarín",
                    location: "pendiente",
                  },
                  {
                    time: "15:00 - 16:00",
                    title: "Charlas 7-10",
                    speaker: "Pendiente",
                    location: "pendiente",
                  },
                  {
                    time: "16:15 - 18:00",
                    title: "Sesión de pósters",
                    location: "pendiente",
                  },
                  {
                    time: "18:00 - 19:00",
                    title: "Clausura",
                    location: "pendiente",
                  },
                ].map((session, index) => (
                  <div key={index} className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center transition-shadow duration-200 hover:shadow-lg transform hover:scale-[1.01]">
                    <div className="flex w-full flex-col gap-1 md:w-1/5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-base font-medium">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-base text-muted-foreground">{session.location}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{session.title}</h3>
                      {session.speaker && <p className="text-base text-muted-foreground">{session.speaker}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Venue */}
        <section id="venue" className="w-full py-12 md:py-24 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Ubicación
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Información del lugar</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  El SIQUI 2025 se llevará a cabo en las instalaciones de la Universidad de Medellín
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Centro Científico</h3>
                  <p className="text-muted-foreground">
                    Un lugar equipado con los implementos necesarios para una experiencia amena y significativa en el SIQUI 2025.
                    Llegar a nuestro Campus Vivo es muy sencillo usando el transporte público integrado, Metro de Medellín.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-sm text-muted-foreground">Cra. 87 #30-65, Medellín, Belén, Antioquia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">siquiudem@udemedellin.edu.co</p>
                      <p className="text-sm text-muted-foreground">siquiudem@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaXTwitter className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">@siquiudem</p>
                      <p className="text-sm text-muted-foreground">@ConMpac</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaInstagram className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">@materialesconimpacto</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                <Link 
                    href="https://www.metrodemedellin.gov.co/hs-fs/hubfs/v1-mapa%20esquematico-2021%20(1).webp?width=1200&height=1638&name=v1-mapa%20esquematico-2021%20(1).webp" 
                    passHref 
                    legacyBehavior
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="inline-flex items-center gap-2" asChild>
                      <a>
                      Mapa de Metro Medellín
                      <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2436516604885!2d-75.61255342500957!3d6.231576693756585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44298d0551a085%3A0xd6c06b6158ba814d!2sUniversidad%20de%20Medell%C3%ADn!5e0!3m2!1ses-419!2sco!4v1743790557531!5m2!1ses-419!2sco"
                  width="600"
                  height="800"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-video h-full w-full rounded-xl">
                </iframe>
            </div>
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section id="sponsors" className="w-full py-12 md:py-24 lg:py-24">
          <div className="container px-4 md:px-6">
            {/* Organiza Section (Centered) */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Organiza:</h2>
              </div>
            </div>

            {/* Sponsor Logo Grid */}
            <div className="mx-auto py-12">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-1">
                {["/universidad_medellin.webp"].map((src, i) => (
                  <div key={`platinum-${i}`} className="flex items-center justify-center">
                    <Image
                      src={src}
                      width={200}
                      height={100}
                      alt={`Platinum Sponsor ${i + 1}`}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Apoya Section (Now Centered) */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Apoya:</h2>
            </div>
            <div className="mx-auto py-12">
              {/* <h3 className="mb-8 text-center text-lg font-medium">Platinum Sponsors</h3> */}
              <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "/universidad_antioquia.webp",
                  "/universidad_nacional.webp",
                  "/polanyi.webp",
                  "/uniremington.webp"
                ].map((src, i) => (
                  <div key={`platinum-${i}`} className="flex items-center justify-center">
                    <Image
                      src={src}
                      width={200}
                      height={100}
                      alt={`Platinum Sponsor ${i + 1}`}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Listo para unirte?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                ¡No te quedes fuera! Regístrate hoy mismo para el SIQUI 2025 y sé parte de una experiencia única 
                llena de conocimiento, networking y pasión por la química.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href= "https://docs.google.com/forms/d/e/1FAIpQLSeMbw3r26MFEzr-IC7XXXYfn4o_XtrKOHHiMYL_KRrdTfuK3g/viewform" 
                passHref legacyBehavior
                target="_blank"
                rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="inline-flex items-center gap-2">
                  Regístrate ahora
                  <ChevronRight className="h-4 w-4" />
                </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="inline-flex items-center gap-2 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="mailto:siquiudem@udemedellin.edu.co">
                  Contáctenos
                  <Mail className="h-4 w-4" />
                  </Link>
                </Button>
                <Link href= "https://x.com/siquiudem" 
                passHref legacyBehavior
                target="_blank"
                rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="inline-flex items-center gap-2">
                  @siquiudem
                  <FaXTwitter className="w-5 h-5" />
                </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="inline-flex items-center gap-2 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="https://www.instagram.com/materialesconimpacto/">
                  @materialesconimpacto
                  <FaInstagram className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">SIQUI</span>
            <span className="text-muted-foreground">2025</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Simposio de Química UdeMedellín. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
