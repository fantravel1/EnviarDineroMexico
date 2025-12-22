import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Dónde Enviar Dinero a México Cerca de Mí | Guía 2025',
  description: 'Encuentra dónde enviar dinero a México cerca de ti. Apps móviles vs. agentes físicos. Ubicaciones de Western Union, MoneyGram y las mejores opciones digitales.',
  keywords: [
    'donde enviar dinero a mexico',
    'donde enviar dinero a mexico cerca de mi',
    'donde puedo mandar dinero a mexico',
    'lugares para enviar dinero a mexico',
    'agentes western union cerca de mi',
    'enviar dinero a mexico desde mi celular',
  ],
  openGraph: {
    title: 'Dónde Enviar Dinero a México Cerca de Mí | Guía 2025',
    description: 'Encuentra las mejores opciones para enviar dinero a México, ya sea desde tu celular o en persona.',
  },
}

export default function DondeEnviarDineroPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-trust-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Dónde Enviar Dinero</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Dónde Enviar Dinero a México Cerca de Mí?
            </h1>
            <p className="text-xl text-trust-blue-100">
              Todas las opciones para mandar dinero: apps, agentes y tiendas
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg">
              <h2 className="font-bold text-lg text-success-green-800 mb-2">
                Respuesta Rápida
              </h2>
              <p className="text-success-green-700">
                <strong>La forma más conveniente y barata es desde tu celular</strong> usando apps como Remitly, Sendwave o Félix Pago.
                Puedes enviar dinero desde cualquier lugar, las 24 horas. Si prefieres ir en persona,
                <strong> Western Union y MoneyGram tienen agentes en Walmart, Walgreens, CVS</strong> y tiendas locales en todo EE.UU.
              </p>
            </section>

            {/* Mobile Apps - Best Option */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-success-green-100 text-success-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Recomendado
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Opción 1: Apps Móviles (Desde Cualquier Lugar)
              </h2>
              <p className="text-gray-600 mb-6">
                La forma más conveniente de enviar dinero a México. No necesitas salir de casa,
                están disponibles 24/7, y generalmente son más baratas que los agentes físicos.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Remitly</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• App mejor calificada (4.9★)</li>
                    <li>• Sin comisión en envíos de $500+</li>
                    <li>• Entrega en minutos</li>
                    <li>• 470,000+ ubicaciones de cobro</li>
                  </ul>
                  <Link href="/reviews/remitly/" className="text-trust-blue-600 hover:underline text-sm block mt-3">
                    Ver detalles →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Sendwave</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• $0 comisión siempre</li>
                    <li>• App simple y rápida</li>
                    <li>• Ideal para montos pequeños</li>
                    <li>• Depósito bancario directo</li>
                  </ul>
                  <Link href="/reviews/sendwave/" className="text-trust-blue-600 hover:underline text-sm block mt-3">
                    Ver detalles →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Félix Pago</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Primera transferencia GRATIS</li>
                    <li>• Funciona por WhatsApp</li>
                    <li>• No necesitas descargar app</li>
                    <li>• Ideal para principiantes</li>
                  </ul>
                  <Link href="/reviews/felix-pago/" className="text-trust-blue-600 hover:underline text-sm block mt-3">
                    Ver detalles →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Wise</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tipo de cambio real</li>
                    <li>• Comisiones transparentes</li>
                    <li>• Ideal para montos grandes</li>
                    <li>• También para negocios</li>
                  </ul>
                  <Link href="/reviews/wise/" className="text-trust-blue-600 hover:underline text-sm block mt-3">
                    Ver detalles →
                  </Link>
                </div>
              </div>
            </section>

            {/* Physical Agents */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Opción 2: Agentes Físicos (En Persona)
              </h2>
              <p className="text-gray-600 mb-6">
                Si prefieres ir en persona o pagar en efectivo, hay miles de ubicaciones
                en Estados Unidos donde puedes enviar dinero a México.
              </p>

              <div className="space-y-6">
                {/* Western Union */}
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Western Union</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    La red más grande con más de 500,000 ubicaciones de agentes en EE.UU.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Dónde encontrar agentes:</h4>
                    <ul className="text-sm text-gray-600 grid md:grid-cols-2 gap-2">
                      <li>• Walmart</li>
                      <li>• Walgreens</li>
                      <li>• CVS Pharmacy</li>
                      <li>• Kroger</li>
                      <li>• 7-Eleven</li>
                      <li>• Safeway</li>
                      <li>• Tiendas de cheques</li>
                      <li>• Tiendas de abarrotes</li>
                    </ul>
                  </div>
                  <p className="text-yellow-700 text-sm mt-3 bg-yellow-50 p-2 rounded">
                    ⚠️ Comisiones más altas que apps (típicamente $10-25 por envío)
                  </p>
                </div>

                {/* MoneyGram */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">MoneyGram</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Otra opción popular con amplia cobertura en tiendas de todo el país.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Dónde encontrar agentes:</h4>
                    <ul className="text-sm text-gray-600 grid md:grid-cols-2 gap-2">
                      <li>• Walmart</li>
                      <li>• CVS Pharmacy</li>
                      <li>• ACE Cash Express</li>
                      <li>• Check Into Cash</li>
                      <li>• Farmacias locales</li>
                      <li>• Tiendas hispanas</li>
                    </ul>
                  </div>
                  <p className="text-yellow-700 text-sm mt-3 bg-yellow-50 p-2 rounded">
                    ⚠️ Similar a Western Union en costos
                  </p>
                </div>

                {/* Ria */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Ria Money Transfer</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Alternativa con presencia en supermercados y tiendas hispanas.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Dónde encontrar agentes:</h4>
                    <ul className="text-sm text-gray-600 grid md:grid-cols-2 gap-2">
                      <li>• Walmart</li>
                      <li>• Supermercados hispanos</li>
                      <li>• Tiendas de cheques</li>
                      <li>• Tiendas de conveniencia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Find Agents */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cómo Encontrar Agentes Cerca de Ti
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Google Maps</h3>
                    <p className="text-gray-600 text-sm">
                      Busca &quot;Western Union near me&quot; o &quot;MoneyGram near me&quot; para ver ubicaciones cercanas con horarios y reseñas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sitios Web Oficiales</h3>
                    <p className="text-gray-600 text-sm">
                      Visita westernunion.com o moneygram.com y usa su buscador de ubicaciones con tu código postal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Tiendas Conocidas</h3>
                    <p className="text-gray-600 text-sm">
                      Ve directamente a Walmart, Walgreens o CVS - casi todas las ubicaciones tienen servicios de transferencia.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Apps vs. Agentes: ¿Cuál Elegir?
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-trust-blue-600 text-white">
                    <tr>
                      <th className="p-3 text-left rounded-tl-lg">Característica</th>
                      <th className="p-3 text-center">Apps Móviles</th>
                      <th className="p-3 text-center rounded-tr-lg">Agentes Físicos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Costo promedio ($500)</td>
                      <td className="p-3 text-center text-success-green-600 font-semibold">$5-10</td>
                      <td className="p-3 text-center text-red-600 font-semibold">$15-25</td>
                    </tr>
                    <tr className="border-b bg-neutral-50">
                      <td className="p-3 font-medium">Disponibilidad</td>
                      <td className="p-3 text-center">24/7</td>
                      <td className="p-3 text-center">Horario de tienda</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Conveniencia</td>
                      <td className="p-3 text-center">Desde casa</td>
                      <td className="p-3 text-center">Requiere ir en persona</td>
                    </tr>
                    <tr className="border-b bg-neutral-50">
                      <td className="p-3 font-medium">Pago en efectivo</td>
                      <td className="p-3 text-center">No disponible</td>
                      <td className="p-3 text-center">Sí</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Velocidad</td>
                      <td className="p-3 text-center">Minutos</td>
                      <td className="p-3 text-center">Minutos a horas</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Atención al cliente</td>
                      <td className="p-3 text-center">Chat/Teléfono</td>
                      <td className="p-3 text-center">En persona</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                <details className="bg-neutral-50 rounded-lg group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                    ¿Dónde puedo enviar dinero a México cerca de mí?
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-600 text-sm">
                    Puedes enviar desde tu celular con apps como Remitly, Sendwave o Félix Pago.
                    Si prefieres ir en persona, Western Union y MoneyGram tienen agentes en Walmart, Walgreens,
                    CVS y muchas tiendas locales. Busca &quot;money transfer near me&quot; en Google Maps.
                  </div>
                </details>

                <details className="bg-neutral-50 rounded-lg group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                    ¿Es más barato usar apps o ir a Western Union?
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-600 text-sm">
                    Las apps son significativamente más baratas. Para un envío de $500, una app como Sendwave
                    cobra ~$10 en total mientras que Western Union puede cobrar $15-25. Puedes ahorrar
                    $100+ al año usando apps en lugar de agentes físicos.
                  </div>
                </details>

                <details className="bg-neutral-50 rounded-lg group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                    ¿Puedo pagar en efectivo para enviar dinero?
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-600 text-sm">
                    Sí, pero solo en agentes físicos como Western Union o MoneyGram. Las apps móviles
                    requieren tarjeta de débito o cuenta bancaria. Si solo tienes efectivo, ve a un
                    agente en Walmart, Walgreens o CVS.
                  </div>
                </details>

                <details className="bg-neutral-50 rounded-lg group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                    ¿Qué necesito llevar al agente?
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-600 text-sm">
                    Necesitas una identificación con foto (licencia, pasaporte, matrícula consular o ID estatal),
                    el dinero en efectivo, y los datos de tu destinatario (nombre completo y ubicación en México).
                  </div>
                </details>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Best Option CTA */}
            <div className="bg-gradient-to-br from-success-green-600 to-green-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Mejor Opción: Apps</h3>
              <p className="text-green-100 text-sm mb-4">
                Ahorra hasta $15 por envío usando apps en lugar de agentes.
              </p>
              <Link
                href="/calculadora/"
                className="block w-full text-center bg-white text-success-green-700 font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                Comparar Precios
              </Link>
            </div>

            {/* Quick Tips */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Tips Rápidos</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success-green-500">✓</span>
                  <span className="text-gray-600">Apps son más baratas que agentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green-500">✓</span>
                  <span className="text-gray-600">Félix Pago: primera transferencia gratis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green-500">✓</span>
                  <span className="text-gray-600">Walmart tiene Western Union y MoneyGram</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green-500">✓</span>
                  <span className="text-gray-600">Lleva ID con foto al agente</span>
                </li>
              </ul>
            </div>

            {/* Nearby Chains */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Cadenas con Agentes</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Walmart</p>
                <p>• Walgreens</p>
                <p>• CVS Pharmacy</p>
                <p>• Kroger</p>
                <p>• 7-Eleven</p>
                <p>• Safeway</p>
                <p>• ACE Cash Express</p>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/como-enviar-dinero-primera-vez/" className="block text-trust-blue-600 hover:underline text-sm">
                  Cómo enviar por primera vez →
                </Link>
                <Link href="/guias/limites-de-envio/" className="block text-trust-blue-600 hover:underline text-sm">
                  Límites de envío por mes →
                </Link>
                <Link href="/comparar/" className="block text-trust-blue-600 hover:underline text-sm">
                  Comparar proveedores →
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
            '@type': 'Article',
            headline: 'Dónde Enviar Dinero a México Cerca de Mí | Guía 2025',
            description: 'Encuentra dónde enviar dinero a México cerca de ti. Apps móviles vs. agentes físicos.',
            datePublished: '2025-12-22',
            dateModified: '2025-12-22',
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
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
                name: '¿Dónde puedo enviar dinero a México cerca de mí?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Puedes enviar desde tu celular con apps como Remitly, Sendwave o Félix Pago. Si prefieres ir en persona, Western Union y MoneyGram tienen agentes en Walmart, Walgreens, CVS y muchas tiendas locales.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Es más barato usar apps o ir a Western Union?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las apps son significativamente más baratas. Para un envío de $500, una app como Sendwave cobra ~$10 en total mientras que Western Union puede cobrar $15-25.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo pagar en efectivo para enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, pero solo en agentes físicos como Western Union o MoneyGram. Las apps móviles requieren tarjeta de débito o cuenta bancaria.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
