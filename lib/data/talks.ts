export type Talk = {
  id: string
  speaker: string
  title: string
}

export type SessionGroup = {
  auditorium: 2 | 3
  date: string
  chair: string
  coChair: string
  talkIds: string[]
}

export const talks: Talk[] = [
  {
    id: "Charla 1",
    speaker: "Jowhan Paniagua",
    title:
      "El efecto poco estudiado del método de síntesis de materiales carbonosos para inducir vías de degradación radicalarias y no radicalarias durante la activación de peroximonosulfato para el tratamiento de aguas",
  },
  {
    id: "Charla 2",
    speaker: "Oscar Medina",
    title:
      "Escalamiento a nivel tecnológico de monolitos con geometría tipo válvula Tesla modificada para la metanación de CO2: una estrategia para la mitigación del cambio climático en Colombia",
  },
  {
    id: "Charla 3",
    speaker: "Jairo Gómez",
    title:
      "Porosidad y química superficial en la adsorción de Hg(II): estudio comparativo de biocarbones de cascarilla de café y bagazo de caña",
  },
  {
    id: "Charla 4",
    speaker: "Santiago Díaz",
    title:
      "Producción de hidrógeno (H2) mediante procesos de pirólisis de rocas sedimentarias del Valle Medio del Magdalena como base para el entendimiento de la generación de hidrógeno geológico",
  },
  {
    id: "Charla 5",
    speaker: "Sergio Acevedo",
    title:
      "Captura de CO2 en biochars preparados por activación química a partir de residuos agroindustriales",
  },
  {
    id: "Charla 6",
    speaker: "Johan Flechas",
    title:
      "Síntesis y estudio conformacional de ligandos tipo imina-pirazol con aplicación en el desarrollo de complejos de coordinación de Ru(II)",
  },
  {
    id: "Charla 7",
    speaker: "Jeisson Vasco",
    title:
      "Generación de sistemas híbridos para la reducción del deterioro ambiental asociado a la presencia de metales pesados y contaminantes emergentes en ecosistemas acuáticos de Antioquia, Nariño, Tolima y Bogotá D.C.",
  },
  {
    id: "Charla 8",
    speaker: "Eliana Herrera",
    title:
      "Obtención de Polvos Microestructurados por Liofilización a Partir de la Cascarilla de Café: Química del Material de Pared y Desempeño Funcional",
  },
  {
    id: "Charla 9",
    speaker: "Manuel Jiménez",
    title:
      "Valorización integral del limón Tahití (Citrus latifolia): actividad antioxidante del zumo con potencial terapéutico y síntesis de carbon quantum dots a partir del bagazo con potencial como nanobioestimulantes",
  },
  {
    id: "Charla 10",
    speaker: "Juan Concha",
    title:
      "Obtención sostenible de oleorresina rica en carotenoides de Capsicum baccatum var. Pendulum cultivado en Antioquia",
  },
  {
    id: "Charla 11",
    speaker: "Julián Correa",
    title:
      "Caracterización computacional de nanomateriales en la era de la IA",
  },
  {
    id: "Charla 12",
    speaker: "Alexandra Ríos",
    title:
      "Oxidación mecanoenzimática de alcoholes empleando el sistema lacasa-TEMPO-O2",
  },
  {
    id: "Charla 13",
    speaker: "Gabriel García",
    title:
      "Adsorción secuencial y saturación de NO en fullerenos B12N12-xCx, x=0-3",
  },
  {
    id: "Charla 14",
    speaker: "Mario Valdés",
    title:
      "AMDock-VS: Una plataforma integrada y escalable para el acoplamiento molecular y el cribado virtual.",
  },
]

export const sessionGroups: SessionGroup[] = [
  {
    auditorium: 3,
    date: "2026-11-12",
    chair: "Javier Arcíbar",
    coChair: "Robison Buitrago",
    talkIds: ["Charla 1", "Charla 3", "Charla 5", "Charla 7", "Charla 9"],
  },
  {
    auditorium: 2,
    date: "2026-11-12",
    chair: "Francisco Núñez",
    coChair: "Alejandro Vásquez",
    talkIds: ["Charla 2", "Charla 4", "Charla 6", "Charla 8", "Charla 10"],
  },
  {
    auditorium: 3,
    date: "2026-11-13",
    chair: "Simón Reyes",
    coChair: "Alexa González",
    talkIds: ["Charla 11", "Charla 13"],
  },
  {
    auditorium: 2,
    date: "2026-11-13",
    chair: "Albeiro Restrepo",
    coChair: "Marcela Paredes",
    talkIds: ["Charla 12", "Charla 14"],
  },
]