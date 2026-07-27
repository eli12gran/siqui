import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Mail, ExternalLink, ChevronRight, Download } from "lucide-react"
import { FaXTwitter, FaInstagram } from "react-icons/fa6"


export default function ScientificEventPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">SIQUI</span>
            <span className="text-muted-foreground">2026</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Sobre SIQUI
            </Link>
            <Link href="#inscriptions" className="text-sm font-medium hover:text-primary">
              Inscripciones
            </Link>
            {/*<Link href="#speakers" className="text-sm font-medium hover:text-primary">
              Ponentes
            </Link>
            <Link href="#committees" className="text-sm font-medium hover:text-primary">
              Comités
            </Link>*/}
            <Link href="/memorias" className="text-sm font-medium hover:text-primary">
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
          <Link href="/memories/MEMORIAS_II_SIQUI.pdf" 
                  passHref legacyBehavior
                  target="_blank"
                  rel="noopener noreferrer">
            <Button>Descarga las memorias del SIQUI 2025</Button>
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
                src="/Logo_2026.webp"
                width={800}
                height={800}
                alt="Conference Banner"
                className="w-full max-w-4xl rounded-xl object-contain"
              />

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/memories/MEMORIAS_II_SIQUI.pdf"
                  passHref
                  legacyBehavior
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="inline-flex text-lg items-center gap-2">
                    Descarga las memorias de SIQUI 2025
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>                
                {/* <Link
                  href="/templates/Programacion_SIQUI-1.pdf"
                  passHref
                  legacyBehavior
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="inline-flex text-lg items-center gap-2">
                    Ver programación (PDF)
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                { <Link
                  href="/templates/PROGRAMACION_POSTER - SIQUI_16-Oct.pdf"
                  passHref
                  legacyBehavior
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button size="lg" variant="outline" className="inline-flex text-lg items-center gap-2">
                  Ver listado Póster (PDF)
                  <ExternalLink className="h-4 w-4" />
                </Button>
                </Link> } */}
              </div>

              {/* Details Row */}
              <div className="flex flex-col gap-2 text-xl text-muted-foreground md:flex-row md:gap-6 justify-center items-center space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>12 y 13 de noviembre, 2026</span>
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
            <div className="flex flex-col items-center justify-center space-y-4 text-justify">
              <div className="space-y-6 max-w-5xl mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre el evento</h2>
                <p className="text-muted-foreground md:text-xl leading-relaxed">
                  La Universidad de Medellín y el Grupo de Investigación Materiales con Impacto (Mat&mpac) presentan el III Simposio de Química UdeMedellín, un espacio de encuentro, diálogo y divulgación científica que se llevará a cabo los días 12 y 13 de noviembre de 2026, en la Universidad de Medellín, en el marco de la celebración del Día del Químico.
                </p>
                <p className="text-muted-foreground md:text-xl leading-relaxed">
                  Bajo el lema "Química para la sostenibilidad con impacto social", esta tercera edición invita a reconocer el papel de la química como una ciencia fundamental para comprender y transformar nuestro entorno. A través del intercambio de conocimientos y experiencias, el simposio reunirá a investigadores, docentes, estudiantes y profesionales interesados en compartir avances, perspectivas y soluciones que contribuyan a enfrentar los desafíos actuales desde la ciencia, la innovación y la sostenibilidad.
                </p>
                <p className="text-muted-foreground md:text-xl leading-relaxed">
                  En esta edición, el evento amplía su alcance con la incorporación de actividades de apropiación social del conocimiento dirigidas a instituciones educativas de diferentes municipios de Antioquia. Esta iniciativa busca fortalecer los vínculos entre la universidad, la escuela y la sociedad, acercando la química a nuevos públicos y promoviendo el interés por la ciencia como una herramienta para comprender el mundo y generar transformaciones con impacto.
                </p>
                <p className="text-muted-foreground md:text-xl leading-relaxed">
                  Más que un espacio para presentar resultados científicos, el III Simposio de Química UdeMedellín busca propiciar conversaciones, conexiones y nuevas ideas en torno a una química comprometida con el futuro. Porque la ciencia adquiere un significado aún mayor cuando sus conocimientos trascienden los laboratorios y contribuyen a construir una sociedad más sostenible, innovadora y consciente.
                </p>
              </div>
            </div>
            {/*}
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
            </div>*/}
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
              ¡Prepárate! Pronto estaremos anunciando las inscripciones.
              {/*Inscríbete como asistente o presenta tu proyecto. Aquí encontrarás el formulario de inscripción, las plantillas necesarias y fechas importantes.*/}
            </p>
            {/*
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ten en cuenta que, para participar en modalidad de póster o charla, es necesario que envíes el resumen de tu trabajo usando la plantilla.
            </p>
            <div className="inline-block text-lg mt-4">
              <button className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg cursor-not-allowed" disabled>
                Inscripciones cerradas
              </button>
              <div className="mt-3 text-sm text-muted-foreground">
                ¿Necesitas la programación completa? Descarga el programa aquí:&nbsp;
                <a href="/templates/Programacion_SIQUI-1.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Programa (PDF)</a>
              </div>
            </div>*/}
          </div>

          {/* Templates Grid */}
          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: "Plantilla resumen del proyecto",
                link: "/templates/Formato_Resumen_SIQUIUDEM.docx",
              },
              {
                label: "Plantilla para póster",
                subtitle: "Dimensiones: 70 x 100 cm",
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
                <div className="text-left">
                  <span className="font-medium text-lg block">{item.label}</span>
                  {item.subtitle && (
                    <span className="text-xl text-muted-foreground block">{item.subtitle}</span>
                  )}
                </div>
                <Download className="w-5 h-5 text-primary" />

              </a>
            ))}
          </div>
            */}

          {/* Important Dates */}
          {/*
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
          </div>*/}
        </div>
        </section>


        {/* Memories summary */}
        <section id="memories" className="w-full py-12 md:py-24 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Memorias
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Memorias históricas</h2>
              </div>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SIQUI I</p>
                <h3 className="mt-3 text-2xl font-semibold">Primera edición</h3>
                <p className="mt-3 text-muted-foreground">
                  Revisa el contexto de la primera versión del simposio.
                </p>
                <Link href="/memorias/siqui-i" className="mt-6 inline-flex">
                  <Button variant="outline">Ver SIQUI I</Button>
                </Link>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">SIQUI II</p>
                <h3 className="mt-3 text-2xl font-semibold">Segunda edición</h3>
                <p className="mt-3 text-muted-foreground">
                  Accede a las memorias y materiales de la edición anterior.
                </p>
                <Link href="/memorias/siqui-ii" className="mt-6 inline-flex">
                  <Button variant="outline">Ver SIQUI II</Button>
                </Link>
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
                  Una jornada de charlas inspiradoras, invitados especiales
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-3xl font-bold tracking-tighter sm:text-3xl mb-4">Jueves 12 de noviembre</h3>
              <div className="space-y-6">
                {[
                  {
                    time: "07:00 - 08:30",
                    title: "Registro e inscripciones",
                    location: "Auditorio 1",
                  },
                  {
                    time: "08:30 - 08:30",
                    title: "Bienvenida",
                    location: "Auditorio 1",
                  },
                  {
                    time: "09:30 - 10:15",
                    title: "Plenaria #1",
                    location: "Auditorio 1",
                  },
                  {
                    time: "10:15 - 10:35",
                    title: "Coctel de bienvenida",
                    location: "Auditorio 1",
                  },
                  {
                    time: "10:35 - 11:05",
                    title: "Conferencista invitado #1 - Química en la Industria",
                    location: "Auditorio 1",
                  },
                  {
                    time: "11:05 - 11:25",
                    title: "Charlas",
                    location: "Auditorio 1",
                  },
                  {
                    time: "11:25 - 11:45",
                    title: "Charlas",
                    location: "Auditorio 1",
                  },
                  {
                    time: "11:45 - 12:05",
                    title: "Charlas",
                    location: "Auditorio 1",
                  },
                  {
                    time: "12:05 - 14:00",
                    title: "Almuerzo Libre",
                    location: "",
                  },
                  {
                    time: "14:00 - 14:45",
                    title: "Plenaria #2 - Rol de la mujer en la ciencia",
                    location: "Auditorio 1",
                  },
                  {
                    time: "14:45 - 15:15",
                    title: "Conferencista invitado #2 - Investigación en Educación Media",
                    location: "Auditorio 1",
                  },
                  {
                    time: "15:15 - 15:35",
                    title: "Charlas",
                    location: "Auditorio 1",
                  },
                  {
                    time: "15:35 - 15:55",
                    title: "Charlas",
                    location: "Auditorio 1",
                  },
                  {
                    time: "15:55 - 16:15",
                    title: "Coffee break y foto grupal",
                    location: "Auditorio 1",
                  },
                  {
                    time: "16:15 - 18:00",
                    title: "Posters",
                    location: "Por confirmar",
                  }
                ].map((session, index) => (
                  <div key={index} className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center transition-shadow duration-200 hover:shadow-lg transform hover:scale-[1.01]">
                    <div className="flex w-full flex-col gap-1 md:w-1/5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-base font-medium">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-10 text-muted-foreground" />
                        <span className="text-s text-muted-foreground">{session.location}</span>
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
              <h3 className="text-3xl font-bold tracking-tighter sm:text-3xl mb-4">Viernes 13 de noviembre</h3>
              <div className="space-y-6">
                {[
                  {
                    time: "09:00 - 09:45",
                    title: "Plenaria #3",
                    location: "Auditorio 1",
                  },
                  {
                    time: "09:45 - 10:15",
                    title: "Conferencista invitado #3 - Investigación en Educación Media",
                    location: "Auditorio 1",
                  },
                  {
                    time: "10:15 - 10:45",
                    title: "Conferencista invitado #3 - Investigación en Educación Media",
                    location: "Auditorio 1",
                  },
                  {
                    time: "10:45 - 11:00",
                    title: "Coffee break",
                    location: "Auditorio 1",
                  },
                  {
                    time: "11:00 - 11:20",
                    title: "Charlas",
                    location: "Auditorio 1",
                  },
                  {
                    time: "11:20 - 11:40",
                    title: "Charlas",
                    location: "Auditorio 1",
                  },
                  {
                    time: "11:40 - 12:00",
                    title: "Charlas",
                    location: "Auditorio 1",
                  },
                  {
                    time: "12:00 - 12:45",
                    title: "Conversatorio",
                    location: "Auditorio 1",
                  },
                  {
                    time: "12:45 - 13:00",
                    title: "Premiación y Clausura",
                    location: "Auditorio 1",
                  }
                ].map((session, index) => (
                  <div key={index} className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center transition-shadow duration-200 hover:shadow-lg transform hover:scale-[1.01]">
                    <div className="flex w-full flex-col gap-1 md:w-1/5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-base font-medium">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-10 text-muted-foreground" />
                        <span className="text-s text-muted-foreground">{session.location}</span>
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
                  El SIQUI 2026 se llevará a cabo en las instalaciones de la Universidad de Medellín
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Campus UdeM</h3>
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
            {/*
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Patrocina:</h2>
            </div>
            <div className="mx-auto py-12">
              <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3">
                {[
                  { src: "/universidad_antioquia.webp", alt: "Universidad de Antioquia", h: "h-16" },
                  { src: "/universidad_nacional.webp", alt: "Universidad Nacional", h: "h-16" },
                  { src: "/polanyi.webp", alt: "Polanyi", h: "h-20" },
                  { src: "/uniremington.webp", alt: "Uniremington", h: "h-14" },
                  { src: "/cpq.webp", alt: "CPQ", h: "h-25" },
                  { src: "/cecoltec.webp", alt: "Cecoltec", h: "h-21" },
                  { src: "/Innovatek.webp", alt: "Innovatek", h: "h-16" },
                  { src: "/simprolab.webp", alt: "Simprolab", h: "h-25" },
                  { src: "/lanzetta_rengifo.webp", alt: "Lanzetta Rengifo", h: "h-400" },
                ].map((sponsor, i) => (
                  <div key={`platinum-${i}`} className="flex items-center justify-center">
                  */}
                    {/* container enforces a consistent box size; tweak sponsor.h per-logo if needed */}
                    {/*
                    <div className={`flex items-center justify-center max-w-[180px] w-full ${sponsor.h}`}>
                      <Image
                        src={sponsor.src}
                        width={200}
                        height={100}
                        alt={sponsor.alt || `Sponsor ${i + 1}`}
                        className="w-auto max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>*/}
          </div>
        </section>

        {/* Registration CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-justify">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">¿Listo para unirte?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Pronto estarán disponibles las inscripciones y más información sobre el SIQUI 2026. Te invitamos a ser parte de un encuentro en el que la ciencia, la innovación y el compromiso con la sociedad se unen para explorar el papel de la química en la construcción de un futuro más sostenible.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                {/*
                <Link href= "/templates/Programa_SIQUI_2025.pdf" 
                passHref legacyBehavior
                target="_blank"
                rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="inline-flex items-center gap-2">
                  Ver programa (PDF)
                  <ChevronRight className="h-4 w-4" />
                </Button>
                </Link>
                */}
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
            <span className="text-muted-foreground">2026</span>
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
