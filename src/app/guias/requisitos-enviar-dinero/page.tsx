import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Requisitos para Enviar Dinero a México | 2025',
  description: '¿Qué necesitas para enviar dinero a México? Requisitos de identificación, sin SSN, con matrícula consular y más. Guía con documentos necesarios 2025.',
  keywords: [
    'qué necesito para enviar dinero a México',
    'requisitos enviar dinero mexico',
    'documentos para enviar dinero a mexico',
    'enviar dinero sin SSN',
    'enviar dinero con matricula consular',
    'que documentos necesito para mandar dinero a mexico',
  ],
  openGraph: {
    title: '¿Qué Necesito para Enviar Dinero a México? | Requisitos',
    description: 'Guía completa de requisitos y documentos para enviar dinero a México desde EE.UU.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Requisitos para Enviar Dinero a México',
            description: 'Guía completa de requisitos y documentos para enviar dinero a México desde Estados Unidos',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico.com' },
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
              { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://enviardineromexico.com/guias/' },
              { '@type': 'ListItem', position: 3, name: 'Requisitos', item: 'https://enviardineromexico.com/guias/requisitos-enviar-dinero/' },
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
                name: '¿Qué documentos necesito para enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Necesitas una identificación válida (licencia de conducir, pasaporte, ID estatal, o matrícula consular), una forma de pago (tarjeta de débito o cuenta bancaria), y los datos del destinatario (nombre completo y CLABE para banco, o nombre y ubicación para efectivo).',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo enviar dinero a México sin SSN?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, la mayoría de servicios no requieren SSN para montos pequeños (hasta $1,000). Puedes usar ITIN, matrícula consular, o pasaporte extranjero. Servicios como Remitly, Sendwave y Félix Pago aceptan estas identificaciones.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Requisitos</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Qué Necesito para Enviar Dinero a México?
            </h1>
            <p className="text-xl text-blue-100">
              Requisitos, documentos y todo lo que necesitas para hacer tu transferencia
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-blue-800 mb-3">
                Respuesta Rápida: ¿Qué necesitas?
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl mb-1">🪪</div>
                  <p className="text-sm font-medium text-gray-800">Identificación</p>
                  <p className="text-xs text-gray-500">Licencia, pasaporte, etc.</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl mb-1">💳</div>
                  <p className="text-sm font-medium text-gray-800">Forma de Pago</p>
                  <p className="text-xs text-gray-500">Débito o cuenta bancaria</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl mb-1">📋</div>
                  <p className="text-sm font-medium text-gray-800">Datos Destinatario</p>
                  <p className="text-xs text-gray-500">Nombre y CLABE/ubicación</p>
                </div>
              </div>
            </section>

            {/* ID Requirements */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Requisitos de Identificación
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Aceptadas por todos los servicios</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>✓ Licencia de conducir de EE.UU.</li>
                    <li>✓ Pasaporte (de cualquier país)</li>
                    <li>✓ ID estatal de EE.UU.</li>
                    <li>✓ Tarjeta de residencia (Green Card)</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Aceptadas por la mayoría</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>✓ Matrícula consular mexicana</li>
                    <li>✓ ITIN (Individual Taxpayer ID)</li>
                    <li>✓ Visa de trabajo/estudiante</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Notas importantes</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>No necesitas SSN</strong> para montos pequeños (hasta ~$1,000)</li>
                    <li>• La primera transferencia requiere verificación (foto de ID)</li>
                    <li>• El nombre debe coincidir exactamente con tu ID</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Formas de Pago Aceptadas
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tarjeta de Débito</h3>
                  <p className="text-gray-600 text-sm mb-2">La más común y rápida.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Procesamiento instantáneo</li>
                    <li>✓ Sin cargos adicionales</li>
                    <li>✓ Visa, Mastercard, Discover</li>
                  </ul>
                </div>

                <div className="p-4 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Cuenta Bancaria (ACH)</h3>
                  <p className="text-gray-600 text-sm mb-2">Transferencia desde tu banco.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Sin comisión adicional</li>
                    <li>• Tarda 1-3 días en procesar</li>
                    <li>✓ Ideal para montos grandes</li>
                  </ul>
                </div>

                <div className="p-4 border border-orange-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tarjeta de Crédito</h3>
                  <p className="text-gray-600 text-sm mb-2">Funciona pero con cargos extra.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Cargo del 2-3% adicional</li>
                    <li>• Puede contar como adelanto de efectivo</li>
                    <li>• No recomendado</li>
                  </ul>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Efectivo</h3>
                  <p className="text-gray-600 text-sm mb-2">Solo en agentes físicos.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Western Union, MoneyGram</li>
                    <li>• Tienes que ir en persona</li>
                    <li>• Comisiones más altas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recipient Info */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información del Destinatario
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-3">Para Depósito Bancario</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li><strong>Nombre completo</strong> del titular de la cuenta (como aparece en el banco)</li>
                    <li><strong>CLABE</strong> - Clave Bancaria Estandarizada de 18 dígitos</li>
                    <li><strong>Nombre del banco</strong> (Banamex, Bancomer, etc.)</li>
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded">
                    <p className="text-xs text-gray-600">
                      <strong>¿Qué es el CLABE?</strong> Es como el número de routing + cuenta
                      combinados. Tu familia lo puede encontrar en su estado de cuenta o
                      app bancaria.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Para Cobro en Efectivo</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li><strong>Nombre completo</strong> (exactamente como aparece en su ID)</li>
                    <li><strong>Ciudad y Estado</strong> donde cobrarán</li>
                    <li><strong>Punto de cobro preferido</strong> (Elektra, Oxxo, etc.)</li>
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded">
                    <p className="text-xs text-gray-600">
                      <strong>Importante:</strong> Tu familia necesitará su INE/IFE o
                      identificación oficial para cobrar el dinero.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Without SSN */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Enviar Dinero sin SSN
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Sí, puedes enviar dinero sin número de Seguro Social.</strong> La mayoría de
                servicios no lo requieren para montos pequeños. Aquí están tus opciones:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border-l-4 border-success-green rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Servicios que NO requieren SSN</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>✓ <strong>Sendwave</strong> - Solo ID con foto</li>
                    <li>✓ <strong>Remitly</strong> - Acepta matrícula consular</li>
                    <li>✓ <strong>Félix Pago</strong> - ID básica</li>
                    <li>✓ <strong>Western Union</strong> - En persona con ID</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Límites sin SSN</h3>
                  <p className="text-gray-600 text-sm">
                    Sin SSN, generalmente puedes enviar hasta <strong>$999 por transacción</strong> y
                    hasta <strong>$3,000 por mes</strong>. Para montos mayores, algunos servicios
                    pueden pedir SSN o ITIN.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Link href="/guias/enviar-dinero-sin-papeles/" className="text-trust-blue hover:underline">
                  Ver guía completa: Enviar dinero sin papeles →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué documentos necesito para enviar dinero a México?
                  </h3>
                  <p className="text-gray-600">
                    Necesitas una <strong>identificación válida</strong> (licencia de conducir, pasaporte,
                    ID estatal, o matrícula consular), una <strong>forma de pago</strong> (tarjeta de
                    débito o cuenta bancaria), y los <strong>datos del destinatario</strong> (nombre
                    completo y CLABE para banco, o nombre y ubicación para efectivo).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Puedo enviar dinero a México sin SSN?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Sí</strong>, la mayoría de servicios no requieren SSN para montos pequeños
                    (hasta $1,000). Puedes usar ITIN, matrícula consular, o pasaporte extranjero.
                    Servicios como Remitly, Sendwave y Félix Pago aceptan estas identificaciones.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué es el CLABE y dónde lo encuentro?
                  </h3>
                  <p className="text-gray-600">
                    El CLABE es la Clave Bancaria Estandarizada de 18 dígitos. Tu familia puede
                    encontrarlo en su estado de cuenta bancaria, en la app de su banco, o
                    preguntando en la sucursal. Es necesario para depósitos bancarios directos.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-trust-blue to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Empieza ahora</h3>
              <p className="text-blue-100 text-sm mb-4">
                Solo necesitas tu ID y tarjeta de débito para empezar.
              </p>
              <Link
                href="/comparar/"
                className="block w-full text-center bg-white text-trust-blue font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Ver servicios
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Lista de verificación</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">ID con foto vigente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">Tarjeta de débito</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">Nombre completo del destinatario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">CLABE (para banco) o ubicación (para efectivo)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/enviar-dinero-sin-papeles/" className="block text-trust-blue hover:underline text-sm">
                  Enviar sin papeles →
                </Link>
                <Link href="/guias/como-enviar-dinero-primera-vez/" className="block text-trust-blue hover:underline text-sm">
                  Guía para principiantes →
                </Link>
                <Link href="/guias/como-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Cómo enviar dinero →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
