import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Xoom vs Western Union Mexico 2025 | Cual Conviene Mas',
  description: 'Comparamos Xoom (PayPal) y Western Union para enviar dinero a Mexico. Dos gigantes de las remesas frente a frente.',
  alternates: { canonical: '/comparar/xoom-vs-western-union/' },
  keywords: [
    'xoom vs western union',
    'comparar xoom western union',
    'cual es mejor xoom o western union',
    'xoom o western union mexico',
    'diferencia xoom western union',
    'enviar dinero mexico xoom western union',
    'xoom paypal vs western union',
  ],
  openGraph: {
    title: 'Xoom vs Western Union México 2025',
    description: 'Comparamos Xoom con integración PayPal vs Western Union el líder tradicional para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function XoomVsWesternUnionPage() {
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
              <li className="text-white">Xoom vs Western Union</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Xoom vs Western Union Mexico</h1>
          <p className="text-xl text-trust-blue-100">PayPal vs el lider tradicional de remesas</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para usuarios de PayPal: Xoom</strong> - Integracion perfecta, costos competitivos.
              <strong> Para red de efectivo maxima: Western Union</strong> - 500,000 ubicaciones, presencia historica.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Xoom</th>
                  <th className="p-4 text-center rounded-tr-lg">Western Union</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Comision Tipica', xoom: '$0-4.99', wu: '$5-25', winner: 'xoom' },
                  { factor: 'Costo Total $500', xoom: '~$15 (3%)', wu: '~$25 (5%)', winner: 'xoom' },
                  { factor: 'Integracion PayPal', xoom: 'Si', wu: 'No', winner: 'xoom' },
                  { factor: 'Ubicaciones Efectivo', xoom: '100,000+', wu: '500,000+', winner: 'wu' },
                  { factor: 'Envio en Persona', xoom: 'No', wu: 'Si', winner: 'wu' },
                  { factor: 'Recarga Celular', xoom: 'Si', wu: 'Si', winner: 'tie' },
                  { factor: 'Anos en Mexico', xoom: '10+', wu: '150+', winner: 'wu' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'xoom' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.xoom}</td>
                    <td className={`p-4 text-center ${row.winner === 'wu' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.wu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-4">Elige Xoom si...</h3>
              <ul className="space-y-2 text-blue-700">
                <li>✓ Ya usas PayPal regularmente</li>
                <li>✓ Prefieres enviar solo en linea</li>
                <li>✓ Quieres comisiones mas bajas</li>
                <li>✓ Necesitas recargar celulares</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-4">Elige Western Union si...</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>✓ Receptor en zona muy rural</li>
                <li>✓ Prefieres atencion en persona</li>
                <li>✓ Confias en marca establecida</li>
                <li>✓ Necesitas maxima cobertura</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/xoom/" className="text-blue-600 hover:underline font-medium">→ Review de Xoom</Link>
              <Link href="/reviews/western-union/" className="text-yellow-600 hover:underline font-medium">→ Review de Western Union</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'Xoom vs Western Union Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
