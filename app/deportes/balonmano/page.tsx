import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, Trophy, Calendar, MapPin } from "lucide-react"

export const metadata = {
  title: "Balonmano | EntradasDeportivas",
  description: "Entradas para partidos de balonmano en España. Liga Asobal, Champions League y más.",
}

export default function BalonmanoPage() {
  const competiciones = [
    { nombre: "Liga Asobal", descripcion: "La máxima competición española de balonmano" },
    { nombre: "Champions League", descripcion: "La élite del balonmano europeo" },
    { nombre: "Copa del Rey", descripcion: "El torneo del KO español" },
    { nombre: "Supercopa", descripcion: "Enfrentamiento entre campeones" },
  ]

  const eventos = [
    {
      title: "Viaje a Partido de Liga Asobal",
      date: "2025",
      location: "Palau Blaugrana, Barcelona",
      image: "/handball-match-action.png",
    },
    {
      title: "Viaje a Champions League de Balonmano",
      date: "2025",
      location: "WiZink Center, Madrid",
      image: "/handball-championship-game.jpg",
    },
    {
      title: "Viaje a Copa del Rey de Balonmano",
      date: "2025",
      location: "Pabellón Príncipe Felipe, Zaragoza",
      image: "/handball-tournament.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Balonmano
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Vive la intensidad del balonmano español y europeo
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h2 className="mb-6 text-3xl font-bold text-foreground">Sobre el Balonmano</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    El balonmano es un deporte de equipo en el que dos equipos de siete jugadores cada uno (seis
                    jugadores de campo y un portero) compiten por marcar goles lanzando un balón con las manos en la
                    portería contraria.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-3 font-semibold text-foreground">Características Principales</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>Duración: 2 tiempos de 30 minutos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>Jugadores: 7 por equipo (6 de campo + 1 portero)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>Campo: 40m x 20m</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>Portería: 3m x 2m</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 font-semibold text-foreground">Reglas Básicas</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>Máximo 3 pasos con el balón sin botar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>Máximo 3 segundos con el balón en las manos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>Área de 6 metros solo para el portero</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>Lanzamiento de 7 metros por faltas graves</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Competiciones Disponibles</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {competiciones.map((comp) => (
                <Card key={comp.nombre} className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{comp.nombre}</h3>
                    <p className="text-sm text-muted-foreground">{comp.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Próximos Eventos</h2>
            <div className="space-y-4">
              {eventos.map((evento, index) => (
                <Card
                  key={index}
                  className="flex flex-col transition-all hover:shadow-md md:flex-row md:items-center md:justify-between"
                >
                  <CardContent className="flex flex-1 flex-col gap-4 p-6 md:flex-row md:items-center">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{evento.title}</h3>
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
                      <Link href="/contacto?deporte=balonmano">
                        Solicitar Entradas
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              ¿Listo para vivir el balonmano en directo?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Contacta con nosotros y te ayudaremos a conseguir las mejores entradas
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contacto?deporte=balonmano">
                Solicitar Entradas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
              <h4 className="mb-4 text-sm font-semibold text-foreground">Deportes Populares</h4>
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
                  <Link href="/deportes/balonmano" className="text-muted-foreground hover:text-primary">
                    Balonmano
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
