import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Sendwave vs Wise Mexico 2025 | Apps de Bajo Costo',
  description: 'Comparamos Sendwave y Wise para enviar dinero a Mexico. Cero comisiones vs tipo de cambio real - cual conviene mas?',
  alternates: { canonical: '/comparar/sendwave-vs-wise/' },
  keywords: [
    'sendwave vs wise',
    'comparar sendwave wise',
    'cual es mejor sendwave o wise',
    'sendwave o wise mexico',
    'sendwave vs transferwise',
    'diferencia sendwave wise',
    'enviar dinero mexico sendwave wise',
  ],
  openGraph: {
    title: 'Sendwave vs Wise México 2025',
    description: 'Comparamos cero comisiones de Sendwave vs tipo de cambio real de Wise para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function SendwaveVsWisePage() {
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
              <li className="text-white">Sendwave vs Wise</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sendwave vs Wise Mexico</h1>
          <p className="text-xl text-trust-blue-100">Dos opciones economicas con enfoques diferentes</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para envios pequenos ($200-$500): Sendwave</strong> - $0 comision, app sencilla.
              <strong> Para envios grandes ($1,000+): Wise</strong> - Tipo de cambio real, mejor en montos altos.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Sendwave</th>
                  <th className="p-4 text-center rounded-tr-lg">Wise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Comision', sendwave: '$0', wise: '0.5-1%', winner: 'sendwave' },
                  { factor: 'Tipo de Cambio', sendwave: '~2% margen', wise: 'Real (0%)', winner: 'wise' },
                  { factor: 'Costo $300', sendwave: '~$6 (2%)', wise: '~$5 (1.7%)', winner: 'wise' },
                  { factor: 'Costo $1000', sendwave: '~$20 (2%)', wise: '~$10 (1%)', winner: 'wise' },
                  { factor: 'Simplicidad', sendwave: 'Muy Simple', wise: 'Moderada', winner: 'sendwave' },
                  { factor: 'Cuenta Multi-divisa', sendwave: 'No', wise: 'Si', winner: 'wise' },
                  { factor: 'Metodos Pago', sendwave: 'Solo Debito', wise: 'Debito, ACH, Wire', winner: 'wise' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'sendwave' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.sendwave}</td>
                    <td className={`p-4 text-center ${row.winner === 'wise' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.wise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-trust-blue-50 border border-trust-blue-200 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-trust-blue-800 mb-2">La Matematica</h3>
            <p className="text-trust-blue-700">
              <strong>En $300:</strong> Sendwave ~$6 vs Wise ~$5 - Wise gana por poco<br/>
              <strong>En $500:</strong> Sendwave ~$10 vs Wise ~$7 - Wise gana<br/>
              <strong>En $1,000:</strong> Sendwave ~$20 vs Wise ~$10 - Wise gana claramente<br/>
              A mayor monto, mas ahorro con Wise por su tipo de cambio real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-trust-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-trust-blue-800 mb-4">Elige Sendwave si...</h3>
              <ul className="space-y-2 text-trust-blue-700">
                <li>✓ Envias menos de $300</li>
                <li>✓ Prefieres app super simple</li>
                <li>✓ Solo tienes tarjeta de debito</li>
                <li>✓ No necesitas cuenta multi-divisa</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-800 mb-4">Elige Wise si...</h3>
              <ul className="space-y-2 text-green-700">
                <li>✓ Envias $500 o mas</li>
                <li>✓ Valoras tipo de cambio real</li>
                <li>✓ Necesitas cuenta multi-divisa</li>
                <li>✓ Prefieres mas opciones de pago</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/sendwave/" className="text-trust-blue-600 hover:underline font-medium">→ Review de Sendwave</Link>
              <Link href="/reviews/wise/" className="text-green-600 hover:underline font-medium">→ Review de Wise</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'Sendwave vs Wise Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
