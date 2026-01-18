import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'
import { providersBySlug } from '@/data/providers'
import { generateStarRating } from '@/lib/utils'

const provider = providersBySlug['remitly']

export const metadata: Metadata = {
  title: `${provider.name} Review 2025 | El Líder del Mercado`,
  description: provider.description,
  keywords: [
    'remitly review',
    'remitly mexico',
    'remitly comisiones',
    'remitly enviar dinero',
    'remitly tipo de cambio',
    'remitly app',
    'remitly oxxo',
    'remitly promociones',
  ],
  openGraph: {
    title: 'Remitly Review 2025: El Líder en Envíos a México',
    description: 'Análisis completo de Remitly, la app mejor calificada para enviar dinero a México. 470,000+ ubicaciones de cobro, promociones para nuevos usuarios y garantía de entrega.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function RemitlyReviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-12">
        <div className="container-wide">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-trust-blue-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/reviews/" className="hover:text-white">Reviews</Link></li>
              <li>/</li>
              <li className="text-white">{provider.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
              <span className="text-4xl font-bold text-trust-blue-600">R</span>
            </div>
            <div>
              <div className="flex gap-2 mb-2">
                <span className="bg-warm-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  APP MEJOR CALIFICADA
                </span>
                <span className="bg-trust-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NASDAQ: RELY
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {provider.name} Review 2025
              </h1>
              <p className="text-xl text-trust-blue-100">{provider.tagline}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-yellow-400 text-lg">
                  {generateStarRating(provider.ratings.overall)}
                </span>
                <span className="text-trust-blue-200">
                  {provider.platform.totalReviews} reseñas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="bg-white py-8 border-b">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-trust-blue-600">{provider.fees.bankDeposit}</p>
              <p className="text-sm text-neutral-600">Comisión Banco</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-success-green-600">$0</p>
              <p className="text-sm text-neutral-600">En $500+</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-trust-blue-600">4.9★</p>
              <p className="text-sm text-neutral-600">iOS Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-neutral-800">470K+</p>
              <p className="text-sm text-neutral-600">Ubicaciones</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-trust-blue-600">NASDAQ</p>
              <p className="text-sm text-neutral-600">Empresa Pública</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          {/* Verdict */}
          <div className="bg-trust-blue-50 border-l-4 border-trust-blue-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-trust-blue-800 mb-2">Nuestro Veredicto</h2>
            <p className="text-trust-blue-700">
              <strong>Remitly es el líder indiscutible del mercado.</strong> Con la app mejor
              calificada (4.9★), la red de cobro más extensa (470,000+ ubicaciones), y respaldo
              de una empresa pública (NASDAQ: RELY), es la opción más confiable para envíos
              regulares y montos grandes ($500+).
            </p>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-success-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-success-green-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Ventajas
              </h3>
              <ul className="space-y-2">
                {provider.uniqueFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-success-green-700">
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-family-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-family-red-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Limitaciones
              </h3>
              <ul className="space-y-2">
                {provider.limitations.map((limitation, i) => (
                  <li key={i} className="flex items-start gap-2 text-family-red-700">
                    <span>✗</span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cost Table */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Tabla de Costos</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Monto Enviado</th>
                  <th className="p-4 text-center">Comisión</th>
                  <th className="p-4 text-center">Pérdida Tipo Cambio</th>
                  <th className="p-4 text-center">Costo Total</th>
                  <th className="p-4 text-center rounded-tr-lg">Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                {provider.costExamples.map((example) => (
                  <tr key={example.amount} className="border-b">
                    <td className="p-4 font-medium">${example.amount}</td>
                    <td className="p-4 text-center">
                      {example.amount >= 1000 ? (
                        <span className="text-success-green-600 font-semibold">$0-$1.99</span>
                      ) : (
                        `$${example.fee}`
                      )}
                    </td>
                    <td className="p-4 text-center">~${example.exchangeLoss}</td>
                    <td className="p-4 text-center font-semibold">~${example.totalCost}</td>
                    <td className="p-4 text-center">{example.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-neutral-500 mt-2">
              * Transferencias de $500+ califican para comisión reducida o eliminada.
              Nuevos clientes: primeras 2 transferencias gratis + mejor tipo de cambio en los primeros $1,000.
            </p>
          </div>

          {/* Delivery Network */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Red de Cobro en México (La Más Grande)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { name: 'OXXO', locations: '21,000+' },
              { name: 'Elektra/Banco Azteca', locations: '2,000+' },
              { name: 'Walmart/Bodega Aurrerá', locations: '2,600+' },
              { name: '7-Eleven', locations: '1,900+' },
              { name: 'Farmacias Guadalajara', locations: '2,400+' },
              { name: 'BanCoppel', locations: '1,500+' },
            ].map((network) => (
              <div key={network.name} className="bg-neutral-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-neutral-800">{network.name}</p>
                <p className="text-2xl font-bold text-trust-blue-600">{network.locations}</p>
                <p className="text-xs text-neutral-500">ubicaciones</p>
              </div>
            ))}
          </div>

          {/* App Features */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Características de la App</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { icon: '🔔', title: 'Alertas de Tipo de Cambio', desc: 'Recibe notificaciones cuando el tipo de cambio sea favorable' },
              { icon: '📍', title: 'Seguimiento en Tiempo Real', desc: 'Ve exactamente dónde está tu transferencia y cuándo llegará' },
              { icon: '📱', title: 'Retiro con QR', desc: 'Nuevo: retiro en Elektra/Banco Azteca sin necesidad de código' },
              { icon: '🌐', title: 'Soporte en 18 Idiomas', desc: 'Ayuda disponible en español las 24 horas' },
              { icon: '🔒', title: 'Garantía de Entrega', desc: 'Si algo sale mal, Remitly lo resuelve o devuelve tu dinero' },
              { icon: '⭐', title: 'Favoritos', desc: 'Guarda receptores para envíos rápidos la próxima vez' },
            ].map((feature) => (
              <div key={feature.title} className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-neutral-800">{feature.title}</h3>
                  <p className="text-sm text-neutral-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Company Background */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Sobre la Empresa</h2>
          <div className="bg-neutral-50 p-6 rounded-lg mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-neutral-800 mb-2">Datos Clave</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• <strong>Fundada:</strong> 2011</li>
                  <li>• <strong>IPO:</strong> Septiembre 2021 (NASDAQ: RELY)</li>
                  <li>• <strong>Valoración IPO:</strong> $6.9 mil millones</li>
                  <li>• <strong>Ingresos:</strong> $1.46 mil millones (2024)</li>
                  <li>• <strong>Empleados:</strong> ~2,800 globalmente</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-2">Principales Corredores</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• México (mayor mercado)</li>
                  <li>• India</li>
                  <li>• Filipinas</li>
                  <li className="text-sm text-neutral-500">Estos 3 corredores = 70% de ingresos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-trust-blue-600 to-trust-blue-700 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Prueba Remitly Hoy</h2>
            <p className="text-trust-blue-100 mb-6">
              Primeras 2 transferencias sin comisión + mejor tipo de cambio en los primeros $1,000.
            </p>
            <a
              href={provider.affiliateUrl || provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block"
            >
              Enviar con Remitly
            </a>
            <p className="text-xs text-trust-blue-200 mt-4">
              * Enlace de afiliado. Podemos recibir una comisión si te registras.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-neutral-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Compara con Otros Servicios</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/comparar/remitly-vs-western-union/" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between">
              <span className="font-medium">Remitly vs Western Union</span>
              <span className="text-trust-blue-600">→</span>
            </Link>
            <Link href="/comparar/sendwave-vs-remitly/" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between">
              <span className="font-medium">Sendwave vs Remitly</span>
              <span className="text-trust-blue-600">→</span>
            </Link>
            <Link href="/comparar/felix-pago-vs-remitly/" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between">
              <span className="font-medium">Félix Pago vs Remitly</span>
              <span className="text-trust-blue-600">→</span>
            </Link>
            <Link href="/comparar/" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between">
              <span className="font-medium">Todas las Comparaciones</span>
              <span className="text-trust-blue-600">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
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
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: provider.ratings.overall,
              bestRating: 5,
            },
            datePublished: '2025-12-01',
            dateModified: provider.lastUpdated,
          }),
        }}
      />
    </>
  )
}
