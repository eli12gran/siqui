import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">SIQUI</span>
          <span className="text-muted-foreground">2026</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Simposio de Química UdeMedellín. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Política de Privacidad
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Términos de Servicio
          </Link>
        </div>
      </div>
    </footer>
  )
}
