import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { providersBySlug } from '@/data/providers'

const provider = providersBySlug['wise']

export const metadata: Metadata = {
  title: 'Wise Review 2025: Tipo de Cambio Real Sin Margen Oculto | EnviarDineroMexico',
  description: 'Análisis completo de Wise (TransferWise) para enviar dinero a México. Tipo de cambio medio real, comisiones transparentes, pros y contras. Actualizado diciembre 2025.',
  keywords: ['wise mexico', 'transferwise mexico', 'wise enviar dinero', 'wise tipo de cambio', 'wise comisiones'],
}

export default function WiseReviewPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Link href="/reviews" className="hover:text-white">Reviews</Link>
              <span>/</span>
              <span>Wise</span>
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
                <div className="text-2xl font-bold">{provider.costExamples[1].percentage}%</div>
                <div className="text-sm text-blue-200">Costo en $500</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.delivery.speed}</div>
                <div className="text-sm text-blue-200">Velocidad</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es Wise?</h2>
              <p className="text-gray-700 mb-4">{provider.description}</p>
              <p className="text-gray-700">
                Anteriormente conocido como TransferWise, Wise revolucionó la industria de transferencias
                internacionales al ofrecer el tipo de cambio medio del mercado (el mismo que ves en Google)
                sin agregar ningún margen oculto. En lugar de esconder sus ganancias en el tipo de cambio,
                Wise cobra una comisión transparente que puedes ver antes de enviar.
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
                      Tipo de cambio real sin margen oculto
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-success-green mt-1">•</span>
                      Tarjeta multimoneda disponible
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
                        <td className="py-3 px-4 text-success-green">$0 (tipo real)</td>
                        <td className="py-3 px-4 font-semibold text-trust-blue">${example.totalCost.toFixed(2)}</td>
                        <td className="py-3 px-4">{example.percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * Wise usa el tipo de cambio medio del mercado sin agregar margen.
                La comisión varía según el método de pago y monto.
                Última actualización: {provider.lastUpdated}
              </p>
            </section>

            {/* How it Works */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Cómo Funciona Wise?</h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Crea tu cuenta gratis</h3>
                    <p className="text-gray-600">Regístrate en wise.com con tu correo. Verificación de identidad requerida para enviar.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ingresa el monto a enviar</h3>
                    <p className="text-gray-600">Verás exactamente cuánto recibirá tu destinatario con el tipo de cambio real y la comisión transparente.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Agrega los datos del destinatario</h3>
                    <p className="text-gray-600">Necesitarás la CLABE bancaria de 18 dígitos para depósito en México.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Paga la transferencia</h3>
                    <p className="text-gray-600">Usa tarjeta de débito, crédito, Apple Pay, Google Pay, o transferencia bancaria.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">El dinero llega en 1-2 días</h3>
                    <p className="text-gray-600">Recibe notificaciones en cada paso. Tu destinatario recibe el depósito en su cuenta bancaria.</p>
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
                    <span className="text-trust-blue text-xl">★</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Wise vs Others */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Es Wise la Mejor Opción para Ti?</h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Elige Wise si...</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• Envías montos grandes ($1,000+) donde el ahorro es significativo</li>
                    <li>• Valoras la transparencia total en costos</li>
                    <li>• Tu destinatario puede recibir en cuenta bancaria</li>
                    <li>• No necesitas entrega inmediata (1-2 días está bien)</li>
                  </ul>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">Considera otras opciones si...</h3>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Tu destinatario necesita cobrar en efectivo</li>
                    <li>• Necesitas entrega en minutos</li>
                    <li>• Envías montos pequeños frecuentemente (la comisión fija pesa más)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-trust-blue">{provider.ratings.overall}/5</div>
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
                href={provider.affiliateUrl || provider.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full text-center mt-4"
              >
                Visitar Wise
              </a>

              <p className="text-xs text-gray-500 text-center mt-3">
                Serás redirigido a {provider.website}
              </p>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Datos Rápidos</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Comisión depósito</span>
                  <span className="font-medium">{provider.fees.bankDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo de cambio</span>
                  <span className="font-medium text-success-green">Real (0% margen)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tiempo de entrega</span>
                  <span className="font-medium">{provider.delivery.bankDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cobro en efectivo</span>
                  <span className="font-medium text-family-red">No disponible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">App requerida</span>
                  <span className="font-medium">No (web disponible)</span>
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
                <Link href="/comparar/sendwave-vs-remitly" className="block text-trust-blue hover:underline">
                  Sendwave vs Remitly →
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
