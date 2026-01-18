import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { providersBySlug } from '@/data/providers'

const provider = providersBySlug['xoom']

export const metadata: Metadata = {
  title: 'Xoom Review 2025: Respaldado por PayPal | EnviarDineroMexico',
  description: 'Análisis completo de Xoom (PayPal) para enviar dinero a México. Sin comisión desde cuenta bancaria, recarga de celulares, pros y contras. Actualizado diciembre 2025.',
  keywords: [
    'xoom mexico',
    'xoom paypal',
    'xoom enviar dinero',
    'xoom comisiones',
    'xoom tipo de cambio',
    'xoom recarga celular',
    'xoom transferencia gratis',
  ],
  openGraph: {
    title: 'Xoom Review 2025: Envía Dinero a México con PayPal',
    description: 'Análisis completo de Xoom respaldado por PayPal. Sin comisión desde cuenta bancaria, recarga de celulares en México, y pago de servicios. Review actualizado.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function XoomReviewPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Link href="/reviews" className="hover:text-white">Reviews</Link>
              <span>/</span>
              <span>Xoom</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {provider.name} Review 2025
            </h1>
            <p className="text-xl text-blue-100 mb-6">{provider.tagline}</p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.ratings.overall}/5</div>
                <div className="text-sm text-blue-200">Calificación General</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$0</div>
                <div className="text-sm text-blue-200">Desde cuenta bancaria</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">PayPal</div>
                <div className="text-sm text-blue-200">Respaldado por</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es Xoom?</h2>
              <p className="text-gray-700 mb-4">{provider.description}</p>
              <p className="text-gray-700">
                Xoom fue adquirida por PayPal en 2015, lo que le da el respaldo de una de las
                empresas de pagos más grandes del mundo. Además de transferencias de dinero,
                Xoom ofrece recarga de celulares y pago de servicios en México, algo que
                pocos competidores ofrecen.
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
                      Respaldo de PayPal
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tabla de Costos</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4">Monto Enviado</th>
                      <th className="text-left py-3 px-4">Comisión*</th>
                      <th className="text-left py-3 px-4">Pérdida Cambio</th>
                      <th className="text-left py-3 px-4">Costo Total</th>
                      <th className="text-left py-3 px-4">Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {provider.costExamples.map((example, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">${example.amount}</td>
                        <td className="py-3 px-4 text-success-green">${example.fee.toFixed(2)}</td>
                        <td className="py-3 px-4">~${example.exchangeLoss.toFixed(2)}</td>
                        <td className="py-3 px-4 font-semibold text-trust-blue">${example.totalCost.toFixed(2)}</td>
                        <td className="py-3 px-4">{example.percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * $0 comisión cuando pagas desde cuenta bancaria vinculada.
                Con tarjeta de crédito hay recargo adicional del 2.9%.
                Última actualización: {provider.lastUpdated}
              </p>
            </section>

            {/* Special Features */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Servicios Adicionales</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📱 Recarga de Celulares</h3>
                  <p className="text-blue-700 text-sm">
                    Recarga el celular de tu familia en México directamente desde Xoom.
                    Disponible para Telcel, AT&T, Movistar y más.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">💡 Pago de Servicios</h3>
                  <p className="text-green-700 text-sm">
                    Paga servicios como CFE (electricidad), Telmex, agua y más
                    directamente desde Estados Unidos.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">🔗 Integración PayPal</h3>
                  <p className="text-purple-700 text-sm">
                    Si ya tienes cuenta PayPal, puedes vincularla para enviar dinero
                    más rápido sin crear cuenta nueva.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">🔔 Tracking en Tiempo Real</h3>
                  <p className="text-orange-700 text-sm">
                    Sigue el estado de tu transferencia en tiempo real y recibe
                    notificaciones cuando el dinero esté listo.
                  </p>
                </div>
              </div>
            </section>

            {/* How it Works */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Cómo Enviar con Xoom?</h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Crea tu cuenta o usa PayPal</h3>
                    <p className="text-gray-600">Regístrate en xoom.com o inicia sesión con tu cuenta PayPal existente.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Elige cómo quieres que reciban</h3>
                    <p className="text-gray-600">Depósito bancario, cobro en efectivo, o entrega a domicilio.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ingresa el monto y datos del destinatario</h3>
                    <p className="text-gray-600">Verás el tipo de cambio y cuánto recibirán en pesos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Paga desde cuenta bancaria (sin comisión)</h3>
                    <p className="text-gray-600">Vincula tu cuenta bancaria para $0 de comisión, o usa tarjeta.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">El dinero llega en minutos</h3>
                    <p className="text-gray-600">Con tarjeta de débito/crédito, el dinero llega en minutos.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Unique Features */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Únicas</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {provider.uniqueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 text-xl">★</span>
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
                <div className="text-3xl font-bold text-blue-600">{provider.ratings.overall}/5</div>
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
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4"
              >
                Visitar Xoom
              </a>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Datos Rápidos</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Comisión banco</span>
                  <span className="font-medium text-success-green">$0 (desde banco)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Comisión efectivo</span>
                  <span className="font-medium">{provider.fees.cashPickup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tiempo de entrega</span>
                  <span className="font-medium">{provider.delivery.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ubicaciones México</span>
                  <span className="font-medium">{provider.coverage.cashPickupLocations}</span>
                </div>
              </div>
            </div>

            {/* Compare Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Comparaciones</h3>

              <div className="space-y-2">
                <Link href="/comparar/wise-vs-xoom" className="block text-trust-blue hover:underline">
                  Wise vs Xoom →
                </Link>
                <Link href="/comparar/remitly-vs-western-union" className="block text-trust-blue hover:underline">
                  Remitly vs Western Union →
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
