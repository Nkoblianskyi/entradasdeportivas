import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Trophy } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Deportes | EntradasDeportivas",
  description: "Explora todos los deportes disponibles. Fútbol, tenis, baloncesto, motociclismo y más.",
}

export default function DeportesPage() {
  const deportes = [
    {
      slug: "futbol",
      title: "Fútbol",
      description: "La Liga, Champions League, Copa del Rey y competiciones internacionales",
      image: "/soccer-match-stadium-action.jpg",
      ligas: ["La Liga", "Champions League", "Copa del Rey", "Europa League"],
    },
    {
      slug: "tenis",
      title: "Tenis",
      description: "Grand Slams, ATP Masters, WTA y torneos nacionales",
      image: "/tennis-match-professional-player.jpg",
      ligas: ["ATP Masters", "WTA", "Grand Slam", "Copa Davis"],
    },
    {
      slug: "baloncesto",
      title: "Baloncesto",
      description: "Liga ACB, Euroliga y competiciones internacionales",
      image: "/basketball-game-action-dunk.jpg",
      ligas: ["Liga ACB", "Euroliga", "Copa del Rey", "Supercopa"],
    },
    {
      slug: "hockey",
      title: "Hockey Hielo",
      description: "Liga Nacional, Champions Hockey League y competiciones europeas",
      image: "/ice-hockey-match-action.jpg",
      ligas: ["Liga Nacional", "Champions Hockey League", "Copa del Rey", "Torneos Internacionales"],
    },
    {
      slug: "motociclismo",
      title: "Motociclismo",
      description: "MotoGP, Moto2, Moto3 y campeonatos mundiales",
      image: "/985b18257aa04197f7bdb6b98d456a6a.jpg",
      ligas: ["MotoGP", "Moto2", "Moto3", "Superbikes"],
    },
    {
      slug: "formula-1",
      title: "Fórmula 1",
      description: "Gran Premio de España, Mónaco, y todos los circuitos del mundial",
      image: "/formula-1-car-on-track.png",
      ligas: ["Gran Premio de España", "Gran Premio de Mónaco", "Campeonato Mundial", "Clasificación"],
    },
    {
      slug: "balonmano",
      title: "Balonmano",
      description: "Liga Asobal, Champions League y selección nacional",
      image: "/handball-match-action.png",
      ligas: ["Liga Asobal", "Champions League", "Copa del Rey", "Supercopa"],
    },
    {
      slug: "ciclismo",
      title: "Ciclismo",
      description: "Vuelta a España, Tour de Francia y competiciones de ruta",
      image: "/professional-cycling-race-peloton.jpg",
      ligas: ["Vuelta a España", "Tour de Francia", "Giro de Italia", "Clásicas"],
    },

    {
      slug: "rugby",
      title: "Rugby",
      description: "División de Honor, Six Nations y competiciones internacionales",
      image: "/rugby-match-scrum-action.jpg",
      ligas: ["División de Honor", "Copa del Rey", "Six Nations", "Champions Cup"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Todos los Deportes
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Descubre eventos de tus deportes favoritos y consigue las mejores entradas
            </p>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {deportes.map((deporte) => (
              <Card
                key={deporte.slug}
                className="group flex flex-col h-full overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={deporte.image || "/placeholder.svg"}
                    alt={deporte.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-balance text-3xl font-bold text-white">{deporte.title}</h2>
                  </div>
                </div>
                <CardContent className="flex flex-col flex-1 p-6">
                  <p className="mb-4 text-pretty text-muted-foreground">{deporte.description}</p>
                  <div className="mb-6">
                    <h3 className="mb-3 text-sm font-semibold text-foreground">Competiciones disponibles:</h3>
                    <div className="flex flex-wrap gap-2">
                      {deporte.ligas.map((liga) => (
                        <span
                          key={liga}
                          className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {liga}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full mt-auto">
                    <Link href={`/deportes/${deporte.slug}`}>
                      Ver Eventos de {deporte.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              ¿No encuentras tu deporte?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Contáctanos y te ayudaremos a encontrar las entradas que necesitas para cualquier evento deportivo
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contacto">
                Contactar Ahora
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
                  <Link href="/deportes/hockey" className="text-muted-foreground hover:text-primary">
                    Hockey Hielo
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/motociclismo" className="text-muted-foreground hover:text-primary">
                    Motociclismo
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/formula-1" className="text-muted-foreground hover:text-primary">
                    Fórmula 1
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/balonmano" className="text-muted-foreground hover:text-primary">
                    Balonmano
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/ciclismo" className="text-muted-foreground hover:text-primary">
                    Ciclismo
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/voleibol" className="text-muted-foreground hover:text-primary">
                    Voleibol
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/rugby" className="text-muted-foreground hover:text-primary">
                    Rugby
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/atletismo" className="text-muted-foreground hover:text-primary">
                    Atletismo
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/boxeo" className="text-muted-foreground hover:text-primary">
                    Boxeo
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/padel" className="text-muted-foreground hover:text-primary">
                    Pádel
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
