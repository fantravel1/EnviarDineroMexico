import { Metadata } from 'next'
import Link from 'next/link'
import { ComparisonTable, ProviderCard, AffiliateDisclosure } from '@/components'
import { providers } from '@/data/providers'

export const metadata: Metadata = {
  title: 'Enviar Dinero a México desde Estados Unidos | Guía Completa 2025',
  description:
    'Guía completa para enviar dinero a México desde EE.UU. Compara Remitly, Sendwave, Félix Pago y más. Encuentra la forma más barata y rápida de enviar remesas.',
  keywords: [
    'enviar dinero a mexico',
    'mandar dinero a mexico',
    'transferir dinero a mexico',
    'remesas usa mexico',
    'mejor forma enviar dinero mexico',
  ],
  openGraph: {
    title: 'Enviar Dinero a México desde Estados Unidos | Guía Completa 2025',
    description:
      'Guía completa para enviar dinero a México desde EE.UU. Compara las mejores opciones y ahorra en cada transferencia.',
  },
}

export default function EnviarDineroMexicoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-16">
        <div className="container-wide">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-trust-blue-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li className="text-white">Enviar Dinero a México</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Enviar Dinero a México desde Estados Unidos
          </h1>
          <p className="text-xl text-trust-blue-100 max-w-3xl">
            La guía más completa en español para enviar remesas a México.
            Compara proveedores, tarifas y encuentra la mejor opción para tu familia.
          </p>
        </div>
      </section>

      {/* Quick Answer Section - AEO Optimized */}
      <section className="section bg-white">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">
              Respuesta Rápida
            </h2>
            <p className="text-success-green-700">
              <strong>La forma más barata de enviar dinero a México es Sendwave</strong>, que no cobra
              comisión pero aplica un margen del ~2% en el tipo de cambio. Para la primera transferencia,
              <strong> Félix Pago es completamente gratis</strong>. Para montos de $500 o más,
              <strong> Remitly ofrece transferencias sin comisión</strong> con la red de cobro más extensa.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-neutral-50 p-6 rounded-lg mb-12">
            <h2 className="font-bold text-lg mb-4">Contenido de Esta Guía</h2>
            <nav>
              <ol className="space-y-2 text-trust-blue-600">
                <li><a href="#mercado" className="hover:underline">1. El Mercado de Remesas EE.UU.-México</a></li>
                <li><a href="#mejores-proveedores" className="hover:underline">2. Los 3 Mejores Proveedores</a></li>
                <li><a href="#comparacion" className="hover:underline">3. Comparación de Costos</a></li>
                <li><a href="#como-elegir" className="hover:underline">4. Cómo Elegir el Mejor Servicio</a></li>
                <li><a href="#metodos-entrega" className="hover:underline">5. Métodos de Entrega en México</a></li>
                <li><a href="#impuestos" className="hover:underline">6. Impuestos y Regulaciones</a></li>
                <li><a href="#faq" className="hover:underline">7. Preguntas Frecuentes</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section id="mercado" className="section bg-neutral-50">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            El Mercado de Remesas EE.UU.-México
          </h2>

          <div className="prose prose-lg max-w-none text-neutral-700 mb-8">
            <p>
              México recibió un récord de <strong>$64.7 mil millones en remesas en 2024</strong>,
              convirtiéndose en el segundo mayor receptor de remesas del mundo después de India.
              Estados Unidos representa el <strong>96.6% de todas las remesas</strong> ($62.5 mil millones),
              con California y Texas contribuyendo el 47% del total.
            </p>
            <p>
              El monto promedio por transferencia es de <strong>$393-397</strong>, con aproximadamente
              <strong> 164 millones de transferencias anuales</strong> de un estimado de 9.2 millones
              de personas enviando dinero. La frecuencia ha aumentado a unas 16 veces al año por persona.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: '$64.7B', label: 'Remesas 2024' },
              { value: '96.6%', label: 'Desde EE.UU.' },
              { value: '$393', label: 'Promedio/Envío' },
              { value: '16x', label: 'Envíos/Año' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-2xl md:text-3xl font-bold text-trust-blue-600">{stat.value}</p>
                <p className="text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Top Receiving States */}
          <h3 className="text-xl font-bold text-neutral-800 mb-4">
            Estados que Más Reciben Remesas
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-3 text-left rounded-tl-lg">Estado</th>
                  <th className="p-3 text-right">Remesas Anuales</th>
                  <th className="p-3 text-center rounded-tr-lg">Prioridad</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { state: 'Michoacan', amount: '$5.4B+', priority: 5, slug: 'a-michoacan' },
                  { state: 'Jalisco', amount: '$5.2B+', priority: 5, slug: 'a-jalisco' },
                  { state: 'Guanajuato', amount: '$4.8B+', priority: 5, slug: 'a-guanajuato' },
                  { state: 'Estado de Mexico', amount: '$3.5B+', priority: 4, slug: 'a-estado-de-mexico' },
                  { state: 'Oaxaca', amount: '$2.8B+', priority: 4, slug: 'a-oaxaca' },
                ].map((row) => (
                  <tr key={row.state} className="border-b border-neutral-100">
                    <td className="p-3 font-medium">
                      <Link href={`/enviar-dinero-a-mexico/${row.slug}/`} className="text-trust-blue-600 hover:underline">
                        {row.state}
                      </Link>
                    </td>
                    <td className="p-3 text-right">{row.amount}</td>
                    <td className="p-3 text-center text-yellow-500">
                      {'★'.repeat(row.priority)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Providers */}
      <section id="mejores-proveedores" className="section bg-white">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4 text-center">
            Los 3 Mejores Proveedores para México
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-center mb-12">
            Basado en comisiones más bajas, menor fricción y diseño móvil.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="comparacion" className="section bg-neutral-50">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4 text-center">
            Comparación de Costos Detallada
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-center mb-12">
            Costo total (comisión + diferencia de tipo de cambio) para diferentes montos.
          </p>

          <ComparisonTable amounts={[200, 500, 1000]} />
        </div>
      </section>

      {/* How to Choose */}
      <section id="como-elegir" className="section bg-white">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">
            Cómo Elegir el Mejor Servicio
          </h2>

          <div className="space-y-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-neutral-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                Si es tu Primera Transferencia
              </h3>
              <p className="text-neutral-600 mb-4">
                <strong>Recomendación: Félix Pago</strong> — Primera transferencia completamente gratis,
                sin necesidad de descargar app, funciona por WhatsApp.
              </p>
              <Link href="/reviews/felix-pago/" className="text-trust-blue-600 hover:underline font-medium">
                Ver review de Félix Pago →
              </Link>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-neutral-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                Si Envías Regularmente ($200-$500)
              </h3>
              <p className="text-neutral-600 mb-4">
                <strong>Recomendación: Sendwave</strong> — Cero comisiones, solo ~2% en tipo de cambio.
                App móvil simple y rápida.
              </p>
              <Link href="/reviews/sendwave/" className="text-trust-blue-600 hover:underline font-medium">
                Ver review de Sendwave →
              </Link>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-neutral-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-trust-blue-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                Si Envías Montos Grandes ($500+) o Necesitas Efectivo
              </h3>
              <p className="text-neutral-600 mb-4">
                <strong>Recomendación: Remitly</strong> — Sin comisión en transferencias de $500+,
                470,000+ ubicaciones de cobro en efectivo, app mejor calificada (4.9★).
              </p>
              <Link href="/reviews/remitly/" className="text-trust-blue-600 hover:underline font-medium">
                Ver review de Remitly →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section id="metodos-entrega" className="section bg-neutral-50">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">
            Métodos de Entrega en México
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-trust-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-trust-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-neutral-800 mb-2">Depósito Bancario</h3>
              <p className="text-neutral-600 text-sm mb-3">
                Directo a cuenta bancaria vía SPEI. Llega en minutos durante horario bancario.
              </p>
              <p className="text-xs text-neutral-500">
                Bancos: BBVA, Banorte, Santander, HSBC, Scotiabank, Banamex
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-success-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-success-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-neutral-800 mb-2">Cobro en Efectivo</h3>
              <p className="text-neutral-600 text-sm mb-3">
                Retiro en tiendas de conveniencia, farmacias y bancos. Ideal si no hay cuenta bancaria.
              </p>
              <p className="text-xs text-neutral-500">
                Redes: OXXO, Elektra, Walmart, 7-Eleven, Farmacias Guadalajara
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-warm-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-warm-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-neutral-800 mb-2">Billetera Móvil</h3>
              <p className="text-neutral-600 text-sm mb-3">
                A apps como Mercado Pago, Nu, Spin by OXXO. Entrega instantánea.
              </p>
              <p className="text-xs text-neutral-500">
                Disponible con Félix Pago y Remitly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section id="impuestos" className="section bg-white">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">
            Impuestos y Regulaciones
          </h2>

          <div className="bg-neutral-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-neutral-800 mb-4">En México (Receptor)</h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>
                  <strong>Familiares directos (padres, hijos, cónyuge):</strong> Exento sin límite
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>
                  <strong>Otras donaciones:</strong> Exento hasta ~224,000 MXN/año
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-warm-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>
                  <strong>Reporte SAT:</strong> Bancos reportan depósitos mayores a 15,000 MXN/mes
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-neutral-800 mb-4">En Estados Unidos (Enviador)</h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-trust-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>
                  Las remesas familiares generalmente no son deducibles de impuestos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-trust-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>
                  Transferencias mayores a $10,000 requieren reporte (formulario FinCEN)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-neutral-50">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: '¿Puedo enviar dinero a México sin papeles?',
                a: 'Sí, varios servicios aceptan identificación alternativa. Sendwave acepta licencia de conducir o pasaporte. Las cooperativas de crédito de la red Juntos Avanzamos aceptan ITIN, Matrícula Consular y pasaportes extranjeros.',
              },
              {
                q: '¿Cuánto dinero puedo enviar a México sin declarar?',
                a: 'En México, las remesas de familiares directos (padres, hijos, cónyuge) son exentas de impuestos sin límite. Los bancos mexicanos reportan al SAT depósitos mayores a 15,000 MXN mensuales. En EE.UU., transferencias mayores a $10,000 requieren reporte.',
              },
              {
                q: '¿Qué pasa si mi familiar no tiene cuenta bancaria?',
                a: 'Puede recibir el dinero en efectivo en más de 470,000 ubicaciones en México incluyendo OXXO, Elektra, Walmart, 7-Eleven y farmacias. Remitly tiene la red más extensa para cobro en efectivo.',
              },
              {
                q: '¿Es mejor enviar dinero los fines de semana?',
                a: 'Los depósitos bancarios son más rápidos en horario bancario (lunes a viernes). Sin embargo, servicios como Félix Pago usando SPEI funcionan 24/7. Para cobro en efectivo, las tiendas como OXXO están abiertas todos los días.',
              },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600">
                  {item.q}
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-600">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-trust-blue-600 to-trust-blue-700 text-white py-16">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Empieza a Enviar Dinero Hoy
          </h2>
          <p className="text-lg text-trust-blue-100 mb-8">
            Usa nuestra calculadora para encontrar la mejor opción para ti.
          </p>
          <Link href="/calculadora/" className="btn-cta">
            Usar Calculadora Gratis
          </Link>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Enviar Dinero a México desde Estados Unidos | Guía Completa 2025',
            description: 'Guía completa para enviar dinero a México desde EE.UU.',
            datePublished: '2025-12-01',
            dateModified: '2025-12-16',
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
            },
          }),
        }}
      />
    </>
  )
}
