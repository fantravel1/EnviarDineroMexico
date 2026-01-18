import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Efectivo vs Depósito Bancario para Enviar a México | 2025',
  description: 'Compara cobro en efectivo vs depósito bancario para enviar dinero a México. Costos reales, velocidad, conveniencia y cuál te conviene según tu situación. Guía 2025.',
  keywords: [
    'enviar dinero a mexico efectivo vs deposito bancario',
    'cobro en efectivo o deposito mexico',
    'recogida en efectivo mexico',
    'deposito bancario remesas mexico',
    'mejor opcion enviar dinero mexico',
    'diferencia efectivo deposito remesas',
    'cual es mas barato efectivo o banco',
  ],
  openGraph: {
    title: 'Efectivo vs Depósito Bancario: ¿Cuál es Mejor?',
    description: 'Comparativa completa de métodos de entrega para remesas a México. Costos, velocidad y conveniencia.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function EfectivoVsDepositoPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Efectivo vs Depósito Bancario para Enviar Dinero a México',
            description: 'Comparativa completa de métodos de entrega para remesas a México',
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
                name: '¿Cuál es más barato: efectivo o depósito bancario?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El depósito bancario es generalmente más barato. La comisión típica para depósito es $0-2.99, mientras que el cobro en efectivo cuesta $3.99-15. La diferencia anual puede ser de $60-100 si envías mensualmente.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuál es más rápido: efectivo o depósito bancario?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El depósito bancario suele ser más rápido, llegando en minutos de forma instantánea. El cobro en efectivo también puede ser rápido (minutos a horas), pero tu familia debe ir físicamente al punto de cobro.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué opción debo elegir si mi familia no tiene cuenta bancaria?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Si tu familia no tiene cuenta bancaria en México, el cobro en efectivo es tu única opción. Pueden recoger el dinero en Elektra, Oxxo, Coppel, Telecomm y miles de ubicaciones más solo con su INE/IFE.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Dónde puede cobrar mi familia en efectivo en México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tu familia puede cobrar en efectivo en más de 100,000 puntos en México: Elektra, Oxxo (24/7), Coppel, Telecomm, Banco Azteca, Soriana, Bodega Aurrera, y muchos más. Remitly ofrece la mayor cobertura.',
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
              { '@type': 'ListItem', position: 3, name: 'Efectivo vs Depósito', item: 'https://enviardineromexico.com/guias/efectivo-vs-deposito/' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Efectivo vs Depósito</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Efectivo vs Depósito Bancario: ¿Cuál Elegir?
            </h1>
            <p className="text-xl text-blue-100">
              Comparamos las dos formas de recibir dinero en México
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
                Respuesta Rápida
              </h2>
              <p className="text-blue-700">
                <strong>Depósito bancario</strong> es generalmente más barato y rápido.
                <strong> Cobro en efectivo</strong> es mejor si tu familia no tiene cuenta bancaria
                o necesita el dinero físicamente. La diferencia en costo puede ser $3-10 por envío.
              </p>
            </section>

            {/* Comparison Table */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comparación Directa
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2">Aspecto</th>
                      <th className="text-left py-3 px-2 bg-green-50">Depósito Bancario</th>
                      <th className="text-left py-3 px-2 bg-orange-50">Cobro en Efectivo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-2 font-medium">Costo típico</td>
                      <td className="py-3 px-2 bg-green-50 text-success-green font-bold">$0-2.99</td>
                      <td className="py-3 px-2 bg-orange-50">$3.99-15</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Velocidad</td>
                      <td className="py-3 px-2 bg-green-50 text-success-green font-bold">Minutos</td>
                      <td className="py-3 px-2 bg-orange-50">Minutos-horas</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Conveniencia</td>
                      <td className="py-3 px-2 bg-green-50 text-success-green font-bold">No salen de casa</td>
                      <td className="py-3 px-2 bg-orange-50">Ir al punto de cobro</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Requisitos</td>
                      <td className="py-3 px-2 bg-green-50">Cuenta bancaria + CLABE</td>
                      <td className="py-3 px-2 bg-orange-50 text-success-green font-bold">Solo INE/IFE</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Disponibilidad</td>
                      <td className="py-3 px-2 bg-green-50">24/7 automático</td>
                      <td className="py-3 px-2 bg-orange-50">Horarios de tienda</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Tipo de cambio</td>
                      <td className="py-3 px-2 bg-green-50 text-success-green font-bold">Generalmente mejor</td>
                      <td className="py-3 px-2 bg-orange-50">A veces peor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bank Deposit Details */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Depósito Bancario: Pros y Contras
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-3">Ventajas</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>✓ Más barato ($0-2.99 vs $4-15)</li>
                    <li>✓ Más rápido (minutos, instantáneo)</li>
                    <li>✓ Tu familia no tiene que salir</li>
                    <li>✓ Disponible 24/7</li>
                    <li>✓ Mejor tipo de cambio usualmente</li>
                    <li>✓ Más opciones de servicios (Sendwave, Wise)</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-3">Desventajas</h3>
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>✗ Requiere cuenta bancaria</li>
                    <li>✗ Necesitas el CLABE (18 dígitos)</li>
                    <li>✗ Si tu familia necesita efectivo, tienen que retirarlo</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Mejores servicios para depósito bancario:</h3>
                <div className="flex flex-wrap gap-3 mt-3">
                  <Link href="/reviews/sendwave/" className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-300 hover:bg-blue-100">
                    Sendwave ($0)
                  </Link>
                  <Link href="/reviews/wise/" className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-300 hover:bg-blue-100">
                    Wise (mejor cambio)
                  </Link>
                  <Link href="/reviews/felix-pago/" className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-300 hover:bg-blue-100">
                    Félix Pago (1era gratis)
                  </Link>
                </div>
              </div>
            </section>

            {/* Cash Pickup Details */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cobro en Efectivo: Pros y Contras
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-3">Ventajas</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>✓ No necesita cuenta bancaria</li>
                    <li>✓ Reciben dinero en mano</li>
                    <li>✓ Útil en áreas rurales sin bancos</li>
                    <li>✓ Tu familia puede elegir dónde cobrar</li>
                    <li>✓ Miles de puntos de cobro (Oxxo, Elektra, etc.)</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-3">Desventajas</h3>
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>✗ Más caro ($4-15 por envío)</li>
                    <li>✗ Tu familia debe ir físicamente</li>
                    <li>✗ Puede haber filas</li>
                    <li>✗ Limitado a horarios de tienda</li>
                    <li>✗ Menos servicios disponibles</li>
                    <li>✗ Tipo de cambio a veces peor</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h3 className="font-bold text-orange-800 mb-2">Mejores servicios para cobro en efectivo:</h3>
                <div className="flex flex-wrap gap-3 mt-3">
                  <Link href="/reviews/remitly/" className="bg-white text-orange-700 px-3 py-1 rounded-full text-sm border border-orange-300 hover:bg-orange-100">
                    Remitly (+100k puntos)
                  </Link>
                  <Link href="/reviews/western-union/" className="bg-white text-orange-700 px-3 py-1 rounded-full text-sm border border-orange-300 hover:bg-orange-100">
                    Western Union
                  </Link>
                  <Link href="/reviews/moneygram/" className="bg-white text-orange-700 px-3 py-1 rounded-full text-sm border border-orange-300 hover:bg-orange-100">
                    MoneyGram
                  </Link>
                </div>
              </div>
            </section>

            {/* When to Use Each */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Cuál Elegir? Guía de Decisión
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border-l-4 border-success-green rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Elige Depósito Bancario si:</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>✓ Tu familia tiene cuenta bancaria en México</li>
                    <li>✓ Quieres el menor costo posible</li>
                    <li>✓ Envías dinero frecuentemente</li>
                    <li>✓ No es urgente que tengan efectivo físico</li>
                    <li>✓ Prefieres la mayor conveniencia</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 border-l-4 border-warm-accent rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Elige Cobro en Efectivo si:</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>✓ Tu familia NO tiene cuenta bancaria</li>
                    <li>✓ Viven en área rural sin acceso a bancos</li>
                    <li>✓ Necesitan el efectivo físicamente</li>
                    <li>✓ Prefieren no usar servicios bancarios</li>
                    <li>✓ Es una emergencia y necesitan dinero rápido en mano</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cost Comparison */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Diferencia de Costo Real
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800">
                  <strong>Si envías $500 mensuales:</strong> La diferencia entre efectivo (~$8) y
                  banco (~$0-3) puede ser de <strong>$60-100 al año</strong>. Ese dinero extra
                  podría llegar a tu familia.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 px-2">Envío</th>
                      <th className="text-left py-2 px-2">Depósito Bancario</th>
                      <th className="text-left py-2 px-2">Efectivo</th>
                      <th className="text-left py-2 px-2">Diferencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-2 px-2">$200</td>
                      <td className="py-2 px-2 text-success-green">$0-2</td>
                      <td className="py-2 px-2">$4-8</td>
                      <td className="py-2 px-2 font-bold">~$6</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">$500</td>
                      <td className="py-2 px-2 text-success-green">$0-3</td>
                      <td className="py-2 px-2">$5-10</td>
                      <td className="py-2 px-2 font-bold">~$7</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">$1,000</td>
                      <td className="py-2 px-2 text-success-green">$0-5</td>
                      <td className="py-2 px-2">$8-15</td>
                      <td className="py-2 px-2 font-bold">~$10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Depósito bancario</h3>
              <p className="text-green-100 text-sm mb-4">
                Sendwave: $0 comisión para depósito bancario.
              </p>
              <Link
                href="/reviews/sendwave/"
                className="block w-full text-center bg-white text-green-600 font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                Ver Sendwave
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Cobro en efectivo</h3>
              <p className="text-orange-100 text-sm mb-4">
                Remitly: +100,000 puntos de cobro.
              </p>
              <Link
                href="/reviews/remitly/"
                className="block w-full text-center bg-white text-orange-600 font-semibold py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Ver Remitly
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/sin-cuenta-bancaria/" className="block text-trust-blue hover:underline text-sm">
                  Sin cuenta bancaria →
                </Link>
                <Link href="/guias/como-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Cómo enviar dinero →
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
