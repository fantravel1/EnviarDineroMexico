import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Cuánto Cuesta Enviar Dinero a México | Costos 2025',
  description: 'Descubre cuánto cuesta enviar dinero a México. Comparamos comisiones, tipos de cambio y costos totales de todos los servicios principales. Ejemplos reales 2025.',
  keywords: [
    'cuánto cuesta enviar dinero a México',
    'costo enviar dinero a mexico',
    'comisiones envio dinero mexico',
    'cuanto cobran por enviar dinero a mexico',
    'precio transferir dinero a mexico',
    'tarifas remesas mexico',
    'cuanto cobran por enviar 500 a mexico',
  ],
  openGraph: {
    title: 'Cuánto Cuesta Enviar Dinero a México | Costos Actualizados 2025',
    description: 'Guía completa de costos para enviar dinero a México. Comisiones, tipos de cambio y comparativas.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function CuantoCuestaPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Cuánto Cuesta Enviar Dinero a México',
            description: 'Guía completa de costos para enviar dinero a México desde Estados Unidos',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico.com' },
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
              { '@type': 'ListItem', position: 3, name: 'Cuánto Cuesta Enviar Dinero', item: 'https://enviardineromexico.com/guias/cuanto-cuesta-enviar-dinero/' },
            ],
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
                name: '¿Cuánto cobran por enviar $500 a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Con Sendwave: $0 de comisión. Con Remitly: $0-2.99 dependiendo del método. Con Western Union en tienda: $8-15. La diferencia puede ser de $15+ por envío.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo calculo cuánto llegará en pesos si envío dólares a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El monto en pesos = (Dólares enviados - comisión) × tipo de cambio. Por ejemplo, si envías $500, la comisión es $0, y el tipo de cambio es 17.50, tu familia recibiría $500 × 17.50 = 8,750 pesos.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-accent to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-orange-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Cuánto Cuesta</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Cuánto Cuesta Enviar Dinero a México
            </h1>
            <p className="text-xl text-orange-100">
              Guía completa de costos, comisiones y tipos de cambio actualizados
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-orange-800 mb-3">
                Respuesta Rápida: ¿Cuánto cuesta?
              </h2>
              <p className="text-orange-700 mb-4">
                Con las <strong>mejores apps</strong>, enviar dinero a México cuesta entre <strong>$0 y $5</strong> por transferencia.
                Con <strong>tiendas físicas</strong> como Western Union, puede costar <strong>$8-15+</strong>.
                La diferencia anual puede ser de cientos de dólares.
              </p>
              <Link href="/calculadora/" className="bg-warm-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 inline-block">
                Calcular mi costo exacto →
              </Link>
            </section>

            {/* Cost Components */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Los Dos Componentes del Costo
              </h2>
              <p className="text-gray-700 mb-6">
                Cuando envías dinero a México, el costo total tiene dos partes. Muchas personas
                solo miran la comisión, pero el tipo de cambio puede ser igual de importante.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 className="font-bold text-blue-800 mb-3 text-lg">1. Comisión (Fee)</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Es el cargo directo que pagas por el servicio. Puede ser:
                  </p>
                  <ul className="text-blue-600 text-sm space-y-1">
                    <li>• <strong>Fijo:</strong> $4.99 por envío</li>
                    <li>• <strong>Porcentaje:</strong> 1% del monto</li>
                    <li>• <strong>Cero:</strong> $0 (algunos servicios)</li>
                  </ul>
                </div>

                <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                  <h3 className="font-bold text-purple-800 mb-3 text-lg">2. Tipo de Cambio</h3>
                  <p className="text-purple-700 text-sm mb-3">
                    La diferencia entre el cambio real y el que te ofrecen:
                  </p>
                  <ul className="text-purple-600 text-sm space-y-1">
                    <li>• <strong>Bueno:</strong> 0-1% de margen</li>
                    <li>• <strong>Regular:</strong> 1-2% de margen</li>
                    <li>• <strong>Malo:</strong> 2-4%+ de margen</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                <p className="text-yellow-800">
                  <strong>Ejemplo:</strong> Si el tipo de cambio real es 17.50 pesos por dólar, un servicio
                  con &quot;$0 comisión&quot; que te da 17.00 pesos está cobrando ~3% oculto en el cambio.
                  En $500, eso son $15 que no ves como &quot;comisión&quot;.
                </p>
              </div>
            </section>

            {/* Cost Table */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cuánto Cobran los Servicios Principales
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-3">Servicio</th>
                      <th className="text-left py-3 px-3">Comisión</th>
                      <th className="text-left py-3 px-3">Margen Cambio</th>
                      <th className="text-left py-3 px-3">Costo en $500</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-green-50">
                      <td className="py-3 px-3 font-medium">Sendwave</td>
                      <td className="py-3 px-3 text-success-green font-bold">$0</td>
                      <td className="py-3 px-3">~1%</td>
                      <td className="py-3 px-3 font-bold">~$5</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Remitly (Banco)</td>
                      <td className="py-3 px-3">$0-2.99</td>
                      <td className="py-3 px-3">~1%</td>
                      <td className="py-3 px-3 font-bold">~$5-8</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Remitly (Efectivo)</td>
                      <td className="py-3 px-3">$3.99</td>
                      <td className="py-3 px-3">~1.5%</td>
                      <td className="py-3 px-3 font-bold">~$11</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="py-3 px-3 font-medium">Wise</td>
                      <td className="py-3 px-3">~0.5%</td>
                      <td className="py-3 px-3 text-success-green font-bold">0%</td>
                      <td className="py-3 px-3 font-bold">~$3</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Félix Pago</td>
                      <td className="py-3 px-3">$0 / $3.99</td>
                      <td className="py-3 px-3">~1%</td>
                      <td className="py-3 px-3 font-bold">~$5-9</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Xoom</td>
                      <td className="py-3 px-3">$0-4.99</td>
                      <td className="py-3 px-3">~2%</td>
                      <td className="py-3 px-3 font-bold">~$10-15</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-3 font-medium">Western Union (tienda)</td>
                      <td className="py-3 px-3 text-red-600">$8-15</td>
                      <td className="py-3 px-3 text-red-600">~3%</td>
                      <td className="py-3 px-3 text-red-600 font-bold">~$23-30</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-3 font-medium">MoneyGram (tienda)</td>
                      <td className="py-3 px-3 text-red-600">$5-12</td>
                      <td className="py-3 px-3 text-red-600">~3%</td>
                      <td className="py-3 px-3 text-red-600 font-bold">~$20-27</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-500 text-xs mt-4">
                * Costos aproximados para envío de $500 USD. Los costos reales varían según el monto,
                método de pago y entrega. Verifica siempre con el proveedor.
              </p>
            </section>

            {/* Cost Examples */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ejemplos de Costos por Monto
              </h2>

              <div className="space-y-6">
                {/* $200 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Enviando $200 USD</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">Sendwave</p>
                      <p className="text-green-600">Comisión: $0</p>
                      <p className="text-green-600">Tu familia recibe: ~3,450 MXN</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-800">Remitly</p>
                      <p className="text-blue-600">Comisión: $0-2.99</p>
                      <p className="text-blue-600">Tu familia recibe: ~3,400 MXN</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="font-medium text-red-800">Western Union</p>
                      <p className="text-red-600">Comisión: $8-12</p>
                      <p className="text-red-600">Tu familia recibe: ~3,150 MXN</p>
                    </div>
                  </div>
                </div>

                {/* $500 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Enviando $500 USD</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">Sendwave</p>
                      <p className="text-green-600">Comisión: $0</p>
                      <p className="text-green-600">Tu familia recibe: ~8,625 MXN</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-800">Remitly</p>
                      <p className="text-blue-600">Comisión: $0-2.99</p>
                      <p className="text-blue-600">Tu familia recibe: ~8,550 MXN</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="font-medium text-red-800">Western Union</p>
                      <p className="text-red-600">Comisión: $10-15</p>
                      <p className="text-red-600">Tu familia recibe: ~8,050 MXN</p>
                    </div>
                  </div>
                </div>

                {/* $1000 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Enviando $1,000 USD</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="font-medium text-purple-800">Wise</p>
                      <p className="text-purple-600">Comisión: ~$5-7</p>
                      <p className="text-purple-600">Tu familia recibe: ~17,350 MXN</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-800">Sendwave</p>
                      <p className="text-green-600">Comisión: $0</p>
                      <p className="text-green-600">Tu familia recibe: ~17,200 MXN</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="font-medium text-red-800">Western Union</p>
                      <p className="text-red-600">Comisión: $12-20</p>
                      <p className="text-red-600">Tu familia recibe: ~16,200 MXN</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-xs mt-4">
                * Estimaciones basadas en tipo de cambio de ~17.50 MXN/USD. Los montos reales varían.
              </p>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes sobre Costos
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuánto cobran por enviar $500 a México?
                  </h3>
                  <p className="text-gray-600">
                    Con <strong>Sendwave</strong>: $0 de comisión. Con <strong>Remitly</strong>: $0-2.99
                    dependiendo del método. Con <strong>Western Union en tienda</strong>: $8-15.
                    La diferencia puede ser de $15+ por envío.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cómo calculo cuánto llegará en pesos si envío dólares a México?
                  </h3>
                  <p className="text-gray-600">
                    La fórmula es: <strong>(Dólares enviados - comisión) × tipo de cambio = Pesos</strong>.
                    Por ejemplo, si envías $500, la comisión es $0, y el tipo de cambio es 17.50,
                    tu familia recibiría $500 × 17.50 = <strong>8,750 pesos</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Por qué algunos servicios dicen &quot;$0 comisión&quot; pero mi familia recibe menos?
                  </h3>
                  <p className="text-gray-600">
                    Porque ganan dinero en el tipo de cambio. Si el cambio real es 17.50 y te dan 17.00,
                    están cobrando ~3% oculto. Por eso es importante comparar <strong>cuántos pesos
                    llegará</strong>, no solo la comisión.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-warm-accent to-orange-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Calcula tu costo</h3>
              <p className="text-orange-100 text-sm mb-4">
                Ingresa tu monto y ve exactamente cuánto cuesta con cada servicio.
              </p>
              <Link
                href="/calculadora/"
                className="block w-full text-center bg-white text-warm-accent font-semibold py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
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
                <Link href="/guias/remesas-mas-baratas/" className="block text-trust-blue hover:underline text-sm">
                  Remesas más baratas →
                </Link>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-3">Opción más económica</h3>
              <p className="text-green-700 text-sm mb-3">
                Sendwave: $0 comisión siempre. Tu familia recibe más.
              </p>
              <Link
                href="/reviews/sendwave/"
                className="block w-full text-center bg-success-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Ver Sendwave
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
