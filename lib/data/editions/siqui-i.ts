import type {
  EditionOverview,
  GalleryItem,
  PieChartConfig,
  RegionShare,
  StatCard,
  TimelineItem,
} from "./types"

export const siquiI = {
  label: "SIQUI I",
  title: "Memorias de la primera edición - 2024",

  overview: {
    date: "1 de noviembre de 2024",
    university: "Universidad de Medellín, Colombia",
    paragraphs: [
      "Con motivo de la celebración del Día del Químico en Colombia, el grupo de investigación Materiales con Impacto (Mat&mpac) organizó el Simposio de Química – UdeMedellín, un espacio académico dedicado a la socialización de avances en investigación en química y áreas afines.",
      "El evento, completamente gratuito y presencial, reunió a profesores, estudiantes e investigadores de niveles académicos desde la Educación Media, pasando por Pregrado, Maestría y hasta Doctorado. Se contó con 180 participantes de regiones como Bogotá, Risaralda, Valle del Cauca, Santander, Cauca, Boyacá, Caldas, San Andrés Islas y Antioquia, además de visitantes de México (Hidalgo, Querétaro y Ciudad de México).",
      "Se contó con espacios para acercar a académicos con dinámica de investigación en empresas e industria, además de reconocer el valor de la educación media como base para generar investigación universitaria de calidad.",
      "A continuación, te compartimos los momentos más destacados del día:",
    ],
  } satisfies EditionOverview,

  timeline: [
    {
      emoji: "🕘",
      title: "Registro y bienvenida",
      description:
        "Desde primeras horas de la mañana, los asistentes se dieron cita en el campus para realizar el registro. Posteriormente, se dio inicio al evento con una cálida ceremonia de bienvenida, donde se presentó la agenda del día.",
    },
    {
      emoji: "🎤",
      title: "Conferencias y charlas destacadas",
      description:
        "Durante la mañana y parte de la tarde se llevaron a cabo conferencias de invitados especiales, así como presentaciones orales de participantes destacados por los proyectos que enviaron, lo que enriqueció aún más la jornada académica.",
    },
    {
      emoji: "🧾",
      title: "Sesión de pósters",
      description:
        "En la tarde se realizó la sesión de pósters, un espacio de intercambio académico donde se presentaron diversos proyectos de investigación, generando conversaciones enriquecedoras entre asistentes y ponentes.",
    },
    {
      emoji: "🏆",
      title: "Premiación",
      description:
        "Al finalizar el día se otorgaron reconocimientos. Mención a los tres primeros puestos en la sesión de Pósters. Además, el premio “Mi póster favorito”, elegido por votación de los asistentes, fue entregado a un proyecto presentado por estudiantes de educación media de la subregión norte del Departamento de Antioquia, destacando el talento emergente en la ciencia.",
    },
    {
      emoji: "🎭",
      title: "Clausura y muestra cultural",
      description:
        "La ceremonia de clausura incluyó agradecimientos a todos los asistentes, así como una muestra cultural que cerró el evento con un toque artístico y festivo.",
    },
  ] satisfies TimelineItem[],

  gallery: [
    { type: "image", src: "/memories/premiacion1.webp", alt: "charlas", width: 200, height: 300, className: "rounded-lg object-cover" },
    { type: "image", src: "/memories/colegio_poster.webp", alt: "charlas", width: 400, height: 300, className: "rounded-lg object-cover" },
    { type: "video", src: "/memories/clausura.webm", width: 200, height: 200, className: "rounded-lg object-cover -mt-10" },
    { type: "video", src: "/memories/grito_simposio.webm", width: 300, height: 600, className: "rounded-lg object-cover" },
    { type: "video", src: "/memories/inauguracion.webm", width: 160, height: 200, className: "rounded-lg object-cover" },
    { type: "image", src: "/memories/inauguracion2.webp", alt: "asistentes", width: 300, height: 300, className: "rounded-lg object-cover" },
    { type: "image", src: "/memories/grupal.webp", alt: "asistentes", width: 300, height: 300, className: "rounded-lg object-cover -mt-10" },
  ] satisfies GalleryItem[],

  stats: [
    { value: "180+", label: "Participantes" },
    { value: "12", label: "Regiones representadas, nacionales e internacionales" },
    { value: "110", label: "Presentaciones y Pósters" },
  ] satisfies StatCard[],

  attendeeChart: {
    title: "Distribución por tipo de participante",
    data: [
      { name: "Estudiante Pregrado", value: 46.2 },
      { name: "Estudiante Posgrado", value: 17 },
      { name: "Profesor", value: 15.4 },
      { name: "Investigador", value: 13.7 },
      { name: "Otro", value: 7.7 },
    ],
    colors: ["#285c4a", "#53b268", "#83db78", "#5dd17a", "#0d0630", "#8eb897", "#c3e8bd", "#9ddbad", "#bf98a0"],
    outerRadius: 120,
    legendHeight: 40,
  } satisfies PieChartConfig,

  topicsChart: {
    title: "Distribución Líneas Temáticas",
    data: [
      { name: "Química Ambiental y Sostenibilidad", value: 28 },
      { name: "Productos Naturales y Alimentos", value: 13.7 },
      { name: "Simulaciones Computacionales", value: 8.8 },
      { name: "Enseñanza de la Química", value: 13.7 },
      { name: "Química de Materiales ", value: 13.7 },
      { name: "Otro", value: 7.7 },
    ],
    colors: ["#285c4a", "#53b268", "#83db78", "#5dd17a", "#0d0630", "#8eb897", "#9ddbad"],
    outerRadius: 110,
    legendHeight: 0,
  } satisfies PieChartConfig,

  geographic: {
    image: "/gallery/Colombia_America.webp",
    regions: [
      { color: "#f19756", label: "Antioquia: Medellín, Gómez Plata, Caldas  – 40.7%" },
      { color: "#ff7f27", label: "México: Hidalgo, Querétaro y Ciudad de México – 14.8%" },
      { color: "#2998fb", label: "Bogotá – 14.8%" },
      { color: "#60e1fb", label: "Cauca: Popayán, Totoró – 7.4%" },
      { color: "#f7b2fb", label: "Valle del Cauca: Cali – 7.4%" },
      { color: "#a08afb", label: "Risaralda: Pereira – 3.7%" },
      { color: "#effb61", label: "Boyacá: Tunja – 3.7%" },
      { color: "#a1fb8e", label: "Santander: Bucaramanga – 3.7%" },
      { color: "#fb7635", label: "San Andrés – 3.7%" },
    ] satisfies RegionShare[],
  },
}
