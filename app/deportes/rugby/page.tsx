import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight, Trophy, Users, Clock } from "lucide-react"

export const metadata = {
  title: "Rugby | EntradasDeportivas",
  description:
    "Entradas para partidos de rugby en España. División de Honor, Six Nations y competiciones internacionales.",
}

export default function RugbyPage() {
  const eventos = [
    {
      id: 1,
      title: "Viaje a Partido de División de Honor",
      date: "2025",
      location: "Campos en España",
      image: "/rugby-match-scrum-action.jpg",
      category: "División de Honor",
    },
    {
      id: 2,
      title: "Viaje a Copa del Rey de Rugby",
      date: "2025",
      location: "Sede del torneo",
      image: "/rugby-match-scrum-action.jpg",
      category: "Copa del Rey",
    },
    {
      id: 3,
      title: "Viaje a Six Nations",
      date: "2025",
      location: "Estadios europeos",
      image: "/rugby-match-scrum-action.jpg",
      category: "Six Nations",
    },
    {
      id: 4,
      title: "Viaje a Champions Cup",
      date: "2025",
      location: "Estadios europeos",
      image: "/rugby-match-scrum-action.jpg",
      category: "Champions Cup",
    },
  ]

  const competiciones = [
    { name: "División de Honor", description: "Liga Nacional Española" },
    { name: "Copa del Rey", description: "Torneo Nacional de Eliminación" },
    { name: "Six Nations", description: "Torneo Internacional Europeo" },
    { name: "Champions Cup", description: "Competición Europea de Clubes" },
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
              Entradas de Rugby
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Consigue entradas para los mejores partidos de rugby en España y Europa
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Sobre el Rugby</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                El rugby es un deporte de equipo de contacto que se juega con un balón ovalado. Dos equipos de 15
                jugadores (rugby union) compiten para marcar puntos llevando el balón a la zona de ensayo del rival o
                pateándolo entre los postes. El rugby se caracteriza por su intensidad física, trabajo en equipo y
                valores de respeto y deportividad.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Jugadores</h3>
                    <p className="text-sm text-muted-foreground">15 por equipo en el campo</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Duración</h3>
                    <p className="text-sm text-muted-foreground">80 minutos (2 tiempos de 40')</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Trophy className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Objetivo</h3>
                    <p className="text-sm text-muted-foreground">Marcar más puntos que el rival</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-pretty leading-relaxed">
                En España, la División de Honor es la máxima categoría del rugby nacional. A nivel internacional, el Six
                Nations es uno de los torneos más prestigiosos del hemisferio norte, mientras que la Champions Cup reúne
                a los mejores clubes europeos. El rugby combina fuerza física, estrategia táctica y un profundo sentido
                del juego en equipo.
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
                    <Link href={`/contacto?evento=${evento.id}&deporte=rugby`}>
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
                  <Link href="/deportes/rugby" className="text-muted-foreground hover:text-primary">
                    Rugby
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/baloncesto" className="text-muted-foreground hover:text-primary">
                    Baloncesto
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
