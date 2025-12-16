import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { providersBySlug } from '@/data/providers'

const provider = providersBySlug['moneygram']

export const metadata: Metadata = {
  title: 'MoneyGram Review 2025: Red Global con Opciones Digitales | EnviarDineroMexico',
  description: 'Análisis completo de MoneyGram para enviar dinero a México. 350,000+ ubicaciones, red Walmart, pros y contras. Actualizado diciembre 2025.',
  keywords: ['moneygram mexico', 'moneygram comisiones', 'moneygram walmart', 'moneygram enviar dinero'],
}

export default function MoneyGramReviewPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-red-200 mb-4">
              <Link href="/reviews" className="hover:text-white">Reviews</Link>
              <span>/</span>
              <span>MoneyGram</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {provider.name} Review 2025
            </h1>
            <p className="text-xl text-red-100 mb-6">{provider.tagline}</p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.ratings.overall}/5</div>
                <div className="text-sm text-red-200">Calificación General</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.coverage.cashPickupLocations}</div>
                <div className="text-sm text-red-200">Ubicaciones México</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.fees.bankDeposit}</div>
                <div className="text-sm text-red-200">Comisión desde</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es MoneyGram?</h2>
              <p className="text-gray-700 mb-4">{provider.description}</p>
              <p className="text-gray-700">
                MoneyGram es el segundo servicio de transferencias más grande del mundo después de
                Western Union. En años recientes ha modernizado sus servicios digitales, permitiendo
                enviar dinero desde la app o sitio web con precios más competitivos que en persona.
                Su alianza con Walmart en México es especialmente conveniente.
              </p>
            </section>

            {/* Walmart Highlight */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-3">🛒 Alianza con Walmart</h2>
              <p className="text-blue-700">
                MoneyGram tiene una alianza estratégica con Walmart en México y Estados Unidos.
                Tu destinatario puede cobrar en cualquiera de las <strong>4,500+ tiendas Walmart</strong>,
                Bodega Aurrerá, y Superama en México. También puedes enviar desde Walmart en EE.UU.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tabla de Costos</h2>

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
                        <td className="py-3 px-4">~${example.exchangeLoss.toFixed(2)}</td>
                        <td className="py-3 px-4 font-semibold text-trust-blue">${example.totalCost.toFixed(2)}</td>
                        <td className="py-3 px-4">{example.percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * Costos estimados para envíos online. Los costos en persona pueden variar.
                Última actualización: {provider.lastUpdated}
              </p>
            </section>

            {/* Pickup Networks */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dónde Cobrar en México</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {provider.coverage.cashPickupNetworks.map((network, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="text-red-600 text-xl">📍</span>
                    <span className="text-gray-700">{network}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* MoneyGram Plus */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">MoneyGram Plus Rewards</h2>

              <p className="text-gray-700 mb-4">
                MoneyGram ofrece un programa de lealtad donde acumulas puntos por cada transferencia.
                Los puntos se pueden canjear por descuentos en futuras transferencias.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">100</div>
                  <div className="text-sm text-gray-600">puntos por envío</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">500</div>
                  <div className="text-sm text-gray-600">puntos = $5 descuento</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">Gratis</div>
                  <div className="text-sm text-gray-600">unirse al programa</div>
                </div>
              </div>
            </section>

            {/* Unique Features */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Únicas</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {provider.uniqueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="text-red-600 text-xl">★</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-red-600">{provider.ratings.overall}/5</div>
                <div className="text-gray-500">Calificación General</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Comisiones</span>
                  <span className="font-semibold">{provider.ratings.fees}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Velocidad</span>
                  <span className="font-semibold">{provider.ratings.speed}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cobertura</span>
                  <span className="font-semibold">{provider.ratings.coverage}/5</span>
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
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4"
              >
                Visitar MoneyGram
              </a>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Datos Rápidos</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Comisión desde</span>
                  <span className="font-medium">{provider.fees.bankDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Velocidad</span>
                  <span className="font-medium">{provider.delivery.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ubicaciones México</span>
                  <span className="font-medium">{provider.coverage.cashPickupLocations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío en persona</span>
                  <span className="font-medium text-success-green">Sí (Walmart)</span>
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
