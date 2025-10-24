import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Entradas Deportivas | Acceso a Eventos Deportivos en España",
    template: "%s | Entradas Deportivas",
  },
  description:
    "Facilitamos tu acceso a los mejores eventos deportivos en España. Fútbol, tenis, baloncesto, Fórmula 1, MotoGP, rugby y más. Organiza tu viaje a La Liga, Champions League, ATP Masters y otras competiciones.",
  keywords: [
    "entradas deportivas",
    "eventos deportivos España",
    "fútbol España",
    "La Liga",
    "Champions League",
    "tenis ATP",
    "baloncesto ACB",
    "Fórmula 1 España",
    "MotoGP",
    "rugby España",
    "hockey hielo",
    "viajes deportivos",
    "experiencias deportivas",
  ],
  authors: [{ name: "Entradas Deportivas" }],
  creator: "Entradas Deportivas",
  publisher: "Entradas Deportivas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://entradasdeportivas.online"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://entradasdeportivas.online",
    title: "Entradas Deportivas | Acceso a Eventos Deportivos en España",
    description:
      "Facilitamos tu acceso a los mejores eventos deportivos en España. Fútbol, tenis, baloncesto, Fórmula 1, MotoGP y más.",
    siteName: "Entradas Deportivas",
    images: [
      {
        url: "/sports-collage-hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Eventos deportivos en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entradas Deportivas | Acceso a Eventos Deportivos en España",
    description:
      "Facilitamos tu acceso a los mejores eventos deportivos en España. Fútbol, tenis, baloncesto, Fórmula 1, MotoGP y más.",
    images: ["/sports-collage-hero-background.jpg"],
    creator: "@entradasdeportivas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
