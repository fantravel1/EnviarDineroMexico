import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Remitly vs Xoom Mexico 2025 | Comparacion de Apps Populares',
  description: 'Comparamos Remitly y Xoom (PayPal) para enviar dinero a Mexico. Dos de las apps mas populares para remesas.',
  alternates: { canonical: '/comparar/remitly-vs-xoom/' },
  keywords: [
    'remitly vs xoom',
    'comparar remitly xoom',
    'cual es mejor remitly o xoom',
    'remitly o xoom mexico',
    'diferencia remitly xoom',
    'enviar dinero mexico remitly xoom',
    'remitly vs xoom paypal',
  ],
  openGraph: {
    title: 'Remitly vs Xoom México 2025',
    description: 'Comparamos Remitly la app mejor calificada vs Xoom con respaldo PayPal para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function RemitlyVsXoomPage() {
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
              <li className="text-white">Remitly vs Xoom</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Remitly vs Xoom Mexico</h1>
          <p className="text-xl text-trust-blue-100">La app mejor calificada vs el respaldo de PayPal</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para la mejor experiencia de app: Remitly</strong> - 4.9★ rating, 470K ubicaciones efectivo.
              <strong> Para usuarios PayPal: Xoom</strong> - Integracion perfecta, recarga de celulares.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Remitly</th>
                  <th className="p-4 text-center rounded-tr-lg">Xoom</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'App Rating', remitly: '4.9★', xoom: '4.6★', winner: 'remitly' },
                  { factor: 'Comision', remitly: '$0-3.99', xoom: '$0-4.99', winner: 'remitly' },
                  { factor: 'Ubicaciones Efectivo', remitly: '470,000+', xoom: '100,000+', winner: 'remitly' },
                  { factor: 'Integracion PayPal', remitly: 'No', xoom: 'Si', winner: 'xoom' },
                  { factor: 'Recarga Celular', remitly: 'No', xoom: 'Si', winner: 'xoom' },
                  { factor: 'Promociones', remitly: 'Primeras 2 gratis', xoom: 'Variable', winner: 'remitly' },
                  { factor: 'Soporte Espanol', remitly: 'Excelente', xoom: 'Bueno', winner: 'remitly' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'remitly' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.remitly}</td>
                    <td className={`p-4 text-center ${row.winner === 'xoom' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.xoom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-success-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-success-green-800 mb-4">Elige Remitly si...</h3>
              <ul className="space-y-2 text-success-green-700">
                <li>✓ Valoras la mejor experiencia de app</li>
                <li>✓ Receptor cobra en efectivo</li>
                <li>✓ Quieres primeras 2 transferencias gratis</li>
                <li>✓ Necesitas soporte en espanol</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-4">Elige Xoom si...</h3>
              <ul className="space-y-2 text-blue-700">
                <li>✓ Ya usas PayPal</li>
                <li>✓ Quieres recargar celulares</li>
                <li>✓ Prefieres marca conocida</li>
                <li>✓ Pagas con balance PayPal</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/remitly/" className="text-success-green-600 hover:underline font-medium">→ Review de Remitly</Link>
              <Link href="/reviews/xoom/" className="text-blue-600 hover:underline font-medium">→ Review de Xoom</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'Remitly vs Xoom Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
