import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { ComparisonCalculator } from '@/components/ComparisonCalculator'

export const metadata: Metadata = {
  title: 'Enviar Dinero a Guanajuato 2025 | Guia Completa',
  description: 'Como enviar dinero a Guanajuato, Mexico. El tercer estado con mas remesas ($4.7B). Leon, Irapuato, Celaya, San Miguel de Allende. Mejores opciones.',
  keywords: ['enviar dinero a guanajuato', 'remesas guanajuato', 'enviar dinero leon', 'transferencias guanajuato', 'remesas a leon', 'enviar dinero irapuato'],
  alternates: {
    canonical: '/enviar-dinero-a-mexico/a-guanajuato/',
  },
  openGraph: {
    title: 'Enviar Dinero a Guanajuato 2025 | Guia Completa',
    description: 'Como enviar dinero a Guanajuato, Mexico. El tercer estado con mas remesas ($4.7B). Leon, Irapuato, Celaya.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function AGuanajuato() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue-700 to-trust-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-trust-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/enviar-dinero-a-mexico/" className="hover:text-white">Enviar Dinero</Link></li>
                <li>/</li>
                <li className="text-white">A Guanajuato</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a Guanajuato
            </h1>
            <p className="text-xl text-trust-blue-100 mb-6">
              Cuna de la Independencia y tercer estado receptor de remesas en Mexico
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$4.7B+</div>
                <div className="text-sm text-trust-blue-200">Remesas anuales</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">#3</div>
                <div className="text-sm text-trust-blue-200">Estado receptor</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">6.2M</div>
                <div className="text-sm text-trust-blue-200">Poblacion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        {/* Calculator */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">
            Calcula Cuanto Recibiran en Guanajuato
          </h2>
          <ComparisonCalculator />
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                Guanajuato: Corazon del Bajio
              </h2>
              <p className="text-neutral-700 mb-4">
                Guanajuato es el tercer estado que mas remesas recibe en Mexico, con mas de
                $4,700 millones de dolares anuales. La region del Bajio tiene una larga
                tradicion migratoria hacia Estados Unidos, especialmente a Texas, California
                e Illinois.
              </p>
              <p className="text-neutral-700">
                El corredor industrial Leon-Silao-Irapuato-Celaya es una de las zonas
                economicas mas dinamicas del pais, con excelente infraestructura bancaria
                y de pagos. San Miguel de Allende atrae tanto turismo como inversion extranjera.
              </p>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Mejores Opciones para Guanajuato
              </h2>

              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-neutral-800">Sendwave</h3>
                    <span className="bg-success-green-50 text-success-green-700 px-2 py-1 rounded text-sm font-medium">
                      Mejor precio
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-3">
                    $0 comision, ideal para Leon, Irapuato y el corredor industrial.
                    Deposito directo a BBVA, Banorte, Santander y todos los bancos.
                  </p>
                  <Link href="/reviews/sendwave/" className="text-trust-blue-600 hover:underline text-sm">
                    Ver review completo
                  </Link>
                </div>

                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-neutral-800">Remitly</h3>
                    <span className="bg-trust-blue-50 text-trust-blue-700 px-2 py-1 rounded text-sm font-medium">
                      Mayor cobertura
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-3">
                    Perfecto para pueblos y comunidades rurales. Cobro en OXXO, Elektra
                    y tiendas en todo el estado, incluyendo zonas serranas.
                  </p>
                  <Link href="/reviews/remitly/" className="text-trust-blue-600 hover:underline text-sm">
                    Ver review completo
                  </Link>
                </div>

                <div className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-neutral-800">Felix Pago</h3>
                    <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-sm font-medium">
                      Instantaneo
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-3">
                    Llegada instantanea via SPEI. Excelente para emergencias.
                    Primera transferencia gratis.
                  </p>
                  <Link href="/reviews/felix-pago/" className="text-trust-blue-600 hover:underline text-sm">
                    Ver review completo
                  </Link>
                </div>
              </div>
            </section>

            {/* Cities Guide */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Guia por Ciudad
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Leon</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Ciudad mas grande del estado y capital del calzado. Centro industrial
                    importante con excelente infraestructura bancaria.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Sendwave (deposito bancario, $0 comision)</li>
                    <li>Todos los bancos principales presentes</li>
                    <li>Zona metropolitana de 1.9 millones de habitantes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Irapuato</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Capital mundial de la fresa. Ciudad industrial con fuerte
                    presencia automotriz y agroindustrial.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Sendwave o Remitly</li>
                    <li>Buena cobertura de OXXOs y bancos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Celaya</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Centro geografico y economico del Bajio. Hub automotriz con
                    plantas de Honda, Toyota y proveedores.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Sendwave</li>
                    <li>Infraestructura bancaria completa</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">San Miguel de Allende</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Ciudad colonial, Patrimonio de la Humanidad. Comunidad grande de
                    expatriados y turismo internacional.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Wise (para expatriados) o Sendwave</li>
                    <li>Bancos en el centro historico</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Guanajuato Capital</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Capital del estado, ciudad universitaria y turistica.
                    Arquitectura colonial unica con tuneles.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Remitly o Sendwave</li>
                    <li>Bancos en el centro y zonas universitarias</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Comunidades Rurales (San Felipe, Dolores Hidalgo)</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Pueblos con alta migracion historica hacia Estados Unidos.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Remitly (cobro en efectivo)</li>
                    <li>OXXO y Telecomm disponibles en cabeceras</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Banking Info */}
            <section className="bg-trust-blue-50 border border-trust-blue-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-trust-blue-800 mb-3">Bancos Populares en Guanajuato</h2>
              <p className="text-trust-blue-700 mb-4">
                Guanajuato tiene excelente cobertura bancaria, especialmente en el corredor
                industrial. Los bancos mas usados para recibir remesas son:
              </p>
              <div className="grid grid-cols-2 gap-2 text-trust-blue-700 text-sm">
                <div>BBVA Bancomer</div>
                <div>Banorte</div>
                <div>Santander</div>
                <div>Banco Azteca</div>
                <div>HSBC</div>
                <div>BanCoppel</div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">
                    Cual es la mejor opcion para enviar a Leon?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Para Leon y ciudades grandes del Bajio, Sendwave ofrece la mejor
                    combinacion de precio ($0 comision) y velocidad. Deposito directo
                    a cualquier banco.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">
                    Hay opciones para pueblos pequenos?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Si, Remitly tiene la red mas amplia de cobro en efectivo, incluyendo
                    OXXO, Elektra y tiendas de abarrotes en pueblos pequenos. Western Union
                    tambien tiene buena cobertura rural.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">
                    Cuanto cuesta enviar $500 a Guanajuato?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Con Sendwave: ~$10 (2% en tipo de cambio). Con Remitly: ~$12.
                    Con Western Union: ~$22. El ahorro con apps digitales es significativo.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-neutral-800 mb-4">Datos de Guanajuato</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Capital</span>
                  <span className="font-medium">Guanajuato</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Ciudad mas grande</span>
                  <span className="font-medium">Leon</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Poblacion</span>
                  <span className="font-medium">6.2 millones</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Remesas 2024</span>
                  <span className="font-medium text-success-green-600">$4.7B USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Municipios</span>
                  <span className="font-medium">46</span>
                </div>
              </div>
            </div>

            {/* Other States */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-neutral-800 mb-4">Otros Estados</h3>
              <div className="space-y-2">
                <Link href="/enviar-dinero-a-mexico/a-jalisco/" className="block text-trust-blue-600 hover:underline">
                  Jalisco
                </Link>
                <Link href="/enviar-dinero-a-mexico/a-michoacan/" className="block text-trust-blue-600 hover:underline">
                  Michoacan
                </Link>
                <Link href="/enviar-dinero-a-mexico/a-estado-de-mexico/" className="block text-trust-blue-600 hover:underline">
                  Estado de Mexico
                </Link>
                <Link href="/enviar-dinero-a-mexico/a-oaxaca/" className="block text-trust-blue-600 hover:underline">
                  Oaxaca
                </Link>
                <Link href="/enviar-dinero-a-mexico/" className="block text-trust-blue-600 hover:underline">
                  Ver todos
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">Primera vez?</h3>
              <p className="text-trust-blue-100 text-sm mb-4">
                Felix Pago te da tu primera transferencia gratis.
              </p>
              <Link
                href="/reviews/felix-pago/"
                className="block w-full text-center bg-white text-trust-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-trust-blue-50 transition-colors"
              >
                Conocer mas
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
            headline: 'Enviar Dinero a Guanajuato - Guia 2025',
            description: 'Guia completa para enviar dinero a Guanajuato, Mexico. Tercer estado receptor de remesas.',
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
              url: 'https://enviardineromexico.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
              url: 'https://enviardineromexico.com',
            },
            datePublished: '2025-12-17',
            dateModified: '2025-12-17',
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
              { '@type': 'ListItem', position: 2, name: 'Enviar Dinero a Mexico', item: 'https://enviardineromexico.com/enviar-dinero-a-mexico/' },
              { '@type': 'ListItem', position: 3, name: 'A Guanajuato', item: 'https://enviardineromexico.com/enviar-dinero-a-mexico/a-guanajuato/' },
            ],
          }),
        }}
      />
    </main>
  )
}
