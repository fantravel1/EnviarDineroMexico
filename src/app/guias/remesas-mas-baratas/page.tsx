import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Remesas a México Más Baratas | Comparativa 2025',
  description: 'Encuentra el envío de remesas a México más barato. Comparamos servicios, comisiones y tipos de cambio. Sendwave $0, Félix Pago gratis, Remitly desde $0.',
  keywords: [
    'envío de remesas a México más barato',
    'remesas baratas a mexico',
    'enviar remesas a mexico economico',
    'como enviar remesas baratas',
    'servicios de remesas mas economicos',
    'mandar dinero barato a mexico',
  ],
  openGraph: {
    title: 'Envío de Remesas a México Más Barato | Comparativa 2025',
    description: 'Guía completa para encontrar las remesas más baratas a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function RemesasBaratasPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Envío de Remesas a México Más Barato',
            description: 'Guía para encontrar las opciones más económicas para enviar remesas a México',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico.com' },
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
                name: '¿Cuál es la remesa más barata a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sendwave ofrece $0 comisión en todas las transferencias a México para depósito bancario. Félix Pago tiene la primera transferencia 100% gratis. Remitly frecuentemente ofrece $0 para depósitos bancarios.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto puedo ahorrar usando servicios baratos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Si envías $500 mensualmente, puedes ahorrar $60-100 al año usando Sendwave ($0) en lugar de Western Union ($8-12). En 5 años, eso son $300-500 extra para tu familia.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué servicio es mejor para remesas frecuentes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sendwave es ideal para envíos frecuentes porque siempre cobra $0 comisión. Si tu familia tiene cuenta bancaria, es la opción más económica. Si necesitan efectivo, Remitly con sus promociones frecuentes es buena opción.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo comparar el costo total de una remesa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No solo mires la comisión. Compara cuántos pesos llegará a tu familia. Un servicio con $0 comisión pero mal tipo de cambio puede ser más caro que uno con $3 de comisión pero mejor tipo de cambio.',
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
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviardineromexico.com/' },
              { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://enviardineromexico.com/guias/' },
              { '@type': 'ListItem', position: 3, name: 'Remesas Más Baratas', item: 'https://enviardineromexico.com/guias/remesas-mas-baratas/' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-success-green to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-green-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Remesas Más Baratas</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Envío de Remesas a México Más Barato
            </h1>
            <p className="text-xl text-green-100">
              Cómo ahorrar dinero en cada envío a tu familia
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-green-800 mb-3">
                Las Opciones Más Baratas en 2025
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Sendwave</p>
                    <p className="text-sm text-gray-500">Depósito bancario</p>
                  </div>
                  <span className="bg-success-green text-white px-3 py-1 rounded-full text-sm font-bold">$0</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Félix Pago</p>
                    <p className="text-sm text-gray-500">Primera transferencia</p>
                  </div>
                  <span className="bg-warm-accent text-white px-3 py-1 rounded-full text-sm font-bold">Gratis</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Wise</p>
                    <p className="text-sm text-gray-500">Montos grandes</p>
                  </div>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">~0.5%</span>
                </div>
              </div>
            </section>

            {/* Why Some Services Cost More */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Por Qué Algunas Remesas Cuestan Más?
              </h2>
              <p className="text-gray-700 mb-4">
                Los servicios de remesas ganan dinero de dos formas principales. Entender esto
                te ayuda a elegir la opción más barata:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2">Servicios Caros</h3>
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>✗ Comisiones altas ($5-15)</li>
                    <li>✗ Mal tipo de cambio (2-4% margen)</li>
                    <li>✗ Tiendas físicas con overhead</li>
                    <li>✗ Ejemplo: Western Union en tienda</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Servicios Baratos</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>✓ Comisiones bajas o $0</li>
                    <li>✓ Buen tipo de cambio (0-1% margen)</li>
                    <li>✓ Todo digital, sin tiendas</li>
                    <li>✓ Ejemplo: Sendwave, Wise</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cheapest Options Ranked */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ranking: Remesas Más Baratas
              </h2>

              <div className="space-y-4">
                {/* #1 Sendwave */}
                <div className="border-2 border-green-300 rounded-xl p-5 bg-green-50">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-success-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Sendwave</h3>
                      <p className="text-sm text-gray-500">Mejor para envíos frecuentes</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Comisión</p>
                      <p className="font-bold text-success-green">$0 siempre</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Tipo de cambio</p>
                      <p className="font-bold text-gray-900">Muy bueno</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Costo real $500</p>
                      <p className="font-bold text-gray-900">~$5</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    La opción más barata para envíos regulares. Sin comisión nunca, solo un
                    pequeño margen en el tipo de cambio. Ideal si tu familia puede recibir
                    en cuenta bancaria.
                  </p>
                  <Link href="/reviews/sendwave/" className="inline-block mt-3 text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>

                {/* #2 Wise */}
                <div className="border-2 border-purple-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Wise</h3>
                      <p className="text-sm text-gray-500">Mejor para montos grandes</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Comisión</p>
                      <p className="font-bold text-gray-900">~0.5%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Tipo de cambio</p>
                      <p className="font-bold text-success-green">El mejor (real)</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Costo real $500</p>
                      <p className="font-bold text-gray-900">~$3</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ofrece el tipo de cambio real del mercado sin margen oculto. La comisión
                    es transparente y baja. Para $1,000+ es frecuentemente la opción más barata.
                  </p>
                  <Link href="/reviews/wise/" className="inline-block mt-3 text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>

                {/* #3 Félix Pago */}
                <div className="border-2 border-orange-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-warm-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Félix Pago</h3>
                      <p className="text-sm text-gray-500">Mejor primera transferencia</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Primera vez</p>
                      <p className="font-bold text-success-green">100% Gratis</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Después</p>
                      <p className="font-bold text-gray-900">~$3.99</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Costo real $500</p>
                      <p className="font-bold text-gray-900">~$9</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Tu primera transferencia es completamente gratis. Funciona por WhatsApp,
                    no necesitas descargar app. Perfecto para probar.
                  </p>
                  <Link href="/reviews/felix-pago/" className="inline-block mt-3 text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>

                {/* #4 Remitly */}
                <div className="border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-trust-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Remitly</h3>
                      <p className="text-sm text-gray-500">Mejor para cobro en efectivo</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Comisión (banco)</p>
                      <p className="font-bold text-gray-900">$0-2.99</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Comisión (efectivo)</p>
                      <p className="font-bold text-gray-900">$3.99</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Costo real $500</p>
                      <p className="font-bold text-gray-900">~$8-11</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Si tu familia necesita cobrar en efectivo, Remitly tiene la mejor
                    combinación de precio y cobertura. Frecuentes promociones $0 comisión.
                  </p>
                  <Link href="/reviews/remitly/" className="inline-block mt-3 text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Consejos para Ahorrar en Remesas
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Evita tiendas físicas</h3>
                    <p className="text-gray-600 text-sm">
                      Western Union y MoneyGram en tiendas físicas cobran $5-15+ más que sus apps.
                      Usa siempre la versión digital.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Elige depósito bancario</h3>
                    <p className="text-gray-600 text-sm">
                      El cobro en efectivo casi siempre cuesta más. Si tu familia tiene cuenta
                      bancaria, el depósito directo es más barato.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Compara el total recibido</h3>
                    <p className="text-gray-600 text-sm">
                      No solo veas la comisión. Usa nuestra calculadora para ver cuántos pesos
                      llegará realmente a tu familia.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Aprovecha promociones</h3>
                    <p className="text-gray-600 text-sm">
                      Remitly, Félix Pago y otros frecuentemente ofrecen la primera transferencia
                      gratis o con mejor tipo de cambio.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Annual Savings */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cuánto Puedes Ahorrar al Año
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800">
                  <strong>Ejemplo:</strong> Si envías $500/mes a México y cambias de Western Union
                  en tienda (~$25 de costo) a Sendwave (~$5 de costo), ahorras <strong>$240 al año</strong>.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 px-2">Envío mensual</th>
                      <th className="text-left py-2 px-2">Ahorro mensual</th>
                      <th className="text-left py-2 px-2">Ahorro anual</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-2 px-2">$200</td>
                      <td className="py-2 px-2">~$15</td>
                      <td className="py-2 px-2 font-bold text-success-green">~$180</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">$500</td>
                      <td className="py-2 px-2">~$20</td>
                      <td className="py-2 px-2 font-bold text-success-green">~$240</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">$1,000</td>
                      <td className="py-2 px-2">~$35</td>
                      <td className="py-2 px-2 font-bold text-success-green">~$420</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                * Comparando Western Union en tienda vs Sendwave/Wise para depósito bancario.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-success-green to-green-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Opción más barata</h3>
              <p className="text-green-100 text-sm mb-4">
                Sendwave: $0 comisión, siempre.
              </p>
              <Link
                href="/reviews/sendwave/"
                className="block w-full text-center bg-white text-success-green font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                Ver Sendwave
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Calculadora</h3>
              <p className="text-gray-600 text-sm mb-4">
                Compara cuánto recibirá tu familia con cada servicio.
              </p>
              <Link
                href="/calculadora/"
                className="block w-full text-center bg-trust-blue text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Usar calculadora
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/enviar-dinero-sin-comisiones/" className="block text-trust-blue hover:underline text-sm">
                  Enviar sin comisiones →
                </Link>
                <Link href="/guias/mejor-tipo-de-cambio/" className="block text-trust-blue hover:underline text-sm">
                  Mejor tipo de cambio →
                </Link>
                <Link href="/guias/cuanto-cuesta-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Cuánto cuesta enviar →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
