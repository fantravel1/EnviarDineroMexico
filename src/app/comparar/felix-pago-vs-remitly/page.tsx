import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Félix Pago vs Remitly México 2025 | WhatsApp vs App Tradicional',
  description:
    'Comparamos Félix Pago y Remitly. WhatsApp innovador contra la app más popular para remesas.',
}

export default function FelixPagoVsRemitlyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-success-green-600 to-success-green-800 text-white py-12">
        <div className="container-wide">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-success-green-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/comparar/" className="hover:text-white">Comparar</Link></li>
              <li>/</li>
              <li className="text-white">Félix Pago vs Remitly</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Félix Pago vs Remitly México
          </h1>
          <p className="text-xl text-success-green-100">
            Innovación WhatsApp contra el líder establecido del mercado.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rápida</h2>
            <p className="text-success-green-700">
              <strong>Primera transferencia o sin querer descargar apps: Félix Pago</strong> -
              Gratis la primera vez, 100% por WhatsApp.
              <strong> Para uso regular o montos grandes: Remitly</strong> -
              App más madura, mayor cobertura, empresa pública.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-success-green-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Félix Pago</th>
                  <th className="p-4 text-center rounded-tr-lg">Remitly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Primera Transferencia', felix: 'GRATIS', remitly: 'Gratis (2 primeras)', winner: 'felix' },
                  { factor: 'Comisión Regular', felix: '$2.99', remitly: '$1.99-3.99', winner: 'tie' },
                  { factor: 'App Download', felix: 'NO (WhatsApp)', remitly: 'Sí', winner: 'felix' },
                  { factor: 'Velocidad', felix: 'Instantáneo (SPEI)', remitly: 'Express: Minutos', winner: 'felix' },
                  { factor: 'Trustpilot Reviews', felix: '370+', remitly: '98,000+', winner: 'remitly' },
                  { factor: 'Ubicaciones Efectivo', felix: '40,000+', remitly: '470,000+', winner: 'remitly' },
                  { factor: 'Billeteras Móviles', felix: 'Mercado Pago, Nu, Spin', remitly: 'Limitado', winner: 'felix' },
                  { factor: 'Empresa', felix: 'Startup ($105M funding)', remitly: 'Pública (NASDAQ)', winner: 'remitly' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'felix' ? 'bg-success-green-50 font-semibold' : ''}`}>
                      {row.felix}
                    </td>
                    <td className={`p-4 text-center ${row.winner === 'remitly' ? 'bg-trust-blue-50 font-semibold' : ''}`}>
                      {row.remitly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-success-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-success-green-800 mb-4">Elige Félix Pago si...</h3>
              <ul className="space-y-2 text-success-green-700">
                <li>✓ Es tu primera transferencia (gratis)</li>
                <li>✓ No quieres descargar otra app</li>
                <li>✓ Ya usas WhatsApp diariamente</li>
                <li>✓ El receptor tiene billetera móvil</li>
                <li>✓ Valoras la innovación tecnológica</li>
              </ul>
            </div>
            <div className="bg-trust-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-trust-blue-800 mb-4">Elige Remitly si...</h3>
              <ul className="space-y-2 text-trust-blue-700">
                <li>✓ Envías dinero regularmente</li>
                <li>✓ Prefieres una app dedicada</li>
                <li>✓ Necesitas la red de efectivo más grande</li>
                <li>✓ Valoras una empresa establecida</li>
                <li>✓ Envías $500+ (sin comisión)</li>
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
              <Link href="/reviews/felix-pago/" className="text-success-green-600 hover:underline font-medium">
                → Review de Félix Pago
              </Link>
              <Link href="/reviews/remitly/" className="text-trust-blue-600 hover:underline font-medium">
                → Review de Remitly
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.felixpago.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success-green-600 text-white p-6 rounded-lg text-center hover:bg-success-green-700"
            >
              <h3 className="font-bold text-lg mb-2">Probar Félix Pago</h3>
              <p className="text-success-green-100 text-sm">1ra transferencia GRATIS</p>
            </a>
            <a
              href="https://www.remitly.com/us/en/mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-trust-blue-600 text-white p-6 rounded-lg text-center hover:bg-trust-blue-700"
            >
              <h3 className="font-bold text-lg mb-2">Probar Remitly</h3>
              <p className="text-trust-blue-100 text-sm">Primeras 2 gratis</p>
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
                headline: 'Félix Pago vs Remitly México 2025 | WhatsApp vs App Tradicional',
                description: 'Comparamos Félix Pago y Remitly. WhatsApp innovador contra la app más popular para remesas.',
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
                    name: 'Félix Pago vs Remitly',
                    item: 'https://enviardineromexico.com/comparar/felix-pago-vs-remitly',
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
