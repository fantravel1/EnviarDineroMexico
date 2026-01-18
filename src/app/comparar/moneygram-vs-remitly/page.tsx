import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'MoneyGram vs Remitly Mexico 2025 | Tradicional vs Digital',
  description: 'Comparamos MoneyGram y Remitly para enviar dinero a Mexico. Servicio tradicional vs app moderna con mejor precio.',
  alternates: { canonical: '/comparar/moneygram-vs-remitly/' },
  keywords: [
    'moneygram vs remitly',
    'comparar moneygram remitly',
    'cual es mejor moneygram o remitly',
    'moneygram o remitly mexico',
    'diferencia moneygram remitly',
    'enviar dinero mexico moneygram remitly',
    'moneygram vs remitly comisiones',
  ],
  openGraph: {
    title: 'MoneyGram vs Remitly México 2025',
    description: 'Comparamos MoneyGram servicio tradicional vs Remitly app moderna para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function MoneygramVsRemitlyPage() {
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
              <li className="text-white">MoneyGram vs Remitly</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">MoneyGram vs Remitly Mexico</h1>
          <p className="text-xl text-trust-blue-100">La tradicion vs la innovacion en remesas</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para la mayoria: Remitly</strong> - Mejor precio, mas ubicaciones, mejor app.
              <strong> Para envio en persona: MoneyGram</strong> - Si prefieres ir a una tienda fisica.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">MoneyGram</th>
                  <th className="p-4 text-center rounded-tr-lg">Remitly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Costo Total $500', mg: '~$22 (4.4%)', remitly: '~$12 (2.4%)', winner: 'remitly' },
                  { factor: 'App Rating', mg: '4.3★', remitly: '4.9★', winner: 'remitly' },
                  { factor: 'Ubicaciones Mexico', mg: '350,000', remitly: '470,000+', winner: 'remitly' },
                  { factor: 'Envio en Persona', mg: 'Si', remitly: 'No', winner: 'mg' },
                  { factor: 'Promociones', mg: 'Ocasionales', remitly: 'Primeras 2 gratis', winner: 'remitly' },
                  { factor: 'Soporte Espanol', mg: 'Bueno', remitly: 'Excelente', winner: 'remitly' },
                  { factor: 'Anos en Mexico', mg: '80+', remitly: '10+', winner: 'mg' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'mg' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.mg}</td>
                    <td className={`p-4 text-center ${row.winner === 'remitly' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.remitly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-orange-800 mb-4">Elige MoneyGram si...</h3>
              <ul className="space-y-2 text-orange-700">
                <li>✓ Prefieres ir a una tienda</li>
                <li>✓ No usas smartphone</li>
                <li>✓ Confias en marca tradicional</li>
                <li>✓ Hay MoneyGram cerca de ti</li>
              </ul>
            </div>
            <div className="bg-success-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-success-green-800 mb-4">Elige Remitly si...</h3>
              <ul className="space-y-2 text-success-green-700">
                <li>✓ Quieres ahorrar dinero</li>
                <li>✓ Prefieres enviar desde tu celular</li>
                <li>✓ Valoras mejor experiencia de app</li>
                <li>✓ Necesitas mas opciones de cobro</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/moneygram/" className="text-orange-600 hover:underline font-medium">→ Review de MoneyGram</Link>
              <Link href="/reviews/remitly/" className="text-success-green-600 hover:underline font-medium">→ Review de Remitly</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'MoneyGram vs Remitly Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
