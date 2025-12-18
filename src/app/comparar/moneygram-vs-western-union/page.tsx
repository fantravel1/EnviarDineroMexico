import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'MoneyGram vs Western Union Mexico 2025 | Gigantes de Remesas',
  description: 'Comparamos MoneyGram y Western Union para enviar dinero a Mexico. Los dos servicios tradicionales mas grandes frente a frente.',
  alternates: { canonical: '/comparar/moneygram-vs-western-union/' },
}

export default function MoneygramVsWesternUnionPage() {
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
              <li className="text-white">MoneyGram vs Western Union</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">MoneyGram vs Western Union Mexico</h1>
          <p className="text-xl text-trust-blue-100">Batalla de gigantes tradicionales de remesas</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-yellow-800 mb-2">Nota Importante</h2>
            <p className="text-yellow-700">
              Ambos servicios son caros comparados con apps digitales. Si buscas ahorrar, considera
              <Link href="/comparar/alternativas-western-union/" className="underline ml-1">alternativas digitales</Link> como
              Sendwave o Remitly que cuestan 50-70% menos.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">MoneyGram</th>
                  <th className="p-4 text-center rounded-tr-lg">Western Union</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Comision Tipica', mg: '$5-20', wu: '$5-25', winner: 'mg' },
                  { factor: 'Costo Total $500', mg: '~$22 (4.4%)', wu: '~$25 (5%)', winner: 'mg' },
                  { factor: 'Ubicaciones Mexico', mg: '350,000+', wu: '500,000+', winner: 'wu' },
                  { factor: 'App Movil', mg: 'Buena', wu: 'Buena', winner: 'tie' },
                  { factor: 'Walmart', mg: 'Si', wu: 'Si', winner: 'tie' },
                  { factor: 'Oxxo', mg: 'Limitado', wu: 'Si', winner: 'wu' },
                  { factor: 'Velocidad', mg: 'Minutos', wu: 'Minutos', winner: 'tie' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'mg' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.mg}</td>
                    <td className={`p-4 text-center ${row.winner === 'wu' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.wu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-orange-800 mb-4">Elige MoneyGram si...</h3>
              <ul className="space-y-2 text-orange-700">
                <li>✓ Hay MoneyGram cerca de tu casa</li>
                <li>✓ Prefieres Walmart para enviar</li>
                <li>✓ Buscas comisiones ligeramente menores</li>
                <li>✓ Receptor conoce MoneyGram</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-4">Elige Western Union si...</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>✓ Receptor en zona muy rural</li>
                <li>✓ Necesitas cobro en Oxxo</li>
                <li>✓ Mayor red de ubicaciones</li>
                <li>✓ Marca mas reconocida</li>
              </ul>
            </div>
          </div>

          <div className="bg-success-green-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-success-green-800 mb-4">Mejor Alternativa: Apps Digitales</h3>
            <p className="text-success-green-700 mb-4">
              Para la mayoria de los envios, las apps digitales ofrecen mejor valor:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/sendwave/" className="text-success-green-600 hover:underline font-medium">→ Sendwave ($0 comision)</Link>
              <Link href="/reviews/remitly/" className="text-success-green-600 hover:underline font-medium">→ Remitly (470K ubicaciones)</Link>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/moneygram/" className="text-orange-600 hover:underline font-medium">→ Review de MoneyGram</Link>
              <Link href="/reviews/western-union/" className="text-yellow-600 hover:underline font-medium">→ Review de Western Union</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'MoneyGram vs Western Union Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
