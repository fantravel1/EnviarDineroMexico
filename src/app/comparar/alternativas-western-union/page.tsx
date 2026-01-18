import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Alternativas a Western Union 2025 | Opciones Más Baratas',
  description: 'Las mejores alternativas a Western Union para enviar dinero a México. Compara Sendwave, Remitly, Félix Pago y más. Ahorra hasta 50% en comisiones.',
  keywords: [
    'alternativas western union',
    'alternativas a western union mexico',
    'mejor que western union',
    'enviar dinero barato mexico',
    'opciones mas baratas que western union',
    'reemplazo western union mexico',
    'apps mas baratas que western union',
  ],
  openGraph: {
    title: 'Alternativas a Western Union México 2025',
    description: 'Las mejores alternativas a Western Union para enviar dinero a México. Ahorra hasta 50% en comisiones con Sendwave, Remitly y más.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function AlternativasWesternUnionPage() {
  const alternatives = [
    {
      name: 'Sendwave',
      tagline: 'La más económica',
      savings: '~$15 en $500',
      fee: '$0',
      speed: 'Horas',
      cashPickup: 'Limitado',
      bestFor: 'Envíos regulares a cuenta bancaria',
      color: 'green',
      slug: 'sendwave',
    },
    {
      name: 'Remitly',
      tagline: 'La más completa',
      savings: '~$10 en $500',
      fee: '$1.99',
      speed: 'Minutos',
      cashPickup: '470,000+',
      bestFor: 'Cobro en efectivo extenso',
      color: 'blue',
      slug: 'remitly',
    },
    {
      name: 'Félix Pago',
      tagline: 'La más rápida',
      savings: '~$11 en $500',
      fee: '$2.99',
      speed: 'Instantáneo',
      cashPickup: '40,000+',
      bestFor: 'Emergencias y primera vez',
      color: 'purple',
      slug: 'felix-pago',
    },
    {
      name: 'Wise',
      tagline: 'La más transparente',
      savings: '~$18 en $500',
      fee: '~$4',
      speed: '1-2 días',
      cashPickup: 'No',
      bestFor: 'Montos grandes, transparencia',
      color: 'teal',
      slug: 'wise',
    },
    {
      name: 'Xoom',
      tagline: 'Respaldo PayPal',
      savings: '~$10 en $500',
      fee: '$0 (desde banco)',
      speed: 'Minutos',
      cashPickup: '60,000+',
      bestFor: 'Usuarios PayPal, recargas',
      color: 'indigo',
      slug: 'xoom',
    },
  ]

  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-600 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-yellow-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/comparar" className="hover:text-white">Comparar</Link></li>
                <li>/</li>
                <li className="text-white">Alternativas Western Union</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Alternativas a Western Union para México
            </h1>
            <p className="text-xl text-yellow-100">
              Ahorra hasta 50% usando estas opciones más económicas
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        {/* Why Switch */}
        <div className="bg-white rounded-xl p-6 shadow-sm mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            ¿Por Qué Buscar Alternativas a Western Union?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">💸 Costos Altos</h3>
              <p className="text-red-700 text-sm">
                Western Union cobra $5-15 de comisión MÁS un margen del 2.5-4% en el tipo de cambio.
                Enviar $500 puede costarte $22+ en total.
              </p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">🔄 Tipo de Cambio</h3>
              <p className="text-amber-700 text-sm">
                Su tipo de cambio es generalmente 3-4% peor que el tipo de cambio medio del mercado.
                En $500, eso son $15-20 menos para tu familia.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">📱 Tecnología Antigua</h3>
              <p className="text-orange-700 text-sm">
                Las apps modernas son más rápidas, fáciles de usar, y ofrecen mejor tracking
                que el sistema tradicional de Western Union.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-white rounded-xl p-6 shadow-sm mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Comparación de Costos: $500 a México
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4">Servicio</th>
                  <th className="text-left py-3 px-4">Comisión</th>
                  <th className="text-left py-3 px-4">Margen T/C</th>
                  <th className="text-left py-3 px-4">Costo Total</th>
                  <th className="text-left py-3 px-4">Ahorras vs WU</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-red-50">
                  <td className="py-3 px-4 font-medium">Western Union</td>
                  <td className="py-3 px-4">$4.99</td>
                  <td className="py-3 px-4">~3.5%</td>
                  <td className="py-3 px-4 font-semibold text-red-600">~$22.50</td>
                  <td className="py-3 px-4">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Sendwave</td>
                  <td className="py-3 px-4">$0</td>
                  <td className="py-3 px-4">~2%</td>
                  <td className="py-3 px-4 font-semibold text-success-green">~$10</td>
                  <td className="py-3 px-4 text-success-green font-semibold">$12.50</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Remitly</td>
                  <td className="py-3 px-4">$1.99</td>
                  <td className="py-3 px-4">~2%</td>
                  <td className="py-3 px-4 font-semibold text-success-green">~$12</td>
                  <td className="py-3 px-4 text-success-green font-semibold">$10.50</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Félix Pago</td>
                  <td className="py-3 px-4">$2.99</td>
                  <td className="py-3 px-4">~1.7%</td>
                  <td className="py-3 px-4 font-semibold text-success-green">~$11.50</td>
                  <td className="py-3 px-4 text-success-green font-semibold">$11</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Wise</td>
                  <td className="py-3 px-4">~$4.12</td>
                  <td className="py-3 px-4">0%</td>
                  <td className="py-3 px-4 font-semibold text-success-green">~$4.12</td>
                  <td className="py-3 px-4 text-success-green font-semibold">$18.38</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Xoom</td>
                  <td className="py-3 px-4">$0*</td>
                  <td className="py-3 px-4">~2.5%</td>
                  <td className="py-3 px-4 font-semibold text-success-green">~$12.50</td>
                  <td className="py-3 px-4 text-success-green font-semibold">$10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            * Xoom $0 comisión solo cuando pagas desde cuenta bancaria vinculada.
            Costos estimados, pueden variar según día y método de pago.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Las 5 Mejores Alternativas
            </h2>

            {alternatives.map((alt, index) => (
              <div key={alt.slug} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-gray-500">#{index + 1}</span>
                    <h3 className="text-xl font-bold text-gray-900">{alt.name}</h3>
                    <p className="text-gray-600">{alt.tagline}</p>
                  </div>
                  <span className="bg-success-green/10 text-success-green px-3 py-1 rounded-full text-sm font-bold">
                    Ahorra {alt.savings}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Comisión</div>
                    <div className="font-semibold">{alt.fee}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Velocidad</div>
                    <div className="font-semibold">{alt.speed}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Puntos efectivo</div>
                    <div className="font-semibold">{alt.cashPickup}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Mejor para</div>
                    <div className="font-semibold text-sm">{alt.bestFor}</div>
                  </div>
                </div>

                <Link
                  href={`/reviews/${alt.slug}`}
                  className="inline-block text-trust-blue hover:underline font-medium"
                >
                  Ver review completo →
                </Link>
              </div>
            ))}

            {/* When WU is OK */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-amber-800 mb-4">
                ¿Cuándo SÍ Usar Western Union?
              </h2>
              <p className="text-amber-700 mb-4">
                A pesar de sus costos altos, Western Union todavía tiene algunos casos de uso válidos:
              </p>
              <ul className="text-amber-700 space-y-2">
                <li>• <strong>Zonas muy rurales:</strong> Su red de Telecomm llega a pueblos donde otras opciones no existen</li>
                <li>• <strong>Sin smartphone:</strong> Puedes enviar en persona sin necesidad de tecnología</li>
                <li>• <strong>Emergencias nocturnas:</strong> Algunos agentes abren 24/7</li>
                <li>• <strong>Confianza en marca:</strong> Algunas personas mayores prefieren lo conocido</li>
              </ul>
            </div>

            {/* Migration Guide */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Cómo Cambiar de Western Union
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Elige una alternativa</h3>
                    <p className="text-gray-600 text-sm">
                      Para primera vez: Félix Pago (gratis). Para uso regular: Sendwave ($0 comisión).
                      Para efectivo: Remitly (mejor red).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Obtén los datos bancarios</h3>
                    <p className="text-gray-600 text-sm">
                      Si tu familia va a recibir por depósito, pídeles su número CLABE de 18 dígitos.
                      Para efectivo, solo necesitas su nombre completo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Haz un envío de prueba</h3>
                    <p className="text-gray-600 text-sm">
                      Envía una cantidad pequeña ($50-100) primero para verificar que todo funciona.
                      Con Félix Pago tu primera transferencia es gratis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-success-green text-white rounded-full flex items-center justify-center font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">¡Empieza a ahorrar!</h3>
                    <p className="text-gray-600 text-sm">
                      Una vez que confirmes que funciona, usa el nuevo servicio para todos tus envíos.
                      Enviando $500/mes, ahorrarás $100-150 al año.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Pick */}
            <div className="bg-gradient-to-br from-success-green to-green-700 rounded-xl p-6 text-white">
              <div className="text-sm text-green-200 mb-1">Nuestra recomendación</div>
              <h3 className="font-bold text-xl mb-2">Sendwave</h3>
              <p className="text-green-100 text-sm mb-4">
                $0 comisión siempre. La opción más económica para envíos regulares a cuenta bancaria.
              </p>
              <Link
                href="/reviews/sendwave"
                className="block w-full text-center bg-white text-success-green font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                Ver Sendwave
              </Link>
            </div>

            {/* For First Time */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">¿Primera vez?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Félix Pago ofrece tu primera transferencia completamente gratis. Ideal para probar.
              </p>
              <Link
                href="/reviews/felix-pago"
                className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Probar Félix Pago
              </Link>
            </div>

            {/* Calculator CTA */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Calcula tu ahorro</h3>
              <p className="text-gray-600 text-sm mb-4">
                Usa nuestra calculadora para ver exactamente cuánto ahorras vs Western Union.
              </p>
              <Link
                href="/calculadora"
                className="block w-full text-center bg-trust-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Ir a calculadora
              </Link>
            </div>

            {/* Other Comparisons */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Otras Comparaciones</h3>
              <div className="space-y-2">
                <Link href="/comparar/remitly-vs-western-union" className="block text-trust-blue hover:underline text-sm">
                  Remitly vs Western Union →
                </Link>
                <Link href="/comparar/wise-vs-xoom" className="block text-trust-blue hover:underline text-sm">
                  Wise vs Xoom →
                </Link>
                <Link href="/comparar/sendwave-vs-remitly" className="block text-trust-blue hover:underline text-sm">
                  Sendwave vs Remitly →
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
            '@type': 'Article',
            headline: 'Alternativas a Western Union para México',
            description: 'Las mejores alternativas a Western Union para enviar dinero a México. Compara Sendwave, Remitly, Félix Pago y más. Ahorra hasta 50% en comisiones.',
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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Por qué buscar alternativas a Western Union?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Western Union cobra comisiones altas ($5-15) más un margen del 2.5-4% en el tipo de cambio. Enviar $500 puede costar $22+ en total. Las alternativas digitales ofrecen mejores tipos de cambio y comisiones más bajas.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuál es la alternativa más económica a Western Union?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sendwave ofrece $0 de comisión con un margen de ~2% en el tipo de cambio. Para envíos de $500, ahorras aproximadamente $12.50 comparado con Western Union.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuándo sí debo usar Western Union?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Western Union es útil para zonas muy rurales con su red de Telecomm, si no tienes smartphone, para emergencias nocturnas con agentes 24/7, o si la persona receptora prefiere la marca conocida.',
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
                name: 'Comparar',
                item: 'https://enviardineromexico.com/comparar',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Alternativas Western Union',
                item: 'https://enviardineromexico.com/comparar/alternativas-western-union',
              },
            ],
          }),
        }}
      />
    </main>
  )
}
