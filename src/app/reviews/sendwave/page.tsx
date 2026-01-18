import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'
import { providersBySlug } from '@/data/providers'
import { generateStarRating } from '@/lib/utils'

const provider = providersBySlug['sendwave']

export const metadata: Metadata = {
  title: `${provider.name} Review 2025 | ¿Vale la Pena para México?`,
  description: provider.description,
  keywords: [
    'sendwave review',
    'sendwave mexico',
    'sendwave comisiones',
    'sendwave enviar dinero',
    'sendwave app',
    'sendwave tipo de cambio',
    'enviar dinero a mexico sendwave',
  ],
  openGraph: {
    title: 'Sendwave Review 2025: Envía Dinero a México Sin Comisiones',
    description: 'Análisis completo de Sendwave para envíos a México. Sin comisiones, app móvil fácil de usar, tipo de cambio competitivo. Descubre si es la mejor opción para ti.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function SendwaveReviewPage() {
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
              <span className="text-4xl font-bold text-trust-blue-600">S</span>
            </div>
            <div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-success-green-600">{provider.fees.bankDeposit}</p>
              <p className="text-sm text-neutral-600">Comisión</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-trust-blue-600">{provider.delivery.speed.split(' ')[0]}</p>
              <p className="text-sm text-neutral-600">Velocidad</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-trust-blue-600">{provider.platform.iosRating}★</p>
              <p className="text-sm text-neutral-600">Rating iOS</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-neutral-800">Solo App</p>
              <p className="text-sm text-neutral-600">Plataforma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          {/* Verdict */}
          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Nuestro Veredicto</h2>
            <p className="text-success-green-700">
              <strong>Sendwave es ideal para envíos regulares de $200-$500.</strong> Su política de cero
              comisiones y app móvil simple lo hacen perfecto para quienes quieren simplicidad.
              El costo real es ~2% en el tipo de cambio, lo que sigue siendo competitivo.
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
                    <td className="p-4 text-center text-success-green-600 font-semibold">
                      {example.fee === 0 ? 'GRATIS' : `$${example.fee}`}
                    </td>
                    <td className="p-4 text-center">~${example.exchangeLoss}</td>
                    <td className="p-4 text-center font-semibold">~${example.totalCost}</td>
                    <td className="p-4 text-center">{example.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How it Works */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Cómo Funciona Sendwave</h2>
          <div className="space-y-4 mb-12">
            {[
              { step: 1, title: 'Descarga la App', desc: 'Disponible en iOS y Android. No hay versión web.' },
              { step: 2, title: 'Crea tu Cuenta', desc: 'Ingresa tu número de teléfono, email y sube una identificación.' },
              { step: 3, title: 'Agrega tu Tarjeta', desc: 'Solo acepta tarjetas de débito (Visa, MasterCard).' },
              { step: 4, title: 'Ingresa los Datos', desc: 'Nombre del receptor, banco o ubicación de cobro.' },
              { step: 5, title: 'Confirma y Envía', desc: 'El dinero llega en minutos durante horario bancario.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-neutral-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-trust-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Best For */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">¿Para Quién es Sendwave?</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {provider.bestFor.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-success-green-50 p-4 rounded-lg">
                <svg className="w-6 h-6 text-success-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-success-green-800">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-trust-blue-600 to-trust-blue-700 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para Probar Sendwave?</h2>
            <p className="text-trust-blue-100 mb-6">
              Descarga la app y envía dinero a México sin comisiones.
            </p>
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block"
            >
              Visitar Sendwave
            </a>
            <p className="text-xs text-trust-blue-200 mt-4">
              * Sendwave no tiene programa de afiliados. Este es un enlace directo sin compensación.
            </p>
          </div>
        </div>
      </section>

      {/* Related Reviews */}
      <section className="section bg-neutral-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Compara con Otros Servicios</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/comparar/sendwave-vs-remitly/" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between">
              <span className="font-medium">Sendwave vs Remitly</span>
              <span className="text-trust-blue-600">→</span>
            </Link>
            <Link href="/reviews/felix-pago/" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between">
              <span className="font-medium">Review Félix Pago</span>
              <span className="text-trust-blue-600">→</span>
            </Link>
            <Link href="/reviews/remitly/" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between">
              <span className="font-medium">Review Remitly</span>
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
