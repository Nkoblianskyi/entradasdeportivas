import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight, Trophy, Users, Clock } from "lucide-react"

export const metadata = {
  title: "Fórmula 1 | EntradasDeportivas",
  description: "Entradas para Grandes Premios de Fórmula 1. GP de España, Mónaco y todos los circuitos del mundial.",
}

export default function Formula1Page() {
  const eventos = [
    {
      id: 1,
      title: "Viaje al Gran Premio de España",
      date: "2025",
      location: "Circuit de Barcelona-Catalunya",
      image: "/formula-1-car-on-track.png",
      category: "Gran Premio",
    },
    {
      id: 2,
      title: "Viaje al Gran Premio de Mónaco",
      date: "2025",
      location: "Circuit de Monaco",
      image: "/formula-1-car-on-track.png",
      category: "Gran Premio",
    },
    {
      id: 3,
      title: "Viaje a Grandes Premios Europeos",
      date: "Abril - Septiembre, 2025",
      location: "Circuitos europeos",
      image: "/formula-1-car-on-track.png",
      category: "Campeonato Mundial",
    },
    {
      id: 4,
      title: "Viaje a Sesiones de Clasificación",
      date: "Durante la temporada",
      location: "Varios circuitos",
      image: "/formula-1-car-on-track.png",
      category: "Clasificación",
    },
  ]

  const competiciones = [
    { name: "Gran Premio de España", description: "Carrera en Barcelona-Catalunya" },
    { name: "Gran Premio de Mónaco", description: "Carrera urbana más prestigiosa" },
    { name: "Campeonato Mundial", description: "Temporada completa de F1" },
    { name: "Sesiones de Clasificación", description: "Clasificación para la carrera" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Entradas de Fórmula 1
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Consigue entradas para los Grandes Premios de Fórmula 1 en España y Europa
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Sobre la Fórmula 1</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                La Fórmula 1 es la categoría más alta del automovilismo internacional. Los monoplazas más rápidos y
                tecnológicamente avanzados del mundo compiten en circuitos de todo el planeta. Cada Gran Premio incluye
                sesiones de entrenamientos libres, clasificación y la carrera principal.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Pilotos</h3>
                    <p className="text-sm text-muted-foreground">20 pilotos en 10 equipos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Duración</h3>
                    <p className="text-sm text-muted-foreground">Aprox. 90 minutos de carrera</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Trophy className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Objetivo</h3>
                    <p className="text-sm text-muted-foreground">Completar las vueltas en menor tiempo</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-pretty leading-relaxed">
                El Campeonato Mundial de Fórmula 1 se disputa en más de 20 Grandes Premios alrededor del mundo. El Gran
                Premio de España en el Circuit de Barcelona-Catalunya es uno de los eventos más esperados de la
                temporada europea. La F1 combina velocidad extrema, estrategia de equipo y tecnología de vanguardia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">Grandes Premios Disponibles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {competiciones.map((comp) => (
              <Card key={comp.name} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{comp.name}</h3>
                  <p className="text-pretty text-sm text-muted-foreground">{comp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Viajes Disponibles</h2>
            <Button asChild variant="outline">
              <Link href="/eventos">Ver Todos los Eventos</Link>
            </Button>
          </div>
          <div className="space-y-4">
            {eventos.map((evento) => (
              <Card
                key={evento.id}
                className="flex flex-col transition-all hover:shadow-md md:flex-row md:items-center md:justify-between"
              >
                <CardContent className="flex flex-1 flex-col gap-4 p-6 md:flex-row md:items-center">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{evento.category}</Badge>
                      <h3 className="text-lg font-semibold text-foreground">{evento.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{evento.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{evento.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild className="md:w-auto">
                    <Link href={`/contacto?evento=${evento.id}&deporte=formula-1`}>
                      Solicitar Entradas
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">EntradasDeportivas</h3>
              <p className="text-pretty text-sm text-muted-foreground">
                Tu plataforma de confianza para entradas deportivas en España.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/eventos" className="text-muted-foreground hover:text-primary">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="/deportes" className="text-muted-foreground hover:text-primary">
                    Deportes
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-muted-foreground hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Deportes</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/deportes/futbol" className="text-muted-foreground hover:text-primary">
                    Fútbol
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/formula-1" className="text-muted-foreground hover:text-primary">
                    Fórmula 1
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/motociclismo" className="text-muted-foreground hover:text-primary">
                    Motociclismo
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/tenis" className="text-muted-foreground hover:text-primary">
                    Tenis
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terminos" className="text-muted-foreground hover:text-primary">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/politica-privacidad" className="text-muted-foreground hover:text-primary">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/politica-cookies" className="text-muted-foreground hover:text-primary">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EntradasDeportivas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
