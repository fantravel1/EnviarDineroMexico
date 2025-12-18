import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'WorldRemit vs Remitly Mexico 2025 | Comparacion de Apps',
  description: 'Comparamos WorldRemit y Remitly para enviar dinero a Mexico. Dos apps populares con diferentes fortalezas.',
  alternates: { canonical: '/comparar/worldremit-vs-remitly/' },
}

export default function WorldRemitVsRemitlyPage() {
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
              <li className="text-white">WorldRemit vs Remitly</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">WorldRemit vs Remitly Mexico</h1>
          <p className="text-xl text-trust-blue-100">Dos apps digitales con enfoque diferente</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <AffiliateDisclosure />

          <div className="bg-success-green-50 border-l-4 border-success-green-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-bold text-lg text-success-green-800 mb-2">Respuesta Rapida</h2>
            <p className="text-success-green-700">
              <strong>Para Mexico especificamente: Remitly</strong> - Mejor app rating, mas ubicaciones, promociones frecuentes.
              <strong> Para multiples paises: WorldRemit</strong> - Cobertura global de 130+ paises.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-trust-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left rounded-tl-lg">Factor</th>
                  <th className="p-4 text-center">WorldRemit</th>
                  <th className="p-4 text-center rounded-tr-lg">Remitly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Enfoque', wr: 'Global (130+ paises)', remitly: 'Mexico especializado', winner: 'remitly' },
                  { factor: 'App Rating', wr: '4.5★', remitly: '4.9★', winner: 'remitly' },
                  { factor: 'Ubicaciones Mexico', wr: '50,000+', remitly: '470,000+', winner: 'remitly' },
                  { factor: 'Costo Total $500', wr: '~$15 (3%)', remitly: '~$12 (2.4%)', winner: 'remitly' },
                  { factor: 'Recarga Celular', wr: 'Si', remitly: 'No', winner: 'wr' },
                  { factor: 'Paises Destino', wr: '130+', remitly: '17', winner: 'wr' },
                  { factor: 'Soporte Espanol', wr: 'Bueno', remitly: 'Excelente', winner: 'remitly' },
                ].map((row) => (
                  <tr key={row.factor} className="border-b">
                    <td className="p-4 font-medium">{row.factor}</td>
                    <td className={`p-4 text-center ${row.winner === 'wr' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.wr}</td>
                    <td className={`p-4 text-center ${row.winner === 'remitly' ? 'bg-success-green-50 font-semibold' : ''}`}>{row.remitly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="font-bold text-indigo-800 mb-4">Elige WorldRemit si...</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>✓ Envias a varios paises</li>
                <li>✓ Necesitas recargar celulares</li>
                <li>✓ Familia en multiples lugares</li>
                <li>✓ Una app para todo</li>
              </ul>
            </div>
            <div className="bg-success-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-success-green-800 mb-4">Elige Remitly si...</h3>
              <ul className="space-y-2 text-success-green-700">
                <li>✓ Solo envias a Mexico</li>
                <li>✓ Valoras mejor experiencia de app</li>
                <li>✓ Necesitas mas ubicaciones de cobro</li>
                <li>✓ Quieres mejor soporte en espanol</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-neutral-800 mb-4">Reviews Completos</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/reviews/worldremit/" className="text-indigo-600 hover:underline font-medium">→ Review de WorldRemit</Link>
              <Link href="/reviews/remitly/" className="text-success-green-600 hover:underline font-medium">→ Review de Remitly</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-sm text-neutral-500">
            <p>Ultima actualizacion: 18 de diciembre de 2025</p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'Article',
            headline: 'WorldRemit vs Remitly Mexico 2025',
            datePublished: '2025-12-18', dateModified: '2025-12-18',
            author: { '@type': 'Organization', name: 'EnviarDineroMexico' }
          })}} />
        </div>
      </section>
    </>
  )
}
