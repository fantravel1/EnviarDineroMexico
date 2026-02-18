import { Metadata } from 'next'
import Link from 'next/link'
import { ComparisonTable, AffiliateDisclosure } from '@/components'
import { mexicanImages } from '@/data/images'

export const metadata: Metadata = {
  title: 'Comparar Servicios de Remesas a México | Todas las Opciones',
  description:
    'Compara Remitly vs Western Union, Sendwave vs Remitly, Félix Pago y más. Encuentra el servicio adecuado según tu monto y necesidades.',
  keywords: [
    'comparar servicios remesas mexico',
    'comparacion envio dinero mexico',
    'remitly vs western union mexico',
    'mejor servicio remesas mexico',
    'comparar apps enviar dinero',
    'cual es mejor para enviar dinero a mexico',
  ],
  openGraph: {
    title: 'Comparar Servicios de Remesas a México 2026',
    description: 'Compara Remitly vs Western Union, Sendwave vs Remitly, Félix Pago y más. Encuentra el servicio adecuado según tu monto y necesidades.',
    type: 'website',
    locale: 'es_MX',
  },
}

const comparisons = [
  {
    title: 'Remitly vs Western Union',
    slug: 'remitly-vs-western-union',
    description: 'El lider digital contra el gigante tradicional',
  },
  {
    title: 'Sendwave vs Remitly',
    slug: 'sendwave-vs-remitly',
    description: 'Cero comisiones vs mayor cobertura',
  },
  {
    title: 'Felix Pago vs Remitly',
    slug: 'felix-pago-vs-remitly',
    description: 'WhatsApp innovador vs app establecida',
  },
  {
    title: 'Wise vs Xoom',
    slug: 'wise-vs-xoom',
    description: 'Tipo de cambio real vs integracion PayPal',
  },
  {
    title: 'Alternativas a Western Union',
    slug: 'alternativas-western-union',
    description: 'Opciones mas baratas que Western Union',
  },
  {
    title: 'Sendwave vs Western Union',
    slug: 'sendwave-vs-western-union',
    description: 'App sin comision vs red tradicional',
  },
  {
    title: 'Wise vs Remitly',
    slug: 'wise-vs-remitly',
    description: 'Tipo de cambio real vs cobro en efectivo',
  },
  {
    title: 'Xoom vs Western Union',
    slug: 'xoom-vs-western-union',
    description: 'PayPal vs el lider tradicional',
  },
  {
    title: 'MoneyGram vs Western Union',
    slug: 'moneygram-vs-western-union',
    description: 'Batalla de gigantes tradicionales',
  },
  {
    title: 'Felix Pago vs Sendwave',
    slug: 'felix-pago-vs-sendwave',
    description: 'Dos apps con cero comisiones',
  },
  {
    title: 'Remitly vs Xoom',
    slug: 'remitly-vs-xoom',
    description: 'Mejor app vs ecosistema PayPal',
  },
  {
    title: 'Wise vs Western Union',
    slug: 'wise-vs-western-union',
    description: 'Ahorra hasta 5x con tipo de cambio real',
  },
  {
    title: 'MoneyGram vs Remitly',
    slug: 'moneygram-vs-remitly',
    description: 'Tradicional vs app moderna',
  },
  {
    title: 'WorldRemit vs Remitly',
    slug: 'worldremit-vs-remitly',
    description: 'Global vs especialista en Mexico',
  },
  {
    title: 'Sendwave vs Wise',
    slug: 'sendwave-vs-wise',
    description: 'Cero comision vs tipo de cambio real',
  },
]

export default function CompararPage() {
  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Comparar Servicios de Remesas a México',
            description: 'Comparaciones detalladas de servicios para enviar dinero a México. Remitly vs Western Union, Sendwave vs Remitly y más.',
            url: 'https://enviardineromexico.com/comparar/',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: comparisons.map((comparison, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://enviardineromexico.com/comparar/${comparison.slug}/`,
                name: comparison.title,
              })),
            },
          }),
        }}
      />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviardineromexico.com/' },
              { '@type': 'ListItem', position: 2, name: 'Comparar', item: 'https://enviardineromexico.com/comparar/' },
            ],
          }),
        }}
      />
      <section className="hero-image-section">
        <img src={mexicanImages.colorfulArchitecture.src(1920, 600)} alt="" role="presentation" className="hero-bg object-cover w-full h-full" />
        <div className="hero-overlay" />
        <div className="hero-content container-wide py-16 md:py-20">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-trust-blue-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li className="text-white">Comparar</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comparar Servicios de Remesas
          </h1>
          <p className="text-xl text-trust-blue-100 max-w-2xl">
            Comparaciones detalladas para ayudarte a elegir la mejor opción para enviar dinero a México.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <AffiliateDisclosure />

          <h2 className="text-2xl font-bold text-neutral-800 mb-6">
            Tabla de Comparación General
          </h2>
          <ComparisonTable amounts={[200, 500, 1000]} />
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-neutral-800 mb-8">
            Comparaciones Detalladas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/comparar/${comparison.slug}/`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <h3 className="font-bold text-lg text-neutral-800 mb-2 group-hover:text-trust-blue-600">
                  {comparison.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {comparison.description}
                </p>
                <span className="text-trust-blue-600 font-medium group-hover:underline">
                  Ver comparación →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
            ¿Cuál es el Mejor para Ti?
          </h2>

          <div className="space-y-4">
            <div className="bg-success-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-success-green-800 mb-2">
                Si es tu primera transferencia → Félix Pago
              </h3>
              <p className="text-success-green-700">
                Primera transferencia completamente gratis, funciona por WhatsApp sin descargar apps.
              </p>
            </div>

            <div className="bg-trust-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-trust-blue-800 mb-2">
                Si envías regularmente $200-$500 → Sendwave
              </h3>
              <p className="text-trust-blue-700">
                Cero comisiones, app móvil simple, costo total de solo ~2%.
              </p>
            </div>

            <div className="bg-warm-accent-50 p-6 rounded-lg">
              <h3 className="font-bold text-warm-accent-800 mb-2">
                Si envías $500+ o necesitas efectivo → Remitly
              </h3>
              <p className="text-warm-accent-700">
                Sin comisión en $500+, 470,000+ ubicaciones de cobro, app mejor calificada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
