import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Enviar Dinero sin Cuenta Bancaria en México | 2025',
  description: 'Opciones para enviar dinero a México cuando tu familia no tiene cuenta bancaria. Cobro en efectivo en Elektra, Oxxo, Telecomm y más. Guía 2025.',
  keywords: [
    'enviar dinero a mexico sin cuenta bancaria',
    'opciones si receptor no tiene cuenta bancaria mexico',
    'cobro en efectivo mexico',
    'enviar dinero para recoger en efectivo mexico',
    'remesas sin cuenta bancaria',
  ],
  openGraph: {
    title: 'Enviar Dinero a México sin Cuenta Bancaria del Receptor',
    description: 'Todas las opciones para enviar dinero cuando tu familia no tiene banco.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function SinCuentaBancariaPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviardineromexico.com/' },
              { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://enviardineromexico.com/guias/' },
              { '@type': 'ListItem', position: 3, name: 'Sin Cuenta Bancaria', item: 'https://enviardineromexico.com/guias/sin-cuenta-bancaria/' },
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
                name: '¿Qué opciones hay si el receptor no tiene cuenta bancaria en México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Puedes enviar dinero para cobro en efectivo. Tu familia puede recogerlo en: Elektra, Oxxo, Coppel, Telecomm, Banco Azteca, Soriana, y miles de tiendas más. Servicios como Remitly, Western Union y MoneyGram ofrecen esta opción.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-red-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-orange-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Sin Cuenta Bancaria</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Enviar Dinero si el Receptor No Tiene Cuenta Bancaria
            </h1>
            <p className="text-xl text-orange-100">
              Todas las opciones para cobro en efectivo en México
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-orange-800 mb-3">
                ¿Tu familia no tiene cuenta bancaria? No hay problema.
              </h2>
              <p className="text-orange-700 mb-4">
                Puedes enviar dinero para <strong>cobro en efectivo</strong>. Tu familia puede
                recogerlo en Elektra, Oxxo, Coppel, Telecomm y miles de ubicaciones más en México.
                Solo necesitan su identificación oficial (INE/IFE).
              </p>
              <Link href="/reviews/remitly/" className="bg-warm-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 inline-block">
                Remitly: Mejor para efectivo →
              </Link>
            </section>

            {/* Cash Pickup Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Dónde Puede Cobrar tu Familia
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Elektra</h3>
                  <p className="text-gray-600 text-sm">
                    +1,200 tiendas en todo México. Horarios amplios.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Oxxo</h3>
                  <p className="text-gray-600 text-sm">
                    +20,000 tiendas. Disponible 24/7 en muchas ubicaciones.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Coppel</h3>
                  <p className="text-gray-600 text-sm">
                    +1,600 tiendas. Buena cobertura en todo el país.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Telecomm</h3>
                  <p className="text-gray-600 text-sm">
                    +1,600 oficinas. Buena opción en áreas rurales.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Banco Azteca</h3>
                  <p className="text-gray-600 text-sm">
                    +2,000 sucursales. No necesitan cuenta para cobrar.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Soriana / Bodega Aurrera</h3>
                  <p className="text-gray-600 text-sm">
                    Supermercados con servicio de cobro de remesas.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Services for Cash */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Servicios para Cobro en Efectivo
              </h2>

              <div className="space-y-4">
                <div className="border-2 border-blue-200 rounded-xl p-5 bg-blue-50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl">Remitly</h3>
                      <p className="text-gray-500 text-sm">La mejor opción para efectivo</p>
                    </div>
                    <span className="bg-trust-blue text-white px-3 py-1 rounded-full text-sm font-bold">
                      Recomendado
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 mb-3 text-sm">
                    <div>
                      <p className="text-gray-500">Comisión</p>
                      <p className="font-bold">$3.99</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Velocidad</p>
                      <p className="font-bold">Minutos (Express)</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Puntos de cobro</p>
                      <p className="font-bold">+100,000</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    La mejor cobertura de puntos de cobro en México. Express disponible
                    en minutos. Garantía de entrega.
                  </p>
                  <Link href="/reviews/remitly/" className="inline-block mt-3 text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl">Western Union</h3>
                      <p className="text-gray-500 text-sm">El más conocido</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 mb-3 text-sm">
                    <div>
                      <p className="text-gray-500">Comisión</p>
                      <p className="font-bold">$5-15</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Velocidad</p>
                      <p className="font-bold">Minutos</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Puntos de cobro</p>
                      <p className="font-bold">+50,000</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Amplia cobertura pero más caro. Tu familia probablemente ya lo conoce.
                    Usa la app para ahorrar vs tiendas físicas.
                  </p>
                  <Link href="/reviews/western-union/" className="inline-block mt-3 text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl">MoneyGram</h3>
                      <p className="text-gray-500 text-sm">Buena alternativa</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 mb-3 text-sm">
                    <div>
                      <p className="text-gray-500">Comisión</p>
                      <p className="font-bold">$5-12</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Velocidad</p>
                      <p className="font-bold">10 min - 1 día</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Puntos de cobro</p>
                      <p className="font-bold">+40,000</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Similar a Western Union. Buena cobertura en México.
                    Frecuentes promociones.
                  </p>
                  <Link href="/reviews/moneygram/" className="inline-block mt-3 text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo Funciona el Cobro en Efectivo
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-warm-accent text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Tú envías el dinero
                    </h3>
                    <p className="text-gray-600">
                      Desde tu app eliges &quot;Cobro en efectivo&quot; como método de entrega.
                      Ingresas el nombre completo de tu familiar (como aparece en su ID).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-warm-accent text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Tu familia recibe notificación
                    </h3>
                    <p className="text-gray-600">
                      Reciben un SMS o llamada con un código de referencia y las instrucciones
                      de dónde pueden cobrar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-warm-accent text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Cobran en el punto de su preferencia
                    </h3>
                    <p className="text-gray-600">
                      Van a cualquier punto autorizado (Elektra, Oxxo, etc.), muestran su
                      INE/IFE y el código de referencia, y reciben el dinero en efectivo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Importante:</strong> El nombre del destinatario debe coincidir exactamente
                  con su identificación oficial. Si hay diferencia, no podrán cobrar.
                </p>
              </div>
            </section>

            {/* Alternatives */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Otras Alternativas
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Billeteras móviles</h3>
                  <p className="text-gray-600 text-sm">
                    Algunos servicios permiten enviar a billeteras digitales mexicanas como
                    Mercado Pago. Tu familia solo necesita un celular con la app.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Abrir cuenta en México</h3>
                  <p className="text-gray-600 text-sm">
                    Bancos como Banco Azteca o Banorte permiten abrir cuentas con requisitos
                    mínimos. Con cuenta, los envíos son más baratos y rápidos.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tarjeta prepagada</h3>
                  <p className="text-gray-600 text-sm">
                    Algunas tarjetas prepagadas mexicanas pueden recibir transferencias
                    sin cuenta bancaria tradicional.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Mejor para efectivo</h3>
              <p className="text-orange-100 text-sm mb-4">
                Remitly: +100,000 puntos de cobro en México.
              </p>
              <Link
                href="/reviews/remitly/"
                className="block w-full text-center bg-white text-orange-600 font-semibold py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Ver Remitly
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Lo que tu familia necesita</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  INE/IFE vigente
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Código de referencia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Ir al punto de cobro
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/efectivo-vs-deposito/" className="block text-trust-blue hover:underline text-sm">
                  Efectivo vs depósito →
                </Link>
                <Link href="/guias/como-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Cómo enviar dinero →
                </Link>
                <Link href="/guias/tiempo-entrega-envio/" className="block text-trust-blue hover:underline text-sm">
                  Tiempos de entrega →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
