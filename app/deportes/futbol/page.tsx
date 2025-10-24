import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight, Trophy, Users, Clock } from "lucide-react"

export const metadata = {
  title: "Fútbol | EntradasDeportivas",
  description: "Entradas para partidos de fútbol en España. La Liga, Champions League, Copa del Rey y más.",
}

export default function FutbolPage() {
  const eventos = [
    {
      id: 1,
      title: "Viaje a Partido de La Liga",
      date: "2025",
      location: "Varios estadios en España",
      image: "/soccer-match-stadium-action.jpg",
      category: "La Liga",
    },
    {
      id: 2,
      title: "Viaje a Partido de Champions League",
      date: "2025",
      location: "Estadios en España",
      image: "/soccer-match-stadium-action.jpg",
      category: "Champions League",
    },
    {
      id: 3,
      title: "Viaje a Partido de Copa del Rey",
      date: "2025",
      location: "Varios estadios",
      image: "/soccer-match-stadium-action.jpg",
      category: "Copa del Rey",
    },
    {
      id: 4,
      title: "Viaje a Partido de Europa League",
      date: "2025",
      location: "Estadios en España",
      image: "/soccer-match-stadium-action.jpg",
      category: "Europa League",
    },
  ]

  const competiciones = [
    { name: "La Liga", description: "Primera División Española" },
    { name: "Champions League", description: "Liga de Campeones de la UEFA" },
    { name: "Copa del Rey", description: "Torneo Nacional" },
    { name: "Europa League", description: "Liga Europa de la UEFA" },
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
              Entradas de Fútbol
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Consigue entradas para los mejores partidos de fútbol en España
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Sobre el Fútbol</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                El fútbol es el deporte más popular del mundo, jugado por dos equipos de 11 jugadores cada uno. El
                objetivo es marcar goles introduciendo el balón en la portería contraria, usando cualquier parte del
                cuerpo excepto las manos y los brazos (solo el portero puede usar las manos dentro de su área).
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Jugadores</h3>
                    <p className="text-sm text-muted-foreground">11 por equipo en el campo</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Duración</h3>
                    <p className="text-sm text-muted-foreground">90 minutos (2 tiempos de 45')</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Trophy className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Objetivo</h3>
                    <p className="text-sm text-muted-foreground">Marcar más goles que el rival</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-pretty leading-relaxed">
                En España, La Liga es la competición doméstica más importante, mientras que la Champions League y la
                Europa League representan las competiciones europeas de mayor prestigio. La Copa del Rey es el torneo
                nacional de eliminación directa más antiguo del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">Competiciones Disponibles</h2>
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
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Viajes Disponibles</h2>
            <p className="mt-2 text-muted-foreground">Solicita información sobre viajes a estas competiciones</p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {eventos.map((evento) => (
              <Card key={evento.id} className="transition-all hover:shadow-md">
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{evento.category}</Badge>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">{evento.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
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
                    <Link href={`/contacto?evento=${evento.id}&deporte=futbol`}>
                      Solicitar Información
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
                  <Link href="/deportes/tenis" className="text-muted-foreground hover:text-primary">
                    Tenis
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/baloncesto" className="text-muted-foreground hover:text-primary">
                    Baloncesto
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/motociclismo" className="text-muted-foreground hover:text-primary">
                    Motociclismo
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
