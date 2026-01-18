import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Wise vs Remitly Mexico 2025 | Comparacion Detallada',
  description: 'Comparamos Wise (TransferWise) y Remitly para enviar dinero a Mexico. Tipo de cambio real vs promociones y cobro en efectivo.',
  alternates: { canonical: '/comparar/wise-vs-remitly/' },
  keywords: [
    'wise vs remitly',
    'comparar wise remitly',
    'transferwise vs remitly mexico',
    'cual es mejor wise o remitly',
    'wise o remitly mexico',
    'diferencia wise remitly',
    'enviar dinero mexico wise remitly',
  ],
  openGraph: {
    title: 'Wise vs Remitly México 2025',
    description: 'Comparamos tipo de cambio real de Wise vs cobro en efectivo de Remitly para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function WiseVsRemitlyPage() {
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
              <li className="text-white">Wise vs Remitly</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Wise vs Remitly Mexico</h1>
          <p className="text-xl text-trust-blue-100">Tipo de cambio real vs cobertura maxima en efectivo</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para montos grandes ($1,000+): Wise</strong> - Tipo de cambio real, transparencia total.
              <strong> Para envios frecuentes con efectivo: Remitly</strong> - 470,000 ubicaciones, primeras 2 gratis.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Wise</th>
                  <th className="p-4 text-center rounded-tr-lg">Remitly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Tipo de Cambio', wise: 'Real (mid-market)', remitly: 'Con margen ~1.5%', winner: 'wise' },
                  { factor: 'Comision', wise: '0.5-1%', remitly: '$0-3.99', winner: 'tie' },
                  { factor: 'Costo Total $1000', wise: '~$8 (0.8%)', remitly: '~$18 (1.8%)', winner: 'wise' },
                  { factor: 'Cobro Efectivo', wise: 'No', remitly: '470,000+', winner: 'remitly' },
                  { factor: 'Cuenta Multi-divisa', wise: 'Si', remitly: 'No', winner: 'wise' },
                  { factor: 'Promociones', wise: 'Raro', remitly: 'Frecuentes', winner: 'remitly' },
                  { factor: 'Limite Mensual', wise: 'Alto', remitly: '$30,000', winner: 'wise' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'wise' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.wise}</td>
                    <td className={`p-4 text-center ${row.winner === 'remitly' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.remitly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-800 mb-4">Elige Wise si...</h3>
              <ul className="space-y-2 text-green-700">
                <li>✓ Envias montos grandes regularmente</li>
                <li>✓ Valoras transparencia en el tipo de cambio</li>
                <li>✓ El receptor tiene cuenta bancaria</li>
                <li>✓ Necesitas cuenta multi-divisa</li>
              </ul>
            </div>
            <div className="bg-success-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-success-green-800 mb-4">Elige Remitly si...</h3>
              <ul className="space-y-2 text-success-green-700">
                <li>✓ El receptor prefiere cobrar en efectivo</li>
                <li>✓ Quieres promociones de primera transferencia</li>
                <li>✓ Envias a zonas sin bancarizacion</li>
                <li>✓ Valoras app con mejor rating</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/wise/" className="text-green-600 hover:underline font-medium">→ Review de Wise</Link>
              <Link href="/reviews/remitly/" className="text-success-green-600 hover:underline font-medium">→ Review de Remitly</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'Wise vs Remitly Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
