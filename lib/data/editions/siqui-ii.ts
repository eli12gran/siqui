import type {
  CommitteesData,
  CoverImage,
  EditionOverview,
  PieChartConfig,
  Speaker,
  StatCard,
  ThematicLinesData,
} from "./types"

export const siquiII = {
  label: "SIQUI II",
  title: "Memorias de la segunda edición - 2025",

  coverImage: {
    src: "/gallery/1.webp",
    alt: "Portada del simposio",
    width: 600,
    height: 300,
  } satisfies CoverImage,

  downloadCta: {
    href: "/memories/MEMORIAS_II_SIQUI.pdf",
    label: "Descarga las memorias del SIQUI 2025",
  },

  overview: {
    date: "21 y 22 de octubre de 2025",
    university: "Universidad de Medellín, Colombia",
    paragraphs: [
      "En el marco del año internacional de la Ciencia y la Tecnología Cuánticas, proclamado por la Naciones unidas para conmemorar el centenario del desarrollo de la mecánica cuántica, se realizó el II Simposio de Química - UdeMedellín, una iniciativa que se sumó a la celebración internacional promovida por la UNESCO durante el año 2025.",
      "Bajo el eje temático de lo cuántico, el simposio propuso un espacio de encuentro para explorar las conexiones entre la química, la ciencia y la tecnología cuánticas, así como sus implicaciones en diferentes ámbitos de la investigación, la educación, la innovación y la vida cotidiana. El evento buscó promover el intercambio de conocimientos y la colaboración entre estudiantes, docentes, investigadores y personas interesadas en las ciencias químicas y áreas afines.",
      "La jornada fue un espacio accesible, participativo e interdisciplinario, en el que el conocimiento científico pudo compartirse, cuestionarse y conectarse con diferentes contextos. Desde esta perspectiva, el simposio resaltó el papel de la química como una disciplina capaz de establecer puentes entre los fundamentos del mundo cuántico y sus aplicaciones en la sociedad.",
    ],
  } satisfies EditionOverview,

  thematicLines: {
    intro:
      "El programa del II Simposio de Química – UdeMedellín abordó diversas áreas de la química y las ciencias relacionadas, entre ellas:",
    items: [
      { name: "⚛️​ Química inorgánica, orgánica, analítica, fisicoquímica y computacional." },
      { name: "🔬​ Química de materiales avanzados, nanomateriales y catálisis." },
      { name: "🌱​ Energía renovable, química verde, sostenibilidad y economía circular." },
      { name: "💡 Innovación, educación e impacto social de la química." },
      { name: "🏭 Aplicaciones industriales, políticas científicas y regulación en tecnologías químicas." },
    ],
  } satisfies ThematicLinesData,

  statsHeading: "Estadísticos del evento 2025",

  stats: [
    { value: "187", label: "Participantes" },
    { value: "11", label: "Regiones representadas, nacionales e internacionales" },
    { value: "86", label: "Presentaciones y Pósters" },
  ] satisfies StatCard[],

  attendeeChart: {
    title: "Distribución por tipo de participante",
    data: [
      { name: "Estudiante Pregrado", value: 53.3 },
      { name: "Estudiante Posgrado", value: 10.6 },
      { name: "Profesor", value: 6.7 },
      { name: "Investigador", value: 6.1 },
      { name: "Asistente", value: 21.7 },
      { name: "Otro", value: 1.7 },
    ],
    colors: ["#285c4a", "#53b268", "#83db78", "#5dd17a", "#0d0630", "#8eb897", "#c3e8bd", "#9ddbad", "#bf98a0"],
    outerRadius: 120,
    legendHeight: 40,
  } satisfies PieChartConfig,

  topicsChart: {
    title: "Distribución Líneas Temáticas",
    data: [
      { name: "Industria y política científica", value: 4.1 },
      { name: "Energía y sostenibilidad", value: 41.1 },
      { name: "Innovación y educación", value: 1.4 },
      { name: "Materiales y catálisis", value: 24.7 },
      { name: "Áreas fundamentales de la química", value: 28.8 },
    ],
    colors: ["#285c4a", "#53b268", "#83db78", "#5dd17a", "#0d0630", "#8eb897", "#9ddbad"],
    outerRadius: 110,
    legendHeight: 0,
  } satisfies PieChartConfig,

  speakers: [
    {
      name: "Dr. Albeiro Restrepo",
      role: "Profesor titular, Instituto de Química. Codirector del grupo de Química-Física Teórica, clasificado A1 por Minciencias. Investigador senior.",
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
    },
  ] satisfies Speaker[],

  committees: {
    heading: "Comités de SIQUI 2025",
    description: "Conozca a los reconocidos expertos que revisan las presentaciones y organizan el evento.",

    organizador: [
      {
        university: "Universidad de Medellín",
        members: [
          { name: "María Angélica Forgionny", image: "/speakers/angelica.webp?height=150&width=150" },
          { name: "Carlos Jiménez", image: "/speakers/carlos.webp?height=150&width=150" },
          { name: "Nancy Acelas", image: "/speakers/nancy_arelas.webp?height=150&width=150" },
          { name: "Maria Isabel Mejía", image: "/speakers/maria_isabel.webp?height=150&width=150" },
        ],
      },
      {
        university: "Universidad de Antioquia",
        members: [
          { name: "Ricardo Torres", image: "/speakers/Ricardo_Torres.webp?height=150&width=150" },
        ],
      },
      {
        university: "Universidad Nacional de Colombia",
        members: [
          { name: "Farid Cortés", image: "/speakers/Farid_Cortes.webp?height=150&width=150" },
          { name: "Camilo Franco", image: "/speakers/Camilo_Franco.webp?height=150&width=150" },
        ],
      },
    ],

    logistico: [
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
    ],

    cientifico: [
      { name: "Francisco Nuñez", affiliation: "Universidad Nacional de Colombia" },
      { name: "Jazmín Porras", affiliation: "Corporación Universitaria Remington" },
      { name: "Carolina Ramírez", affiliation: "Instituto Tecnológico Metropolitano" },
      { name: "Efraím Serna", affiliation: "Universidad de Antioquia" },
      { name: "Gina Hincapié Triviño", affiliation: "Universidad Nacional de Colombia (Bogotá)" },
      { name: "Natalia Súarez", affiliation: "Universidad de Antioquia" },
      { name: "Viviana Ospina", affiliation: "Universidad Utrecht, Países Bajos" },
      { name: "Sol Milena Mejía Chica", affiliation: "Universidad Javeriana" },
      { name: "Alejandro Vasquez", affiliation: "Universidad Arturo Prat, Chile" },
      { name: "Camilo Franco", affiliation: "Universidad Nacional de Colombia (Medellín)" },
      { name: "Maria Angélica Prada", affiliation: "Universidad de Antioquia" },
      { name: "Jorge Gallego", affiliation: "Universidad de Medellín" },
      { name: "Marcela Paredes", affiliation: "Fundación Universitaria Navarra (Huila)" },
      { name: "David Morales", affiliation: "Universidad Nacional Autónoma de México, Ciudad de México" },
      { name: "Ariel Cadena", affiliation: "Universidad Nacional de Colombia (Bogotá)" },
      { name: "Leidy Hoyos", affiliation: "Tecnológico de Antioquia" },
      { name: "Lina Paola Higuita", affiliation: "PPG Colombia" },
      { name: "Camilo Castro", affiliation: "Universidad de Antioquia" },
      { name: "Sergio Valencia", affiliation: "Tecnológico de Antioquia" },
    ],
  } satisfies CommitteesData,
}
