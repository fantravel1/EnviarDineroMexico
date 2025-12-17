import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tipo de Cambio Peso-Dólar 2025: Lo Que Debes Saber | EnviarDineroMexico',
  description:
    'Análisis del tipo de cambio peso-dólar para 2025. Aprende cuándo es mejor momento para enviar dinero y cómo maximizar tus remesas.',
}

export default function TipoCambio2025Page() {
  return (
    <>
      <article className="section">
        <div className="container-narrow">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-neutral-500">
              <li>
                <Link href="/" className="hover:text-trust-blue-600">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog/" className="hover:text-trust-blue-600">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-800">Tipo de Cambio 2025</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-trust-blue-100 text-trust-blue-700 px-2 py-1 rounded">
                Análisis
              </span>
              <time className="text-sm text-neutral-500" dateTime="2025-01-15">
                15 de enero de 2025
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Tipo de Cambio Peso-Dólar 2025: Lo Que Debes Saber
            </h1>
            <p className="text-xl text-neutral-600">
              El tipo de cambio afecta directamente cuánto reciben tus
              familiares en México. Aquí te explicamos qué esperar y cómo
              aprovechar las fluctuaciones.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              ¿Por Qué Importa el Tipo de Cambio?
            </h2>
            <p className="text-neutral-700 mb-4">
              Cuando envías $100 USD, el tipo de cambio determina si tu familia
              recibe 1,700 o 2,000 pesos mexicanos. Esta diferencia de 300 pesos
              puede significar una semana de despensa.
            </p>

            <div className="bg-warm-50 p-6 rounded-lg my-6">
              <h3 className="font-bold text-neutral-800 mb-3">
                Ejemplo Real de Impacto
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Tipo de Cambio</th>
                    <th className="text-right py-2">Envías $500 USD</th>
                    <th className="text-right py-2">Reciben MXN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">17.00 MXN/USD</td>
                    <td className="text-right">$500</td>
                    <td className="text-right">$8,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">18.50 MXN/USD</td>
                    <td className="text-right">$500</td>
                    <td className="text-right">$9,250</td>
                  </tr>
                  <tr>
                    <td className="py-2">20.00 MXN/USD</td>
                    <td className="text-right">$500</td>
                    <td className="text-right">$10,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-neutral-600 mt-3">
                La diferencia entre el mejor y peor escenario: $1,500 MXN
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Factores que Afectan el Tipo de Cambio en 2025
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>
                <strong>Tasas de interés:</strong> Las decisiones del Banco de
                México y la Fed afectan el flujo de capital
              </li>
              <li>
                <strong>Elecciones y política:</strong> Los cambios políticos en
                ambos países generan volatilidad
              </li>
              <li>
                <strong>Precio del petróleo:</strong> México es exportador de
                crudo, lo que impacta su economía
              </li>
              <li>
                <strong>Comercio bilateral:</strong> El T-MEC y las relaciones
                comerciales influyen en el peso
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Consejos para Maximizar tus Remesas
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-success-50 border border-success-200 p-4 rounded-lg">
                <h3 className="font-bold text-success-800 mb-2">
                  ✓ Estrategias Efectivas
                </h3>
                <ul className="text-sm text-success-700 space-y-1">
                  <li>Usa servicios con tipo de cambio medio del mercado</li>
                  <li>Compara tipos de cambio, no solo comisiones</li>
                  <li>Considera envíos más grandes menos frecuentes</li>
                  <li>Programa transferencias cuando el peso esté débil</li>
                </ul>
              </div>
              <div className="bg-warning-50 border border-warning-200 p-4 rounded-lg">
                <h3 className="font-bold text-warning-800 mb-2">
                  ✗ Evita Estos Errores
                </h3>
                <ul className="text-sm text-warning-700 space-y-1">
                  <li>No te fijes solo en &quot;0% comisión&quot;</li>
                  <li>No uses servicios con spread mayor al 3%</li>
                  <li>No esperes indefinidamente un &quot;mejor momento&quot;</li>
                  <li>No ignores el costo total de la transferencia</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Mejores Proveedores por Tipo de Cambio
            </h2>
            <p className="text-neutral-700 mb-4">
              Estos servicios ofrecen los tipos de cambio más competitivos para
              remesas a México:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-neutral-700 mb-6">
              <li>
                <strong>
                  <Link
                    href="/reviews/wise/"
                    className="text-trust-blue-600 hover:underline"
                  >
                    Wise
                  </Link>
                </strong>{' '}
                – Tipo de cambio medio del mercado con comisión transparente
                (~0.5%)
              </li>
              <li>
                <strong>
                  <Link
                    href="/reviews/remitly/"
                    className="text-trust-blue-600 hover:underline"
                  >
                    Remitly
                  </Link>
                </strong>{' '}
                – Spread bajo (~1.5%) y promociones frecuentes
              </li>
              <li>
                <strong>
                  <Link
                    href="/reviews/felix-pago/"
                    className="text-trust-blue-600 hover:underline"
                  >
                    Félix Pago
                  </Link>
                </strong>{' '}
                – Spread ~2% pero sin comisiones fijas
              </li>
            </ol>

            <div className="bg-trust-blue-50 border-l-4 border-trust-blue-600 p-6 my-8">
              <h3 className="font-bold text-trust-blue-800 mb-2">
                Tip de Ahorro
              </h3>
              <p className="text-trust-blue-700">
                Para envíos de más de $300, Wise generalmente ofrece el mejor
                tipo de cambio. Para montos menores, Sendwave o Félix Pago
                pueden ser mejores opciones porque no tienen comisión fija.
              </p>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <Link
                href="/blog/"
                className="text-trust-blue-600 hover:underline"
              >
                ← Volver al Blog
              </Link>
              <Link href="/calculadora/" className="btn-primary">
                Calcular mi Envío
              </Link>
            </div>
            <div className="mt-6 text-center text-sm text-neutral-500">
              Última actualización: 17 de diciembre de 2025
            </div>
          </footer>
        </div>
      </article>

      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Tipo de Cambio Peso-Dólar 2025: Lo Que Debes Saber',
            description: 'Análisis del tipo de cambio peso-dólar para 2025. Aprende cuándo es mejor momento para enviar dinero y cómo maximizar tus remesas.',
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
              url: 'https://enviardineromexico.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
              url: 'https://enviardineromexico.com',
            },
            datePublished: '2025-01-15',
            dateModified: '2025-12-17',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: 'https://enviardineromexico.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://enviardineromexico.com/blog',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Tipo de Cambio 2025',
                item: 'https://enviardineromexico.com/blog/tipo-de-cambio-2025',
              },
            ],
          }),
        }}
      />
    </>
  )
}
