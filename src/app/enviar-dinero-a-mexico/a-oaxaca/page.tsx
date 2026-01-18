import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { ComparisonCalculator } from '@/components/ComparisonCalculator'

export const metadata: Metadata = {
  title: 'Enviar Dinero a Oaxaca 2025 | Guía Completa',
  description: 'Cómo enviar dinero a Oaxaca, México. Estado con alta migración indígena ($2.8B en remesas). Oaxaca ciudad, Valles Centrales, Sierra. Mejores opciones.',
  keywords: ['enviar dinero a oaxaca', 'remesas oaxaca', 'enviar dinero oaxaca ciudad', 'transferencias oaxaca', 'remesas a oaxaca', 'enviar dinero valles centrales'],
  openGraph: {
    title: 'Enviar Dinero a Oaxaca 2025 | Guía Completa',
    description: 'Cómo enviar dinero a Oaxaca, México. Estado con alta migración indígena ($2.8B en remesas). Oaxaca ciudad, Valles Centrales.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function AOaxaca() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-red-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/enviar-dinero-a-mexico" className="hover:text-white">Enviar Dinero</Link></li>
                <li>/</li>
                <li className="text-white">A Oaxaca</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a Oaxaca
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Estado con la mayor diversidad cultural y alta migración
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$2.8B+</div>
                <div className="text-sm text-red-200">Remesas anuales</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">#5</div>
                <div className="text-sm text-red-200">Estado receptor</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">16</div>
                <div className="text-sm text-red-200">Grupos indígenas</div>
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
            Calcula Cuánto Recibirán en Oaxaca
          </h2>
          <ComparisonCalculator />
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Oaxaca: Diversidad y Migración
              </h2>
              <p className="text-gray-700 mb-4">
                Oaxaca es uno de los estados con mayor migración hacia Estados Unidos,
                especialmente de comunidades indígenas zapotecas, mixtecas y triquis.
                Con más de $2,800 millones en remesas anuales, el dinero enviado por
                migrantes representa una parte crucial de la economía oaxaqueña.
              </p>
              <p className="text-gray-700">
                Los oaxaqueños en Estados Unidos se concentran en California (especialmente
                Los Ángeles y el Valle Central), Nueva Jersey, Nueva York y Florida.
                Muchas comunidades mantienen fuertes lazos con sus pueblos de origen
                a través del sistema de &quot;tequio&quot; y fiestas patronales.
              </p>
            </section>

            {/* Special Considerations */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-amber-800 mb-3">⚠️ Consideración Importante</h2>
              <p className="text-amber-700 mb-4">
                Oaxaca tiene muchas comunidades rurales y de difícil acceso. Antes de enviar,
                pregunta a tu familia cuál es la ubicación de cobro más cercana y conveniente
                para ellos. En algunas zonas de la Sierra o la Costa, las opciones son limitadas.
              </p>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Opciones para Oaxaca
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Remitly</h3>
                    <span className="bg-success-green/10 text-success-green px-2 py-1 rounded text-sm font-medium">
                      Mejor cobertura
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    La opción más recomendada para Oaxaca por su extensa red que incluye
                    OXXO, Elektra, y sucursales bancarias en cabeceras municipales.
                  </p>
                  <Link href="/reviews/remitly" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Western Union</h3>
                    <span className="bg-trust-blue/10 text-trust-blue px-2 py-1 rounded text-sm font-medium">
                      Zonas remotas
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    La mejor opción para comunidades muy pequeñas. Telecomm tiene
                    presencia en muchos pueblos donde otras opciones no llegan.
                  </p>
                  <Link href="/reviews/western-union" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Sendwave</h3>
                    <span className="bg-warm-accent/10 text-warm-accent px-2 py-1 rounded text-sm font-medium">
                      Ciudades grandes
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    $0 comisión, ideal si tu familia está en Oaxaca ciudad o tiene
                    cuenta bancaria. Depósito directo a Bancomer, Banorte, etc.
                  </p>
                  <Link href="/reviews/sendwave" className="text-trust-blue hover:underline text-sm">
                    Ver review completo →
                  </Link>
                </div>
              </div>
            </section>

            {/* Regions Guide */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Guía por Región
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Valles Centrales (Oaxaca ciudad, Tlacolula, Ocotlán)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    La región más poblada y con mejor infraestructura. La ciudad de Oaxaca
                    tiene todas las opciones disponibles.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Sendwave (depósito bancario) o Remitly</li>
                    <li>OXXO, Elektra, y bancos en toda la zona</li>
                    <li>Comunidades zapotecas con buena conectividad</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Mixteca (Huajuapan, Tlaxiaco, Juxtlahuaca)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región con altísima migración hacia Estados Unidos. Muchas
                    comunidades mixtecas en California.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Remitly o Western Union</li>
                    <li>Cobro en cabeceras municipales principales</li>
                    <li>Telecomm en pueblos más pequeños</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Sierra Norte (Ixtlán, Guelatao, Villa Alta)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región montañosa con comunidades zapotecas. Acceso más limitado.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Western Union (Telecomm)</li>
                    <li>Alternativa: Depósito bancario si tienen cuenta</li>
                    <li>Algunos cobran en Oaxaca ciudad</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Costa (Puerto Escondido, Huatulco, Pinotepa)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región costera con comunidades afromexicanas y mixtas.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Remitly</li>
                    <li>OXXO disponible en ciudades principales</li>
                    <li>Comunidades pequeñas: Western Union</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📍 Istmo (Juchitán, Tehuantepec, Salina Cruz)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Región zapoteca con tradición comercial. Buena infraestructura.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Mejor opción: Sendwave o Remitly</li>
                    <li>Bancos y tiendas disponibles</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Indigenous Communities */}
            <section className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-red-800 mb-3">🏛️ Comunidades Indígenas</h2>
              <p className="text-red-700 mb-4">
                Oaxaca tiene 16 grupos indígenas diferentes con sus propias lenguas y
                tradiciones. Si envías a una comunidad indígena:
              </p>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• <strong>Pregunta primero</strong> dónde prefieren cobrar</li>
                <li>• Muchos cobran en la cabecera municipal durante el día de mercado</li>
                <li>• El depósito bancario puede ser mejor si hay que viajar lejos</li>
                <li>• Western Union/Telecomm llega a pueblos más pequeños</li>
              </ul>
            </section>

            {/* Tequio Section */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sistema de Tequio y Remesas Colectivas
              </h2>
              <p className="text-gray-700 mb-4">
                En Oaxaca, el &quot;tequio&quot; es un sistema de trabajo comunitario donde todos
                contribuyen. Muchos migrantes oaxaqueños en EE.UU. forman clubes que
                envían dinero colectivamente para:
              </p>
              <ul className="text-gray-700 list-disc list-inside mb-4">
                <li>Fiestas patronales</li>
                <li>Construcción de escuelas o clínicas</li>
                <li>Mejoras al pueblo (pavimentación, agua potable)</li>
                <li>Emergencias comunitarias</li>
              </ul>
              <p className="text-gray-600 text-sm">
                Si necesitas enviar para una cooperación comunitaria, considera usar
                Remitly o Western Union que permiten montos más grandes y múltiples
                destinatarios.
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
                    ¿Puedo enviar a un pueblo sin banco ni OXXO?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, Western Union con Telecomm llega a muchos pueblos pequeños.
                    Tu familia también puede cobrar en la cabecera municipal más cercana.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Mi familia no habla bien español, ¿hay servicio en zapoteco o mixteco?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Los servicios son en español, pero las tiendas locales en Oaxaca
                    generalmente tienen personal que habla las lenguas locales.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuánto tarda en llegar a Oaxaca?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Depósito bancario: Minutos a horas. Cobro en efectivo: Disponible
                    en minutos pero depende del horario de la tienda local.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Datos de Oaxaca</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Capital</span>
                  <span className="font-medium">Oaxaca de Juárez</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Población</span>
                  <span className="font-medium">4.1 millones</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remesas 2024</span>
                  <span className="font-medium text-success-green">$2.8B USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Municipios</span>
                  <span className="font-medium">570 (más de MX)</span>
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
                <Link href="/enviar-dinero-a-mexico/a-jalisco" className="block text-trust-blue hover:underline">
                  Jalisco →
                </Link>
                <Link href="/enviar-dinero-a-mexico" className="block text-trust-blue hover:underline">
                  Ver todos →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">Compara opciones</h3>
              <p className="text-red-100 text-sm mb-4">
                Encuentra la mejor forma de enviar a tu comunidad en Oaxaca.
              </p>
              <Link
                href="/calculadora"
                className="block w-full text-center bg-white text-red-700 font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
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
            headline: 'Enviar Dinero a Oaxaca - Guía 2025',
            description: 'Guía completa para enviar dinero a Oaxaca, México',
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
