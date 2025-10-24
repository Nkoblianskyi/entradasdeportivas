import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata = {
  title: "Términos y Condiciones | EntradasDeportivas",
  description: "Términos y condiciones de uso de EntradasDeportivas.",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">Términos y Condiciones</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Aceptación de los Términos</h2>
              <p className="leading-relaxed">
                Al acceder y utilizar EntradasDeportivas, usted acepta estar sujeto a estos términos y condiciones de
                uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Descripción del Servicio</h2>
              <p className="leading-relaxed">
                EntradasDeportivas es una plataforma que facilita la solicitud y gestión de entradas para eventos
                deportivos en España. Actuamos como intermediarios entre los usuarios y los proveedores de entradas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Proceso de Solicitud</h2>
              <p className="leading-relaxed">
                Las solicitudes de entradas realizadas a través de nuestro formulario no constituyen una compra
                confirmada. Nos pondremos en contacto con usted para confirmar la disponibilidad, precios y condiciones
                específicas de cada evento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Precios y Pagos</h2>
              <p className="leading-relaxed">
                Los precios de las entradas varían según el evento, la ubicación y la disponibilidad. Todos los precios
                serán comunicados antes de la confirmación final de la compra. Los métodos de pago aceptados serán
                especificados en cada transacción.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Cancelaciones y Reembolsos</h2>
              <p className="leading-relaxed">
                Las políticas de cancelación y reembolso dependen de las condiciones específicas de cada evento y
                proveedor. Estas condiciones serán comunicadas claramente antes de la confirmación de la compra.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Responsabilidad</h2>
              <p className="leading-relaxed">
                EntradasDeportivas actúa como intermediario y no es responsable de cambios en los eventos, cancelaciones
                o modificaciones realizadas por los organizadores. Nos comprometemos a informar a nuestros clientes de
                cualquier cambio tan pronto como tengamos conocimiento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Propiedad Intelectual</h2>
              <p className="leading-relaxed">
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logos e imágenes, es propiedad de
                EntradasDeportivas o de sus proveedores de contenido y está protegido por las leyes de propiedad
                intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Modificaciones</h2>
              <p className="leading-relaxed">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios
                entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Contacto</h2>
              <p className="leading-relaxed">
                Para cualquier pregunta sobre estos términos y condiciones, puede contactarnos en:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Email: info@entradasdeportivas.online</li>
                <li>Teléfono: +34 900 656 744</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link href="/" className="text-primary hover:underline">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>

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
