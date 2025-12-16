import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { providersBySlug } from '@/data/providers'

const provider = providersBySlug['worldremit']

export const metadata: Metadata = {
  title: 'WorldRemit Review 2025: Envía a 150+ Países | EnviarDineroMexico',
  description: 'Análisis completo de WorldRemit para enviar dinero a México. Apple Pay, Google Pay, 150+ países, pros y contras. Actualizado diciembre 2025.',
  keywords: ['worldremit mexico', 'worldremit comisiones', 'worldremit enviar dinero', 'worldremit apple pay'],
}

export default function WorldRemitReviewPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-purple-200 mb-4">
              <Link href="/reviews" className="hover:text-white">Reviews</Link>
              <span>/</span>
              <span>WorldRemit</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {provider.name} Review 2025
            </h1>
            <p className="text-xl text-purple-100 mb-6">{provider.tagline}</p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.ratings.overall}/5</div>
                <div className="text-sm text-purple-200">Calificación General</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-purple-200">Países Disponibles</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{provider.fees.bankDeposit}</div>
                <div className="text-sm text-purple-200">Comisión Depósito</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es WorldRemit?</h2>
              <p className="text-gray-700 mb-4">{provider.description}</p>
              <p className="text-gray-700">
                WorldRemit es una empresa británica fundada en 2010 que se ha expandido a más de
                150 países. Es especialmente popular entre la comunidad africana pero ofrece
                excelentes tarifas también para México. Su app acepta Apple Pay y Google Pay,
                haciendo los envíos muy rápidos.
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
                      Primera transferencia gratis (promoción)
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
                        <td className="py-3 px-4">~${example.exchangeLoss.toFixed(2)}</td>
                        <td className="py-3 px-4 font-semibold text-trust-blue">${example.totalCost.toFixed(2)}</td>
                        <td className="py-3 px-4">{example.percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * Primera transferencia sin comisión para nuevos usuarios (promoción).
                Última actualización: {provider.lastUpdated}
              </p>
            </section>

            {/* Payment Methods */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Métodos de Pago Aceptados</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-900 text-white rounded-lg text-center">
                  <div className="text-2xl mb-2">🍎</div>
                  <div className="font-semibold">Apple Pay</div>
                  <div className="text-sm text-gray-300">Pago instantáneo</div>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg text-center">
                  <div className="text-2xl mb-2">G</div>
                  <div className="font-semibold">Google Pay</div>
                  <div className="text-sm text-white/80">Pago instantáneo</div>
                </div>

                <div className="p-4 bg-blue-600 text-white rounded-lg text-center">
                  <div className="text-2xl mb-2">💳</div>
                  <div className="font-semibold">Tarjetas</div>
                  <div className="text-sm text-blue-200">Débito y crédito</div>
                </div>
              </div>
            </section>

            {/* Referral Program */}
            <section className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-3">🎁 Programa de Referidos</h2>
              <p className="text-purple-700 mb-4">
                WorldRemit tiene un generoso programa de referidos. Cuando invitas a un amigo
                y hace su primera transferencia, ambos reciben un bono.
              </p>
              <ul className="text-purple-700 space-y-1">
                <li>• Tú recibes: $20 USD de crédito</li>
                <li>• Tu amigo recibe: Primera transferencia sin comisión</li>
                <li>• Sin límite de referidos</li>
              </ul>
            </section>

            {/* Unique Features */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Únicas</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {provider.uniqueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-purple-600 text-xl">★</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Who Should Use */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Es WorldRemit para Ti?</h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Ideal si...</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• Usas Apple Pay o Google Pay regularmente</li>
                    <li>• Envías dinero a múltiples países (no solo México)</li>
                    <li>• Quieres recargar celulares en México</li>
                    <li>• Buscas tarifas competitivas con una app moderna</li>
                  </ul>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">Considera otras opciones si...</h3>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Necesitas una extensa red de cobro en efectivo</li>
                    <li>• Prefieres el tipo de cambio más competitivo (Wise)</li>
                    <li>• Solo envías a México y quieres especialización</li>
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
                <div className="text-3xl font-bold text-purple-600">{provider.ratings.overall}/5</div>
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
                className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4"
              >
                Visitar WorldRemit
              </a>

              <p className="text-xs text-center text-success-green mt-2 font-medium">
                1ra transferencia GRATIS
              </p>
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
                  <span className="text-gray-600">Países</span>
                  <span className="font-medium">150+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Apple/Google Pay</span>
                  <span className="font-medium text-success-green">Sí</span>
                </div>
              </div>
            </div>

            {/* Compare Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Comparaciones</h3>

              <div className="space-y-2">
                <Link href="/comparar/sendwave-vs-remitly" className="block text-trust-blue hover:underline">
                  Sendwave vs Remitly →
                </Link>
                <Link href="/comparar/wise-vs-xoom" className="block text-trust-blue hover:underline">
                  Wise vs Xoom →
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
