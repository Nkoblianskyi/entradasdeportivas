import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contacto | EntradasDeportivas",
  description:
    "Solicita tus entradas para eventos deportivos. Completa el formulario y nos pondremos en contacto contigo.",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Solicita tus Entradas
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
              Completa el formulario y nos pondremos en contacto contigo para gestionar tu solicitud
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-6 lg:col-span-1">
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Información de Contacto</h2>
                <p className="text-pretty text-muted-foreground">
                  Estamos aquí para ayudarte a conseguir las mejores entradas para tus eventos deportivos favoritos.
                </p>
              </div>

              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground">info@entradasdeportivas.online</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Teléfono</h3>
                      <p className="text-sm text-muted-foreground">+34 900 656 744</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Ubicación</h3>
                      <p className="text-sm text-muted-foreground">Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Horario</h3>
                      <p className="text-sm text-muted-foreground">Lunes - Viernes: 9:00 - 18:00</p>
                      <p className="text-sm text-muted-foreground">Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-card-foreground">Respuesta Rápida</h3>
                  <p className="text-pretty text-sm text-muted-foreground">
                    Nos comprometemos a responder todas las solicitudes en un plazo máximo de 24 horas laborables.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-6 text-2xl font-bold tracking-tight text-card-foreground">
                    Formulario de Solicitud
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
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
                  <a href="/" className="text-muted-foreground hover:text-primary">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/eventos" className="text-muted-foreground hover:text-primary">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="/deportes" className="text-muted-foreground hover:text-primary">
                    Deportes
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="text-muted-foreground hover:text-primary">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Deportes</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/deportes/futbol" className="text-muted-foreground hover:text-primary">
                    Fútbol
                  </a>
                </li>
                <li>
                  <a href="/deportes/tenis" className="text-muted-foreground hover:text-primary">
                    Tenis
                  </a>
                </li>
                <li>
                  <a href="/deportes/baloncesto" className="text-muted-foreground hover:text-primary">
                    Baloncesto
                  </a>
                </li>
                <li>
                  <a href="/deportes/motociclismo" className="text-muted-foreground hover:text-primary">
                    Motociclismo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/terminos" className="text-muted-foreground hover:text-primary">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="/politica-privacidad" className="text-muted-foreground hover:text-primary">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/politica-cookies" className="text-muted-foreground hover:text-primary">
                    Política de Cookies
                  </a>
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
