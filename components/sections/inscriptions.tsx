export function Inscriptions() {
  return (
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
  )
}
