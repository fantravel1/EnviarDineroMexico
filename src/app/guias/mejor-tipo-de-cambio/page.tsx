import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Envío de Dinero a México con Mejor Tasa de Cambio | Guía 2025',
  description: 'Encuentra el mejor tipo de cambio para enviar dinero a México. Comparamos tasas de cambio de Wise, Remitly, Sendwave y más servicios.',
  keywords: [
    'envío de dinero a México con mejor tasa de cambio',
    'mejor tipo de cambio enviar dinero mexico',
    'tasa de cambio remesas mexico',
    'que aplicacion da mejor tipo de cambio',
    'tipo de cambio dolar peso mexico remesas',
    'mejor manera de enviar dinero con tipo de cambio favorable',
  ],
  openGraph: {
    title: 'Mejor Tipo de Cambio para Enviar Dinero a México',
    description: 'Guía para obtener el mejor tipo de cambio en tus remesas a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function MejorTipoCambioPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué aplicación da mejor tipo de cambio para enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wise ofrece el tipo de cambio medio del mercado (el más justo posible). Sendwave y Remitly también tienen tipos de cambio competitivos, generalmente dentro del 1% del tipo de cambio real.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo puedo enviar dinero a México sin perder en el tipo de cambio?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Usa servicios como Wise que ofrecen el tipo de cambio real sin margen oculto. Evita casas de cambio y servicios tradicionales como Western Union que tienen márgenes del 2-4% en el tipo de cambio.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-purple-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Mejor Tipo de Cambio</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Envío de Dinero a México con Mejor Tasa de Cambio
            </h1>
            <p className="text-xl text-purple-100">
              Cómo obtener más pesos por cada dólar que envías
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-purple-800 mb-3">
                ¿Quién Ofrece el Mejor Tipo de Cambio?
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Wise</p>
                    <p className="text-sm text-gray-500">Tipo de cambio real del mercado</p>
                  </div>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">0% margen</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Sendwave</p>
                    <p className="text-sm text-gray-500">Muy competitivo</p>
                  </div>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">~1% margen</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Remitly</p>
                    <p className="text-sm text-gray-500">Bueno para efectivo</p>
                  </div>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">~1-2% margen</span>
                </div>
              </div>
            </section>

            {/* Understanding Exchange Rates */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Entendiendo el Tipo de Cambio
              </h2>

              <p className="text-gray-700 mb-4">
                El <strong>tipo de cambio</strong> determina cuántos pesos recibe tu familia por cada
                dólar que envías. Un mejor tipo de cambio = más pesos para tu familia.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Tipo de Cambio Real (Mid-Market)</h3>
                  <p className="text-green-700 text-sm">
                    Es el tipo de cambio &quot;verdadero&quot; que ves en Google o Reuters.
                    Es el punto medio entre compra y venta. <strong>Wise</strong> usa este tipo.
                  </p>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2">Tipo de Cambio con Margen</h3>
                  <p className="text-red-700 text-sm">
                    La mayoría de servicios agregan un &quot;margen&quot; oculto del 1-4%.
                    Si el tipo real es 17.50, te dan 17.00 y se quedan con la diferencia.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-yellow-800">
                  <strong>Ejemplo:</strong> Envías $1,000. Si el tipo real es 17.50 pero te dan 17.00,
                  tu familia recibe 17,000 pesos en vez de 17,500. Perdiste <strong>$29</strong> (~500 pesos)
                  sin saberlo.
                </p>
              </div>
            </section>

            {/* Exchange Rate Comparison */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comparación de Tipos de Cambio por Servicio
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-3">Servicio</th>
                      <th className="text-left py-3 px-3">Margen Típico</th>
                      <th className="text-left py-3 px-3">Pesos por $100*</th>
                      <th className="text-left py-3 px-3">Diferencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-purple-50">
                      <td className="py-3 px-3 font-medium">Wise</td>
                      <td className="py-3 px-3 text-success-green font-bold">0%</td>
                      <td className="py-3 px-3">1,750</td>
                      <td className="py-3 px-3 text-success-green">Referencia</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="py-3 px-3 font-medium">Sendwave</td>
                      <td className="py-3 px-3">~1%</td>
                      <td className="py-3 px-3">1,732</td>
                      <td className="py-3 px-3 text-gray-600">-18 pesos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Remitly</td>
                      <td className="py-3 px-3">~1-2%</td>
                      <td className="py-3 px-3">1,715</td>
                      <td className="py-3 px-3 text-gray-600">-35 pesos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Xoom</td>
                      <td className="py-3 px-3">~2%</td>
                      <td className="py-3 px-3">1,715</td>
                      <td className="py-3 px-3 text-gray-600">-35 pesos</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-3 font-medium">Western Union</td>
                      <td className="py-3 px-3 text-red-600">~3%</td>
                      <td className="py-3 px-3">1,697</td>
                      <td className="py-3 px-3 text-red-600">-53 pesos</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-3 font-medium">Casas de cambio</td>
                      <td className="py-3 px-3 text-red-600">~3-5%</td>
                      <td className="py-3 px-3">1,662</td>
                      <td className="py-3 px-3 text-red-600">-88 pesos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                * Basado en tipo de cambio real de 17.50 MXN/USD. Los valores reales varían diariamente.
              </p>
            </section>

            {/* Best Options by Amount */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejor Opción Según Tu Monto
              </h2>

              <div className="space-y-4">
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Envíos pequeños ($100-300)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Recomendado: Sendwave o Félix Pago</strong>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Para montos pequeños, la comisión importa más que el tipo de cambio.
                    Sendwave con $0 comisión es ideal. Félix Pago es perfecto para la primera vez (gratis).
                  </p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Envíos medianos ($300-700)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Recomendado: Sendwave o Remitly</strong>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Sendwave sigue siendo muy competitivo. Remitly es mejor si necesitas
                    cobro en efectivo. Ambos tienen buenos tipos de cambio.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Envíos grandes ($700+)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Recomendado: Wise</strong>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Para montos grandes, el tipo de cambio tiene mayor impacto. Wise ofrece
                    el tipo de cambio real, así que la diferencia puede ser de $50+ vs otros servicios.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo Obtener el Mejor Tipo de Cambio
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Usa servicios con tipo de cambio transparente</h3>
                    <p className="text-gray-600 text-sm">
                      Wise muestra el tipo de cambio real y su comisión por separado. Así sabes
                      exactamente cuánto estás pagando.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Compara el monto que llegará, no solo el tipo de cambio</h3>
                    <p className="text-gray-600 text-sm">
                      Un servicio puede tener mejor tipo de cambio pero mayor comisión.
                      Lo que importa es cuántos pesos llegan al final.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Evita casas de cambio físicas</h3>
                    <p className="text-gray-600 text-sm">
                      Las casas de cambio en la calle tienen los peores tipos de cambio,
                      con márgenes del 3-5%. Las apps digitales son mucho mejores.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Monitorea el tipo de cambio</h3>
                    <p className="text-gray-600 text-sm">
                      Si no es urgente, puedes esperar días con mejor tipo de cambio.
                      El peso puede variar 2-3% en una semana.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué aplicación da mejor tipo de cambio para enviar dinero a México?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Wise</strong> ofrece el tipo de cambio medio del mercado (el más justo posible).
                    Sendwave y Remitly también tienen tipos de cambio competitivos, generalmente
                    dentro del 1% del tipo de cambio real.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cómo puedo enviar dinero a México sin perder en el tipo de cambio?
                  </h3>
                  <p className="text-gray-600">
                    Usa servicios como <strong>Wise</strong> que ofrecen el tipo de cambio real sin
                    margen oculto. Evita casas de cambio y servicios tradicionales como Western Union
                    que tienen márgenes del 2-4% en el tipo de cambio.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Es mejor tipo de cambio o menor comisión?
                  </h3>
                  <p className="text-gray-600">
                    Depende del monto. Para envíos pequeños ($100-300), la comisión importa más.
                    Para envíos grandes ($500+), el tipo de cambio tiene mayor impacto.
                    Siempre compara el <strong>total que llegará</strong> a tu familia.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Mejor tipo de cambio</h3>
              <p className="text-purple-100 text-sm mb-4">
                Wise ofrece el tipo de cambio real del mercado.
              </p>
              <Link
                href="/reviews/wise/"
                className="block w-full text-center bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Ver Wise
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Calculadora</h3>
              <p className="text-gray-600 text-sm mb-4">
                Compara cuántos pesos llegará con cada servicio.
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
                <Link href="/guias/remesas-mas-baratas/" className="block text-trust-blue hover:underline text-sm">
                  Remesas más baratas →
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
