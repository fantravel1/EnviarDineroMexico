import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { ComparisonCalculator } from '@/components/ComparisonCalculator'

export const metadata: Metadata = {
  title: 'Enviar Dinero a Michoacán 2025 | Guía Completa',
  description: 'Cómo enviar dinero a Michoacán, México. El estado que más remesas recibe ($5.4B). Morelia, Uruapan, Zamora. Mejores opciones y costos.',
  keywords: ['enviar dinero a michoacan', 'remesas michoacan', 'enviar dinero morelia', 'transferencias michoacan'],
}

export default function AMichoacan() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-purple-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/enviar-dinero-a-mexico" className="hover:text-white">Enviar Dinero</Link></li>
                <li>/</li>
                <li className="text-white">A Michoacán</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a Michoacán
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              El estado que más remesas recibe en todo México
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$5.4B+</div>
                <div className="text-sm text-purple-200">Remesas anuales</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">#1</div>
                <div className="text-sm text-purple-200">Estado receptor</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">2M+</div>
                <div className="text-sm text-purple-200">Migrantes en EE.UU.</div>
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
            Calcula Cuánto Recibirán en Michoacán
          </h2>
          <ComparisonCalculator />
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Michoacán: Tierra de Migrantes
              </h2>
              <p className="text-gray-700 mb-4">
                Michoacán es el estado mexicano que más remesas recibe, con más de $5,400 millones
                de dólares anuales. Esto representa aproximadamente el 10% de todas las remesas
                que llegan a México. La tradición migratoria de Michoacán se remonta a más de
                un siglo, creando fuertes lazos entre comunidades michoacanas y ciudades
                estadounidenses como Los Ángeles, Chicago y Dallas.
              </p>
              <p className="text-gray-700">
                Las principales ciudades receptoras son Morelia (capital), Uruapan, Zamora,
                Lázaro Cárdenas, Apatzingán y la región de la Meseta Purépecha. Las remesas
                son fundamentales para la economía del estado, representando hasta el 15%
                del PIB estatal.
              </p>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Opciones para Michoacán
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Remitly</h3>
                    <span className="bg-success-green/10 text-success-green px-2 py-1 rounded text-sm font-medium">
                      Recomendado
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    La mejor opción para Michoacán por su extensa red de cobro incluyendo
                    zonas rurales. 470,000+ ubicaciones en todo México.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside mb-3">
                    <li>Cobro en OXXO, Elektra, BanCoppel en toda la región</li>
                    <li>Depósito directo a Banco Azteca y Bancomer muy usados</li>
                    <li>Llegada en minutos con opción Express</li>
                  </ul>
                  <Link href="/reviews/remitly" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Sendwave</h3>
                    <span className="bg-trust-blue/10 text-trust-blue px-2 py-1 rounded text-sm font-medium">
                      Más económico
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    $0 comisión, ideal para depósitos bancarios. Perfecto si tu familia
                    tiene cuenta en Bancomer, Banorte o Santander.
                  </p>
                  <Link href="/reviews/sendwave" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Western Union</h3>
                    <span className="bg-warm-accent/10 text-warm-accent px-2 py-1 rounded text-sm font-medium">
                      Zonas rurales
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    La mejor cobertura en pueblos pequeños y comunidades indígenas de la
                    Meseta Purépecha donde otras opciones no llegan.
                  </p>
                  <Link href="/reviews/western-union" className="text-trust-blue hover:underline text-sm">
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
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Morelia (Capital)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    La capital del estado con excelente infraestructura bancaria.
                    Múltiples sucursales de todos los bancos principales.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Depósito bancario (Sendwave o Remitly)</li>
                    <li>Alternativa: Cobro en Elektra Centro o Soriana</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Uruapan</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Segunda ciudad más grande. Capital del aguacate con fuerte
                    actividad comercial.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Remitly (múltiples puntos de cobro)</li>
                    <li>OXXO y Elektra disponibles en toda la ciudad</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Zamora</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Importante centro agrícola con alta recepción de remesas.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Remitly o Félix Pago</li>
                    <li>Cobro disponible en centro comercial y tiendas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Meseta Purépecha (Pátzcuaro, Cherán, Paracho)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región indígena con comunidades más pequeñas. Opciones limitadas
                    pero Western Union tiene mejor cobertura.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Western Union (Telecomm en pueblos)</li>
                    <li>Alternativa: Depósito a cuenta bancaria</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Tierra Caliente (Apatzingán, Tepalcatepec)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región agrícola con fuerte tradición migratoria hacia California.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Remitly (cobro en Elektra y OXXO)</li>
                    <li>Depósito a Banco Azteca muy común</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cultural Note */}
            <section className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-3">🎭 Nota Cultural</h2>
              <p className="text-purple-700 mb-4">
                En Michoacán, las remesas son parte fundamental de la vida comunitaria.
                Muchas fiestas patronales, construcciones de iglesias y proyectos
                comunitarios son financiados por migrantes en Estados Unidos.
              </p>
              <p className="text-purple-700">
                Los michoacanos en EE.UU. mantienen fuertes lazos con sus comunidades
                de origen, participando en &quot;clubes de oriundos&quot; que envían dinero
                colectivo para obras públicas.
              </p>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuál es el mejor día para enviar a Michoacán?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Entre semana (lunes a viernes) para depósitos bancarios. Para cobro
                    en efectivo, evita los lunes cuando hay más fila en tiendas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Puedo enviar a pueblos muy pequeños?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, Western Union tiene presencia en Telecomm que llega a pueblos
                    pequeños. Alternativamente, tu familia puede cobrar en la cabecera
                    municipal más cercana.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Hay impuestos por recibir remesas en Michoacán?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No, las remesas de familiares directos están exentas de impuestos
                    en México sin importar el monto.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Datos de Michoacán</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Capital</span>
                  <span className="font-medium">Morelia</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Población</span>
                  <span className="font-medium">4.7 millones</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remesas 2024</span>
                  <span className="font-medium text-success-green">$5.4B USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">% del PIB estatal</span>
                  <span className="font-medium">~15%</span>
                </div>
              </div>
            </div>

            {/* Other States */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Otros Estados</h3>
              <div className="space-y-2">
                <Link href="/enviar-dinero-a-mexico/a-jalisco" className="block text-trust-blue hover:underline">
                  Jalisco →
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
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">Envía ahora</h3>
              <p className="text-purple-100 text-sm mb-4">
                Compara y envía dinero a tu familia en Michoacán.
              </p>
              <Link
                href="/calculadora"
                className="block w-full text-center bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Usar calculadora
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
            headline: 'Enviar Dinero a Michoacán - Guía 2025',
            description: 'Guía completa para enviar dinero a Michoacán, México',
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
