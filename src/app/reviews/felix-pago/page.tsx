import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'
import { providersBySlug } from '@/data/providers'
import { generateStarRating } from '@/lib/utils'

const provider = providersBySlug['felix-pago']

export const metadata: Metadata = {
  title: `${provider.name} Review 2025 | Envía Dinero por WhatsApp`,
  description: provider.description,
}

export default function FelixPagoReviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-success-green-600 to-success-green-800 text-white py-12">
        <div className="container-wide">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-success-green-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/reviews/" className="hover:text-white">Reviews</Link></li>
              <li>/</li>
              <li className="text-white">{provider.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
              <span className="text-4xl font-bold text-success-green-600">F</span>
            </div>
            <div>
              <div className="inline-block bg-warm-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                PRIMERA TRANSFERENCIA GRATIS
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {provider.name} Review 2025
              </h1>
              <p className="text-xl text-success-green-100">{provider.tagline}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-yellow-400 text-lg">
                  {generateStarRating(provider.ratings.overall)}
                </span>
                <span className="text-success-green-200">
                  {provider.platform.totalReviews} reseñas en Trustpilot
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
              <p className="text-sm text-neutral-600">Comisión Banco</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-warm-accent-600">GRATIS</p>
              <p className="text-sm text-neutral-600">1ra Transferencia</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-trust-blue-600">Instantáneo</p>
              <p className="text-sm text-neutral-600">Velocidad SPEI</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-neutral-800">WhatsApp</p>
              <p className="text-sm text-neutral-600">Sin Descargar App</p>
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
              <strong>Félix Pago es revolucionario para el mercado latino.</strong> Su enfoque 100%
              basado en WhatsApp elimina la fricción de descargar apps, y la primera transferencia
              completamente gratis lo hace ideal para principiantes. La tecnología blockchain
              (Stellar/USDC) mantiene los costos bajos sin que el usuario interactúe con criptomonedas.
            </p>
          </div>

          {/* What Makes it Different */}
          <div className="bg-gradient-to-r from-trust-blue-50 to-success-green-50 p-6 rounded-lg mb-8">
            <h2 className="font-bold text-xl text-neutral-800 mb-4">¿Qué Hace Diferente a Félix Pago?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h3 className="font-semibold">100% por WhatsApp</h3>
                  <p className="text-sm text-neutral-600">Sin descargar ninguna app adicional</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <h3 className="font-semibold">Primera Transferencia Gratis</h3>
                  <p className="text-sm text-neutral-600">$0 comisión + mejor tipo de cambio</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold">Entrega Instantánea</h3>
                  <p className="text-sm text-neutral-600">Vía SPEI a cualquier banco mexicano</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎤</span>
                <div>
                  <h3 className="font-semibold">Mensajes de Voz</h3>
                  <p className="text-sm text-neutral-600">Puedes hablar tu solicitud</p>
                </div>
              </div>
            </div>
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
              <thead className="bg-success-green-600 text-white">
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
                    <td className="p-4 text-center">${example.fee}</td>
                    <td className="p-4 text-center">~${example.exchangeLoss}</td>
                    <td className="p-4 text-center font-semibold">~${example.totalCost}</td>
                    <td className="p-4 text-center">{example.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-neutral-500 mt-2">
              * La primera transferencia es completamente gratis (sin comisión y con mejor tipo de cambio)
            </p>
          </div>

          {/* How it Works */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Cómo Funciona (Solo 5 Minutos)</h2>
          <div className="space-y-4 mb-12">
            {[
              { step: 1, title: 'Visita felixpago.com', desc: 'Ingresa tu número de teléfono y haz clic en "Iniciar transferencia gratis"' },
              { step: 2, title: 'Abre WhatsApp', desc: 'Se abrirá una conversación con el chatbot de Félix automáticamente' },
              { step: 3, title: 'Sigue las Instrucciones', desc: 'El bot te guiará para ingresar monto, datos del receptor y método de pago' },
              { step: 4, title: 'Paga de Forma Segura', desc: 'Haz clic en el enlace seguro para ingresar los datos de tu tarjeta' },
              { step: 5, title: '¡Listo!', desc: 'El dinero llega instantáneamente vía SPEI. Recibes confirmación en el chat.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-neutral-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-success-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Options */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Opciones de Entrega en México</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white border-2 border-neutral-200 p-4 rounded-lg">
              <h3 className="font-bold text-neutral-800 mb-2">🏦 60+ Bancos</h3>
              <p className="text-sm text-neutral-600">BBVA, Banorte, Santander, HSBC, Scotiabank, Banamex, Banco Azteca</p>
            </div>
            <div className="bg-white border-2 border-neutral-200 p-4 rounded-lg">
              <h3 className="font-bold text-neutral-800 mb-2">🏪 40,000+ Tiendas</h3>
              <p className="text-sm text-neutral-600">OXXO, Elektra, Walmart, 7-Eleven, Farmacias Guadalajara</p>
            </div>
            <div className="bg-white border-2 border-neutral-200 p-4 rounded-lg">
              <h3 className="font-bold text-neutral-800 mb-2">📱 Billeteras</h3>
              <p className="text-sm text-neutral-600">Mercado Pago, Nu (Nubank), Spin by OXXO, Stori</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-success-green-600 to-success-green-700 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Prueba Félix Pago Gratis</h2>
            <p className="text-success-green-100 mb-6">
              Tu primera transferencia es completamente gratis. Sin descargar apps.
            </p>
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block bg-white text-success-green-700 hover:bg-neutral-100"
            >
              Enviar Dinero por WhatsApp
            </a>
            <p className="text-xs text-success-green-200 mt-4">
              * Félix Pago no tiene programa de afiliados. Este es un enlace directo sin compensación.
            </p>
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
