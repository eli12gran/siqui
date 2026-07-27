export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-15">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-justify">
          <div className="space-y-6 max-w-5xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre el evento</h2>
            <p className="text-muted-foreground md:text-xl leading-relaxed">
              La Universidad de Medellín y el Grupo de Investigación Materiales con Impacto (Mat&mpac) presentan el III Simposio de Química UdeMedellín, un espacio de encuentro, diálogo y divulgación científica que se llevará a cabo los días 12 y 13 de noviembre de 2026, en la Universidad de Medellín, en el marco de la celebración del Día del Químico.
            </p>
            <p className="text-muted-foreground md:text-xl leading-relaxed">
              Bajo el lema &ldquo;Química para la sostenibilidad con impacto social&rdquo;, esta tercera edición invita a reconocer el papel de la química como una ciencia fundamental para comprender y transformar nuestro entorno. A través del intercambio de conocimientos y experiencias, el simposio reunirá a investigadores, docentes, estudiantes y profesionales interesados en compartir avances, perspectivas y soluciones que contribuyan a enfrentar los desafíos actuales desde la ciencia, la innovación y la sostenibilidad.
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
  )
}
