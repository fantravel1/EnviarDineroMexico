import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Wise vs Western Union Mexico 2025 | Digital vs Tradicional',
  description: 'Comparamos Wise (TransferWise) y Western Union para enviar dinero a Mexico. Tipo de cambio real vs red de efectivo masiva.',
  alternates: { canonical: '/comparar/wise-vs-western-union/' },
}

export default function WiseVsWesternUnionPage() {
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
              <li className="text-white">Wise vs Western Union</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Wise vs Western Union Mexico</h1>
          <p className="text-xl text-trust-blue-100">Transparencia digital vs cobertura tradicional</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para ahorrar significativamente: Wise</strong> - Hasta 5x mas barato, tipo de cambio real.
              <strong> Para zonas rurales sin banco: Western Union</strong> - 500K+ ubicaciones de cobro.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Wise</th>
                  <th className="p-4 text-center rounded-tr-lg">Western Union</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Tipo de Cambio', wise: 'Real (mid-market)', wu: 'Con margen 3-5%', winner: 'wise' },
                  { factor: 'Comision $500', wise: '~$4', wu: '$10-25', winner: 'wise' },
                  { factor: 'Costo Total $500', wise: '~$8 (1.6%)', wu: '~$30 (6%)', winner: 'wise' },
                  { factor: 'Cobro Efectivo', wise: 'No', wu: '500,000+', winner: 'wu' },
                  { factor: 'Envio en Persona', wise: 'No', wu: 'Si', winner: 'wu' },
                  { factor: 'Cuenta Multi-divisa', wise: 'Si', wu: 'No', winner: 'wise' },
                  { factor: 'Transparencia', wise: 'Total', wu: 'Limitada', winner: 'wise' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'wise' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.wise}</td>
                    <td className={`p-4 text-center ${row.winner === 'wu' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.wu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-yellow-800 mb-2">Ahorro Real</h3>
            <p className="text-yellow-700">
              En un envio de $500, Wise cuesta aproximadamente $8 total mientras Western Union puede costar $30+.
              Eso es un ahorro de <strong>$22 por transferencia</strong> o casi $300 al ano si envias mensualmente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-800 mb-4">Elige Wise si...</h3>
              <ul className="space-y-2 text-green-700">
                <li>✓ Quieres el mejor tipo de cambio</li>
                <li>✓ El receptor tiene cuenta bancaria</li>
                <li>✓ Valoras transparencia total</li>
                <li>✓ Envias montos grandes</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-4">Elige Western Union si...</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>✓ Receptor sin cuenta bancaria</li>
                <li>✓ Zona rural sin bancos</li>
                <li>✓ Prefieres ir en persona</li>
                <li>✓ Necesitas maxima cobertura</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/wise/" className="text-green-600 hover:underline font-medium">→ Review de Wise</Link>
              <Link href="/reviews/western-union/" className="text-yellow-600 hover:underline font-medium">→ Review de Western Union</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'Wise vs Western Union Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
