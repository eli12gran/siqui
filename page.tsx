import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Mail, ExternalLink, ChevronRight } from "lucide-react"

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
              Patrocinadores
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Simposio de Química UdeMedellín
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Cien años entendiendo lo invisible: El poder de la química en todas sus formas
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeMbw3r26MFEzr-IC7XXXYfn4o_XtrKOHHiMYL_KRrdTfuK3g/viewform" 
                  passHref legacyBehavior
                  target="_blank"
                  rel="noopener noreferrer">
                    <Button size="lg" className="inline-flex items-center gap-2">
                      Regístrate acá
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
                    Descarga cronograma
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Octubre 22, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Universidad de Medellín, Medellín, Antioquia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>100+ Participantes</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <Image
                  src="/logo_sin_fondo.png?height=400&width=600"
                  width={1000}
                  height={800}
                  alt="Conference Banner"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
<section id="about" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
          Sobre el evento
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Avanzando juntos en la ciencia</h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
    
    <div className="mx-auto max-w-5xl py-12">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col justify-center space-y-4 max-w-3xl">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Líneas temáticas</h2>
            <p className="text-muted-foreground">
              Exploración interdisciplinaria de la química en el contexto cuántico y sus aplicaciones contemporáneas
            </p>
          </div>
          <ul className="grid gap-6">
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-left">⚛️​ Áreas clásicas de la química</h3>
                <p className="text-muted-foreground text-left">
                  Desde química orgánica e inorgánica hasta fisicoquímica y analítica, fundamentos que siguen revolucionando la ciencia básica.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-left">🔬​ Materiales y catálisis</h3>
                <p className="text-muted-foreground text-left">
                  Desarrollo de nuevos materiales con propiedades cuánticas y catalizadores para procesos industriales más eficientes.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-left">🌱​ Sostenibilidad</h3>
                <p className="text-muted-foreground text-left">
                  Soluciones químicas para desafíos ambientales, economía circular y procesos sustentables alineados con los ODS.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-left">💡 Innovación, Educación e Impacto Social</h3>
                <p className="text-muted-foreground text-left">
                  Pedagogía de la química cuántica y su rol en la transformación social, con enfoque en divulgación científica.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-left">🏭 Aplicaciones industriales</h3>
                <p className="text-muted-foreground text-left">
                  Transferencia tecnológica de desarrollos cuánticos a sectores productivos como farmacéutica, energía y nanotecnología.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Keynote Speakers */}
        <section id="speakers" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Speakers que participan
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Líderes expertos en sus campos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conoce a pioneros que exploran las fronteras donde la química converge con los fenómenos cuánticos y sus aplicaciones innovadoras.
                Conferencistas nacionales e internacionales
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Albeiro Restrepo",
                  role: "Profesor titular, Instituto de Química. Codirector del grupo de Química-Física Teórica, clasificado A1 por Minciencias. Investigador senior.",
                  institution: "Universidad de Antioquia",
                  image: "/albeiro.jpg?height=300&width=300",
                },
                {
                  name: "Johnatan Diosa",
                  role: "Especialista I+D Síntesis y mezclas",
                  institution: "Andercol S.A.S.",
                  image: "/johnatan_diosa.jpg?height=300&width=300",
                },
                // {
                //   name: "Dr. Maria Rodriguez",
                //   role: "Quantum Hardware Engineer",
                //   institution: "IBM Quantum",
                //   image: "/placeholder.svg?height=300&width=300",
                // },
                // {
                //   name: "Dr. Robert Kim",
                //   role: "Quantum Information Theorist",
                //   institution: "Caltech",
                //   image: "/placeholder.svg?height=300&width=300",
                // },
                // {
                //   name: "Prof. Sarah Johnson",
                //   role: "Quantum Applications Researcher",
                //   institution: "Harvard University",
                //   image: "/placeholder.svg?height=300&width=300",
                // },
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
                    <h3 className="text-xl font-bold">{speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">{speaker.role}</p>
                    <p className="text-sm font-medium">{speaker.institution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Committees */}
        <section id="committees" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Equipos de revisión y organización
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comités de SIQUI 2025</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conozca a los distinguidos expertos que revisan las presentaciones y organizan el evento.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="space-y-12">
                {/* Scientific Committee */}
                <div>
                  <h3 className="mb-6 text-center text-2xl font-bold">Comité Organizador</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "PhD. Nancy Arelas",
                        role: "Semillero de Investigación Materiales con Impacto",
                        affiliation: "Universidad de Medellín",
                        image: "/nancy_arelas.jpg?height=150&width=150",
                      },
                      {
                        name: "PhD. María Angélica Forgionny Flórez",
                        role: "Semillero de Investigación Materiales con Impacto",
                        affiliation: "Universidad de Medellín",
                        image: "/angelica.jpg?height=150&width=150",
                      },
                      {
                        name: "PhD. Carlos Jiménez",
                        role: "Semillero de Investigación Materiales con Impacto",
                        affiliation: "Universidad de Medellín",
                        image: "/carlos.jpg?height=150&width=150",
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

                {/*Program Committee*/}
                <div>
                  <h3 className="mb-6 text-center text-2xl font-bold">Comité Logístico</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Valentina Miranda Garcés",
                        role: "Estudiante de Computación Científica",
                        affiliation: "Universidad de Medellín",
                        image: "/vale.jpg?height=150&width=150",
                      },
                      {
                        name: "Emanuel Cabrera",
                        role: "Estudiante de Computación Científica",
                        affiliation: "Universidad de Medellín",
                        image: "/placeholder.jpg?height=150&width=150",
                      },
                      {
                        name: "Valentina Ospina",
                        role: "no idea",
                        affiliation: "Universidad de Medellín",
                        image: "/placeholder.jpg?height=150&width=150",
                      },
                      {
                        name: "Elizabeth Granda Rodríguez",
                        role: "Estudiante de Computación Científica",
                        affiliation: "Universidad de Medellín",
                        image: "/eli.jpg?height=150&width=150",
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
                  <h3 className="mb-6 text-center text-2xl font-bold">Comité Científico</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Prof. Elizabeth Chen",
                        role: "General Chair",
                        affiliation: "Harvard University",
                        image: "/placeholder.svg?height=150&width=150",
                      },
                      {
                        name: "Dr. James Wilson",
                        role: "Vice Chair",
                        affiliation: "Caltech",
                        image: "/placeholder.svg?height=150&width=150",
                      },
                      {
                        name: "Dr. Olivia Martinez",
                        role: "Publications Chair",
                        affiliation: "University of Washington",
                        image: "/placeholder.svg?height=150&width=150",
                      },
                      {
                        name: "Prof. Daniel Taylor",
                        role: "Finance Chair",
                        affiliation: "Imperial College London",
                        image: "/placeholder.svg?height=150&width=150",
                      },
                      {
                        name: "Dr. Rachel Green",
                        role: "Publicity Chair",
                        affiliation: "University of Melbourne",
                        image: "/placeholder.svg?height=150&width=150",
                      },
                      {
                        name: "Prof. Kevin Zhang",
                        role: "Local Arrangements Chair",
                        affiliation: "Boston University",
                        image: "/placeholder.svg?height=150&width=150",
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
              </div>
            </div>
          </div>
        </section>

        {/* Memories */}
        <section id="memories" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  evento pasado
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
                      Al finalizar el día se otorgaron reconocimientos. El premio "Mi póster favorito", elegido por votación de los asistentes, fue entregado a un proyecto presentado por estudiantes de educación media de la subregión norte del Departamento de Antioquia, destacando el talento emergente en la ciencia.
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
                    src="/memories/charlas.jpg"
                    width={200}
                    height={300}
                    alt="charlas"
                    className="rounded-lg object-cover"
                  />

                  <Image
                    src="/memories/charlas2.jpg"
                    width={400}
                    height={300}
                    alt="charlas"
                    className="rounded-lg object-cover"
                  />

                  <video
                    src="/memories/clausura.mp4"
                    width={200}
                    height={200}
                    autoPlay
                    muted
                    loop
                    className="rounded-lg object-cover"
                  />

                  <Image
                    src="/memories/grupal.jpg"
                    width={300}
                    height={300}
                    alt="asistentes"
                    className="rounded-lg object-cover"
                  />

                  <video
                    src="/memories/inauguracion.mp4"
                    width={160}
                    height={200}
                    autoPlay
                    muted
                    loop
                    className="rounded-lg object-cover"
                  />

                  <Image
                    src="/memories/inauguracion2.jpeg"
                    width={300}
                    height={300}
                    alt="asistentes"
                    className="rounded-lg object-cover"
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

                {/* Gender Demographics */}
                <div className="grid gap-8 md:grid-cols-2 mb-12">
                  <div className="rounded-lg border p-6">
                    <h4 className="font-bold mb-4">Gender Distribution</h4>
                    <div className="flex items-center gap-4">
                      <div className="w-full bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: "42%" }}></div>
                      </div>
                      <div className="text-sm whitespace-nowrap">42% Women</div>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-full bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: "56%" }}></div>
                      </div>
                      <div className="text-sm whitespace-nowrap">56% Men</div>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-full bg-muted rounded-full h-4">
                        <div className="bg-primary h-4 rounded-full" style={{ width: "2%" }}></div>
                      </div>
                      <div className="text-sm whitespace-nowrap">2% Non-binary</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      We're proud of our progress toward gender balance in the quantum computing field, with women's
                      participation significantly higher than the industry average.
                    </p>
                  </div>

                  {/* Geographic Distribution */}
                  <div className="rounded-lg border p-6">
                    <h4 className="font-bold mb-4">Geographic Distribution</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="text-sm">Europe</div>
                        <div className="text-sm font-medium">45%</div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm">North America</div>
                        <div className="text-sm font-medium">28%</div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "28%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm">Asia</div>
                        <div className="text-sm font-medium">18%</div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "18%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm">Oceania</div>
                        <div className="text-sm font-medium">5%</div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "5%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm">Africa</div>
                        <div className="text-sm font-medium">3%</div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "3%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm">South America</div>
                        <div className="text-sm font-medium">1%</div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "1%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Statistics */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium text-sm mb-2">Academic vs. Industry</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <div className="text-sm">Academic: 65%</div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                      <div className="text-sm">Industry: 35%</div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium text-sm mb-2">Career Stage</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <div className="text-sm">Senior: 42%</div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                      <div className="text-sm">Mid-career: 38%</div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <div className="text-sm">Early-career: 20%</div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium text-sm mb-2">Research Areas</h4>
                    <div className="text-xs space-y-1">
                      <div>Quantum Algorithms: 28%</div>
                      <div>Quantum Hardware: 24%</div>
                      <div>Quantum Applications: 22%</div>
                      <div>Quantum Theory: 15%</div>
                      <div>Quantum Education: 11%</div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium text-sm mb-2">Satisfaction Rate</h4>
                    <div className="text-3xl font-bold text-primary">96%</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      of attendees rated the conference as "Excellent" or "Very Good"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Conference Schedule
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Event Program</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A full day of inspiring talks, workshops, and networking opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="space-y-6">
                {[
                  {
                    time: "08:00 - 09:00",
                    title: "Registration & Breakfast",
                    location: "Main Hall",
                  },
                  {
                    time: "09:00 - 10:00",
                    title: "Opening Ceremony",
                    speaker: "Conference Chair",
                    location: "Auditorium A",
                  },
                  {
                    time: "10:00 - 11:30",
                    title: "Keynote: The Future of Quantum Computing",
                    speaker: "Dr. Eleanor Chen",
                    location: "Auditorium A",
                  },
                  {
                    time: "11:30 - 13:00",
                    title: "Lunch Break",
                    location: "Dining Hall",
                  },
                  {
                    time: "13:00 - 14:30",
                    title: "Panel Discussion: Quantum Supremacy",
                    speaker: "Multiple Speakers",
                    location: "Auditorium B",
                  },
                  {
                    time: "14:30 - 16:00",
                    title: "Parallel Sessions: Quantum Algorithms",
                    location: "Rooms 101-103",
                  },
                  {
                    time: "16:00 - 16:30",
                    title: "Coffee Break",
                    location: "Main Hall",
                  },
                  {
                    time: "16:30 - 18:00",
                    title: "Workshop: Introduction to Quantum Programming",
                    speaker: "Prof. James Wilson",
                    location: "Computer Lab",
                  },
                  {
                    time: "18:30 - 20:30",
                    title: "Welcome Reception",
                    location: "Rooftop Garden",
                  },
                ].map((session, index) => (
                  <div key={index} className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center">
                    <div className="flex w-full flex-col gap-1 md:w-1/5">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{session.location}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{session.title}</h3>
                      {session.speaker && <p className="text-sm text-muted-foreground">{session.speaker}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Venue */}
        <section id="venue" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
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
                      <p className="font-medium">Contacto</p>
                      <p className="text-sm text-muted-foreground">siquiudem@gmail.com</p>
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
        <section id="sponsors" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Comité organizador
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Con el apoyo de:</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agradecemos el apoyo de los organizadores que hacen este evento posible
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              {/* <h3 className="mb-8 text-center text-lg font-medium">Platinum Sponsors</h3> */}
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "/universidad_nacional.jpg",
                  "/universidad_medellin.jpg",
                  "/universidad_antioquia.png",
                  "/polanyi.jpg"
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
              {/* <h3 className="mb-8 mt-16 text-center text-lg font-medium">Gold Sponsors</h3>
              <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={`gold-${i}`} className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=80&width=160"
                      width={160}
                      height={80}
                      alt={`Gold Sponsor ${i + 1}`}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div> */}
              {/* <h3 className="mb-8 mt-16 text-center text-lg font-medium">Silver Sponsors</h3>
              <div className="grid grid-cols-4 gap-8 md:grid-cols-6 lg:grid-cols-8">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`silver-${i}`} className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=60&width=120"
                      width={120}
                      height={60}
                      alt={`Silver Sponsor ${i + 1}`}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div> */}
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
                  <Link href="mailto:siquiudem@gmail.com">
                  Contáctenos
                  <Mail className="h-4 w-4" />
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