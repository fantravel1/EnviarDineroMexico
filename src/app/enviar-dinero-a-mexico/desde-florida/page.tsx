import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { ComparisonCalculator } from '@/components/ComparisonCalculator'

export const metadata: Metadata = {
  title: 'Enviar Dinero a México desde Florida 2025 | Mejores Opciones',
  description: 'Guía completa para enviar dinero a México desde Florida. Compara Sendwave, Remitly, Félix Pago. Miami, Orlando, Tampa. Actualizado 2025.',
  keywords: ['enviar dinero a mexico desde florida', 'remesas florida mexico', 'enviar dinero miami mexico', 'transferencias florida mexico', 'enviar dinero orlando mexico', 'remesas desde miami'],
  openGraph: {
    title: 'Enviar Dinero a México desde Florida 2025 | Mejores Opciones',
    description: 'Guía completa para enviar dinero a México desde Florida. Compara Sendwave, Remitly, Félix Pago. Miami, Orlando, Tampa.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function DesdeFlorida() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-orange-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/enviar-dinero-a-mexico" className="hover:text-white">Enviar Dinero</Link></li>
                <li>/</li>
                <li className="text-white">Desde Florida</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a México desde Florida
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Guía para la creciente comunidad mexicana en el Estado del Sol
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">800K+</div>
                <div className="text-sm text-orange-200">Mexicanos en FL</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$3B+</div>
                <div className="text-sm text-orange-200">Remesas anuales</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">#5</div>
                <div className="text-sm text-orange-200">Estado remitente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        {/* Calculator */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Compara Opciones desde Florida
          </h2>
          <ComparisonCalculator />
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Florida: Hub Latino en Crecimiento
              </h2>
              <p className="text-gray-700 mb-4">
                Florida tiene una de las comunidades mexicanas de más rápido crecimiento en Estados Unidos.
                Aunque históricamente dominada por cubanos y puertorriqueños, la población mexicana ha
                crecido significativamente, especialmente en el centro de Florida alrededor de Orlando
                y en el sur en Miami-Dade.
              </p>
              <p className="text-gray-700">
                La comunidad mexicana en Florida trabaja principalmente en agricultura (especialmente
                en la región de Immokalee), construcción, hospitalidad y turismo. Las conexiones
                familiares son principalmente con Veracruz, Puebla, Chiapas y Oaxaca.
              </p>
            </section>

            {/* Unique Considerations */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-3">🌴 Consideración Especial</h2>
              <p className="text-blue-700">
                Florida tiene una gran comunidad latina diversa. Muchos servicios de remesas están
                optimizados para Cuba y el Caribe. Asegúrate de seleccionar &quot;México&quot; como destino
                para obtener las mejores tarifas específicas para el corredor México-EE.UU.
              </p>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Opciones desde Florida
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Sendwave</h3>
                    <span className="bg-success-green/10 text-success-green px-2 py-1 rounded text-sm font-medium">
                      Mejor precio
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    $0 comisión con solo ~2% en tipo de cambio. Perfecto para envíos semanales regulares.
                  </p>
                  <Link href="/reviews/sendwave" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Remitly</h3>
                    <span className="bg-trust-blue/10 text-trust-blue px-2 py-1 rounded text-sm font-medium">
                      Más confiable
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    La app mejor calificada (4.9★). Garantía de entrega y soporte en español.
                  </p>
                  <Link href="/reviews/remitly" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Félix Pago</h3>
                    <span className="bg-warm-accent/10 text-warm-accent px-2 py-1 rounded text-sm font-medium">
                      Sin app
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Envía por WhatsApp sin descargar apps. Ideal para quienes prefieren simplicidad.
                  </p>
                  <Link href="/reviews/felix-pago" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>
              </div>
            </section>

            {/* Cities Guide */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Guía por Ciudad
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Miami-Dade</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    La comunidad mexicana crece rápidamente en Homestead, Florida City y Doral.
                    Muchos trabajan en agricultura, construcción y hospitalidad.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Áreas principales: Homestead, Florida City, Doral</li>
                    <li>Destinos comunes: Veracruz, Puebla</li>
                    <li>Opción recomendada: Remitly (múltiples opciones de cobro)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Orlando / Central Florida</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Gran centro de crecimiento para la comunidad mexicana. Muchos trabajan en
                    turismo, parques temáticos y construcción.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Áreas principales: Kissimmee, Apopka, Sanford</li>
                    <li>Destinos comunes: Guanajuato, Michoacán</li>
                    <li>Opción recomendada: Sendwave</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Tampa Bay</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Comunidad mexicana establecida con raíces en agricultura y construcción.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Áreas principales: Brandon, Ruskin, Plant City</li>
                    <li>Destinos comunes: Chiapas, Oaxaca</li>
                    <li>Opción recomendada: Félix Pago</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Immokalee / SW Florida</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Importante centro agrícola con gran población de trabajadores mexicanos.
                    Envíos frecuentes a comunidades rurales de México.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Destinos comunes: Chiapas, Guatemala frontera</li>
                    <li>Opción recomendada: Remitly (cobro en efectivo extenso)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Jacksonville</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Comunidad mexicana creciente en el norte de Florida.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Destinos comunes: Variados</li>
                    <li>Opción recomendada: Sendwave o Remitly</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Seasonal Workers */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Para Trabajadores Agrícolas
              </h2>

              <p className="text-gray-700 mb-4">
                Florida tiene una gran población de trabajadores agrícolas mexicanos, muchos de los
                cuales envían dinero regularmente a sus familias. Aquí hay consideraciones especiales:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">💰 Envíos Regulares</h3>
                  <p className="text-green-700 text-sm">
                    Si envías semanalmente, Sendwave es la mejor opción por sus $0 de comisión.
                    Un envío de $300/semana te ahorra ~$15/mes comparado con Western Union.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📱 Sin Smartphone</h3>
                  <p className="text-blue-700 text-sm">
                    Si no tienes smartphone, puedes usar Félix Pago desde cualquier teléfono
                    con WhatsApp, o visitar un agente de Western Union o MoneyGram en Walmart.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">🏦 Sin Cuenta Bancaria</h3>
                  <p className="text-purple-700 text-sm">
                    Sendwave y Remitly aceptan tarjetas de débito prepagadas como las que
                    ofrecen Walmart o tiendas de conveniencia. No necesitas cuenta bancaria.
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
                    ¿Puedo enviar con licencia de conducir de Florida?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, la licencia de conducir de Florida es aceptada por todos los servicios
                    de remesas. También aceptan ID de Florida e ITIN.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuál es la mejor hora para enviar?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Para cobro en efectivo, envía antes de las 2pm hora del Este para que
                    llegue el mismo día. Para depósito bancario, Félix Pago es instantáneo 24/7.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Hay diferencia en costos si envío a zona rural?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El costo es el mismo, pero la disponibilidad de cobro varía. Remitly tiene
                    la red más extensa con 470,000+ ubicaciones incluyendo áreas rurales.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Otras Guías por Estado</h3>
              <div className="space-y-2">
                <Link href="/enviar-dinero-a-mexico/desde-california" className="block text-trust-blue hover:underline">
                  Desde California →
                </Link>
                <Link href="/enviar-dinero-a-mexico/desde-texas" className="block text-trust-blue hover:underline">
                  Desde Texas →
                </Link>
                <Link href="/enviar-dinero-a-mexico" className="block text-trust-blue hover:underline">
                  Guía general →
                </Link>
              </div>
            </div>

            {/* Destination States */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Destinos Populares</h3>
              <p className="text-gray-600 text-sm mb-4">
                Los floridanos envían principalmente a:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Veracruz</li>
                <li>• Puebla</li>
                <li>• Chiapas</li>
                <li>• Oaxaca</li>
                <li>• Guanajuato</li>
              </ul>
            </div>

            {/* Weather Alert Style CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">🌴 Envía hoy</h3>
              <p className="text-orange-100 text-sm mb-4">
                Tu primera transferencia con Félix Pago es completamente gratis.
              </p>
              <Link
                href="/reviews/felix-pago"
                className="block w-full text-center bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Empezar ahora
              </Link>
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
            headline: 'Enviar Dinero a México desde Florida - Guía 2025',
            description: 'Guía completa para enviar dinero a México desde Florida',
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
            },
            datePublished: '2025-12-16',
            dateModified: '2025-12-16',
          }),
        }}
      />
    </main>
  )
}
