import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata = {
  title: "Política de Cookies | EntradasDeportivas",
  description: "Política de cookies de EntradasDeportivas.",
}

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">Política de Cookies</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. ¿Qué son las Cookies?</h2>
              <p className="leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio
                web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y
                proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Tipos de Cookies que Utilizamos</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cookies Esenciales</h3>
                  <p className="leading-relaxed">
                    Estas cookies son necesarias para el funcionamiento básico del sitio web. Incluyen cookies que
                    permiten recordar sus preferencias de cookies y mantener la seguridad del sitio.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cookies de Rendimiento</h3>
                  <p className="leading-relaxed">
                    Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web,
                    recopilando información de forma anónima. Utilizamos Vercel Analytics para este propósito.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cookies Funcionales</h3>
                  <p className="leading-relaxed">
                    Estas cookies permiten que el sitio web recuerde las elecciones que hace (como su idioma o región) y
                    proporciona características mejoradas y más personales.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Cookies Específicas que Utilizamos</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-foreground">Nombre</th>
                      <th className="border border-border p-3 text-left text-foreground">Propósito</th>
                      <th className="border border-border p-3 text-left text-foreground">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">cookie-consent</td>
                      <td className="border border-border p-3">Almacena su preferencia de cookies</td>
                      <td className="border border-border p-3">1 año</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">_vercel_analytics</td>
                      <td className="border border-border p-3">Análisis de uso del sitio</td>
                      <td className="border border-border p-3">Sesión</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Cómo Controlar las Cookies</h2>
              <p className="leading-relaxed">
                Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su
                dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen.
              </p>
              <p className="leading-relaxed">
                Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez
                que visite un sitio y algunos servicios y funcionalidades pueden no funcionar.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Gestión de Preferencias</h2>
              <p className="leading-relaxed">
                Cuando visita nuestro sitio web por primera vez, se le presenta un banner de cookies que le permite
                aceptar o rechazar las cookies no esenciales. Puede cambiar sus preferencias en cualquier momento
                eliminando las cookies de su navegador.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Cookies de Terceros</h2>
              <p className="leading-relaxed">
                Utilizamos Vercel Analytics para analizar el uso de nuestro sitio web. Vercel Analytics utiliza cookies
                que cumplen con el RGPD y no recopilan información personal identificable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Actualizaciones de esta Política</h2>
              <p className="leading-relaxed">
                Podemos actualizar esta política de cookies periódicamente para reflejar cambios en las cookies que
                utilizamos o por otras razones operativas, legales o reglamentarias.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Más Información</h2>
              <p className="leading-relaxed">
                Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Email: info@entradasdeportivas.com</li>
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
