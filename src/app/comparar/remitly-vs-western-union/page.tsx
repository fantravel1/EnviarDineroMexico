import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Remitly vs Western Union México 2025 | Comparación Completa',
  description:
    'Comparamos Remitly y Western Union para enviar dinero a México. Descubre cuál tiene mejores comisiones, tipo de cambio y velocidad.',
  keywords: [
    'remitly vs western union',
    'comparar remitly western union',
    'cual es mejor remitly o western union',
    'remitly o western union mexico',
    'diferencia remitly western union',
    'enviar dinero mexico remitly western union',
    'remitly vs western union comisiones',
  ],
  openGraph: {
    title: 'Remitly vs Western Union México 2025',
    description: 'Comparamos costos, velocidad y cobertura de Remitly y Western Union para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function RemitlyVsWesternUnionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-12">
        <div className="container-wide">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-trust-blue-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/comparar/" className="hover:text-white">Comparar</Link></li>
              <li>/</li>
              <li className="text-white">Remitly vs Western Union</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Remitly vs Western Union México
          </h1>
          <p className="text-xl text-trust-blue-100">
            El líder digital contra el gigante tradicional. ¿Cuál es mejor para ti?
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          {/* Quick Answer */}
          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rápida</h2>
            <p className="text-success-green-700">
              <strong>Remitly gana en la mayoría de casos.</strong> Ofrece mejor tipo de cambio,
              comisiones más bajas ($1.99 vs $5-10), app mejor calificada (4.9★ vs 3.8★),
              y cobertura comparable. Western Union solo gana si necesitas una oficina física
              para enviar en efectivo.
            </p>
          </div>

          {/* Comparison Table */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Comparación Directa</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Remitly</th>
                  <th className="p-4 text-center rounded-tr-lg">Western Union</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Comisión (banco)', remitly: '$1.99', wu: '$5-10', winner: 'remitly' },
                  { factor: 'Comisión ($500+)', remitly: '$0', wu: '$5-10', winner: 'remitly' },
                  { factor: 'Margen Tipo Cambio', remitly: '~2%', wu: '3-5%', winner: 'remitly' },
                  { factor: 'App iOS Rating', remitly: '4.9★', wu: '3.8★', winner: 'remitly' },
                  { factor: 'Ubicaciones México', remitly: '470,000+', wu: '44,000+', winner: 'remitly' },
                  { factor: 'Velocidad Express', remitly: 'Minutos', wu: 'Minutos', winner: 'tie' },
                  { factor: 'Envío en Efectivo (EE.UU.)', remitly: 'No', wu: 'Sí', winner: 'wu' },
                  { factor: 'Empresa Pública', remitly: 'Sí (NASDAQ)', wu: 'Sí (NYSE)', winner: 'tie' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'remitly' ? 'bg-success-green-50 text-success-green-700 font-semibold' : ''}`}>
                      {row.remitly}
                    </td>
                    <td className={`p-4 text-center ${row.winner === 'wu' ? 'bg-success-green-50 text-success-green-700 font-semibold' : ''}`}>
                      {row.wu}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cost Comparison */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Costo Total para $500</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-success-green-50 p-6 rounded-lg border-2 border-success-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-success-green-600 text-white rounded-full flex items-center justify-center font-bold">R</div>
                <div>
                  <h3 className="font-bold text-lg">Remitly</h3>
                  <span className="text-xs bg-success-green-600 text-white px-2 py-1 rounded">GANADOR</span>
                </div>
              </div>
              <ul className="space-y-2 text-neutral-700">
                <li>Comisión: <strong>$0-$1.99</strong></li>
                <li>Pérdida tipo cambio (~2%): <strong>~$10</strong></li>
                <li className="text-lg font-bold text-success-green-700 pt-2 border-t">
                  Total: ~$10-12 (2-2.4%)
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border-2 border-neutral-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">WU</div>
                <h3 className="font-bold text-lg">Western Union</h3>
              </div>
              <ul className="space-y-2 text-neutral-700">
                <li>Comisión: <strong>$5-10</strong></li>
                <li>Pérdida tipo cambio (~4%): <strong>~$20</strong></li>
                <li className="text-lg font-bold text-neutral-800 pt-2 border-t">
                  Total: ~$25-30 (5-6%)
                </li>
              </ul>
            </div>
          </div>

          {/* When to Use Each */}
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">¿Cuándo Usar Cada Uno?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-trust-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-trust-blue-800 mb-4">Usa Remitly si...</h3>
              <ul className="space-y-2 text-trust-blue-700">
                <li>✓ Quieres las mejores tarifas</li>
                <li>✓ Prefieres enviar desde tu celular</li>
                <li>✓ Envías a cuenta bancaria o OXXO</li>
                <li>✓ Valoras la experiencia de app moderna</li>
                <li>✓ Envías $500 o más (sin comisión)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-4">Usa Western Union si...</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>✓ Necesitas pagar en efectivo en EE.UU.</li>
                <li>✓ Prefieres ir a una oficina física</li>
                <li>✓ No te sientes cómodo con apps</li>
                <li>✓ Necesitas servicios adicionales (pago de facturas)</li>
              </ul>
            </div>
          </div>

          {/* Full Reviews Links */}
          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <p className="text-neutral-600 mb-4">
              Lee nuestras reseñas detalladas de cada servicio:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/remitly/" className="text-trust-blue-600 hover:underline font-medium">
                → Review de Remitly
              </Link>
              <Link href="/reviews/western-union/" className="text-trust-blue-600 hover:underline font-medium">
                → Review de Western Union
              </Link>
            </div>
          </div>

          {/* CTAs */}
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.remitly.com/us/en/mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-trust-blue-600 text-white p-6 rounded-lg text-center hover:bg-trust-blue-700 transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Probar Remitly</h3>
              <p className="text-trust-blue-100 text-sm">Primeras 2 transferencias gratis</p>
            </a>
            <a
              href="https://www.westernunion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-white p-6 rounded-lg text-center hover:bg-yellow-600 transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Ir a Western Union</h3>
              <p className="text-yellow-100 text-sm">Encuentra una oficina cerca</p>
            </a>
          </div>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Última actualización: 17 de diciembre de 2025</p>
          </div>

          {/* SEO Schema Markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: 'Remitly vs Western Union México 2025 | Comparación Completa',
                description: 'Comparamos Remitly y Western Union para enviar dinero a México. Descubre cuál tiene mejores comisiones, tipo de cambio y velocidad.',
                datePublished: '2025-12-01',
                dateModified: '2025-12-17',
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
                    item: 'https://enviardineromexico.com',
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
                    name: 'Remitly vs Western Union',
                    item: 'https://enviardineromexico.com/comparar/remitly-vs-western-union',
                  },
                ],
              }),
            }}
          />
        </div>
      </section>
    </>
  )
}
