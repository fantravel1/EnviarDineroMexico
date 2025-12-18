import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { ComparisonCalculator } from '@/components/ComparisonCalculator'

export const metadata: Metadata = {
  title: 'Enviar Dinero al Estado de Mexico 2025 | Guia Completa',
  description: 'Como enviar dinero al Estado de Mexico. Cuarto estado con mas remesas ($3.8B). Toluca, Ecatepec, Naucalpan, Nezahualcoyotl. Mejores opciones.',
  keywords: ['enviar dinero estado de mexico', 'remesas edomex', 'enviar dinero toluca', 'transferencias estado de mexico'],
  alternates: {
    canonical: '/enviar-dinero-a-mexico/a-estado-de-mexico/',
  },
}

export default function AEstadoDeMexico() {
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
                <li className="text-white">Al Estado de Mexico</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero al Estado de Mexico
            </h1>
            <p className="text-xl text-trust-blue-100 mb-6">
              El estado mas poblado de Mexico, rodeando la capital
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">$3.8B+</div>
                <div className="text-sm text-trust-blue-200">Remesas anuales</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">#4</div>
                <div className="text-sm text-trust-blue-200">Estado receptor</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">17M</div>
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
            Calcula Cuanto Recibiran en Estado de Mexico
          </h2>
          <ComparisonCalculator />
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                Estado de Mexico: El Gigante Demografico
              </h2>
              <p className="text-neutral-700 mb-4">
                El Estado de Mexico es la entidad mas poblada del pais con casi 17 millones
                de habitantes. Rodea casi por completo a la Ciudad de Mexico y forma parte
                de la zona metropolitana mas grande de America Latina.
              </p>
              <p className="text-neutral-700">
                Es el cuarto estado que mas remesas recibe, con mas de $3,800 millones de
                dolares anuales. La poblacion migrante se concentra principalmente en
                California, Texas y Nueva York. Las ciudades del oriente del estado tienen
                las tasas mas altas de recepcion de remesas.
              </p>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Mejores Opciones para Estado de Mexico
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
                    $0 comision, ideal para la zona metropolitana. Deposito directo
                    a cualquier banco en minutos.
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
                    Red de cobro mas amplia. Miles de OXXO, Elektra y puntos de
                    cobro en todo el estado, desde Ecatepec hasta Toluca.
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
                    Llegada instantanea via SPEI. Perfecto para emergencias.
                    Tambien permite enviar a Mercado Pago y billeteras digitales.
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
                Guia por Zona
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Zona Oriente (Ecatepec, Nezahualcoyotl, Chimalhuacan)</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    La zona con mayor poblacion y recepcion de remesas. Comunidades
                    con fuerte tradicion migratoria hacia Estados Unidos.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Remitly (amplia red de efectivo)</li>
                    <li>Miles de OXXOs y tiendas de cobro</li>
                    <li>Ecatepec: municipio mas poblado de Mexico</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Zona Norte (Tlalnepantla, Naucalpan, Atizapan)</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Zona industrial y residencial con buena infraestructura
                    bancaria. Mas habitantes con cuentas bancarias.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Sendwave (deposito bancario)</li>
                    <li>Sucursales bancarias en cada colonia</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Toluca y Valle de Toluca</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Capital del estado y zona industrial importante.
                    Ciudad universitaria con buena bancarizacion.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Sendwave o Remitly</li>
                    <li>Centro historico con todos los bancos</li>
                    <li>Metepec con alta concentracion bancaria</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Zona Sur (Chalco, Valle de Chalco, Ixtapaluca)</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Zona de rapido crecimiento con alta recepcion de remesas.
                    Comunidades con vinculos fuertes a California.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Remitly (cobro en efectivo)</li>
                    <li>OXXO y Elektra en colonias populares</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">Zonas Rurales (Texcoco, Amecameca, Tenango)</h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    Municipios rurales y semirurales con comunidades
                    agricolas y tradicion migratoria.
                  </p>
                  <ul className="text-neutral-600 text-sm list-disc list-inside">
                    <li>Mejor opcion: Remitly o Western Union</li>
                    <li>Telecomm en cabeceras municipales</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Special Considerations */}
            <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-3">Consideraciones Especiales</h2>
              <div className="text-yellow-700 space-y-2">
                <p>
                  <strong>Zona metropolitana:</strong> Si el receptor vive cerca del limite
                  con CDMX, confirma en que estado esta su banco o punto de cobro. Algunos
                  proveedores muestran opciones de ambos estados.
                </p>
                <p>
                  <strong>Seguridad:</strong> Para zonas con alto flujo de efectivo, considera
                  enviar a cuenta bancaria en lugar de cobro en efectivo.
                </p>
              </div>
            </section>

            {/* Banking Info */}
            <section className="bg-trust-blue-50 border border-trust-blue-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-trust-blue-800 mb-3">Bancos Populares en Estado de Mexico</h2>
              <p className="text-trust-blue-700 mb-4">
                Por ser el estado mas poblado, tiene la mayor cantidad de sucursales
                bancarias del pais. Los bancos mas usados son:
              </p>
              <div className="grid grid-cols-2 gap-2 text-trust-blue-700 text-sm">
                <div>BBVA Bancomer</div>
                <div>Banco Azteca</div>
                <div>Banorte</div>
                <div>BanCoppel</div>
                <div>Santander</div>
                <div>Banamex</div>
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
                    Es lo mismo Estado de Mexico que Ciudad de Mexico?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    No. El Estado de Mexico (Edomex) rodea a la Ciudad de Mexico (CDMX),
                    pero son entidades diferentes. Si envias a alguien en Ecatepec o
                    Naucalpan, es Estado de Mexico. Si es en Coyoacan o Iztapalapa, es CDMX.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">
                    Cual es la mejor opcion para Ecatepec?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Para cobro en efectivo: Remitly, con miles de puntos de cobro.
                    Para deposito bancario: Sendwave ($0 comision). Depende de si tu
                    familiar tiene cuenta bancaria.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-2">
                    Cuanto cuesta enviar $500 al Estado de Mexico?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Con Sendwave: ~$10 (2% en tipo de cambio). Con Remitly: ~$12.
                    Con Western Union: ~$22. Las apps digitales ahorran significativamente.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-neutral-800 mb-4">Datos del Estado de Mexico</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Capital</span>
                  <span className="font-medium">Toluca</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Poblacion</span>
                  <span className="font-medium">17 millones</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Remesas 2024</span>
                  <span className="font-medium text-success-green-600">$3.8B USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Municipios</span>
                  <span className="font-medium">125</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Zona Metro</span>
                  <span className="font-medium">22M (con CDMX)</span>
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
                <Link href="/enviar-dinero-a-mexico/a-guanajuato/" className="block text-trust-blue-600 hover:underline">
                  Guanajuato
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
            headline: 'Enviar Dinero al Estado de Mexico - Guia 2025',
            description: 'Guia completa para enviar dinero al Estado de Mexico. Cuarto estado receptor de remesas.',
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
              { '@type': 'ListItem', position: 3, name: 'Al Estado de Mexico', item: 'https://enviardineromexico.com/enviar-dinero-a-mexico/a-estado-de-mexico/' },
            ],
          }),
        }}
      />
    </main>
  )
}
