import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Aplicaciones para Enviar Dinero a México | Las Mejores Apps 2025',
  description: 'Las mejores aplicaciones para enviar dinero a México desde tu celular. Comparamos Sendwave, Remitly, Félix Pago, Wise y más.',
  keywords: [
    'aplicaciones para enviar dinero a México',
    'apps para enviar dinero a mexico',
    'mejores apps remesas mexico',
    'app para mandar dinero a mexico',
    'aplicacion para transferir dinero a mexico',
  ],
  openGraph: {
    title: 'Mejores Apps para Enviar Dinero a México | 2025',
    description: 'Las aplicaciones más populares y económicas para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function AplicacionesPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Aplicaciones para Enviar Dinero a México',
            description: 'Guía de las mejores apps para enviar dinero a México en 2025',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico.com' },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-purple-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Apps para Enviar Dinero</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Aplicaciones para Enviar Dinero a México
            </h1>
            <p className="text-xl text-purple-100">
              Las mejores apps para enviar remesas desde tu celular
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Overview */}
            <section className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-purple-800 mb-3">
                Las Mejores Apps en 2025
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-bold text-gray-900">Sendwave</p>
                  <p className="text-xs text-success-green font-medium">$0 comisión</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-bold text-gray-900">Remitly</p>
                  <p className="text-xs text-blue-600 font-medium">4.9★ rating</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-bold text-gray-900">Félix Pago</p>
                  <p className="text-xs text-orange-600 font-medium">Via WhatsApp</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="font-bold text-gray-900">Wise</p>
                  <p className="text-xs text-purple-600 font-medium">Mejor cambio</p>
                </div>
              </div>
            </section>

            {/* Why Use Apps */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Por Qué Usar Apps para Enviar Dinero?
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Más barato</h3>
                  <p className="text-green-700 text-sm">
                    Las apps cobran $0-5 por envío vs $8-15+ en tiendas físicas.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Más rápido</h3>
                  <p className="text-blue-700 text-sm">
                    Envía en minutos desde cualquier lugar, 24/7.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-2">Más cómodo</h3>
                  <p className="text-purple-700 text-sm">
                    No tienes que ir a ninguna tienda ni hacer fila.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">Más seguro</h3>
                  <p className="text-orange-700 text-sm">
                    Encriptación de grado bancario y seguimiento en tiempo real.
                  </p>
                </div>
              </div>
            </section>

            {/* App Rankings */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ranking de Apps para Enviar Dinero a México
              </h2>

              <div className="space-y-6">
                {/* #1 Sendwave */}
                <div className="border-2 border-green-200 rounded-xl p-5 bg-green-50">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-success-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl">Sendwave</h3>
                      <p className="text-sm text-gray-500">Mejor para envíos económicos</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-sm text-gray-600">4.8</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div className="bg-white p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Comisión</p>
                      <p className="font-bold text-success-green">$0</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Velocidad</p>
                      <p className="font-bold text-gray-900">Minutos</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Entrega</p>
                      <p className="font-bold text-gray-900">Banco</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Plataformas</p>
                      <p className="font-bold text-gray-900">iOS, Android</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    La opción más económica con $0 comisión siempre. Excelente para envíos
                    frecuentes a cuenta bancaria. Transferencias instantáneas.
                  </p>

                  <div className="flex gap-3">
                    <Link href="/reviews/sendwave/" className="bg-success-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                      Ver review
                    </Link>
                  </div>
                </div>

                {/* #2 Remitly */}
                <div className="border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-trust-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl">Remitly</h3>
                      <p className="text-sm text-gray-500">Mejor calificada y más completa</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-sm text-gray-600">4.9</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div className="bg-blue-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Comisión</p>
                      <p className="font-bold text-gray-900">$0-3.99</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Velocidad</p>
                      <p className="font-bold text-gray-900">Minutos-días</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Entrega</p>
                      <p className="font-bold text-gray-900">Banco + Efectivo</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Plataformas</p>
                      <p className="font-bold text-gray-900">iOS, Android, Web</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    La app más popular con la mejor calificación. Excelente para cobro en
                    efectivo con miles de puntos en México. Garantía de entrega.
                  </p>

                  <Link href="/reviews/remitly/" className="bg-trust-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 inline-block">
                    Ver review
                  </Link>
                </div>

                {/* #3 Félix Pago */}
                <div className="border-2 border-orange-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-warm-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl">Félix Pago</h3>
                      <p className="text-sm text-gray-500">Mejor para principiantes (WhatsApp)</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★☆</span>
                        <span className="text-sm text-gray-600">4.6</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div className="bg-orange-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Primera vez</p>
                      <p className="font-bold text-success-green">GRATIS</p>
                    </div>
                    <div className="bg-orange-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Velocidad</p>
                      <p className="font-bold text-gray-900">Minutos</p>
                    </div>
                    <div className="bg-orange-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Entrega</p>
                      <p className="font-bold text-gray-900">Banco</p>
                    </div>
                    <div className="bg-orange-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Plataforma</p>
                      <p className="font-bold text-gray-900">WhatsApp</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    No necesitas descargar app - funciona por WhatsApp. Primera transferencia
                    100% gratis. Ideal para quienes no quieren apps nuevas.
                  </p>

                  <Link href="/reviews/felix-pago/" className="bg-warm-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 inline-block">
                    Ver review
                  </Link>
                </div>

                {/* #4 Wise */}
                <div className="border-2 border-purple-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">4</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl">Wise</h3>
                      <p className="text-sm text-gray-500">Mejor tipo de cambio</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★☆</span>
                        <span className="text-sm text-gray-600">4.7</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div className="bg-purple-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Comisión</p>
                      <p className="font-bold text-gray-900">~0.5%</p>
                    </div>
                    <div className="bg-purple-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Velocidad</p>
                      <p className="font-bold text-gray-900">Horas-días</p>
                    </div>
                    <div className="bg-purple-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Entrega</p>
                      <p className="font-bold text-gray-900">Banco</p>
                    </div>
                    <div className="bg-purple-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Plataformas</p>
                      <p className="font-bold text-gray-900">iOS, Android, Web</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    Ofrece el tipo de cambio real del mercado. Ideal para montos grandes
                    donde el tipo de cambio tiene mayor impacto.
                  </p>

                  <Link href="/reviews/wise/" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 inline-block">
                    Ver review
                  </Link>
                </div>

                {/* #5 Xoom */}
                <div className="border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">5</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl">Xoom (PayPal)</h3>
                      <p className="text-sm text-gray-500">Mejor para usuarios PayPal</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★☆</span>
                        <span className="text-sm text-gray-600">4.5</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div className="bg-gray-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Comisión</p>
                      <p className="font-bold text-gray-900">$0-4.99</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Velocidad</p>
                      <p className="font-bold text-gray-900">Minutos-días</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Entrega</p>
                      <p className="font-bold text-gray-900">Banco + Efectivo</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-center">
                      <p className="text-gray-500 text-xs">Plataformas</p>
                      <p className="font-bold text-gray-900">iOS, Android, Web</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    Integrado con PayPal. Buena opción si ya tienes saldo en PayPal.
                    Múltiples opciones de entrega.
                  </p>

                  <Link href="/reviews/xoom/" className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 inline-block">
                    Ver review
                  </Link>
                </div>
              </div>
            </section>

            {/* Download Links */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Descarga las Apps
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">iPhone (iOS)</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Sendwave - App Store</li>
                    <li>• Remitly - App Store</li>
                    <li>• Wise - App Store</li>
                    <li>• Xoom - App Store</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Android</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Sendwave - Google Play</li>
                    <li>• Remitly - Google Play</li>
                    <li>• Wise - Google Play</li>
                    <li>• Xoom - Google Play</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                Félix Pago funciona por WhatsApp, no necesita descarga adicional.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Nuestra recomendación</h3>
              <p className="text-purple-100 text-sm mb-4">
                Sendwave para envíos económicos, Remitly para efectivo.
              </p>
              <Link
                href="/comparar/"
                className="block w-full text-center bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Comparar todas
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/proveedores-confiables/" className="block text-trust-blue hover:underline text-sm">
                  Proveedores confiables →
                </Link>
                <Link href="/guias/como-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Cómo enviar dinero →
                </Link>
                <Link href="/guias/enviar-dinero-sin-comisiones/" className="block text-trust-blue hover:underline text-sm">
                  Enviar sin comisiones →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
