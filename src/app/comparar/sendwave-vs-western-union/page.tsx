import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Sendwave vs Western Union Mexico 2025 | Comparacion Completa',
  description: 'Comparamos Sendwave y Western Union para enviar dinero a Mexico. App moderna con $0 comision vs red tradicional con 500,000 ubicaciones.',
  alternates: { canonical: '/comparar/sendwave-vs-western-union/' },
  keywords: [
    'sendwave vs western union',
    'comparar sendwave western union',
    'cual es mejor sendwave o western union',
    'sendwave o western union mexico',
    'diferencia sendwave western union',
    'enviar dinero mexico sendwave western union',
    'sendwave vs western union comisiones',
  ],
  openGraph: {
    title: 'Sendwave vs Western Union México 2025',
    description: 'Comparamos $0 comisión de Sendwave vs la red de 500,000 ubicaciones de Western Union para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function SendwaveVsWesternUnionPage() {
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
              <li className="text-white">Sendwave vs Western Union</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sendwave vs Western Union Mexico</h1>
          <p className="text-xl text-trust-blue-100">App digital sin comisiones vs la red mas grande del mundo</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para ahorrar dinero: Sendwave</strong> - $0 comision, ahorra hasta 50% vs Western Union.
              <strong> Para cobro en efectivo en pueblos: Western Union</strong> - 500,000+ ubicaciones incluyendo zonas rurales.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Sendwave</th>
                  <th className="p-4 text-center rounded-tr-lg">Western Union</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Comision', sendwave: '$0', wu: '$5-25', winner: 'sendwave' },
                  { factor: 'Costo Total $500', sendwave: '~$10 (2%)', wu: '~$25-35 (5-7%)', winner: 'sendwave' },
                  { factor: 'Ubicaciones Efectivo', sendwave: 'Limitado', wu: '500,000+', winner: 'wu' },
                  { factor: 'Envio en Persona', sendwave: 'No', wu: 'Si', winner: 'wu' },
                  { factor: 'App Rating', sendwave: '4.7★', wu: '4.5★', winner: 'sendwave' },
                  { factor: 'Velocidad', sendwave: 'Minutos', wu: 'Minutos-Dias', winner: 'sendwave' },
                  { factor: 'Soporte Espanol', sendwave: 'Limitado', wu: 'Completo', winner: 'wu' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'sendwave' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.sendwave}</td>
                    <td className={`p-4 text-center ${row.winner === 'wu' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.wu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-trust-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-trust-blue-800 mb-4">Elige Sendwave si...</h3>
              <ul className="space-y-2 text-trust-blue-700">
                <li>✓ Quieres pagar menos comisiones</li>
                <li>✓ El receptor tiene cuenta bancaria</li>
                <li>✓ Prefieres hacer todo desde tu celular</li>
                <li>✓ Envias a ciudades grandes</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-4">Elige Western Union si...</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>✓ El receptor esta en zona rural</li>
                <li>✓ Necesitas enviar en persona</li>
                <li>✓ Prefieres atencion en espanol</li>
                <li>✓ Necesitas la mayor red de cobro</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/sendwave/" className="text-trust-blue-600 hover:underline font-medium">→ Review de Sendwave</Link>
              <Link href="/reviews/western-union/" className="text-yellow-600 hover:underline font-medium">→ Review de Western Union</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'Sendwave vs Western Union Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
