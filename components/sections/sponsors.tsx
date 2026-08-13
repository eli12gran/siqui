import Image from "next/image"

export function Sponsors() {
  return (
    <section id="sponsors" className="w-full py-12 md:py-24 lg:py-24">
      <div className="container px-4 md:px-6">
        {/* Organiza Section (Centered) */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Organiza:</h2>
          </div>
        </div>

        {/* Sponsor Logo Grid */}
        <div className="mx-auto py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-1">
            {["/sponsors/universidad_medellin.webp"].map((src, i) => (
              <div key={`platinum-${i}`} className="flex items-center justify-center">
                <Image
                  src={src}
                  width={200}
                  height={100}
                  alt={`Platinum Sponsor ${i + 1}`}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Apoya Section (Now Centered) */}
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Apoya:</h2>
        </div>
        <div className="mx-auto py-12">
          {/*<div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3">*/}
          <div className="grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-1">
            {[
              { src: "/sponsors/siqui3/sponsor1.webp", alt: "Academia Joven de Colombia", h: "h-50" }
            ].map((sponsor, i) => (
              <div key={`platinum-${i}`} className="flex items-center justify-center">

                {/* container enforces a consistent box size; tweak sponsor.h per-logo if needed */}

                <div className={`flex items-center justify-center max-w-[180px] w-full ${sponsor.h}`}>
                  <Image
                    src={sponsor.src}
                    width={200}
                    height={100}
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
