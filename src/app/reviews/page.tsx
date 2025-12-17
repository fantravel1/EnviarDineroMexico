import { Metadata } from 'next'
import Link from 'next/link'
import { ProviderCard } from '@/components'
import { providers } from '@/data/providers'

export const metadata: Metadata = {
  title: 'Reviews de Servicios para Enviar Dinero a México',
  description:
    'Reviews detallados de Remitly, Sendwave, Félix Pago y más servicios para enviar dinero a México. Comparamos comisiones, velocidad y facilidad de uso.',
}

export default function ReviewsPage() {
  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Reviews de Servicios de Remesas a México',
            description: 'Reviews detallados de Remitly, Sendwave, Félix Pago y más servicios para enviar dinero a México.',
            url: 'https://enviardineromexico.com/reviews/',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: providers.map((provider, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://enviardineromexico.com/reviews/${provider.id}/`,
                name: `${provider.name} Review`,
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
              { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://enviardineromexico.com/reviews/' },
            ],
          }),
        }}
      />
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-16">
        <div className="container-wide">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-trust-blue-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li className="text-white">Reviews</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Reviews de Servicios de Remesas
          </h1>
          <p className="text-xl text-trust-blue-100 max-w-2xl">
            Análisis detallados de los mejores servicios para enviar dinero a México.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
