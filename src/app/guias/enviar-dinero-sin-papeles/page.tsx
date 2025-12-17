import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Enviar Dinero a México sin SSN ni Papeles | Guía 2025',
  description: 'Cómo enviar dinero a México sin Social Security, sin papeles, con ITIN o matrícula consular. Opciones seguras y legales. Actualizado 2025.',
  keywords: ['enviar dinero sin ssn', 'enviar dinero sin papeles', 'remesas con itin', 'enviar dinero con matricula consular'],
}

export default function SinPapelesPage() {
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
                <li><Link href="/guias" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Sin Papeles</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero a México sin SSN
            </h1>
            <p className="text-xl text-blue-100">
              Opciones legales y seguras para enviar dinero sin Social Security
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        {/* Important Notice */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-8">
          <h2 className="text-xl font-bold text-blue-800 mb-3">
            ✓ Es Legal Enviar Dinero Sin SSN
          </h2>
          <p className="text-blue-700">
            <strong>No necesitas Social Security Number para enviar dinero a México.</strong> Los
            servicios de remesas están regulados pero NO requieren SSN para montos normales.
            Puedes usar identificaciones alternativas de forma completamente legal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* ID Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Documentos Aceptados
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✓ ITIN (Individual Taxpayer Identification Number)</h3>
                  <p className="text-green-700 text-sm">
                    El ITIN es aceptado por TODOS los servicios de remesas. Si tienes ITIN,
                    puedes usar cualquier servicio sin restricciones.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✓ Matrícula Consular</h3>
                  <p className="text-green-700 text-sm">
                    La matrícula consular mexicana es aceptada por muchos servicios.
                    Es una identificación oficial emitida por los consulados de México.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✓ Pasaporte Extranjero</h3>
                  <p className="text-green-700 text-sm">
                    Tu pasaporte mexicano o de cualquier país es aceptado como
                    identificación válida.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✓ Licencia de Conducir Estatal</h3>
                  <p className="text-green-700 text-sm">
                    Muchos estados emiten licencias sin importar estatus migratorio.
                    Esta licencia es aceptada por los servicios de remesas.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">ℹ️ ID Estatal / Municipal</h3>
                  <p className="text-blue-700 text-sm">
                    Algunas ciudades y estados emiten identificaciones municipales
                    que son aceptadas por ciertos servicios.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Comparison */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Servicios que NO Requieren SSN
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4">Servicio</th>
                      <th className="text-left py-3 px-4">Documentos</th>
                      <th className="text-left py-3 px-4">Límite sin SSN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Félix Pago</td>
                      <td className="py-3 px-4 text-sm">ID extranjera, matrícula</td>
                      <td className="py-3 px-4 text-sm text-success-green">$1,500/día</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Sendwave</td>
                      <td className="py-3 px-4 text-sm">Pasaporte, licencia, ID estatal</td>
                      <td className="py-3 px-4 text-sm text-success-green">$999/día</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Remitly</td>
                      <td className="py-3 px-4 text-sm">Pasaporte, licencia, ITIN</td>
                      <td className="py-3 px-4 text-sm text-success-green">$2,999/día*</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Western Union</td>
                      <td className="py-3 px-4 text-sm">Matrícula, pasaporte, ITIN</td>
                      <td className="py-3 px-4 text-sm text-success-green">Varía</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">MoneyGram</td>
                      <td className="py-3 px-4 text-sm">Matrícula, pasaporte</td>
                      <td className="py-3 px-4 text-sm text-success-green">$899/transacción</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                * Los límites pueden variar según el nivel de verificación y tiempo como cliente.
              </p>
            </section>

            {/* Step by Step */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo Enviar Sin SSN - Paso a Paso
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Elige un servicio flexible
                    </h3>
                    <p className="text-gray-600">
                      Recomendamos Félix Pago o Sendwave para empezar. Ambos tienen
                      procesos de verificación simples que aceptan documentos alternativos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Prepara tu identificación
                    </h3>
                    <p className="text-gray-600">
                      Ten lista una foto clara de tu documento. Asegúrate de que se vea
                      tu nombre completo, foto, y que no esté vencido.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Crea tu cuenta
                    </h3>
                    <p className="text-gray-600">
                      Cuando pida SSN, muchos servicios tienen opción de &quot;No tengo SSN&quot;
                      o campo para ITIN. Si no hay opción, deja el campo en blanco y
                      continúa - te pedirá identificación alternativa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Sube tu identificación
                    </h3>
                    <p className="text-gray-600">
                      Toma foto del frente y reverso de tu ID. Asegúrate de buena
                      iluminación y que todo el documento sea visible.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-lg">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      ¡Listo para enviar!
                    </h3>
                    <p className="text-gray-600">
                      Una vez verificado, puedes enviar dinero normalmente.
                      La verificación puede ser instantánea o tomar hasta 24 horas.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nuestras Recomendaciones
              </h2>

              <div className="space-y-4">
                <div className="border-2 border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">Félix Pago</h3>
                    <span className="bg-success-green text-white px-2 py-1 rounded text-sm font-medium">
                      Más flexible
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Acepta múltiples formas de identificación. El proceso es por
                    WhatsApp, lo que facilita enviar fotos de documentos. Primera
                    transferencia gratis.
                  </p>
                  <Link href="/reviews/felix-pago" className="text-trust-blue hover:underline text-sm">
                    Ver más →
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
                    $0 comisión siempre. Acepta pasaporte extranjero y licencias
                    estatales. Límite de $999/día sin SSN.
                  </p>
                  <Link href="/reviews/sendwave" className="text-trust-blue hover:underline text-sm">
                    Ver más →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Western Union (en persona)</h3>
                    <span className="bg-warm-accent/10 text-warm-accent px-2 py-1 rounded text-sm font-medium">
                      Sin smartphone
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Si prefieres ir en persona, Western Union acepta matrícula
                    consular en muchas ubicaciones. Más caro pero no requiere app.
                  </p>
                  <Link href="/reviews/western-union" className="text-trust-blue hover:underline text-sm">
                    Ver más →
                  </Link>
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
                    ¿Es ilegal enviar dinero sin SSN?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No. Enviar remesas es completamente legal independientemente de tu
                    estatus migratorio. Los servicios de remesas NO reportan a inmigración.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Por qué algunos servicios piden SSN?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Por regulaciones bancarias contra lavado de dinero. Pero la ley
                    permite usar identificaciones alternativas para montos normales
                    (generalmente menos de $3,000/día).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Hay límites de envío sin SSN?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, generalmente los límites son menores sin SSN. Típicamente
                    $500-$2,999 por día dependiendo del servicio. Con ITIN los
                    límites suelen ser más altos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Puedo obtener ITIN para enviar más?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, puedes solicitar ITIN en el IRS. Te permite límites más altos
                    y acceso a más servicios. El proceso toma varias semanas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Dónde saco la matrícula consular?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    En cualquier consulado mexicano. Necesitas acta de nacimiento,
                    identificación con foto, y comprobante de domicilio en EE.UU.
                    El costo es aproximadamente $30-50.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="bg-gradient-to-br from-trust-blue to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Empieza Hoy</h3>
              <p className="text-blue-100 text-sm mb-4">
                Félix Pago acepta múltiples IDs y tu primera transferencia es gratis.
              </p>
              <Link
                href="/reviews/felix-pago"
                className="block w-full text-center bg-white text-trust-blue font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Conocer más
              </Link>
            </div>

            {/* Document Checklist */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Documentos Aceptados</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-success-green">✓</span>
                  <span>ITIN</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-success-green">✓</span>
                  <span>Matrícula Consular</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-success-green">✓</span>
                  <span>Pasaporte (cualquier país)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-success-green">✓</span>
                  <span>Licencia de conducir estatal</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-success-green">✓</span>
                  <span>ID estatal</span>
                </li>
              </ul>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Otras Guías</h3>
              <div className="space-y-2">
                <Link href="/guias/como-enviar-dinero-primera-vez" className="block text-trust-blue hover:underline text-sm">
                  Guía para principiantes →
                </Link>
                <Link href="/guias/transferencias-emergencia" className="block text-trust-blue hover:underline text-sm">
                  Transferencias de emergencia →
                </Link>
                <Link href="/calculadora" className="block text-trust-blue hover:underline text-sm">
                  Calculadora de costos →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Última actualización: 17 de diciembre de 2025
        </div>
      </div>

      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Cómo Enviar Dinero a México sin SSN',
            description: 'Guía paso a paso para enviar dinero a México sin Social Security Number usando identificaciones alternativas',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Elige un servicio flexible',
                text: 'Recomendamos Félix Pago o Sendwave para empezar. Ambos tienen procesos de verificación simples que aceptan documentos alternativos.',
              },
              {
                '@type': 'HowToStep',
                name: 'Prepara tu identificación',
                text: 'Ten lista una foto clara de tu documento. Asegúrate de que se vea tu nombre completo, foto, y que no esté vencido.',
              },
              {
                '@type': 'HowToStep',
                name: 'Crea tu cuenta',
                text: 'Cuando pida SSN, muchos servicios tienen opción de "No tengo SSN" o campo para ITIN. Si no hay opción, deja el campo en blanco y continúa - te pedirá identificación alternativa.',
              },
              {
                '@type': 'HowToStep',
                name: 'Sube tu identificación',
                text: 'Toma foto del frente y reverso de tu ID. Asegúrate de buena iluminación y que todo el documento sea visible.',
              },
              {
                '@type': 'HowToStep',
                name: 'Listo para enviar',
                text: 'Una vez verificado, puedes enviar dinero normalmente. La verificación puede ser instantánea o tomar hasta 24 horas.',
              },
            ],
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
                name: '¿Es ilegal enviar dinero sin SSN?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Enviar remesas es completamente legal independientemente de tu estatus migratorio. Los servicios de remesas NO reportan a inmigración.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Por qué algunos servicios piden SSN?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Por regulaciones bancarias contra lavado de dinero. Pero la ley permite usar identificaciones alternativas para montos normales (generalmente menos de $3,000/día).',
                },
              },
              {
                '@type': 'Question',
                name: '¿Hay límites de envío sin SSN?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, generalmente los límites son menores sin SSN. Típicamente $500-$2,999 por día dependiendo del servicio. Con ITIN los límites suelen ser más altos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo obtener ITIN para enviar más?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, puedes solicitar ITIN en el IRS. Te permite límites más altos y acceso a más servicios. El proceso toma varias semanas.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Dónde saco la matrícula consular?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'En cualquier consulado mexicano. Necesitas acta de nacimiento, identificación con foto, y comprobante de domicilio en EE.UU. El costo es aproximadamente $30-50.',
                },
              },
            ],
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://enviardineromexico.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guías',
                item: 'https://enviardineromexico.com/guias',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Sin Papeles',
                item: 'https://enviardineromexico.com/guias/enviar-dinero-sin-papeles',
              },
            ],
          }),
        }}
      />
    </main>
  )
}
