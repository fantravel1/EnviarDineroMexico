import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Sendwave vs Remitly México 2025 | ¿Cuál es Mejor?',
  description:
    'Comparamos Sendwave y Remitly para enviar dinero a México. Cero comisiones vs mayor cobertura.',
  keywords: [
    'sendwave vs remitly',
    'comparar sendwave remitly',
    'cual es mejor sendwave o remitly',
    'sendwave o remitly mexico',
    'diferencia sendwave remitly',
    'enviar dinero mexico sendwave remitly',
    'sendwave vs remitly comisiones',
  ],
  openGraph: {
    title: 'Sendwave vs Remitly México 2025',
    description: 'Comparamos Sendwave con cero comisiones vs Remitly con mayor cobertura para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function SendwaveVsRemitlyPage() {
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
              <li className="text-white">Sendwave vs Remitly</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sendwave vs Remitly México
          </h1>
          <p className="text-xl text-trust-blue-100">
            Cero comisiones contra la mayor cobertura. ¿Cuál elegir?
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rápida</h2>
            <p className="text-success-green-700">
              <strong>Para envíos pequeños regulares ($200-$500): Sendwave</strong> - Cero comisiones,
              costo total ~2%. <strong>Para envíos grandes ($500+) o cobro en efectivo: Remitly</strong> -
              Sin comisión en $500+, 470,000 ubicaciones de cobro.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Sendwave</th>
                  <th className="p-4 text-center rounded-tr-lg">Remitly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Comisión', sendwave: '$0', remitly: '$1.99-3.99', winner: 'sendwave' },
                  { factor: 'Costo Total $500', sendwave: '~$10 (2%)', remitly: '~$12 (2.4%)', winner: 'sendwave' },
                  { factor: 'App Rating', sendwave: '4.7★', remitly: '4.9★', winner: 'remitly' },
                  { factor: 'Ubicaciones Efectivo', sendwave: 'Limitado', remitly: '470,000+', winner: 'remitly' },
                  { factor: 'Plataforma', sendwave: 'Solo App', remitly: 'App + Web', winner: 'remitly' },
                  { factor: 'Métodos de Pago', sendwave: 'Solo Débito', remitly: 'Débito, Crédito, Banco', winner: 'remitly' },
                  { factor: 'Límite Diario', sendwave: '$2,999', remitly: '$10,000', winner: 'remitly' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'sendwave' ? 'bg-success-green-50 font-semibold' : ''}`}>
                      {row.sendwave}
                    </td>
                    <td className={`p-4 text-center ${row.winner === 'remitly' ? 'bg-success-green-50 font-semibold' : ''}`}>
                      {row.remitly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-trust-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-trust-blue-800 mb-4">Elige Sendwave si...</h3>
              <ul className="space-y-2 text-trust-blue-700">
                <li>✓ Envías montos pequeños regularmente</li>
                <li>✓ Solo tienes tarjeta de débito</li>
                <li>✓ Prefieres la simplicidad máxima</li>
                <li>✓ El receptor tiene cuenta bancaria</li>
              </ul>
            </div>
            <div className="bg-success-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-success-green-800 mb-4">Elige Remitly si...</h3>
              <ul className="space-y-2 text-success-green-700">
                <li>✓ Envías $500 o más (sin comisión)</li>
                <li>✓ El receptor cobra en efectivo</li>
                <li>✓ Quieres múltiples opciones de entrega</li>
                <li>✓ Valoras una app altamente calificada</li>
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
              <Link href="/reviews/sendwave/" className="text-trust-blue-600 hover:underline font-medium">
                → Review de Sendwave
              </Link>
              <Link href="/reviews/remitly/" className="text-success-green-600 hover:underline font-medium">
                → Review de Remitly
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.sendwave.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-trust-blue-600 text-white p-6 rounded-lg text-center hover:bg-trust-blue-700"
            >
              <h3 className="font-bold text-lg mb-2">Probar Sendwave</h3>
              <p className="text-trust-blue-100 text-sm">$0 comisiones</p>
            </a>
            <a
              href="https://www.remitly.com/us/en/mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success-green-600 text-white p-6 rounded-lg text-center hover:bg-success-green-700"
            >
              <h3 className="font-bold text-lg mb-2">Probar Remitly</h3>
              <p className="text-success-green-100 text-sm">Primeras 2 gratis</p>
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
                headline: 'Sendwave vs Remitly México 2025 | ¿Cuál es Mejor?',
                description: 'Comparamos Sendwave y Remitly para enviar dinero a México. Cero comisiones vs mayor cobertura.',
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
                    name: 'Sendwave vs Remitly',
                    item: 'https://enviardineromexico.com/comparar/sendwave-vs-remitly',
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
