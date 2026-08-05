import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">SIQUI</span>
          <span className="text-muted-foreground">2026</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            Sobre SIQUI
          </Link>
          <Link href="#inscriptions" className="text-sm font-medium hover:text-primary">
            Inscripciones
          </Link>
          <Link href="#speakers" className="text-sm font-medium hover:text-primary">
            Ponentes
          </Link>
          {/*}
          <Link href="#committees" className="text-sm font-medium hover:text-primary">
            Comités
          </Link>*/}
          <Link href="/memorias" className="text-sm font-medium hover:text-primary">
            Memorias
          </Link>
          <Link href="#schedule" className="text-sm font-medium hover:text-primary">
            Cronograma
          </Link>
          <Link href="#venue" className="text-sm font-medium hover:text-primary">
            Lugar
          </Link>
          <Link href="#sponsors" className="text-sm font-medium hover:text-primary">
            Apoya
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <Link href="https://forms.gle/8F9XEfR99ucTv98q8" target="_blank" rel="noopener noreferrer">
              Regístrate aquí
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
