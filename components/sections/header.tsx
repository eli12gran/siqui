import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ExternalLink,
  Menu,
  X,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navigationLinks = [
  { href: "#about", label: "Sobre SIQUI" },
  { href: "#inscriptions", label: "Inscripciones" },
  { href: "#speakers", label: "Ponentes" },
  { href: "#committees", label: "Comités" },
  { href: "/memorias", label: "Memorias" },
  { href: "#schedule", label: "Cronograma" },
  { href: "#venue", label: "Lugar" },
  { href: "#sponsors", label: "Apoya" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <div className="container flex h-16 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">SIQUI</span>
          <span className="text-muted-foreground">2026</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />

          <Button asChild>
            <Link
              href="/templates/siqui3/Posters_SIQUI_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver listado Póster (PDF)
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] sm:w-[350px]">

              <SheetHeader>
                <SheetTitle className="text-left text-xl">
                  <span className="text-primary">SIQUI</span>
                  <span className="text-muted-foreground"> 2026</span>
                </SheetTitle>
              </SheetHeader>

              {/* Navigation links */}
              <nav className="mt-8 flex flex-col gap-1">
                {navigationLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-3 text-sm font-medium hover:bg-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* Registration button */}
              <div className="mt-8">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link
                      href="/templates/siqui3/Posters_SIQUI_2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver listado Póster (PDF)
                    <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </SheetClose>
              </div>

            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}