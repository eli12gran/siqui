export type Auditorium = 2 | 3

export type EventType =
  | "general"
  | "plenary"
  | "invited"
  | "break"
  | "special"

export type ScheduleEvent = {
  time: string
  title: string
  location?: string
  type: EventType
  auditorium: Auditorium | "both"
}

export type ParallelSession = {
  time: string
  talks: {
    talkId: string
    auditorium: Auditorium
  }[]
}

export type ScheduleBlock =
  | {
      type: "event"
      event: ScheduleEvent
    }
  | {
      type: "parallel"
      session: ParallelSession
    }

export type DaySchedule = {
  date: string
  blocks: ScheduleBlock[]
}

export const thursdaySchedule: DaySchedule = {
  date: "Jueves 12 de noviembre",
  blocks: [
    {
      type: "event",
      event: {
        time: "07:30 - 08:30",
        title: "Registro e inscripciones",
        location: "Entrada del Auditorio 3 - Bloque 11",
        type: "general",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "08:30 - 08:45",
        title: "Bienvenida",
        location: "Auditorio 3",
        type: "general",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "08:45 - 09:30",
        title: "Plenaria #1 Dr. Javier Arcibar: Transformación de residuos de carbones porosos para su uso en baterías de Li-S",
        location: "Auditorio 3",
        type: "plenary",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "09:30 - 10:00",
        title: "Conferencista invitado #1 Dra. Alexa González: De la academia a la industria: La química como herramienta para transformar problemas en soluciones",
        location: "Auditorio 3",
        type: "invited",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "10:00 - 10:30",
        title: "Coffee Break",
        type: "break",
        auditorium: "both",
      },
    },

    // Parallel oral presentations
    ...["10:30 - 10:45", "10:45 - 11:00", "11:00 - 11:15",
      "11:15 - 11:30", "11:30 - 11:45"].map((time, index) => ({
      type: "parallel" as const,
      session: {
        time,
        talks: [
          {
            talkId: `Charla ${index * 2 + 1}`,
            auditorium: 3 as const,
          },
          {
            talkId: `Charla ${index * 2 + 2}`,
            auditorium: 2 as const,
          },
        ],
      },
    })),

    {
      type: "event",
      event: {
        time: "12:00 - 14:00",
        title: "Almuerzo libre",
        type: "break",
        auditorium: "both",
      },
    },
    {
      type: "event",
      event: {
        time: "14:00 - 14:45",
        title: "Plenaria #2 Dra. Karol Zapata: Rol de las mujeres en la ciencia. De las brechas a las posibilidades: mujeres, ciencia y transformación social.",
        location: "Auditorio 3",
        type: "plenary",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "14:45 - 15:15",
        title: "Conferencista invitado #2 Simón Reyes: Diseño y aplicación de nanomateriales y compósitos híbridos para la sostenibilidad ambiental",
        location: "Auditorio 3",
        type: "invited",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "15:15 - 16:00",
        title: "Coffee Break / Cóctel y foto grupal",
        location: "Auditorio 3",
        type: "break",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "16:00 - 16:25",
        title: "Intervención musical",
        location: "Auditorio 3",
        type: "special",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "16:25 - 18:30",
        title: "Exposición de pósteres",
        location: "Pasillo Bloque 11 y Auditorio 1",
        type: "special",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "21:00 - 24:00",
        title: "Actividad social",
        type: "special",
        auditorium: "both",
      },
    },
  ],
}

export const fridaySchedule: DaySchedule = {
  date: "Viernes 13 de noviembre",
  blocks: [
    {
      type: "event",
      event: {
        time: "09:00 - 09:45",
        title: "Plenaria #3 Dr. Jahir Orozco: Nanochemistry in precision medicine of colorectal cancer",
        location: "Auditorio 3",
        type: "plenary",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "09:45 - 10:15",
        title: "Conferencista invitado #3 Dr. Alejandro Vasquez: Aplicaciones de la fisicoquímica desde una perspectiva molecular",
        location: "Auditorio 3",
        type: "invited",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "10:15 - 10:45",
        title: "Conferencista invitado #4 Prof. Maria Eugenia Acevedo: “La Pacanería”​. Economía circular y evaluación exploratoria del compost y el biochar en una unidad productiva escolar, año 2026​",
        location: "Auditorio 3",
        type: "invited",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "10:45 - 11:00",
        title: "Coffee Break",
        type: "break",
        auditorium: 3,
      },
    },

    {
      type: "parallel",
      session: {
        time: "11:00 - 11:15",
        talks: [
          { talkId: "Charla 11", auditorium: 3 },
          { talkId: "Charla 12", auditorium: 2 },
        ],
      },
    },
    {
      type: "parallel",
      session: {
        time: "11:15 - 11:30",
        talks: [
          { talkId: "Charla 13", auditorium: 3 },
          { talkId: "Charla 14", auditorium: 2 },
        ],
      },
    },

    {
      type: "event",
      event: {
        time: "11:45 - 12:15",
        title: "Conversatorio",
        location: "Auditorio 3",
        type: "plenary",
        auditorium: 3,
      },
    },
    {
      type: "event",
      event: {
        time: "12:15 - 12:45",
        title: "Premiación y clausura",
        location: "Auditorio 3",
        type: "special",
        auditorium: 3,
      },
    },
  ],
}