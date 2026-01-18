import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Envío de Dinero a México Sin Comisiones | Guía 2025',
  description: 'Descubre cómo enviar dinero a México sin comisiones. Comparamos los servicios con $0 fees: Sendwave, Félix Pago, y promociones de Remitly.',
  keywords: [
    'envío de dinero a México sin comisiones',
    'enviar dinero a mexico gratis',
    'mandar dinero a mexico sin comision',
    'remesas a mexico sin fees',
    'transferir dinero a mexico barato',
    'envio de remesas a mexico mas barato',
    'como evitar comisiones envio dinero mexico',
  ],
  openGraph: {
    title: 'Envío de Dinero a México Sin Comisiones | Servicios $0 Fees',
    description: 'Aprende cómo enviar dinero a México sin pagar comisiones. Comparativa de servicios gratuitos.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function SinComisionesPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Envío de Dinero a México Sin Comisiones',
            description: 'Guía completa para enviar dinero a México sin pagar comisiones',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico.com' },
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
                name: '¿Qué servicio tiene las menores comisiones para enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sendwave ofrece $0 comisión en todas las transferencias a México. Félix Pago tiene la primera transferencia completamente gratis. Remitly frecuentemente ofrece promociones sin comisión para nuevos usuarios.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo evitar tarifas altas al mandar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para evitar tarifas altas: 1) Usa apps en lugar de tiendas físicas, 2) Elige depósito bancario en vez de efectivo, 3) Paga con tarjeta de débito en vez de crédito, 4) Compara el tipo de cambio además de la comisión.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-success-green to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-green-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Sin Comisiones</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Envío de Dinero a México Sin Comisiones
            </h1>
            <p className="text-xl text-green-100">
              Cómo enviar dinero gratis o con las comisiones más bajas posibles
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
            <section className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-green-800 mb-3">
                Respuesta Rápida: ¿Cómo enviar dinero sin comisiones?
              </h2>
              <p className="text-green-700 mb-4">
                <strong>Sendwave</strong> cobra $0 comisión en todas las transferencias a México.
                <strong> Félix Pago</strong> ofrece la primera transferencia 100% gratis. Ambos
                son legítimos, seguros y el dinero llega en minutos.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/reviews/sendwave/" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                  Sendwave: Siempre $0
                </Link>
                <Link href="/reviews/felix-pago/" className="bg-white text-green-700 px-4 py-2 rounded-lg text-sm font-medium border border-green-300 hover:bg-green-50">
                  Félix Pago: 1era Gratis
                </Link>
              </div>
            </section>

            {/* Understanding Fees */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Entendiendo las Comisiones de Envío
              </h2>
              <p className="text-gray-700 mb-4">
                Cuando envías dinero a México, hay <strong>dos formas en que los servicios ganan dinero</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">1. Comisión Directa (Fee)</h3>
                  <p className="text-blue-700 text-sm">
                    Un cargo fijo o porcentaje que pagas además del monto a enviar.
                    Por ejemplo: &quot;$4.99 de comisión&quot; o &quot;2% del monto&quot;.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">2. Margen en Tipo de Cambio</h3>
                  <p className="text-purple-700 text-sm">
                    La diferencia entre el tipo de cambio real y el que te ofrecen.
                    Puede ser del 1-4% oculto en la conversión.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  Importante: Un servicio puede decir &quot;$0 comisión&quot; pero ganar dinero con
                  un mal tipo de cambio. Siempre compara cuántos pesos recibirá tu familia, no solo la comisión.
                </p>
              </div>
            </section>

            {/* Zero Fee Services */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Servicios con $0 Comisión para México
              </h2>

              <div className="space-y-6">
                {/* Sendwave */}
                <div className="border-2 border-green-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Sendwave</h3>
                      <p className="text-gray-500 text-sm">App móvil - iOS y Android</p>
                    </div>
                    <span className="bg-success-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      $0 Siempre
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Comisión</p>
                      <p className="font-bold text-success-green">$0.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tipo de Cambio</p>
                      <p className="font-bold text-gray-900">Competitivo</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Velocidad</p>
                      <p className="font-bold text-gray-900">Minutos</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    Sendwave nunca cobra comisión en transferencias a México. Su modelo de negocio
                    es ganar un pequeño margen en el tipo de cambio, pero sigue siendo muy competitivo.
                    Solo para depósito bancario.
                  </p>

                  <div className="flex gap-3">
                    <Link href="/reviews/sendwave/" className="bg-success-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                      Ver review completo
                    </Link>
                  </div>
                </div>

                {/* Félix Pago */}
                <div className="border-2 border-orange-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Félix Pago</h3>
                      <p className="text-gray-500 text-sm">Funciona por WhatsApp</p>
                    </div>
                    <span className="bg-warm-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      1era Gratis
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Primera Transferencia</p>
                      <p className="font-bold text-success-green">100% Gratis</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Después</p>
                      <p className="font-bold text-gray-900">~$3.99</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Velocidad</p>
                      <p className="font-bold text-gray-900">Minutos</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    Primera transferencia completamente gratis sin letra pequeña. No necesitas
                    descargar app - funciona desde WhatsApp. Perfecto para probar antes de comprometerte.
                  </p>

                  <div className="flex gap-3">
                    <Link href="/reviews/felix-pago/" className="bg-warm-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600">
                      Ver review completo
                    </Link>
                  </div>
                </div>

                {/* Remitly Promo */}
                <div className="border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Remitly</h3>
                      <p className="text-gray-500 text-sm">App más popular</p>
                    </div>
                    <span className="bg-trust-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      $0 en Promos
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Con Promoción</p>
                      <p className="font-bold text-success-green">$0.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Precio Regular</p>
                      <p className="font-bold text-gray-900">$0-3.99</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Velocidad</p>
                      <p className="font-bold text-gray-900">Minutos-Días</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    Remitly frecuentemente ofrece promociones de $0 comisión para nuevos usuarios
                    y depósitos bancarios. Es la app mejor calificada (4.9★) con garantía de entrega.
                    Excelente para cobro en efectivo.
                  </p>

                  <div className="flex gap-3">
                    <Link href="/reviews/remitly/" className="bg-trust-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                      Ver review completo
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Avoid Fees */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo Evitar Tarifas Altas al Enviar Dinero
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Usa apps en lugar de tiendas físicas</h3>
                    <p className="text-gray-600 text-sm">
                      Western Union y MoneyGram en tiendas físicas cobran $5-15+ por envío.
                      Las apps como Sendwave o Remitly cobran $0-5.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Elige depósito bancario</h3>
                    <p className="text-gray-600 text-sm">
                      El cobro en efectivo usualmente cuesta más. El depósito directo a cuenta
                      bancaria (CLABE) generalmente tiene comisiones más bajas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Paga con tarjeta de débito o banco</h3>
                    <p className="text-gray-600 text-sm">
                      Las tarjetas de crédito agregan un cargo del 2-3% como &quot;adelanto de efectivo&quot;.
                      Usa débito o transferencia bancaria para evitar este costo extra.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Compara el tipo de cambio</h3>
                    <p className="text-gray-600 text-sm">
                      No te dejes engañar por &quot;$0 comisión&quot;. Revisa cuántos pesos realmente
                      llegará a tu familia. Usa nuestra calculadora para comparar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Envía montos más grandes menos seguido</h3>
                    <p className="text-gray-600 text-sm">
                      Si la comisión es fija ($4.99), es más eficiente enviar $500 una vez que
                      $100 cinco veces. Pagarías $4.99 vs $24.95 en comisiones.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comparación de Comisiones por Servicio
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2">Servicio</th>
                      <th className="text-left py-3 px-2">Comisión</th>
                      <th className="text-left py-3 px-2">Tipo de Cambio</th>
                      <th className="text-left py-3 px-2">Mejor Para</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-green-50">
                      <td className="py-3 px-2 font-medium">Sendwave</td>
                      <td className="py-3 px-2 text-success-green font-bold">$0</td>
                      <td className="py-3 px-2">Bueno</td>
                      <td className="py-3 px-2">Envíos frecuentes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Félix Pago</td>
                      <td className="py-3 px-2">1era gratis, luego ~$4</td>
                      <td className="py-3 px-2">Bueno</td>
                      <td className="py-3 px-2">Principiantes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Remitly</td>
                      <td className="py-3 px-2">$0-3.99</td>
                      <td className="py-3 px-2">Muy bueno</td>
                      <td className="py-3 px-2">Cobro en efectivo</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Wise</td>
                      <td className="py-3 px-2">~0.5-1%</td>
                      <td className="py-3 px-2 text-success-green font-bold">El mejor</td>
                      <td className="py-3 px-2">Montos grandes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium">Xoom</td>
                      <td className="py-3 px-2">$0-4.99</td>
                      <td className="py-3 px-2">Regular</td>
                      <td className="py-3 px-2">Usuarios PayPal</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-2 font-medium">Western Union</td>
                      <td className="py-3 px-2 text-red-600">$5-15+</td>
                      <td className="py-3 px-2">Malo</td>
                      <td className="py-3 px-2">Emergencias en efectivo</td>
                    </tr>
                  </tbody>
                </table>
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
                    ¿Qué servicio tiene las menores comisiones para enviar dinero a México?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Sendwave</strong> ofrece $0 comisión en todas las transferencias a México.
                    Es genuinamente gratis sin trucos. <strong>Félix Pago</strong> tiene la primera
                    transferencia completamente gratis, ideal para probar.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuánto cobran por enviar $500 a México?
                  </h3>
                  <p className="text-gray-600">
                    Con <strong>Sendwave: $0</strong>. Con Remitly (depósito bancario): $0-2.99.
                    Con Western Union en tienda: $8-12+. La diferencia puede ser de $10+ por envío.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Si dice &quot;$0 comisión&quot; realmente es gratis?
                  </h3>
                  <p className="text-gray-600">
                    La comisión sí es $0, pero el servicio gana dinero con el tipo de cambio.
                    Por eso es importante comparar <strong>cuántos pesos recibirá tu familia</strong>,
                    no solo mirar la comisión. Nuestra calculadora te muestra el costo real total.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cómo calculo cuánto llegará en pesos si envío dólares a México?
                  </h3>
                  <p className="text-gray-600">
                    Usa nuestra <Link href="/calculadora/" className="text-trust-blue hover:underline">calculadora de envíos</Link>.
                    Ingresa el monto en dólares y te mostramos cuántos pesos llegará con cada
                    servicio, incluyendo comisiones y tipo de cambio.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-success-green to-green-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Envía sin comisión</h3>
              <p className="text-green-100 text-sm mb-4">
                Sendwave nunca cobra comisión. Tu familia recibe más.
              </p>
              <Link
                href="/reviews/sendwave/"
                className="block w-full text-center bg-white text-success-green font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                Ver Sendwave
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Calcula tu ahorro</h3>
              <p className="text-gray-600 text-sm mb-4">
                Compara cuánto recibiría tu familia con diferentes servicios.
              </p>
              <Link
                href="/calculadora/"
                className="block w-full text-center bg-trust-blue text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Usar calculadora
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/mejor-tipo-de-cambio/" className="block text-trust-blue hover:underline text-sm">
                  Mejor tipo de cambio →
                </Link>
                <Link href="/guias/remesas-mas-baratas/" className="block text-trust-blue hover:underline text-sm">
                  Remesas más baratas →
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
