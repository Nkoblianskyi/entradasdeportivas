import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Ticket, Search, CreditCard, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const featuredEvents = [
    {
      title: "Fútbol",
      description: "Partidos de La Liga, Champions League y más",
      image: "/soccer-match-stadium-action.jpg",
      href: "/contacto?deporte=futbol",
    },
    {
      title: "Tenis",
      description: "Torneos ATP, WTA y Grand Slams",
      image: "/tennis-match-professional-player.jpg",
      href: "/contacto?deporte=tenis",
    },
    {
      title: "Baloncesto",
      description: "Liga ACB, Euroliga y competiciones internacionales",
      image: "/basketball-game-action-dunk.jpg",
      href: "/contacto?deporte=baloncesto",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/sports-collage-hero-background.jpg"
            alt="Eventos deportivos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85" />
        </div>
        <div className="container relative z-10 flex min-h-[600px] flex-col items-center justify-center gap-8 py-20 text-center md:py-32">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              Vive la Emoción del <span className="text-primary drop-shadow-lg">Deporte en Vivo</span>
            </h1>
            <p className="text-pretty text-lg text-white/90 drop-shadow-md md:text-xl lg:text-2xl">
              Encuentra y reserva entradas para los mejores eventos deportivos en España. Tu pasión, nuestra misión.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <Link href="/eventos">
                  Ver Eventos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base border-white bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <Link href="/contacto">Solicitar Entradas</Link>
              </Button>
            </div>
          </div>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-primary/20 bg-card/80 backdrop-blur">
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Ticket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Acceso Garantizado</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Te ayudamos a conseguir entradas para los mejores eventos
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/80 backdrop-blur">
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Todos los Eventos</h3>
                <p className="text-center text-sm text-muted-foreground">Acceso a eventos deportivos en toda España</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/80 backdrop-blur">
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Servicio Personalizado</h3>
                <p className="text-center text-sm text-muted-foreground">Atención dedicada para cada solicitud</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="border-b border-border bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Tu Puerta de Entrada al Deporte Profesional
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Somos especialistas en la gestión de entradas para eventos deportivos en España. Con años de experiencia
              en el sector, conectamos a los aficionados con los momentos más emocionantes del deporte profesional.
              Desde partidos de fútbol de élite hasta torneos de tenis internacionales, nos encargamos de que vivas la
              experiencia deportiva que siempre has soñado.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/sobre-nosotros">
                Conoce Más Sobre Nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Cómo Funciona
            </h2>
            <p className="mb-12 text-pretty text-lg text-muted-foreground">
              Reservar tus entradas deportivas es fácil y rápido con nuestro proceso simplificado
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/20 bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">Busca tu Evento</h3>
                  <p className="text-sm text-muted-foreground">
                    Explora nuestra amplia selección de eventos deportivos en toda España
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">Solicita Información</h3>
                  <p className="text-sm text-muted-foreground">
                    Completa nuestro formulario con tus preferencias y detalles del evento
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">Confirmamos Disponibilidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Te informamos sobre las opciones disponibles para tu evento
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">Disfruta el Evento</h3>
                  <p className="text-sm text-muted-foreground">
                    Recibe tus entradas y vive una experiencia deportiva inolvidable
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contacto">
                Comenzar Ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Eventos Deportivos Destacados
              </h2>
              <p className="mt-2 text-pretty text-lg text-muted-foreground">Descubre los deportes más emocionantes</p>
            </div>
            <Button asChild size="lg">
              <Link href="/eventos">
                Ver Todos los Eventos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <Card
                key={event.title}
                className="group flex flex-col h-full overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-balance text-2xl font-bold text-white">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="flex flex-col flex-1 p-6">
                  <p className="mb-4 text-pretty text-muted-foreground">{event.description}</p>
                  <Button asChild variant="outline" className="w-full mt-auto bg-transparent">
                    <Link href={event.href}>
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

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Preguntas Frecuentes
              </h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Encuentra respuestas a las preguntas más comunes sobre nuestro servicio
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  ¿Cómo puedo solicitar entradas para un evento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Puedes solicitar entradas completando nuestro formulario de contacto. Simplemente selecciona el
                  deporte o evento que te interesa, proporciona tus datos de contacto y detalles sobre el número de
                  entradas que necesitas. Nuestro equipo te responderá en un plazo de 24 horas con las opciones
                  disponibles y precios.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">¿Qué deportes y eventos están disponibles?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ofrecemos entradas para una amplia variedad de eventos deportivos en España, incluyendo fútbol (La
                  Liga, Champions League), tenis (ATP, WTA, Grand Slams), baloncesto (Liga ACB, Euroliga), motociclismo
                  (MotoGP), y muchos más. Visita nuestra página de eventos o deportes para ver la lista completa de
                  competiciones disponibles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">¿Cuánto tiempo tarda el proceso de reserva?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Una vez que recibimos tu solicitud, nuestro equipo te responde en un plazo máximo de 24 horas con las
                  opciones disponibles. Después de confirmar tu reserva y realizar el pago, recibirás tus entradas
                  electrónicas por correo electrónico en un plazo de 48-72 horas, dependiendo del evento y la
                  disponibilidad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">¿Son seguros los métodos de pago?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, trabajamos con sistemas seguros y encriptados para proteger tu información. Todos los procesos se
                  realizan a través de plataformas certificadas que cumplen con los estándares de seguridad
                  internacionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">¿Puedo cancelar o cambiar mi reserva?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Las políticas de cancelación y cambio varían según el evento y el tipo de entrada. Para cambios o
                  cancelaciones, consulta nuestros términos y condiciones o contacta con nuestro equipo de atención al
                  cliente para casos específicos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">¿Las entradas son físicas o electrónicas?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  La mayoría de nuestras entradas son electrónicas y se envían por correo electrónico en formato PDF o
                  mediante aplicaciones móviles específicas del evento. Esto te permite acceder al evento directamente
                  desde tu smartphone. En casos especiales donde se requieran entradas físicas, organizamos la entrega
                  según tus preferencias.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 text-center">
              <p className="mb-4 text-muted-foreground">¿No encuentras la respuesta que buscas?</p>
              <Button asChild variant="outline">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
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
          <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EntradasDeportivas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
