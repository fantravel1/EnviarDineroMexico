import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { providersBySlug } from '@/data/providers'

const wise = providersBySlug['wise']
const xoom = providersBySlug['xoom']

export const metadata: Metadata = {
  title: 'Wise vs Xoom 2025: ¿Cuál es Mejor para México? | Comparación',
  description: 'Comparación detallada entre Wise y Xoom para enviar dinero a México. Comisiones, tipo de cambio, velocidad y características. Actualizado 2025.',
  keywords: [
    'wise vs xoom',
    'comparar wise xoom',
    'cual es mejor wise o xoom',
    'wise o xoom mexico',
    'transferwise vs xoom',
    'diferencia wise xoom',
    'enviar dinero mexico wise xoom',
  ],
  openGraph: {
    title: 'Wise vs Xoom México 2025',
    description: 'Comparamos tipo de cambio real de Wise vs integración PayPal de Xoom para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function WiseVsXoomPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/comparar" className="hover:text-white">Comparar</Link></li>
                <li>/</li>
                <li className="text-white">Wise vs Xoom</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Wise vs Xoom: ¿Cuál es Mejor para México?
            </h1>
            <p className="text-xl text-blue-100">
              Dos gigantes de las transferencias internacionales comparados
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        {/* Quick Verdict */}
        <div className="bg-white rounded-xl p-6 shadow-sm mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Veredicto Rápido</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Elige Wise si...</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Envías montos grandes ($1,000+)</li>
                <li>• Quieres el tipo de cambio real sin margen</li>
                <li>• No te importa esperar 1-2 días</li>
                <li>• Tu destinatario tiene cuenta bancaria</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Elige Xoom si...</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Necesitas llegada rápida (minutos)</li>
                <li>• Tu destinatario necesita efectivo</li>
                <li>• Ya tienes cuenta PayPal</li>
                <li>• Quieres recargar celulares en México</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Comparison Table */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comparación Detallada
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4">Característica</th>
                      <th className="text-left py-3 px-4 bg-green-50">Wise</th>
                      <th className="text-left py-3 px-4 bg-blue-50">Xoom</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Comisión $500</td>
                      <td className="py-3 px-4 bg-green-50 text-success-green font-semibold">~$4.12</td>
                      <td className="py-3 px-4 bg-blue-50">$0 (desde banco)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Tipo de cambio</td>
                      <td className="py-3 px-4 bg-green-50 text-success-green font-semibold">Real (0% margen)</td>
                      <td className="py-3 px-4 bg-blue-50">~2-3% margen</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Costo total $500</td>
                      <td className="py-3 px-4 bg-green-50 text-success-green font-semibold">~$4.12 (0.8%)</td>
                      <td className="py-3 px-4 bg-blue-50">~$12.50 (2.5%)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Velocidad</td>
                      <td className="py-3 px-4 bg-green-50">1-2 días</td>
                      <td className="py-3 px-4 bg-blue-50 text-success-green font-semibold">Minutos</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Cobro en efectivo</td>
                      <td className="py-3 px-4 bg-green-50 text-family-red">No disponible</td>
                      <td className="py-3 px-4 bg-blue-50 text-success-green font-semibold">60,000+ ubicaciones</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Recarga celulares</td>
                      <td className="py-3 px-4 bg-green-50 text-family-red">No</td>
                      <td className="py-3 px-4 bg-blue-50 text-success-green font-semibold">Sí</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">App requerida</td>
                      <td className="py-3 px-4 bg-green-50">No (web disponible)</td>
                      <td className="py-3 px-4 bg-blue-50">No (web disponible)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Calificación app</td>
                      <td className="py-3 px-4 bg-green-50">{wise.platform.iosRating}★ iOS</td>
                      <td className="py-3 px-4 bg-blue-50">{xoom.platform.iosRating}★ iOS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cost Comparison */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comparación de Costos por Monto
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4">Monto</th>
                      <th className="text-left py-3 px-4">Wise (Total)</th>
                      <th className="text-left py-3 px-4">Xoom (Total)</th>
                      <th className="text-left py-3 px-4">Diferencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">$200</td>
                      <td className="py-3 px-4">$2.80 (1.4%)</td>
                      <td className="py-3 px-4">$5.00 (2.5%)</td>
                      <td className="py-3 px-4 text-success-green font-semibold">Wise ahorra $2.20</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">$500</td>
                      <td className="py-3 px-4">$4.12 (0.8%)</td>
                      <td className="py-3 px-4">$12.50 (2.5%)</td>
                      <td className="py-3 px-4 text-success-green font-semibold">Wise ahorra $8.38</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">$1,000</td>
                      <td className="py-3 px-4">$7.12 (0.7%)</td>
                      <td className="py-3 px-4">$25.00 (2.5%)</td>
                      <td className="py-3 px-4 text-success-green font-semibold">Wise ahorra $17.88</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">$2,000</td>
                      <td className="py-3 px-4">$13.12 (0.65%)</td>
                      <td className="py-3 px-4">$50.00 (2.5%)</td>
                      <td className="py-3 px-4 text-success-green font-semibold">Wise ahorra $36.88</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * Costos estimados. Wise cobra comisión fija + variable, Xoom incluye margen en tipo de cambio.
                El ahorro con Wise aumenta proporcionalmente al monto enviado.
              </p>
            </section>

            {/* Detailed Analysis */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Análisis Detallado
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">💰 Costos y Transparencia</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Wise gana claramente en costos.</strong> Su modelo es único: cobra una
                    comisión visible pero usa el tipo de cambio medio real (el mismo que ves en Google).
                    No hay margen oculto.
                  </p>
                  <p className="text-gray-700">
                    Xoom dice &quot;$0 comisión&quot; cuando pagas desde cuenta bancaria, pero gana dinero
                    con un margen del 2-3% en el tipo de cambio. Para $500, eso son ~$12.50 en costos
                    ocultos vs ~$4 con Wise.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">⚡ Velocidad de Entrega</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Xoom gana en velocidad.</strong> Con tarjeta de débito/crédito, el dinero
                    puede llegar en minutos tanto para depósito bancario como cobro en efectivo.
                  </p>
                  <p className="text-gray-700">
                    Wise es más lento: típicamente 1-2 días hábiles para depósitos bancarios en México.
                    Si necesitas urgencia, Xoom (o Félix Pago) son mejores opciones.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">📍 Opciones de Entrega</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Xoom es más versátil.</strong> Ofrece depósito bancario, cobro en efectivo
                    en 60,000+ ubicaciones, recarga de celulares, y pago de servicios.
                  </p>
                  <p className="text-gray-700">
                    Wise solo ofrece depósito bancario a México. Si tu familia necesita efectivo,
                    Wise no es opción.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">🏦 Integración y Extras</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Wise</strong> ofrece una cuenta multi-divisa con tarjeta y la posibilidad
                    de mantener saldos en diferentes monedas. Ideal para freelancers y viajeros.
                  </p>
                  <p className="text-gray-700">
                    <strong>Xoom</strong> se integra con PayPal, lo que es conveniente si ya tienes cuenta.
                    También ofrece recargas de celular y pago de servicios como CFE y Telmex.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuál tiene mejor tipo de cambio?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Wise, sin duda. Usa el tipo de cambio medio del mercado sin agregar margen.
                    Xoom gana dinero con un margen del 2-3% en el tipo de cambio.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuál es más rápido?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Xoom. Puede entregar en minutos con tarjeta. Wise toma 1-2 días hábiles.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Puedo enviar a efectivo con Wise?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No, Wise solo ofrece depósito bancario para México. Si necesitas efectivo,
                    usa Xoom, Remitly, o Western Union.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wise Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-200">
              <h3 className="font-bold text-gray-900 mb-2">Wise</h3>
              <p className="text-gray-600 text-sm mb-4">{wise.tagline}</p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Costo $500:</span>
                  <span className="font-semibold text-success-green">~$4.12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Velocidad:</span>
                  <span className="font-semibold">1-2 días</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Calificación:</span>
                  <span className="font-semibold">{wise.ratings.overall}/5</span>
                </div>
              </div>
              <Link
                href="/reviews/wise"
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Ver Review Wise
              </Link>
            </div>

            {/* Xoom Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Xoom</h3>
              <p className="text-gray-600 text-sm mb-4">{xoom.tagline}</p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Costo $500:</span>
                  <span className="font-semibold">~$12.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Velocidad:</span>
                  <span className="font-semibold text-success-green">Minutos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Calificación:</span>
                  <span className="font-semibold">{xoom.ratings.overall}/5</span>
                </div>
              </div>
              <Link
                href="/reviews/xoom"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Ver Review Xoom
              </Link>
            </div>

            {/* Alternative */}
            <div className="bg-gradient-to-br from-warm-accent to-orange-600 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">¿Mejor alternativa?</h3>
              <p className="text-orange-100 text-sm mb-4">
                Sendwave ofrece $0 comisión y llegada en horas. Mejor que ambos para envíos pequeños.
              </p>
              <Link
                href="/reviews/sendwave"
                className="block w-full text-center bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Ver Sendwave
              </Link>
            </div>

            {/* Other Comparisons */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Otras Comparaciones</h3>
              <div className="space-y-2">
                <Link href="/comparar/remitly-vs-western-union" className="block text-trust-blue hover:underline text-sm">
                  Remitly vs Western Union →
                </Link>
                <Link href="/comparar/sendwave-vs-remitly" className="block text-trust-blue hover:underline text-sm">
                  Sendwave vs Remitly →
                </Link>
                <Link href="/comparar/alternativas-western-union" className="block text-trust-blue hover:underline text-sm">
                  Alternativas a Western Union →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Last Updated */}
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-sm text-gray-500">
          Última actualización: 17 de diciembre de 2025
        </p>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Wise vs Xoom 2025: ¿Cuál es Mejor para México?',
            description: 'Comparación detallada entre Wise y Xoom para enviar dinero a México.',
            datePublished: '2025-12-01',
            dateModified: '2025-12-17',
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
              url: 'https://enviardineromexico.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
              url: 'https://enviardineromexico.com',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Cuál tiene mejor tipo de cambio, Wise o Xoom?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wise tiene mejor tipo de cambio. Usa el tipo de cambio medio del mercado sin agregar margen. Xoom gana dinero con un margen del 2-3% en el tipo de cambio.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuál es más rápido, Wise o Xoom?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Xoom es más rápido. Puede entregar en minutos con tarjeta. Wise toma 1-2 días hábiles para México.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo enviar a efectivo con Wise?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No, Wise solo ofrece depósito bancario para México. Si necesitas efectivo, usa Xoom, Remitly, o Western Union.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviardineromexico.com' },
              { '@type': 'ListItem', position: 2, name: 'Comparar', item: 'https://enviardineromexico.com/comparar' },
              { '@type': 'ListItem', position: 3, name: 'Wise vs Xoom' },
            ],
          }),
        }}
      />
    </main>
  )
}
