# SIQUI UdeMedellín

Sitio web del **Simposio de Química de la Universidad de Medellín (SIQUI)**, organizado por el grupo de investigación Materiales con Impacto (Mat&mpac). El sitio en producción está en [siquiudem.com](https://www.siquiudem.com/).

## ¿Qué es este proyecto?

Es la página informativa y de memorias del SIQUI: una landing con la información de la edición vigente del evento (fecha, lugar, cronograma, inscripciones, patrocinadores) y un archivo histórico ("Memorias") con el resumen, fotos y estadísticas de cada edición pasada (SIQUI I, SIQUI II, ...).

## ¿Qué problemas resuelve?

- Le da al simposio un punto único y actualizable para comunicar fecha, lugar, cronograma y estado de las inscripciones de cada edición, sin depender de redes sociales o volantes.
- Preserva la memoria histórica del evento (fotos, estadísticas de asistentes, temas tratados, materiales descargables) edición por edición, en vez de perderla una vez termina el simposio.
- Centraliza las plantillas que necesitan los participantes (resumen de proyecto, póster, presentación) para un solo lugar de descarga.

## Arquitectura

Next.js 15 (App Router) + React 19 + TypeScript, estilizado con Tailwind CSS y componentes de [shadcn/ui](https://ui.shadcn.com/) sobre Radix UI. Es un sitio mayormente estático (páginas prerenderizadas), sin backend propio.

```
app/                        Rutas (App Router)
  page.tsx                    Landing principal (edición vigente)
  memorias/page.tsx           Índice de ediciones pasadas
  memorias/siqui-i/           Memorias de la primera edición
  memorias/siqui-ii/          Memorias de la segunda edición

components/
  sections/                 Bloques de la landing (Header, Hero, About,
                             Schedule, Venue, Sponsors, Footer, etc.)
  memorias/                 Bloques reutilizables de las páginas de
                             memorias (EditionHeader, SpeakerGrid,
                             PieChartCard, CommitteesSection, etc.)
  ui/                        Componentes base de shadcn/ui (Button, Card,
                             Dialog, Toast, ...), generados por su CLI

lib/
  data/schedule.ts           Datos del cronograma de la landing (separados del JSX)
  data/editions/             Contenido de cada edición pasada del SIQUI
                             (types.ts + un archivo por edición: siqui-i.ts,
                             siqui-ii.ts — ponentes, comités, estadísticas,
                             galería), consumido por components/memorias/
  utils.ts                    Helpers (cn, etc.)

hooks/                      Hooks compartidos (use-mobile, use-toast)

public/
  branding/                  Logo del evento
  speakers/                  Fotos de ponentes y comités
  sponsors/                  Logos de universidades/patrocinadores
  gallery/                   Imágenes generales del evento
  memories/                  Fotos, videos y PDFs de memorias por edición
  templates/                 Plantillas descargables (resumen, póster, PPT)
```

Cada nueva edición del SIQUI (ej. SIQUI III) se agrega creando `lib/data/editions/siqui-iii.ts` con su contenido, y una página delgada en `app/memorias/siqui-iii/page.tsx` que compone los componentes ya existentes de `components/memorias/` — sin copiar JSX ni duplicar componentes.

## Requisitos

- Node.js `^18.18.0 || ^19.8.0 || >=20.0.0` (requerido por Next.js 15.5)
- npm (gestor de paquetes del proyecto; hay un solo lockfile, `package-lock.json`)

## Cómo ejecutarlo localmente

```bash
npm install
npm run dev
```

Esto levanta el servidor de desarrollo en [http://localhost:3000](http://localhost:3000) con recarga en caliente.

## Cómo construirlo para producción

```bash
npm run build   # compila, corre type-checking y ESLint, y genera el build de producción
npm run start   # sirve el build generado
```

`npm run build` falla si hay errores de TypeScript o de ESLint — no se pueden ignorar silenciosamente (ver `next.config.mjs`). Antes de abrir un PR, correr también:

```bash
npm run lint   # eslint . directo (next lint quedó deprecado)
```

Un workflow de GitHub Actions (`.github/workflows/ci.yml`) corre `npm ci` + `npm run build` en cada push y PR contra `main`, así que cualquier error de tipos o de lint bloquea el check automáticamente.

## Despliegue en Vercel

El sitio se despliega en Vercel (`vercel.json` ya trae la configuración del framework). Para desplegar manualmente:

```bash
npm install -g vercel
vercel login        # una sola vez
vercel               # despliega un preview
vercel --prod        # despliega a producción
```

## Cómo contribuir

1. Crea una rama a partir de `main` para tu cambio.
2. Antes de comitear, corre `npm run build` (incluye type-check + lint) y confirma que pasa limpio.
3. Sigue el estilo de mensajes de commit ya usado en el historial: prefijos tipo `fix:`, `feat:`, `refactor:` seguidos de una descripción corta en presente, y el cuerpo explicando el *por qué* del cambio cuando no sea obvio.
4. Al agregar una nueva edición del simposio, sigue las convenciones ya existentes: su contenido va en un archivo nuevo de `lib/data/editions/` (no hardcodeado en el JSX), sus fotos en `public/speakers/`, sus logos en `public/sponsors/` o `public/branding/`, y la página se compone reutilizando `components/memorias/`.
5. Abre un pull request contra `main` describiendo el cambio y su motivo.
