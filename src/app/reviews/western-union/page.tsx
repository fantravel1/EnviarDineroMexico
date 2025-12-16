import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { providersBySlug } from '@/data/providers'

const provider = providersBySlug['western-union']

export const metadata: Metadata = {
  title: 'Western Union Review 2025: La Red Más Grande del Mundo | EnviarDineroMexico',
  description: 'Análisis completo de Western Union para enviar dinero a México. 500,000+ ubicaciones, opciones de cobro en efectivo, pros y contras. Actualizado diciembre 2025.',
  keywords: ['western union mexico', 'western union comisiones', 'western union enviar dinero', 'western union tipo de cambio'],
}

export default function WesternUnionReviewPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-600 to-yellow-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-yellow-200 mb-4">
              <Link href="/reviews" className="hover:text-white">Reviews</Link>
              <span>/</span>
              <span>Western Union</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {provider.name} Review 2025
            </h1>
            <p className="text-xl text-yellow-100 mb-6">{provider.tagline}</p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.ratings.overall}/5</div>
                <div className="text-sm text-yellow-200">Calificación General</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.coverage.cashPickupLocations}</div>
                <div className="text-sm text-yellow-200">Ubicaciones México</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-yellow-200">Años de Historia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es Western Union?</h2>
              <p className="text-gray-700 mb-4">{provider.description}</p>
              <p className="text-gray-700">
                Fundada en 1851, Western Union es el nombre más reconocido en transferencias de dinero
                a nivel mundial. Aunque ya no es la opción más económica, su extensa red de agentes
                y la posibilidad de enviar/recibir dinero en persona la mantienen relevante,
                especialmente para quienes prefieren métodos tradicionales o necesitan cobrar en
                áreas rurales de México.
              </p>
            </section>

            {/* Warning Box */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-amber-800 mb-3">⚠️ Importante Saber</h2>
              <p className="text-amber-700">
                Western Union generalmente tiene <strong>costos más altos</strong> que alternativas
                digitales como Sendwave, Remitly o Wise. Su tipo de cambio incluye un margen del 2.5-4%
                además de las comisiones. Considera usar Western Union solo si necesitas enviar/recibir
                en persona o si tu destinatario está en un área con pocas opciones.
              </p>
            </section>

            {/* Pros and Cons */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ventajas y Desventajas</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-success-green mb-3 flex items-center gap-2">
                    <span className="text-xl">✓</span> Ventajas
                  </h3>
                  <ul className="space-y-2">
                    {provider.bestFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-success-green mt-1">•</span>
                        {item}
                      </li>
                    ))}
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-success-green mt-1">•</span>
                      Disponible 24/7 en muchas ubicaciones
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-family-red mb-3 flex items-center gap-2">
                    <span className="text-xl">✗</span> Desventajas
                  </h3>
                  <ul className="space-y-2">
                    {provider.limitations.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-family-red mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Cost Table */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tabla de Costos Estimados</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4">Monto Enviado</th>
                      <th className="text-left py-3 px-4">Comisión</th>
                      <th className="text-left py-3 px-4">Pérdida Cambio</th>
                      <th className="text-left py-3 px-4">Costo Total</th>
                      <th className="text-left py-3 px-4">Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {provider.costExamples.map((example, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">${example.amount}</td>
                        <td className="py-3 px-4">${example.fee.toFixed(2)}</td>
                        <td className="py-3 px-4 text-family-red">~${example.exchangeLoss.toFixed(2)}</td>
                        <td className="py-3 px-4 font-semibold text-family-red">${example.totalCost.toFixed(2)}</td>
                        <td className="py-3 px-4">{example.percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * Los costos varían según método de envío, pago y promociones vigentes.
                El tipo de cambio incluye un margen del 2.5-4% sobre la tasa media.
                Última actualización: {provider.lastUpdated}
              </p>
            </section>

            {/* Pickup Locations */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Red de Cobro en México</h2>

              <p className="text-gray-700 mb-4">
                La mayor fortaleza de Western Union es su extensa red de {provider.coverage.cashPickupLocations} ubicaciones
                de cobro en México, incluyendo zonas rurales donde otras opciones no llegan.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {provider.coverage.cashPickupNetworks.map((network, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <span className="text-yellow-600 text-xl">📍</span>
                    <span className="text-gray-700">{network}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Use */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Cuándo Usar Western Union?</h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Buena opción cuando...</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• Tu destinatario vive en área rural con pocas opciones bancarias</li>
                    <li>• Necesitas enviar desde una ubicación física (sin acceso a internet)</li>
                    <li>• Tu destinatario prefiere cobrar en persona por seguridad</li>
                    <li>• Necesitas servicio 24/7 en ubicaciones como Elektra</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Considera alternativas si...</h3>
                  <ul className="text-red-700 space-y-1">
                    <li>• El costo es tu prioridad principal</li>
                    <li>• Tu destinatario puede recibir depósito bancario</li>
                    <li>• Tienes acceso a smartphone para usar apps más económicas</li>
                    <li>• Envías dinero regularmente (los costos se acumulan)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Alternatives */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Alternativas Más Económicas</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/reviews/sendwave" className="block p-4 border border-gray-200 rounded-lg hover:border-trust-blue transition-colors">
                  <div className="font-semibold text-gray-900">Sendwave</div>
                  <div className="text-success-green text-sm">$0 comisión</div>
                  <div className="text-gray-500 text-sm">Mejor para envíos pequeños</div>
                </Link>

                <Link href="/reviews/remitly" className="block p-4 border border-gray-200 rounded-lg hover:border-trust-blue transition-colors">
                  <div className="font-semibold text-gray-900">Remitly</div>
                  <div className="text-success-green text-sm">Desde $1.99</div>
                  <div className="text-gray-500 text-sm">470,000+ ubicaciones</div>
                </Link>

                <Link href="/reviews/felix-pago" className="block p-4 border border-gray-200 rounded-lg hover:border-trust-blue transition-colors">
                  <div className="font-semibold text-gray-900">Félix Pago</div>
                  <div className="text-success-green text-sm">1ra transferencia gratis</div>
                  <div className="text-gray-500 text-sm">Vía WhatsApp</div>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-yellow-600">{provider.ratings.overall}/5</div>
                <div className="text-gray-500">Calificación General</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Comisiones</span>
                  <span className="font-semibold text-family-red">{provider.ratings.fees}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Velocidad</span>
                  <span className="font-semibold">{provider.ratings.speed}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cobertura</span>
                  <span className="font-semibold text-success-green">{provider.ratings.coverage}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Facilidad</span>
                  <span className="font-semibold">{provider.ratings.ease}/5</span>
                </div>
              </div>

              <AffiliateDisclosure variant="compact" />

              <a
                href={provider.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4"
              >
                Visitar Western Union
              </a>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Datos Rápidos</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Comisión efectivo</span>
                  <span className="font-medium">{provider.fees.cashPickup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Margen tipo de cambio</span>
                  <span className="font-medium text-family-red">2.5-4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ubicaciones México</span>
                  <span className="font-medium">{provider.coverage.cashPickupLocations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío en persona</span>
                  <span className="font-medium text-success-green">Sí</span>
                </div>
              </div>
            </div>

            {/* Compare Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Comparaciones</h3>

              <div className="space-y-2">
                <Link href="/comparar/remitly-vs-western-union" className="block text-trust-blue hover:underline">
                  Remitly vs Western Union →
                </Link>
                <Link href="/comparar/alternativas-western-union" className="block text-trust-blue hover:underline">
                  Alternativas a Western Union →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Review',
            itemReviewed: {
              '@type': 'FinancialProduct',
              name: provider.name,
              description: provider.description,
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: provider.ratings.overall,
              bestRating: 5,
            },
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
            },
            datePublished: provider.lastUpdated,
          }),
        }}
      />
    </main>
  )
}
