import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Mejor Forma de Enviar Dinero a México | 2025',
  description: 'Descubre la mejor forma de enviar dinero a México. Comparamos apps, servicios online y tiendas para encontrar la opción ideal para ti. Guía completa 2025.',
  keywords: [
    'mejor forma de enviar dinero a México desde Estados Unidos',
    'mejor manera de mandar dinero a mexico',
    'como enviar dinero a mexico barato',
    'mejor servicio para enviar dinero a mexico',
    'mejor app para enviar dinero a mexico',
    'comparar servicios de envio de dinero a mexico',
  ],
  openGraph: {
    title: 'Mejor Forma de Enviar Dinero a México desde Estados Unidos',
    description: 'Guía comparativa de las mejores opciones para enviar dinero de USA a México en 2025.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function MejorFormaPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviardineromexico.com/' },
              { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://enviardineromexico.com/guias/' },
              { '@type': 'ListItem', position: 3, name: 'Mejor Forma de Enviar Dinero', item: 'https://enviardineromexico.com/guias/mejor-forma-enviar-dinero/' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Mejor Forma de Enviar Dinero a México desde Estados Unidos',
            description: 'Comparativa completa de las mejores opciones para enviar dinero a México',
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
                name: '¿Qué servicio me conviene más si envío dinero seguido a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para envíos frecuentes, Sendwave es la mejor opción con $0 comisión siempre. Si necesitas cobro en efectivo, Remitly ofrece excelente cobertura y precios competitivos para usuarios recurrentes.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué aplicación da mejor tipo de cambio para enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wise ofrece el tipo de cambio medio del mercado (el más justo). Para montos grandes ($1,000+), Wise suele dar más pesos. Para montos menores, Sendwave y Remitly son muy competitivos.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Mejor Forma de Enviar</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mejor Forma de Enviar Dinero a México desde Estados Unidos
            </h1>
            <p className="text-xl text-blue-100">
              Comparamos todas las opciones para que encuentres la mejor para ti
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-blue-800 mb-3">
                Respuesta Rápida: ¿Cuál es la mejor forma?
              </h2>
              <p className="text-blue-700 mb-4">
                Depende de tus necesidades. Para <strong>precio</strong>: Sendwave ($0 comisión).
                Para <strong>confiabilidad</strong>: Remitly (4.9★). Para <strong>mejor tipo de cambio</strong>: Wise.
                Para <strong>emergencias</strong>: Remitly Express o Western Union.
              </p>
            </section>

            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Las Mejores Opciones en 2025
              </h2>
              <p className="text-gray-700 mb-6">
                Hay tres categorías principales de servicios para enviar dinero a México. Cada una
                tiene sus ventajas dependiendo de lo que más te importa: precio, velocidad, o conveniencia.
              </p>

              <div className="space-y-6">
                {/* Apps */}
                <div className="border-2 border-green-200 rounded-xl p-5 bg-green-50">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Apps Móviles</h3>
                    <span className="bg-success-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      Recomendado
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    La mejor opción para la mayoría. Baratas, rápidas, y fáciles de usar desde tu celular.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Ventajas:</p>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>✓ Comisiones bajas o $0</li>
                        <li>✓ Llega en minutos</li>
                        <li>✓ Fácil desde tu celular</li>
                        <li>✓ Buenos tipos de cambio</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Ejemplos:</p>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>• Sendwave - $0 comisión</li>
                        <li>• Remitly - Más popular</li>
                        <li>• Félix Pago - WhatsApp</li>
                        <li>• Wise - Mejor cambio</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Online Services */}
                <div className="border-2 border-blue-200 rounded-xl p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Servicios Online</h3>
                  <p className="text-gray-600 mb-4">
                    Buena opción si prefieres usar computadora o ya tienes cuenta con el proveedor.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Ventajas:</p>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>✓ Uso desde computadora</li>
                        <li>✓ Integración con PayPal</li>
                        <li>✓ Buenos para montos grandes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Ejemplos:</p>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>• Xoom (PayPal)</li>
                        <li>• WorldRemit</li>
                        <li>• Wise</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Physical */}
                <div className="border-2 border-orange-200 rounded-xl p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tiendas Físicas</h3>
                  <p className="text-gray-600 mb-4">
                    Más caro pero útil si no tienes smartphone o prefieres hacer todo en persona.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Ventajas:</p>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>✓ Atención en persona</li>
                        <li>✓ Pago en efectivo</li>
                        <li>✓ Sin necesidad de tecnología</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Desventajas:</p>
                      <ul className="text-sm text-red-600 mt-1 space-y-1">
                        <li>✗ Comisiones altas ($5-15+)</li>
                        <li>✗ Mal tipo de cambio</li>
                        <li>✗ Tienes que ir físicamente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Best by Need */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                La Mejor Opción Según Tu Necesidad
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border-l-4 border-success-green rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Si quieres el menor costo</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Sendwave</strong> - $0 comisión siempre. Es la opción más barata para
                    envíos regulares a cuenta bancaria.
                  </p>
                  <Link href="/reviews/sendwave/" className="text-trust-blue hover:underline text-sm">
                    Ver Sendwave →
                  </Link>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-trust-blue rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Si necesitas cobro en efectivo</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Remitly</strong> - La mejor red de puntos de cobro en México.
                    Disponible en Elektra, Oxxo, Telecomm y miles de ubicaciones más.
                  </p>
                  <Link href="/reviews/remitly/" className="text-trust-blue hover:underline text-sm">
                    Ver Remitly →
                  </Link>
                </div>

                <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Si envías montos grandes ($1,000+)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Wise</strong> - Tipo de cambio real del mercado. La comisión es
                    porcentual, así que sigue siendo económico para montos grandes.
                  </p>
                  <Link href="/reviews/wise/" className="text-trust-blue hover:underline text-sm">
                    Ver Wise →
                  </Link>
                </div>

                <div className="p-4 bg-orange-50 border-l-4 border-warm-accent rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Si es tu primera vez</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Félix Pago</strong> - Primera transferencia 100% gratis. Funciona
                    por WhatsApp sin necesidad de descargar app.
                  </p>
                  <Link href="/reviews/felix-pago/" className="text-trust-blue hover:underline text-sm">
                    Ver Félix Pago →
                  </Link>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Si es una emergencia</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Remitly Express</strong> o <strong>Western Union</strong> - Disponible
                    en minutos para cobro en efectivo. Más caro pero muy rápido.
                  </p>
                  <Link href="/guias/transferencias-emergencia/" className="text-trust-blue hover:underline text-sm">
                    Ver guía de emergencias →
                  </Link>
                </div>
              </div>
            </section>

            {/* Comparison */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comparación Rápida de Servicios
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2">Servicio</th>
                      <th className="text-left py-3 px-2">Costo</th>
                      <th className="text-left py-3 px-2">Velocidad</th>
                      <th className="text-left py-3 px-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-green-50">
                      <td className="py-3 px-2 font-medium">Sendwave</td>
                      <td className="py-3 px-2 text-success-green font-bold">$0</td>
                      <td className="py-3 px-2">Minutos</td>
                      <td className="py-3 px-2">4.8★</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Remitly</td>
                      <td className="py-3 px-2">$0-3.99</td>
                      <td className="py-3 px-2">Minutos-días</td>
                      <td className="py-3 px-2 text-success-green font-bold">4.9★</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Wise</td>
                      <td className="py-3 px-2">0.5-1%</td>
                      <td className="py-3 px-2">Horas-días</td>
                      <td className="py-3 px-2">4.7★</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Félix Pago</td>
                      <td className="py-3 px-2">1era gratis</td>
                      <td className="py-3 px-2">Minutos</td>
                      <td className="py-3 px-2">4.6★</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Xoom</td>
                      <td className="py-3 px-2">$0-4.99</td>
                      <td className="py-3 px-2">Minutos-días</td>
                      <td className="py-3 px-2">4.5★</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-2 font-medium">Western Union</td>
                      <td className="py-3 px-2 text-red-600">$5-15+</td>
                      <td className="py-3 px-2">Minutos</td>
                      <td className="py-3 px-2">3.5★</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <Link href="/comparar/" className="btn-primary">
                  Ver comparación detallada
                </Link>
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
                    ¿Qué servicio me conviene más si envío dinero seguido a México?
                  </h3>
                  <p className="text-gray-600">
                    Para envíos frecuentes, <strong>Sendwave</strong> es la mejor opción con $0 comisión
                    siempre. No importa cuántas veces envíes, nunca pagas comisión. Si necesitas
                    cobro en efectivo frecuentemente, <strong>Remitly</strong> ofrece precios competitivos
                    para usuarios recurrentes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué aplicación da mejor tipo de cambio para enviar dinero a México?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Wise</strong> ofrece el tipo de cambio medio del mercado, que es el más
                    justo posible. Para montos grandes ($1,000+), Wise suele dar más pesos.
                    Para montos menores, Sendwave y Remitly son muy competitivos y más sencillos de usar.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuál es la diferencia entre enviar dinero por banco y por servicios especializados?
                  </h3>
                  <p className="text-gray-600">
                    Las transferencias bancarias internacionales son lentas (3-5 días) y caras ($25-50).
                    Los servicios especializados como Remitly o Sendwave son mucho más rápidos (minutos)
                    y baratos ($0-5). Los bancos no están diseñados para remesas pequeñas.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-trust-blue to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Compara servicios</h3>
              <p className="text-blue-100 text-sm mb-4">
                Usa nuestra herramienta para encontrar la mejor opción para tu situación.
              </p>
              <Link
                href="/comparar/"
                className="block w-full text-center bg-white text-trust-blue font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Comparar ahora
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
                <Link href="/guias/aplicaciones-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Apps para enviar dinero →
                </Link>
                <Link href="/guias/proveedores-confiables/" className="block text-trust-blue hover:underline text-sm">
                  Proveedores confiables →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Calculadora</h3>
              <p className="text-gray-600 text-sm mb-4">
                Calcula exactamente cuánto llegará con cada servicio.
              </p>
              <Link
                href="/calculadora/"
                className="block w-full text-center bg-success-green text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Usar calculadora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
