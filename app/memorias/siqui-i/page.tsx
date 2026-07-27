import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import AttendeeTypeChart from "@/components/ui/attendee-type-pie-chart";
import TopicsChart from "@/components/ui/topics-pie-chart";
import { ArrowLeft,ChevronRight } from "lucide-react"

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
              SIQUI I
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-2xl">
              Memorias de la primera edición - 2024
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button size="lg" variant="outline" className="gap-2">
                Volver al evento principal
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

           {/* Memories */}
        <section id="memories" className="w-full py-0 md:py-0 lg:py-0 bg-muted/30">
          <div className="container px-4 md:px-6">
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
                      Al finalizar el día se otorgaron reconocimientos. Mención a los tres primeros puestos en la sesión de Pósters. Además, el premio &ldquo;Mi póster favorito&rdquo;, elegido por votación de los asistentes, fue entregado a un proyecto presentado por estudiantes de educación media de la subregión norte del Departamento de Antioquia, destacando el talento emergente en la ciencia.
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


        </div>
      </main>
    </div>
  )
}
