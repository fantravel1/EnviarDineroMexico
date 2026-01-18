import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Enviar Dinero a México desde Canadá o España | Guía 2025',
  description: 'Opciones para enviar dinero a México desde Canadá, España y otros países. Comparamos servicios, costos y mejores opciones internacionales.',
  keywords: [
    'enviar dinero a mexico desde canada',
    'enviar dinero a mexico desde españa',
    'opciones enviar dinero mexico desde otro pais',
    'remesas a mexico desde europa',
    'transferir dinero a mexico desde canada',
  ],
  openGraph: {
    title: 'Enviar Dinero a México desde Canadá, España y Otros Países',
    description: 'Guía completa para enviar dinero a México desde diferentes países.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function EnviarDesdeOtroPaisPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-indigo-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Desde Otros Países</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a México desde Canadá, España y Otros Países
            </h1>
            <p className="text-xl text-indigo-100">
              Opciones internacionales para enviar remesas a México
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Note */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-blue-800 mb-3">
                Nota sobre esta guía
              </h2>
              <p className="text-blue-700">
                Este sitio está enfocado principalmente en envíos desde <strong>Estados Unidos</strong>.
                Sin embargo, muchos de los servicios que cubrimos también funcionan desde Canadá,
                España y otros países. Aquí te damos una visión general.
              </p>
            </section>

            {/* From Canada */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Desde Canadá
              </h2>

              <p className="text-gray-700 mb-4">
                Canadá es el tercer país que más remesas envía a México, después de Estados Unidos.
                Hay buenas opciones disponibles.
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Wise</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Disponible desde Canadá. Tipo de cambio real CAD a MXN. Comisión transparente.
                    Una de las mejores opciones.
                  </p>
                  <p className="text-success-green text-sm font-medium">Recomendado desde Canadá</p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Remitly</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Opera desde Canadá. Depósito bancario y cobro en efectivo disponibles.
                    Buenas promociones para nuevos usuarios.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Western Union</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Disponible en todo Canadá, tanto online como en tiendas físicas.
                    Más caro pero muy conocido.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">WorldRemit</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Buena opción desde Canadá. Múltiples métodos de entrega.
                    Empresa matriz de Sendwave.
                  </p>
                </div>
              </div>
            </section>

            {/* From Spain */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Desde España
              </h2>

              <p className="text-gray-700 mb-4">
                Hay una significativa comunidad mexicana en España, y varios servicios
                operan el corredor EUR → MXN.
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Wise</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Excelente desde España. Tipo de cambio real EUR a MXN.
                    Muy popular en Europa por su transparencia.
                  </p>
                  <p className="text-success-green text-sm font-medium">Recomendado desde España</p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Remitly</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Opera en España. Disponible para enviar a cuenta bancaria
                    y cobro en efectivo en México.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">WorldRemit</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Disponible desde España con buenas tasas. Múltiples
                    opciones de entrega en México.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Western Union</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Disponible en España, tanto online como en oficinas
                    de Correos y otros agentes.
                  </p>
                </div>
              </div>
            </section>

            {/* From Other Countries */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Desde Otros Países
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Reino Unido</h3>
                  <p className="text-gray-600 text-sm">
                    Wise, Remitly, WorldRemit, y Western Union disponibles.
                    Wise muy popular para GBP → MXN.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Alemania</h3>
                  <p className="text-gray-600 text-sm">
                    Wise es la opción principal. También WorldRemit y
                    Western Union disponibles.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Francia</h3>
                  <p className="text-gray-600 text-sm">
                    Wise, WorldRemit, y servicios tradicionales como
                    Western Union funcionan desde Francia.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Australia</h3>
                  <p className="text-gray-600 text-sm">
                    Wise disponible AUD → MXN. También WorldRemit
                    y servicios tradicionales.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Option Summary */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Resumen: Mejor Opción por País
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2">País de Origen</th>
                      <th className="text-left py-3 px-2">Mejor Opción</th>
                      <th className="text-left py-3 px-2">Alternativa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-2 font-medium">Estados Unidos</td>
                      <td className="py-3 px-2">Sendwave / Remitly</td>
                      <td className="py-3 px-2">Wise</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Canadá</td>
                      <td className="py-3 px-2">Wise</td>
                      <td className="py-3 px-2">Remitly</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">España</td>
                      <td className="py-3 px-2">Wise</td>
                      <td className="py-3 px-2">Remitly</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Reino Unido</td>
                      <td className="py-3 px-2">Wise</td>
                      <td className="py-3 px-2">WorldRemit</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Alemania</td>
                      <td className="py-3 px-2">Wise</td>
                      <td className="py-3 px-2">WorldRemit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Reverse: From Mexico */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Enviar Dinero DESDE México a Otro País
              </h2>

              <p className="text-gray-700 mb-4">
                Si estás en México y necesitas enviar dinero a Estados Unidos, Canadá, España
                u otro país, también hay opciones disponibles:
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Wise</h3>
                  <p className="text-gray-600 text-sm">
                    Permite enviar desde México a muchos países. Tipo de cambio real MXN a USD/EUR.
                    Necesitas cuenta bancaria mexicana.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Western Union</h3>
                  <p className="text-gray-600 text-sm">
                    Disponible en México para enviar a otros países. En tiendas Elektra,
                    Coppel y muchas más ubicaciones.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Transferencia bancaria</h3>
                  <p className="text-gray-600 text-sm">
                    Los bancos mexicanos permiten transferencias SWIFT internacionales,
                    aunque suelen ser caras ($25-50+).
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Desde cualquier país</h3>
              <p className="text-indigo-100 text-sm mb-4">
                Wise funciona desde 80+ países con tipo de cambio real.
              </p>
              <Link
                href="/reviews/wise/"
                className="block w-full text-center bg-white text-indigo-600 font-semibold py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Ver Wise
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Este sitio está enfocado en</h3>
              <p className="text-gray-600 text-sm mb-4">
                Envíos desde <strong>Estados Unidos</strong> a México. Para información
                más detallada sobre otros países, consulta los sitios locales de cada servicio.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/como-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Cómo enviar desde EE.UU. →
                </Link>
                <Link href="/reviews/wise/" className="block text-trust-blue hover:underline text-sm">
                  Review de Wise →
                </Link>
                <Link href="/comparar/" className="block text-trust-blue hover:underline text-sm">
                  Comparar servicios →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
