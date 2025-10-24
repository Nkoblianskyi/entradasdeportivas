import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight, Trophy, Users, Clock } from "lucide-react"

export const metadata = {
  title: "Motociclismo | EntradasDeportivas",
  description: "Entradas para carreras de motociclismo en España. MotoGP, Moto2, Moto3 y más.",
}

export default function MotociclismoPage() {
  const eventos = [
    {
      id: 1,
      title: "Viaje a Gran Premio de MotoGP",
      date: "2025",
      location: "Circuitos en España",
      image: "/motorcycle-racing-motogp-action.jpg",
      category: "MotoGP",
    },
    {
      id: 2,
      title: "Viaje a Carrera de Moto2",
      date: "2025",
      location: "Varios circuitos",
      image: "/motorcycle-racing-motogp-action.jpg",
      category: "Moto2",
    },
    {
      id: 3,
      title: "Viaje a Carrera de Moto3",
      date: "2025",
      location: "Circuitos españoles",
      image: "/motorcycle-racing-motogp-action.jpg",
      category: "Moto3",
    },
    {
      id: 4,
      title: "Viaje a Campeonato de Superbikes",
      date: "2025",
      location: "Por confirmar",
      image: "/motorcycle-racing-motogp-action.jpg",
      category: "Superbikes",
    },
  ]

  const competiciones = [
    { name: "MotoGP", description: "Categoría Reina" },
    { name: "Moto2", description: "Categoría Intermedia" },
    { name: "Moto3", description: "Categoría Junior" },
    { name: "Superbikes", description: "Campeonato Mundial" },
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
              Entradas de Motociclismo
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Siente la velocidad y la emoción del motociclismo mundial
            </p>
          </div>
        </div>
      </section>

      {/* New Section: About Motociclismo */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Sobre el Motociclismo</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                El motociclismo de velocidad es un deporte de motor que consiste en carreras de motocicletas en
                circuitos cerrados. MotoGP es la categoría reina del Campeonato Mundial, donde las motos más avanzadas
                tecnológicamente alcanzan velocidades superiores a 350 km/h. Las carreras se disputan en circuitos de
                todo el mundo.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Pilotos</h3>
                    <p className="text-sm text-muted-foreground">Individual por carrera</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Clock className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Duración</h3>
                    <p className="text-sm text-muted-foreground">Variable según circuito</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                    <Trophy className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Categorías</h3>
                    <p className="text-sm text-muted-foreground">MotoGP, Moto2, Moto3</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-pretty leading-relaxed">
                España cuenta con varios circuitos de prestigio internacional como el Circuit de Barcelona-Catalunya, el
                Circuito de Jerez y el Circuit Ricardo Tormo en Valencia. El país ha producido múltiples campeones
                mundiales y es una de las naciones más exitosas en la historia del motociclismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">Categorías Disponibles</h2>
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
                    <Link href={`/contacto?evento=${evento.id}&deporte=motociclismo`}>
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
