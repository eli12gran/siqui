import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_URL } from "@/lib/site"

const title = "SIQUI UdeMedellín 2026 — III Simposio de Química"
const description =
  "III Simposio de Química UdeMedellín, 12 y 13 de noviembre de 2026 en la Universidad de Medellín. Bajo el lema “Química para la sostenibilidad con impacto social”."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | SIQUI UdeMedellín",
  },
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "SIQUI UdeMedellín",
    images: [{ url: "/branding/Logo_2026.webp", width: 1417, height: 756, alt: title }],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@siquiudem",
    title,
    description,
    images: ["/branding/Logo_2026.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}