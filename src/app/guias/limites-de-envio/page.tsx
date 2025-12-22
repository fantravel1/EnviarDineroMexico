import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Cuánto Dinero Puedo Enviar a México por Mes | Límites 2025',
  description: 'Conoce cuánto dinero puedes enviar a México por mes sin declarar. Límites por proveedor: Remitly, Sendwave, Western Union. Regulaciones en EE.UU. y México.',
  keywords: [
    'cuanto dinero puedo enviar a mexico por mes',
    'limite de envio de dinero a mexico',
    'cuanto dinero puedo mandar a mexico',
    'limites transferencias mexico',
    'enviar dinero sin declarar',
    'limite remesas mexico',
  ],
  openGraph: {
    title: 'Cuánto Dinero Puedo Enviar a México por Mes | Límites 2025',
    description: 'Conoce los límites de envío de dinero a México por proveedor y las regulaciones fiscales.',
  },
}

export default function LimitesEnvioPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-trust-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Límites de Envío</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Cuánto Dinero Puedo Enviar a México por Mes?
            </h1>
            <p className="text-xl text-trust-blue-100">
              Guía completa sobre límites de transferencias y regulaciones fiscales
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg">
              <h2 className="font-bold text-lg text-success-green-800 mb-2">
                Respuesta Rápida
              </h2>
              <p className="text-success-green-700">
                <strong>Los límites varían por proveedor:</strong> Remitly permite hasta $2,999/día y $10,000/mes.
                Sendwave tiene límites similares. Western Union puede permitir hasta $7,500 por transacción.
                <strong> En México, las remesas de familiares directos son exentas de impuestos sin límite</strong>,
                pero los bancos reportan depósitos mayores a 15,000 MXN/mes al SAT.
              </p>
            </section>

            {/* Provider Limits Table */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Límites por Proveedor
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-trust-blue-600 text-white">
                    <tr>
                      <th className="p-3 text-left rounded-tl-lg">Proveedor</th>
                      <th className="p-3 text-center">Por Día</th>
                      <th className="p-3 text-center">Por Mes</th>
                      <th className="p-3 text-center rounded-tr-lg">Verificación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Remitly', daily: '$2,999', monthly: '$10,000', verification: 'ID + SSN opcional' },
                      { name: 'Sendwave', daily: '$2,999', monthly: '$6,000', verification: 'ID requerida' },
                      { name: 'Félix Pago', daily: '$2,500', monthly: '$10,000', verification: 'ID + verificación' },
                      { name: 'Western Union', daily: '$7,500', monthly: 'Sin límite*', verification: 'ID + formularios' },
                      { name: 'MoneyGram', daily: '$10,000', monthly: 'Sin límite*', verification: 'ID + formularios' },
                      { name: 'Wise', daily: '$1,000,000', monthly: 'Sin límite', verification: 'Verificación completa' },
                    ].map((provider) => (
                      <tr key={provider.name} className="border-b border-neutral-100 hover:bg-neutral-50">
                        <td className="p-3 font-medium">{provider.name}</td>
                        <td className="p-3 text-center">{provider.daily}</td>
                        <td className="p-3 text-center">{provider.monthly}</td>
                        <td className="p-3 text-center text-sm text-neutral-600">{provider.verification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-500 mt-4">
                *Requiere formularios adicionales y verificación de identidad más estricta para montos grandes.
              </p>
            </section>

            {/* US Regulations */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Regulaciones en Estados Unidos
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Reporte de $10,000+</h3>
                  <p className="text-blue-700 text-sm">
                    Las instituciones financieras deben reportar transferencias de <strong>$10,000 o más</strong> al
                    gobierno federal (formulario FinCEN). Esto es automático y no significa que estés haciendo algo mal.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Actividad Sospechosa</h3>
                  <p className="text-yellow-700 text-sm">
                    Enviar múltiples transferencias pequeñas para evitar el límite de $10,000 (structuring)
                    es ilegal. Es mejor enviar el monto real que necesitas.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Impuestos</h3>
                  <p className="text-green-700 text-sm">
                    Las remesas familiares generalmente <strong>no son deducibles de impuestos</strong> en EE.UU.
                    No hay límite legal para enviar dinero a familiares, solo requisitos de reporte.
                  </p>
                </div>
              </div>
            </section>

            {/* Mexico Regulations */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Regulaciones en México
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Remesas de Familiares Directos</h3>
                  <p className="text-green-700 text-sm">
                    Las remesas de <strong>padres, hijos, cónyuge y hermanos</strong> están exentas de impuestos
                    <strong> sin límite</strong>. Tu familia puede recibir cualquier cantidad sin pagar ISR.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Otras Donaciones</h3>
                  <p className="text-blue-700 text-sm">
                    Para personas que no son familiares directos, existe una exención de aproximadamente
                    <strong> 224,000 MXN al año</strong> (3 salarios mínimos anuales).
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Reporte al SAT</h3>
                  <p className="text-yellow-700 text-sm">
                    Los bancos mexicanos reportan automáticamente depósitos mayores a <strong>15,000 MXN mensuales</strong>
                    al SAT. Esto no significa que debas impuestos, es solo informativo.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Depósitos en Efectivo</h3>
                  <p className="text-purple-700 text-sm">
                    Los depósitos en efectivo mayores a <strong>15,000 MXN mensuales</strong> pueden generar
                    retención de ISR del 3%. Las transferencias electrónicas (SPEI) no tienen esta retención.
                  </p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Recomendaciones
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Envía a depósito bancario</h3>
                    <p className="text-gray-600 text-sm">
                      Es más seguro y evita la retención del 3% que aplica a depósitos en efectivo en México.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mantén registros</h3>
                    <p className="text-gray-600 text-sm">
                      Guarda comprobantes de transferencias. Pueden ser útiles si el SAT tiene preguntas sobre los depósitos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">No dividas transferencias</h3>
                    <p className="text-gray-600 text-sm">
                      Evita dividir un monto grande en varias transferencias pequeñas. Esto puede verse como evasión.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Usa proveedores regulados</h3>
                    <p className="text-gray-600 text-sm">
                      Servicios como Remitly, Sendwave y Félix Pago están regulados y cumplen con todas las leyes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                <details className="bg-neutral-50 rounded-lg group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                    ¿Cuánto dinero puedo enviar a México sin declarar?
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-600 text-sm">
                    En EE.UU., las instituciones financieras reportan automáticamente transferencias de $10,000 o más.
                    En México, las remesas de familiares directos son exentas sin límite. Para otros,
                    hay exención hasta ~224,000 MXN/año.
                  </div>
                </details>

                <details className="bg-neutral-50 rounded-lg group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                    ¿Pago impuestos por recibir remesas en México?
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-600 text-sm">
                    No, si las remesas vienen de familiares directos (padres, hijos, cónyuge, hermanos),
                    están completamente exentas de ISR sin importar el monto.
                  </div>
                </details>

                <details className="bg-neutral-50 rounded-lg group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                    ¿Qué pasa si envío más de $10,000?
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-600 text-sm">
                    La institución financiera reportará la transferencia al gobierno de EE.UU. Esto es normal
                    y legal. Mientras el dinero sea de fuente legítima, no hay problema.
                  </div>
                </details>

                <details className="bg-neutral-50 rounded-lg group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                    ¿Cómo aumento mi límite de envío?
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-neutral-600 text-sm">
                    Completa la verificación de identidad en tu proveedor. Esto puede incluir proporcionar
                    SSN, comprobante de ingresos o comprobante de domicilio. Contacta al soporte de tu
                    proveedor para opciones específicas.
                  </div>
                </details>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Límites Comunes</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Remitly (día)</span>
                  <span className="font-semibold">$2,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remitly (mes)</span>
                  <span className="font-semibold">$10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reporte EE.UU.</span>
                  <span className="font-semibold">$10,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reporte SAT</span>
                  <span className="font-semibold">15,000 MXN/mes</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">¿Listo para enviar?</h3>
              <p className="text-trust-blue-100 text-sm mb-4">
                Compara proveedores y encuentra la mejor opción para tu monto.
              </p>
              <Link
                href="/calculadora/"
                className="block w-full text-center bg-white text-trust-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-trust-blue-50 transition-colors"
              >
                Usar Calculadora
              </Link>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/impuestos-remesas-mexico/" className="block text-trust-blue-600 hover:underline text-sm">
                  Impuestos sobre remesas →
                </Link>
                <Link href="/guias/como-enviar-dinero-primera-vez/" className="block text-trust-blue-600 hover:underline text-sm">
                  Cómo enviar por primera vez →
                </Link>
                <Link href="/enviar-dinero-a-mexico/" className="block text-trust-blue-600 hover:underline text-sm">
                  Guía completa de envíos →
                </Link>
              </div>
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
            headline: 'Cuánto Dinero Puedo Enviar a México por Mes | Límites 2025',
            description: 'Conoce cuánto dinero puedes enviar a México por mes sin declarar. Límites por proveedor y regulaciones fiscales.',
            datePublished: '2025-12-22',
            dateModified: '2025-12-22',
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
            },
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
                name: '¿Cuánto dinero puedo enviar a México por mes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Los límites varían por proveedor: Remitly permite hasta $2,999/día y $10,000/mes. Sendwave tiene límites similares. Western Union puede permitir hasta $7,500 por transacción. En México, las remesas de familiares directos son exentas de impuestos sin límite.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto dinero puedo enviar a México sin declarar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'En EE.UU., las instituciones financieras reportan automáticamente transferencias de $10,000 o más. En México, las remesas de familiares directos son exentas sin límite. Para otros, hay exención hasta ~224,000 MXN/año.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Pago impuestos por recibir remesas en México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No, si las remesas vienen de familiares directos (padres, hijos, cónyuge, hermanos), están completamente exentas de ISR sin importar el monto.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
