import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { ComparisonCalculator } from '@/components/ComparisonCalculator'

export const metadata: Metadata = {
  title: 'Enviar Dinero a México desde California 2025 | Mejores Opciones',
  description: 'Guía completa para enviar dinero a México desde California. Compara Sendwave, Remitly, Félix Pago. Los Angeles, San Diego, San Francisco. Actualizado 2025.',
  keywords: ['enviar dinero a mexico desde california', 'remesas california mexico', 'enviar dinero los angeles mexico', 'transferencias california mexico', 'enviar dinero san diego mexico', 'remesas desde los angeles'],
  openGraph: {
    title: 'Enviar Dinero a México desde California 2025 | Mejores Opciones',
    description: 'Guía completa para enviar dinero a México desde California. Compara Sendwave, Remitly, Félix Pago. Los Angeles, San Diego, San Francisco.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function DesdeCalifornia() {
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
                <li><Link href="/enviar-dinero-a-mexico" className="hover:text-white">Enviar Dinero</Link></li>
                <li>/</li>
                <li className="text-white">Desde California</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a México desde California
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Guía completa para los 4+ millones de mexicanos en el Estado Dorado
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">4.1M+</div>
                <div className="text-sm text-blue-200">Mexicanos en CA</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$15B+</div>
                <div className="text-sm text-blue-200">Remesas anuales</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">#1</div>
                <div className="text-sm text-blue-200">Estado remitente</div>
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
            Compara Opciones desde California
          </h2>
          <ComparisonCalculator />
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                California: El Principal Corredor de Remesas
              </h2>
              <p className="text-gray-700 mb-4">
                California es el estado con la mayor población mexicana en Estados Unidos y el
                principal origen de remesas hacia México. Con más de 4 millones de mexicanos,
                el estado envía aproximadamente $15 mil millones anuales a México.
              </p>
              <p className="text-gray-700">
                Las principales ciudades para envíos son Los Ángeles, San Diego, San Francisco,
                Fresno y San José. Cada una tiene múltiples opciones tanto digitales como presenciales
                para enviar dinero a tu familia en México.
              </p>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Opciones desde California
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Sendwave</h3>
                    <span className="bg-success-green/10 text-success-green px-2 py-1 rounded text-sm font-medium">
                      Mejor para costos
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    $0 comisión, solo ~2% en tipo de cambio. Ideal para envíos regulares de $200-500.
                  </p>
                  <Link href="/reviews/sendwave" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Remitly</h3>
                    <span className="bg-trust-blue/10 text-trust-blue px-2 py-1 rounded text-sm font-medium">
                      Mayor cobertura
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    470,000+ ubicaciones de cobro en México. Perfecto si tu familia está en área rural.
                  </p>
                  <Link href="/reviews/remitly" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Félix Pago</h3>
                    <span className="bg-warm-accent/10 text-warm-accent px-2 py-1 rounded text-sm font-medium">
                      Más rápido
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Envía por WhatsApp en 5 minutos. Primera transferencia gratis. Ideal para nuevos usuarios.
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
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Los Ángeles</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    La ciudad con mayor población mexicana en EE.UU. Encontrarás agentes de Western Union
                    y MoneyGram en casi cada esquina, pero las apps móviles ofrecen mejores precios.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Área de mayor envío: Este de LA, Boyle Heights</li>
                    <li>Opción recomendada: Sendwave o Remitly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 San Diego</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Ciudad fronteriza con Tijuana. Muchas familias tienen la opción de llevar efectivo
                    directamente, pero las transferencias digitales son más seguras.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Área de mayor envío: Chula Vista, National City</li>
                    <li>Opción recomendada: Félix Pago (llegada instantánea)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Fresno / Central Valley</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Gran comunidad agrícola mexicana. Muchos trabajadores envían dinero regularmente
                    a estados como Michoacán, Jalisco y Guanajuato.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Área de mayor envío: Fresno, Bakersfield, Salinas</li>
                    <li>Opción recomendada: Remitly (cobro en efectivo extenso)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 San Francisco / Bay Area</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Comunidad mexicana tech-savvy. Las apps móviles son muy populares aquí.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Área de mayor envío: Mission District, Oakland</li>
                    <li>Opción recomendada: Wise (para montos grandes)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* In-Person Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Opciones Presenciales en California
              </h2>

              <p className="text-gray-700 mb-4">
                Si prefieres enviar dinero en persona, estas son las opciones más comunes en California:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Western Union</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 4,000+ ubicaciones en CA</li>
                    <li>• Disponible en Walmart, CVS</li>
                    <li>• Costos: $5-15 + tipo de cambio</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">MoneyGram</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 3,500+ ubicaciones en CA</li>
                    <li>• Disponible en Walmart, 7-Eleven</li>
                    <li>• Costos: $4-12 + tipo de cambio</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>💡 Consejo:</strong> Las opciones presenciales suelen costar 2-3x más que las apps
                  móviles. Si tienes smartphone, considera usar Sendwave, Remitly o Félix Pago para ahorrar.
                </p>
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
                    ¿Puedo enviar dinero sin seguro social?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, la mayoría de servicios aceptan ITIN o identificación extranjera.
                    Félix Pago y Sendwave son especialmente flexibles con documentación.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuál es el límite para enviar desde California?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Los límites varían por servicio. Remitly permite hasta $10,000/mes con
                    verificación completa. Para montos mayores, Wise no tiene límite con documentación.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Hay impuestos por enviar dinero a México?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    En EE.UU., las remesas no pagan impuestos. En México, las remesas a familiares
                    directos (padres, hijos, cónyuge) están exentas de impuestos sin límite.
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
                <Link href="/enviar-dinero-a-mexico/desde-texas" className="block text-trust-blue hover:underline">
                  Desde Texas →
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
                Los californianos envían principalmente a:
              </p>
              <div className="space-y-2">
                <Link href="/enviar-dinero-a-mexico/a-michoacan" className="block text-trust-blue hover:underline">
                  Michoacán →
                </Link>
                <Link href="/enviar-dinero-a-mexico/a-jalisco" className="block text-trust-blue hover:underline">
                  Jalisco →
                </Link>
                <Link href="/enviar-dinero-a-mexico/a-oaxaca" className="block text-trust-blue hover:underline">
                  Oaxaca →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-trust-blue to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">¿Primera vez enviando?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Félix Pago ofrece tu primera transferencia completamente gratis.
              </p>
              <Link
                href="/reviews/felix-pago"
                className="block w-full text-center bg-white text-trust-blue font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Conocer más
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
            headline: 'Enviar Dinero a México desde California - Guía 2025',
            description: 'Guía completa para enviar dinero a México desde California',
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
