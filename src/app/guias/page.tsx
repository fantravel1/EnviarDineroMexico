import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guías para Enviar Dinero a México | Tutoriales y Consejos',
  description:
    'Guías completas para enviar dinero a México. Aprende sobre comisiones, impuestos, documentos y más.',
}

const guides = [
  {
    title: 'Cómo Enviar Dinero por Primera Vez',
    slug: 'como-enviar-dinero-primera-vez',
    description: 'Guía paso a paso para principiantes. Todo lo que necesitas saber para tu primera transferencia.',
    icon: '🚀',
  },
  {
    title: 'Impuestos y Regulaciones de Remesas',
    slug: 'impuestos-remesas-mexico',
    description: 'Lo que necesitas saber sobre impuestos en México y EE.UU. para remesas familiares.',
    icon: '📋',
  },
  {
    title: 'Transferencias de Emergencia',
    slug: 'transferencias-emergencia',
    description: 'Las opciones más rápidas cuando necesitas enviar dinero urgentemente.',
    icon: '⚡',
  },
  {
    title: 'Enviar Dinero sin Papeles',
    slug: 'enviar-dinero-sin-papeles',
    description: 'Opciones para enviar dinero sin número de Seguro Social o con documentos alternativos.',
    icon: '📄',
  },
]

export default function GuiasPage() {
  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Guías para Enviar Dinero a México',
            description: 'Guías completas para enviar dinero a México. Aprende sobre comisiones, impuestos, documentos y más.',
            url: 'https://enviardineromexico.com/guias/',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: guides.map((guide, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://enviardineromexico.com/guias/${guide.slug}/`,
                name: guide.title,
              })),
            },
          }),
        }}
      />
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Cuál es la forma más barata de enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para montos pequeños, Sendwave (0% comisión, ~2% en tipo de cambio). Para $500+, Remitly (sin comisión). Primera transferencia: Félix Pago (100% gratis).',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto dinero puedo enviar sin declarar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las remesas de familiares directos (padres, hijos, cónyuge) son exentas sin límite en México. Los bancos reportan depósitos mayores a 15,000 MXN mensuales al SAT.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo enviar dinero sin número de Seguro Social?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí. Servicios como Sendwave aceptan licencia de conducir o pasaporte. Las cooperativas de crédito Juntos Avanzamos aceptan ITIN y Matrícula Consular.',
                },
              },
            ],
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
              { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://enviardineromexico.com/guias/' },
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
              <li className="text-white">Guías</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guías y Tutoriales
          </h1>
          <p className="text-xl text-trust-blue-100 max-w-2xl">
            Todo lo que necesitas saber para enviar dinero a México de forma segura y económica.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}/`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group border-2 border-transparent hover:border-trust-blue-200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{guide.icon}</span>
                  <div>
                    <h2 className="font-bold text-xl text-neutral-800 mb-2 group-hover:text-trust-blue-600">
                      {guide.title}
                    </h2>
                    <p className="text-neutral-600 mb-4">
                      {guide.description}
                    </p>
                    <span className="text-trust-blue-600 font-medium group-hover:underline">
                      Leer guía →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-neutral-800 mb-8 text-center">
            Preguntas Rápidas
          </h2>

          <div className="space-y-4">
            {[
              {
                q: '¿Cuál es la forma más barata de enviar dinero a México?',
                a: 'Para montos pequeños, Sendwave (0% comisión, ~2% en tipo de cambio). Para $500+, Remitly (sin comisión). Primera transferencia: Félix Pago (100% gratis).',
              },
              {
                q: '¿Cuánto dinero puedo enviar sin declarar?',
                a: 'Las remesas de familiares directos (padres, hijos, cónyuge) son exentas sin límite en México. Los bancos reportan depósitos mayores a 15,000 MXN mensuales al SAT.',
              },
              {
                q: '¿Puedo enviar dinero sin número de Seguro Social?',
                a: 'Sí. Servicios como Sendwave aceptan licencia de conducir o pasaporte. Las cooperativas de crédito Juntos Avanzamos aceptan ITIN y Matrícula Consular.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-neutral-800 mb-2">{item.q}</h3>
                <p className="text-neutral-600">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/calculadora/" className="btn-primary">
              Usar Calculadora de Costos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
