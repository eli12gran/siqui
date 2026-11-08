import Image from "next/image"

export function Sponsors() {
  return (
    <section id="sponsors" className="w-full py-12 md:py-24 lg:py-24">
      <div className="container px-4 md:px-6">
        {/* Organiza Section (Centered) */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Organiza:</h2>
          </div>
        </div>

        {/* Sponsor Logo Grid */}
        <div className="mx-auto py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-1">
            {["/sponsors/universidad_medellin.webp"].map((src, i) => (
              <div key={`platinum-${i}`} className="flex items-center justify-center">
                <Image
                  src={src}
                  width={300}
                  height={200}
                  alt={`Platinum Sponsor ${i + 1}`}
                  className="max-h-17 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
    Patrocina:
  </h2>
</div>

<div className="mx-auto py-12 space-y-8">

  {/* First row: 3 sponsors */}
  <div className="grid grid-cols-3 gap-4">
    {[
      { src: "/sponsors/siqui3/sponsor1.webp", alt: "Academia Joven de Colombia", h: "h-100" },
      { src: "/sponsors/cpq.webp", alt: "Consejo Profesional de Química Colombia", h: "h-120" },
      { src: "/sponsors/cecoltec.webp", alt: "Cecoltec", h: "h-120" },
    ].map((sponsor, i) => (
      <div key={i} className="flex items-center justify-center">
        <div className={`flex items-center justify-center max-w-[180px] w-full ${sponsor.h}`}>
          <Image
            src={sponsor.src}
            width={300}
            height={200}
            alt={sponsor.alt}
            className="w-auto max-h-full object-contain"
          />
        </div>
      </div>
    ))}
  </div>

  {/* Second row: 2 centered sponsors */}
  <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto">
    {[
      { src: "/sponsors/simprolab.webp", alt: "Simprolab", h: "h-120" },
      { src: "/sponsors/siqui3/mbk.png", alt: "Molecular Bucket Kit", h: "h-120" },
    ].map((sponsor, i) => (
      <div key={i} className="flex items-center justify-center">
        <div className={`flex items-center justify-center max-w-[180px] w-full ${sponsor.h}`}>
          <Image
            src={sponsor.src}
            width={300}
            height={200}
            alt={sponsor.alt}
            className="w-auto max-h-full object-contain"
          />
        </div>
      </div>
    ))}
  </div>

</div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Apoya:</h2>
        </div>

        <div className="mx-auto py-12">
          {/*<div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3">*/}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-1">
          {/*<div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3">*/}
            {[
              { src: "/sponsors/siqui3/ion.jpg", alt: "Revista ION", h: "h-100" }
            ].map((sponsor, i) => (
              <div key={`platinum-${i}`} className="flex items-center justify-center">

                <div className={`flex items-center justify-center max-w-[180px] w-full ${sponsor.h}`}>
                  <Image
                    src={sponsor.src}
                    width={300}
                    height={200}
                    alt={sponsor.alt || `Sponsor ${i + 1}`}
                    className="w-auto max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
