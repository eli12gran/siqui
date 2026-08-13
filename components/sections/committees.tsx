import Image from "next/image"

export function Committees() {
  return (
        <section id="committees" className="w-full py-12 md:py-20 lg:py-24">


          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comités de SIQUI 2025</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conozca a los reconocidos expertos que revisan las presentaciones y organizan el evento.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="space-y-12">
            
                <div className="space-y-12">
  
  <div className="container px-4 md:px-6">
  <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <div className="inline-block rounded-lg bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
        Comité Organizador
      </div>
    </div>
  </div>
</div>
  {/* Universidad de Medellín */}
  <div className="space-y-6 max-w-5xl mx-auto">
    <h4 className="text-center text-lg font-bold">Universidad de Medellín</h4>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {[
        {
          name: "María Angélica Forgionny",
          image: "/speakers/angelica.webp?height=150&width=150",
        },
        {
          name: "Carlos Jiménez",
          image: "/speakers/carlos.webp?height=150&width=150",
        },
        {
          name: "Nancy Acelas",
          image: "/speakers/nancy_arelas.webp?height=150&width=150",
        },
        {
          name: "Maria Isabel Mejía",
          image: "/speakers/maria_isabel.webp?height=150&width=150",
        },
      ].map((member, index) => (
        <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
          <Image
            src={member.image}
            alt={member.name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold">{member.name}</h4>
          </div>
        </div>
      ))}
    </div>
    </div>
              </div>
            </div>
            </div>
            </div>
        </section>
  )
}
