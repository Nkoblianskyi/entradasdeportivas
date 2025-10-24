import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, Users, Award, Heart } from "lucide-react"

export const metadata = {
  title: "Sobre Nosotros | EntradasDeportivas",
  description: "Conoce más sobre EntradasDeportivas y nuestro compromiso con los aficionados al deporte.",
}

export default function SobreNosotrosPage() {
  const valores = [
    {
      icon: Target,
      title: "Compromiso",
      description: "Nos comprometemos a ofrecer el mejor servicio y las mejores entradas para cada evento.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada cliente es único y merece una atención dedicada y personalizada.",
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Trabajamos solo con proveedores de confianza para garantizar entradas auténticas.",
    },
    {
      icon: Heart,
      title: "Pasión por el Deporte",
      description: "Compartimos tu pasión por el deporte y queremos que vivas las mejores experiencias.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Sobre Nosotros
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Tu socio de confianza para vivir las mejores experiencias deportivas
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Nuestra Misión</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              En EntradasDeportivas, nuestra misión es conectar a los aficionados al deporte con los eventos más
              emocionantes de España. Creemos que cada partido, cada carrera y cada torneo es una oportunidad para crear
              recuerdos inolvidables.
            </p>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Con años de experiencia en el sector, nos hemos especializado en ofrecer un servicio personalizado que va
              más allá de la simple gestión de entradas. Nos encargamos de todo el proceso para que tú solo tengas que
              preocuparte de disfrutar del evento.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Nuestros Valores</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Los principios que guían nuestro trabajo cada día
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor) => (
              <Card key={valor.title} className="transition-all hover:shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <valor.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">{valor.title}</h3>
                  <p className="text-pretty text-sm text-muted-foreground">{valor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              ¿Qué Ofrecemos?
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">Amplia Variedad de Eventos</h3>
                  <p className="text-pretty text-muted-foreground">
                    Desde fútbol de élite hasta torneos de tenis internacionales, pasando por baloncesto y motociclismo.
                    Tenemos acceso a los eventos deportivos más importantes de España.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">Acceso Facilitado</h3>
                  <p className="text-pretty text-muted-foreground">
                    Trabajamos directamente con proveedores oficiales para facilitarte el acceso a los mejores eventos
                    deportivos de España.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">Atención Personalizada</h3>
                  <p className="text-pretty text-muted-foreground">
                    Nuestro equipo está disponible para ayudarte en cada paso del proceso, desde la solicitud inicial
                    hasta el día del evento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">Proceso Sencillo</h3>
                  <p className="text-pretty text-muted-foreground">
                    Solicita tus entradas a través de nuestro formulario y nos encargamos del resto. Te mantendremos
                    informado en todo momento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              ¿Listo para Vivir la Emoción?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Explora nuestros eventos disponibles o contáctanos para solicitar tus entradas
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/eventos">
                  Ver Eventos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
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
