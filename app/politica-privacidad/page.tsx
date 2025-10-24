import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata = {
  title: "Política de Privacidad | EntradasDeportivas",
  description: "Política de privacidad y protección de datos de EntradasDeportivas.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">Política de Privacidad</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Información que Recopilamos</h2>
              <p className="leading-relaxed">
                En EntradasDeportivas recopilamos la siguiente información personal cuando utiliza nuestros servicios:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información sobre las entradas solicitadas</li>
                <li>Datos de navegación y uso del sitio web</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Uso de la Información</h2>
              <p className="leading-relaxed">Utilizamos su información personal para:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Procesar sus solicitudes de entradas</li>
                <li>Comunicarnos con usted sobre sus solicitudes</li>
                <li>Enviar confirmaciones y actualizaciones sobre eventos</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Base Legal para el Tratamiento</h2>
              <p className="leading-relaxed">
                Procesamos sus datos personales basándonos en las siguientes bases legales según el RGPD:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Ejecución de un contrato o medidas precontractuales</li>
                <li>Consentimiento explícito del usuario</li>
                <li>Interés legítimo de nuestra empresa</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Compartir Información</h2>
              <p className="leading-relaxed">
                No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Proveedores de entradas y organizadores de eventos</li>
                <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Autoridades legales cuando sea requerido por ley</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Seguridad de los Datos</h2>
              <p className="leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
                personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Sus Derechos</h2>
              <p className="leading-relaxed">Bajo el RGPD, usted tiene derecho a:</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la limitación del procesamiento</li>
                <li>Portabilidad de los datos</li>
                <li>Retirar el consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Retención de Datos</h2>
              <p className="leading-relaxed">
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Cookies</h2>
              <p className="leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Para más
                información, consulte nuestra{" "}
                <Link href="/politica-cookies" className="text-primary underline hover:no-underline">
                  Política de Cookies
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Cambios en esta Política</h2>
              <p className="leading-relaxed">
                Podemos actualizar esta política de privacidad periódicamente. Le notificaremos sobre cambios
                significativos publicando la nueva política en esta página.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Contacto</h2>
              <p className="leading-relaxed">
                Para ejercer sus derechos o si tiene preguntas sobre esta política de privacidad, puede contactarnos en:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Email: privacidad@entradasdeportivas.online</li>
                <li>Teléfono: +34 900 656 744</li>
                <li>Dirección: Madrid, España</li>
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
