"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin, Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function EventosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSport, setSelectedSport] = useState("Todos")

  const eventos = [
    {
      id: 1,
      title: "Viaje a Partido de La Liga",
      sport: "Fútbol",
      date: "15 de Marzo, 2025",
      location: "Santiago Bernabéu, Madrid",
      image: "/soccer-match-stadium-action.jpg",
      category: "La Liga",
      featured: true,
    },
    {
      id: 2,
      title: "Viaje a Torneo ATP Masters",
      sport: "Tenis",
      date: "28 de Abril - 5 de Mayo, 2025",
      location: "Caja Mágica, Madrid",
      image: "/tennis-match-professional-player.jpg",
      category: "ATP Masters 1000",
      featured: true,
    },
    {
      id: 3,
      title: "Viaje a Partido de Liga ACB",
      sport: "Baloncesto",
      date: "22 de Marzo, 2025",
      location: "WiZink Center, Madrid",
      image: "/basketball-game-action-dunk.jpg",
      category: "Liga ACB",
      featured: false,
    },
    {
      id: 4,
      title: "Viaje a Gran Premio de MotoGP",
      sport: "Motociclismo",
      date: "4 de Mayo, 2025",
      location: "Circuit de Barcelona-Catalunya",
      image: "/985b18257aa04197f7bdb6b98d456a6a.jpg",
      category: "MotoGP",
      featured: true,
    },
    {
      id: 5,
      title: "Viaje a Partido de La Liga",
      sport: "Fútbol",
      date: "18 de Marzo, 2025",
      location: "Ramón Sánchez-Pizjuán, Sevilla",
      image: "/6e967976773eeda7cb65dcec005ce79f.jpg",
      category: "La Liga",
      featured: false,
    },
    {
      id: 6,
      title: "Viaje a Partido de Liga ACB",
      sport: "Baloncesto",
      date: "25 de Marzo, 2025",
      location: "Pabellón Fuente de San Luis, Valencia",
      image: "/05a22cc002e0fe5f08fed84e2bbbd2c4.jpg",
      category: "Liga ACB",
      featured: false,
    },
    {
      id: 7,
      title: "Viaje a Torneo ATP",
      sport: "Tenis",
      date: "10 de Abril, 2025",
      location: "Real Club de Tenis Barcelona",
      image: "/92e6ff4101fb80edc8cf44987d722b3a.jpg",
      category: "ATP 500",
      featured: false,
    },
    {
      id: 8,
      title: "Viaje a Gran Premio de Fórmula 1",
      sport: "Fórmula 1",
      date: "2 de Junio, 2025",
      location: "Circuit de Barcelona-Catalunya",
      image: "/formula-1-car-on-track.png",
      category: "F1 Gran Premio",
      featured: false,
    },
    {
      id: 9,
      title: "Viaje a Partido de Champions League",
      sport: "Fútbol",
      date: "8 de Abril, 2025",
      location: "Camp Nou, Barcelona",
      image: "/e92faad3cf410d079833c5c15c8a9c72.jpg",
      category: "Champions League",
      featured: false,
    },
    {
      id: 10,
      title: "Viaje a Partido de Hockey Hielo",
      sport: "Hockey",
      date: "20 de Marzo, 2025",
      location: "Palau de Gel, Barcelona",
      image: "/ice-hockey-match-action.jpg",
      category: "Liga Nacional",
      featured: false,
    },
  ]

  const deportes = ["Todos", "Fútbol", "Tenis", "Baloncesto", "Motociclismo", "Fórmula 1", "Hockey"]

  const filteredEventos = eventos.filter((evento) => {
    const matchesSearch =
      searchQuery === "" ||
      evento.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evento.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evento.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evento.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSport = selectedSport === "Todos" || evento.sport === selectedSport

    return matchesSearch && matchesSport
  })

  const featuredEventos = filteredEventos.filter((evento) => evento.featured)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Eventos Deportivos
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Descubre los mejores eventos deportivos en España y reserva tus entradas
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar eventos, equipos o deportes..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Badges */}
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-2">
            {deportes.map((deporte) => (
              <Badge
                key={deporte}
                variant={deporte === selectedSport ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-primary/10"
                onClick={() => setSelectedSport(deporte)}
              >
                {deporte}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEventos.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">Eventos Destacados</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredEventos.map((evento) => (
                <Card
                  key={evento.id}
                  className="group flex flex-col h-full overflow-hidden transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={evento.image || "/placeholder.svg"}
                      alt={evento.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                      {evento.category}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-balance text-xl font-bold text-white">{evento.title}</h3>
                    </div>
                  </div>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{evento.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{evento.location}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full mt-auto">
                      <Link href={`/contacto?evento=${evento.id}`}>
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
      )}

      {/* All Events */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
            Todos los Eventos {filteredEventos.length > 0 && `(${filteredEventos.length})`}
          </h2>
          {filteredEventos.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No se encontraron eventos que coincidan con tu búsqueda.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedSport("Todos")
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEventos.map((evento) => (
                <Card
                  key={evento.id}
                  className="group flex flex-col h-full overflow-hidden transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={evento.image || "/placeholder.svg"}
                      alt={evento.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                      {evento.category}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-balance text-xl font-bold text-white">{evento.title}</h3>
                    </div>
                  </div>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{evento.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{evento.location}</span>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="w-full mt-auto bg-transparent">
                      <Link href={`/contacto?evento=${evento.id}`}>
                        Solicitar Entradas
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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
                <li>
                  <Link href="/deportes/formula-1" className="text-muted-foreground hover:text-primary">
                    Fórmula 1
                  </Link>
                </li>
                <li>
                  <Link href="/deportes/hockey" className="text-muted-foreground hover:text-primary">
                    Hockey
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
