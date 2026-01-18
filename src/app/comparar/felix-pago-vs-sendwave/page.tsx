import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Felix Pago vs Sendwave Mexico 2025 | Apps Sin Comision',
  description: 'Comparamos Felix Pago y Sendwave para enviar dinero a Mexico. Dos apps con $0 comision - cual es mejor para ti?',
  alternates: { canonical: '/comparar/felix-pago-vs-sendwave/' },
  keywords: [
    'felix pago vs sendwave',
    'comparar felix pago sendwave',
    'cual es mejor felix pago o sendwave',
    'felix pago o sendwave mexico',
    'apps sin comision enviar dinero mexico',
    'diferencia felix pago sendwave',
    'enviar dinero mexico sin comision',
  ],
  openGraph: {
    title: 'Félix Pago vs Sendwave México 2025',
    description: 'Comparamos dos apps con $0 comisión: Félix Pago y Sendwave para enviar dinero a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function FelixPagoVsSendwavePage() {
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
              <li className="text-white">Felix Pago vs Sendwave</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Felix Pago vs Sendwave Mexico</h1>
          <p className="text-xl text-trust-blue-100">Dos apps con cero comisiones - diferentes fortalezas</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para transferencias instantaneas SPEI: Felix Pago</strong> - Llegada en segundos, primera gratis.
              <strong> Para mejor tipo de cambio general: Sendwave</strong> - Consistentemente competitivo, app sencilla.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">Felix Pago</th>
                  <th className="p-4 text-center rounded-tr-lg">Sendwave</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Comision', felix: '$0', sendwave: '$0', winner: 'tie' },
                  { factor: 'Velocidad SPEI', felix: 'Segundos', sendwave: 'Minutos', winner: 'felix' },
                  { factor: 'Primera Transferencia', felix: 'Gratis', sendwave: 'Normal', winner: 'felix' },
                  { factor: 'Tipo de Cambio', felix: 'Bueno', sendwave: 'Muy Bueno', winner: 'sendwave' },
                  { factor: 'App Rating', felix: '4.8★', sendwave: '4.7★', winner: 'felix' },
                  { factor: 'Limite Diario', felix: '$2,999', sendwave: '$2,999', winner: 'tie' },
                  { factor: 'Metodos Pago', felix: 'Debito, ACH', sendwave: 'Solo Debito', winner: 'felix' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'felix' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.felix}</td>
                    <td className={`p-4 text-center ${row.winner === 'sendwave' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.sendwave}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-4">Elige Felix Pago si...</h3>
              <ul className="space-y-2 text-purple-700">
                <li>✓ Necesitas llegada instantanea (SPEI)</li>
                <li>✓ Es tu primera transferencia</li>
                <li>✓ Prefieres pagar con ACH</li>
                <li>✓ Valoras app mejor calificada</li>
              </ul>
            </div>
            <div className="bg-trust-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-trust-blue-800 mb-4">Elige Sendwave si...</h3>
              <ul className="space-y-2 text-trust-blue-700">
                <li>✓ Priorizas mejor tipo de cambio</li>
                <li>✓ Envias regularmente</li>
                <li>✓ Prefieres interfaz minimalista</li>
                <li>✓ Solo usas tarjeta de debito</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/felix-pago/" className="text-purple-600 hover:underline font-medium">→ Review de Felix Pago</Link>
              <Link href="/reviews/sendwave/" className="text-trust-blue-600 hover:underline font-medium">→ Review de Sendwave</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'Felix Pago vs Sendwave Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
