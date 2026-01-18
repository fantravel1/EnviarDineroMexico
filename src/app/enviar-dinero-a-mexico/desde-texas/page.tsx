import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { ComparisonCalculator } from '@/components/ComparisonCalculator'

export const metadata: Metadata = {
  title: 'Enviar Dinero a México desde Texas 2025 | Mejores Opciones',
  description: 'Guía completa para enviar dinero a México desde Texas. Compara Sendwave, Remitly, Félix Pago. Houston, Dallas, San Antonio. Actualizado 2025.',
  keywords: ['enviar dinero a mexico desde texas', 'remesas texas mexico', 'enviar dinero houston mexico', 'transferencias texas mexico', 'enviar dinero dallas mexico', 'remesas desde houston'],
  openGraph: {
    title: 'Enviar Dinero a México desde Texas 2025 | Mejores Opciones',
    description: 'Guía completa para enviar dinero a México desde Texas. Compara Sendwave, Remitly, Félix Pago. Houston, Dallas, San Antonio.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function DesdeTexas() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-red-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/enviar-dinero-a-mexico" className="hover:text-white">Enviar Dinero</Link></li>
                <li>/</li>
                <li className="text-white">Desde Texas</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a México desde Texas
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Guía para la comunidad mexicana más grande en la frontera
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">3.5M+</div>
                <div className="text-sm text-red-200">Mexicanos en TX</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$12B+</div>
                <div className="text-sm text-red-200">Remesas anuales</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">#2</div>
                <div className="text-sm text-red-200">Estado remitente</div>
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
            Compara Opciones desde Texas
          </h2>
          <ComparisonCalculator />
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Texas: El Estado Fronterizo Clave
              </h2>
              <p className="text-gray-700 mb-4">
                Texas comparte 1,254 millas de frontera con México, haciendo que las remesas sean
                una parte fundamental de la vida económica del estado. Con ciudades fronterizas como
                El Paso, Laredo y McAllen, y grandes metrópolis como Houston, Dallas y San Antonio,
                Texas es el segundo mayor origen de remesas hacia México.
              </p>
              <p className="text-gray-700">
                La comunidad mexicana en Texas tiene conexiones familiares principalmente con los
                estados del norte de México: Nuevo León, Tamaulipas, Chihuahua y Coahuila, aunque
                también hay fuertes lazos con Guanajuato y San Luis Potosí.
              </p>
            </section>

            {/* Border Advantage */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-amber-800 mb-3">🌉 Ventaja Fronteriza</h2>
              <p className="text-amber-700">
                Si vives cerca de la frontera (El Paso, Laredo, McAllen, Brownsville), algunas
                familias cruzan para entregar efectivo directamente. Sin embargo, las transferencias
                digitales son más seguras y convenientes, especialmente para montos mayores a $1,000.
              </p>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Opciones desde Texas
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Félix Pago</h3>
                    <span className="bg-success-green/10 text-success-green px-2 py-1 rounded text-sm font-medium">
                      Instantáneo
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Llegada instantánea vía SPEI. Ideal para emergencias familiares en México.
                    Primera transferencia gratis.
                  </p>
                  <Link href="/reviews/felix-pago" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Remitly</h3>
                    <span className="bg-trust-blue/10 text-trust-blue px-2 py-1 rounded text-sm font-medium">
                      Mejor cobertura
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    470,000+ ubicaciones en México incluyendo zonas rurales. Ideal para cobro en efectivo.
                  </p>
                  <Link href="/reviews/remitly" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Sendwave</h3>
                    <span className="bg-warm-accent/10 text-warm-accent px-2 py-1 rounded text-sm font-medium">
                      Más económico
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    $0 comisión visible. Solo ~2% en tipo de cambio. Perfecto para envíos regulares.
                  </p>
                  <Link href="/reviews/sendwave" className="text-trust-blue hover:underline text-sm">
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
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Houston</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    La ciudad más grande de Texas y hogar de una enorme comunidad mexicana.
                    Múltiples opciones tanto digitales como presenciales.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Áreas principales: East End, Magnolia Park, Gulfton</li>
                    <li>Destinos comunes: Nuevo León, Guanajuato</li>
                    <li>Opción recomendada: Sendwave o Remitly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Dallas-Fort Worth</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Gran metrópolis con comunidad mexicana creciente. Alto uso de apps móviles.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Áreas principales: Oak Cliff, Pleasant Grove</li>
                    <li>Destinos comunes: Zacatecas, San Luis Potosí</li>
                    <li>Opción recomendada: Félix Pago</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 San Antonio</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Ciudad con fuerte herencia mexicana. Muchas familias con raíces generacionales.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Áreas principales: West Side, South Side</li>
                    <li>Destinos comunes: Coahuila, Nuevo León</li>
                    <li>Opción recomendada: Remitly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 El Paso</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Ciudad fronteriza con Ciudad Juárez. Muchas familias tienen parientes al otro lado.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Destinos comunes: Chihuahua, Durango</li>
                    <li>Opción recomendada: Félix Pago (instantáneo)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Valley (McAllen, Brownsville, Laredo)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región fronteriza con fuerte actividad de remesas. Conexiones directas con Tamaulipas.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Destinos comunes: Tamaulipas, Veracruz</li>
                    <li>Opción recomendada: Remitly (cobro en OXXO extenso)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Special Considerations */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Consideraciones Especiales en Texas
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🏦 Casas de Cambio</h3>
                  <p className="text-blue-700 text-sm">
                    Texas tiene muchas casas de cambio tradicionales, especialmente en ciudades
                    fronterizas. Aunque son convenientes, generalmente tienen peores tipos de
                    cambio que las apps móviles.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">📱 HEB/Walmart</h3>
                  <p className="text-green-700 text-sm">
                    Las tiendas HEB y Walmart en Texas ofrecen servicios de MoneyGram.
                    Conveniente si ya estás haciendo compras, pero los costos son más altos
                    que las alternativas digitales.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">⚡ Para Emergencias</h3>
                  <p className="text-purple-700 text-sm">
                    Si necesitas enviar dinero urgente, Félix Pago ofrece llegada instantánea
                    vía SPEI a cualquier banco mexicano, 24/7 incluyendo fines de semana.
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
                    ¿Es mejor cruzar la frontera con efectivo?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Llevar más de $10,000 USD en efectivo requiere declaración. Además, hay riesgos
                    de seguridad. Las transferencias digitales son más seguras y a menudo más baratas
                    considerando el tiempo y gasolina del viaje.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Puedo enviar a una cuenta bancaria en pesos?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, la mayoría de servicios permiten enviar directamente a cuentas bancarias
                    mexicanas. Solo necesitas el número CLABE de 18 dígitos de tu destinatario.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué documentos necesito para enviar dinero?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    La mayoría de apps aceptan licencia de conducir de Texas, ID estatal, ITIN,
                    o pasaporte. No necesitas SSN para enviar cantidades menores a $1,000/día.
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
                <Link href="/enviar-dinero-a-mexico/desde-florida" className="block text-trust-blue hover:underline">
                  Desde Florida →
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
                Los texanos envían principalmente a:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Nuevo León</li>
                <li>• Tamaulipas</li>
                <li>• Guanajuato</li>
                <li>• San Luis Potosí</li>
                <li>• Chihuahua</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">Compara antes de enviar</h3>
              <p className="text-red-100 text-sm mb-4">
                Usa nuestra calculadora para ver cuánto recibe tu familia en México.
              </p>
              <Link
                href="/calculadora"
                className="block w-full text-center bg-white text-red-700 font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
              >
                Ir a calculadora
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
            headline: 'Enviar Dinero a México desde Texas - Guía 2025',
            description: 'Guía completa para enviar dinero a México desde Texas',
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
