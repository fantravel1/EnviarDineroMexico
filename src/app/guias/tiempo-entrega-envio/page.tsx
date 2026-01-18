import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Tiempo de Entrega de Envío de Dinero a México | Guía 2025',
  description: 'Descubre cuánto tarda en llegar el dinero a México. Comparamos tiempos de entrega por servicio y método: depósito bancario vs efectivo.',
  keywords: [
    'tiempo de entrega de envío de dinero a México',
    'cuanto tarda en llegar dinero a mexico',
    'envio de dinero rapido a mexico',
    'transferencia instantanea a mexico',
    'que tan rapido llega el dinero a mexico',
    'enviar dinero a mexico en minutos',
  ],
  openGraph: {
    title: 'Tiempo de Entrega de Envío de Dinero a México',
    description: 'Guía completa de tiempos de entrega para envíos a México. Por servicio y método.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function TiempoEntregaPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué tan rápido llega el dinero a México con diferentes servicios?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Depósito bancario: Sendwave y Félix Pago llegan en minutos. Remitly Economy tarda 3-5 días. Cobro en efectivo: Remitly Express y Western Union disponible en minutos. MoneyGram en 10 minutos a 1 día.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo enviar dinero rápido a México en minutos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para depósito bancario instantáneo: usa Sendwave o Félix Pago. Para efectivo en minutos: usa Remitly Express o Western Union. Estos servicios pueden entregar el dinero en 10-30 minutos.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-purple-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Tiempo de Entrega</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tiempo de Entrega de Envío de Dinero a México
            </h1>
            <p className="text-xl text-purple-100">
              Cuánto tarda en llegar el dinero según el servicio y método de entrega
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-purple-800 mb-3">
                Respuesta Rápida: ¿Cuánto tarda?
              </h2>
              <p className="text-purple-700 mb-4">
                <strong>Depósito bancario:</strong> Minutos a horas con la mayoría de apps.
                <strong> Cobro en efectivo:</strong> De 10 minutos (express) a mismo día.
                Los servicios más rápidos son <strong>Sendwave</strong> y <strong>Remitly Express</strong>.
              </p>
            </section>

            {/* Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Factores que Afectan el Tiempo de Entrega
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Método de entrega</h3>
                  <p className="text-blue-700 text-sm">
                    El depósito bancario directo es generalmente más rápido que el cobro
                    en efectivo, porque es todo electrónico.
                  </p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Servicio utilizado</h3>
                  <p className="text-green-700 text-sm">
                    Apps como Sendwave son instantáneas. Servicios tradicionales como
                    transferencias bancarias tardan 3-5 días.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Hora del envío</h3>
                  <p className="text-orange-700 text-sm">
                    Envíos durante horario bancario mexicano (9am-5pm) se procesan más
                    rápido. Fines de semana pueden tener retrasos.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Método de pago</h3>
                  <p className="text-purple-700 text-sm">
                    Pagar con tarjeta de débito es más rápido. Transferencias bancarias
                    ACH pueden agregar 1-3 días al proceso.
                  </p>
                </div>
              </div>
            </section>

            {/* Time by Service */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tiempo de Entrega por Servicio
              </h2>

              <div className="space-y-4">
                {/* Sendwave */}
                <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">Sendwave</h3>
                    <span className="bg-success-green text-white px-2 py-1 rounded text-xs font-medium">
                      Más Rápido
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Depósito bancario:</strong></p>
                      <p className="text-success-green font-bold">Minutos (instantáneo)</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Efectivo:</strong></p>
                      <p className="text-gray-700">No disponible</p>
                    </div>
                  </div>
                </div>

                {/* Félix Pago */}
                <div className="border border-orange-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Félix Pago</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Depósito bancario:</strong></p>
                      <p className="text-success-green font-bold">Minutos (instantáneo)</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Efectivo:</strong></p>
                      <p className="text-gray-700">No disponible</p>
                    </div>
                  </div>
                </div>

                {/* Remitly */}
                <div className="border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Remitly</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Express (banco):</strong></p>
                      <p className="text-success-green font-bold">Minutos a horas</p>
                      <p className="text-gray-600 mt-2"><strong>Economy (banco):</strong></p>
                      <p className="text-gray-700">3-5 días hábiles</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Express (efectivo):</strong></p>
                      <p className="text-success-green font-bold">10-30 minutos</p>
                      <p className="text-gray-600 mt-2"><strong>Economy (efectivo):</strong></p>
                      <p className="text-gray-700">Mismo día</p>
                    </div>
                  </div>
                </div>

                {/* Wise */}
                <div className="border border-purple-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Wise</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Depósito bancario:</strong></p>
                      <p className="text-gray-700">Horas a 1-2 días</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Efectivo:</strong></p>
                      <p className="text-gray-700">No disponible</p>
                    </div>
                  </div>
                </div>

                {/* Western Union */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Western Union</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Depósito bancario:</strong></p>
                      <p className="text-gray-700">Minutos a 2 días</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Efectivo:</strong></p>
                      <p className="text-success-green font-bold">Minutos</p>
                    </div>
                  </div>
                </div>

                {/* MoneyGram */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">MoneyGram</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Depósito bancario:</strong></p>
                      <p className="text-gray-700">Mismo día a 2 días</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Efectivo:</strong></p>
                      <p className="text-gray-700">10 minutos a 1 día</p>
                    </div>
                  </div>
                </div>

                {/* Bank Transfer */}
                <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">Transferencia Bancaria</h3>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Más Lento
                    </span>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600"><strong>Tiempo típico:</strong></p>
                    <p className="text-red-600 font-bold">3-5 días hábiles</p>
                    <p className="text-gray-500 mt-2">
                      Las transferencias bancarias internacionales (SWIFT) son las más lentas
                      y caras. No recomendadas para remesas.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips for Fast Transfers */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo Enviar Dinero Rápido a México
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Usa apps con transferencias instantáneas</h3>
                    <p className="text-gray-600 text-sm">
                      Sendwave y Félix Pago procesan depósitos bancarios en segundos.
                      El dinero aparece inmediatamente en la cuenta de tu familia.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Paga con tarjeta de débito</h3>
                    <p className="text-gray-600 text-sm">
                      Pagar con ACH (cuenta bancaria) puede agregar 1-3 días mientras
                      se verifica el pago. La tarjeta de débito es instantánea.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Elige depósito bancario</h3>
                    <p className="text-gray-600 text-sm">
                      El depósito directo a CLABE es más rápido que el cobro en efectivo
                      porque no hay intermediarios. Tu familia no tiene que ir a ningún lado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Envía en horario bancario</h3>
                    <p className="text-gray-600 text-sm">
                      Los envíos durante horario bancario mexicano (9am-5pm hora central)
                      se procesan más rápido. Evita fines de semana y días festivos.
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

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué tan rápido llega el dinero a México con diferentes servicios?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Depósito bancario:</strong> Sendwave y Félix Pago llegan en minutos.
                    Remitly Economy tarda 3-5 días. <strong>Cobro en efectivo:</strong> Remitly
                    Express y Western Union disponible en minutos. MoneyGram en 10 minutos a 1 día.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cómo enviar dinero rápido a México en minutos?
                  </h3>
                  <p className="text-gray-600">
                    Para <strong>depósito bancario instantáneo</strong>: usa Sendwave o Félix Pago.
                    Para <strong>efectivo en minutos</strong>: usa Remitly Express o Western Union.
                    Estos servicios pueden entregar el dinero en 10-30 minutos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Por qué a veces el dinero tarda más de lo esperado?
                  </h3>
                  <p className="text-gray-600">
                    Razones comunes: verificación de identidad (primera transferencia),
                    pago con ACH en vez de débito, fines de semana/días festivos, o
                    revisiones de seguridad para montos grandes.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Envío instantáneo</h3>
              <p className="text-purple-100 text-sm mb-4">
                Sendwave deposita en la cuenta de tu familia en segundos.
              </p>
              <Link
                href="/reviews/sendwave/"
                className="block w-full text-center bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Ver Sendwave
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/transferencias-emergencia/" className="block text-trust-blue hover:underline text-sm">
                  Transferencias de emergencia →
                </Link>
                <Link href="/guias/como-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Cómo enviar dinero →
                </Link>
                <Link href="/guias/efectivo-vs-deposito/" className="block text-trust-blue hover:underline text-sm">
                  Efectivo vs depósito →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Resumen rápido</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Más rápido (banco):</span>
                  <span className="font-medium">Sendwave</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Más rápido (efectivo):</span>
                  <span className="font-medium">Remitly Express</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Más lento:</span>
                  <span className="font-medium">Banco tradicional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
