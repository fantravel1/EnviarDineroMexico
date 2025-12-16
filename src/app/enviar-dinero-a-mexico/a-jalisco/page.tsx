import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { ComparisonCalculator } from '@/components/ComparisonCalculator'

export const metadata: Metadata = {
  title: 'Enviar Dinero a Jalisco 2025 | Guía Completa',
  description: 'Cómo enviar dinero a Jalisco, México. El segundo estado con más remesas ($5.2B). Guadalajara, Zapopan, Lagos de Moreno. Mejores opciones.',
  keywords: ['enviar dinero a jalisco', 'remesas jalisco', 'enviar dinero guadalajara', 'transferencias jalisco'],
}

export default function AJalisco() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/enviar-dinero-a-mexico" className="hover:text-white">Enviar Dinero</Link></li>
                <li>/</li>
                <li className="text-white">A Jalisco</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a Jalisco
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Tierra del tequila y segundo estado receptor de remesas
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$5.2B+</div>
                <div className="text-sm text-blue-200">Remesas anuales</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">#2</div>
                <div className="text-sm text-blue-200">Estado receptor</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">8.3M</div>
                <div className="text-sm text-blue-200">Población</div>
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
            Calcula Cuánto Recibirán en Jalisco
          </h2>
          <ComparisonCalculator />
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Jalisco: Corazón del Occidente
              </h2>
              <p className="text-gray-700 mb-4">
                Jalisco es el segundo estado que más remesas recibe en México, con más de
                $5,200 millones de dólares anuales. La zona metropolitana de Guadalajara
                es la segunda más grande del país, con excelente infraestructura bancaria
                y múltiples opciones para recibir dinero.
              </p>
              <p className="text-gray-700">
                Los jaliscienses en Estados Unidos se concentran principalmente en California
                (especialmente Los Ángeles), Texas (Houston, Dallas) y Chicago. La región de
                Los Altos de Jalisco tiene una de las tasas más altas de migración per cápita.
              </p>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Opciones para Jalisco
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
                    $0 comisión, perfecto para Guadalajara y ciudades grandes con
                    buena cobertura bancaria. Depósito directo a cualquier banco.
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
                    Ideal para Los Altos y zonas rurales. Cobro en OXXO, Elektra
                    y tiendas en toda la región.
                  </p>
                  <Link href="/reviews/remitly" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Félix Pago</h3>
                    <span className="bg-warm-accent/10 text-warm-accent px-2 py-1 rounded text-sm font-medium">
                      Instantáneo
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Llegada instantánea vía SPEI. Perfecto para emergencias o
                    cuando necesitas que el dinero llegue de inmediato.
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
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Guadalajara / Zona Metropolitana</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Segunda ciudad más grande de México. Excelente infraestructura
                    bancaria y digital. Todas las opciones disponibles.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Sendwave (depósito bancario, $0 comisión)</li>
                    <li>Bancos principales en cada colonia</li>
                    <li>Incluye Zapopan, Tlaquepaque, Tonalá</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Puerto Vallarta</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Destino turístico con muchos trabajadores del sector hotelero
                    que reciben remesas de familiares.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Remitly o Sendwave</li>
                    <li>OXXO y bancos en toda la zona hotelera</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Los Altos (Lagos de Moreno, Tepatitlán, San Juan)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región con altísima migración hacia Estados Unidos. Fuerte
                    tradición de remesas por generaciones.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Remitly (cobro en efectivo extenso)</li>
                    <li>Western Union en pueblos más pequeños</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Tequila / Región del Tequila</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Zona agrícola con trabajadores en la industria tequilera.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Remitly</li>
                    <li>Cobro en OXXO de la cabecera municipal</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Costa Sur (Cihuatlán, Autlán)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región agrícola y costera con comunidades más pequeñas.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Western Union o Remitly</li>
                    <li>Telecomm disponible en municipios pequeños</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Banking Info */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-3">🏦 Bancos Populares en Jalisco</h2>
              <p className="text-blue-700 mb-4">
                Jalisco tiene excelente cobertura bancaria. Los bancos más usados para
                recibir remesas son:
              </p>
              <div className="grid grid-cols-2 gap-2 text-blue-700 text-sm">
                <div>• BBVA Bancomer</div>
                <div>• Banorte</div>
                <div>• Santander</div>
                <div>• Banco Azteca</div>
                <div>• HSBC</div>
                <div>• Scotiabank</div>
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
                    ¿Puedo enviar a una cuenta de ahorro?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, puedes enviar a cualquier cuenta bancaria con CLABE.
                    Las cuentas de ahorro y las de nómina funcionan igual.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Llega más rápido a Guadalajara que a pueblos?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Para depósito bancario, la velocidad es igual. Para cobro en
                    efectivo, las ciudades grandes tienen más horarios disponibles.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuánto cuesta enviar $500 a Jalisco?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Con Sendwave: ~$10 (2% en tipo de cambio). Con Remitly: ~$12.
                    Con Western Union: ~$22. El ahorro es significativo con apps.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Datos de Jalisco</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Capital</span>
                  <span className="font-medium">Guadalajara</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Población</span>
                  <span className="font-medium">8.3 millones</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remesas 2024</span>
                  <span className="font-medium text-success-green">$5.2B USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Zona metro GDL</span>
                  <span className="font-medium">5.2 millones</span>
                </div>
              </div>
            </div>

            {/* Other States */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Otros Estados</h3>
              <div className="space-y-2">
                <Link href="/enviar-dinero-a-mexico/a-michoacan" className="block text-trust-blue hover:underline">
                  Michoacán →
                </Link>
                <Link href="/enviar-dinero-a-mexico/a-oaxaca" className="block text-trust-blue hover:underline">
                  Oaxaca →
                </Link>
                <Link href="/enviar-dinero-a-mexico" className="block text-trust-blue hover:underline">
                  Ver todos →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">¿Primera vez?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Félix Pago te da tu primera transferencia gratis.
              </p>
              <Link
                href="/reviews/felix-pago"
                className="block w-full text-center bg-white text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
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
            headline: 'Enviar Dinero a Jalisco - Guía 2025',
            description: 'Guía completa para enviar dinero a Jalisco, México',
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
