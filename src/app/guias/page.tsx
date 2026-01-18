import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cómo Enviar Dinero a México | Guías Completas 2025',
  description:
    'Aprende cómo enviar dinero a México desde Estados Unidos. Guías sobre costos, comisiones, tiempos de entrega, requisitos y las mejores opciones de envío.',
  keywords: [
    'cómo enviar dinero a México',
    'como enviar dinero a mexico',
    'envío de dinero a México sin comisiones',
    'cuánto cuesta enviar dinero a México',
    'mejor forma de enviar dinero a México',
    'aplicaciones para enviar dinero a México',
    'guias remesas mexico',
  ],
}

const featuredGuides = [
  {
    title: 'Cómo Enviar Dinero a México',
    slug: 'como-enviar-dinero',
    description: 'Guía completa paso a paso. Compara opciones, costos y tiempos de entrega para enviar dinero a tu familia.',
    icon: '📲',
    color: 'blue',
  },
  {
    title: 'Enviar Dinero Sin Comisiones',
    slug: 'enviar-dinero-sin-comisiones',
    description: 'Servicios con $0 comisión: Sendwave, Félix Pago y promociones de Remitly.',
    icon: '💸',
    color: 'green',
  },
  {
    title: 'Mejor Tipo de Cambio',
    slug: 'mejor-tipo-de-cambio',
    description: 'Qué servicio ofrece el mejor tipo de cambio para que tu familia reciba más pesos.',
    icon: '📈',
    color: 'purple',
  },
  {
    title: 'Apps para Enviar Dinero',
    slug: 'aplicaciones-enviar-dinero',
    description: 'Las mejores aplicaciones móviles para enviar remesas. Ranking y comparativa.',
    icon: '📱',
    color: 'pink',
  },
]

const costGuides = [
  {
    title: 'Cuánto Cuesta Enviar Dinero',
    slug: 'cuanto-cuesta-enviar-dinero',
    description: 'Comparación de costos por servicio. Comisiones, tipos de cambio y costo real.',
    icon: '💵',
  },
  {
    title: 'Remesas Más Baratas',
    slug: 'remesas-mas-baratas',
    description: 'Ranking de servicios más económicos. Cómo ahorrar dinero en cada envío.',
    icon: '🏷️',
  },
]

const howToGuides = [
  {
    title: 'Guía para Principiantes',
    slug: 'como-enviar-dinero-primera-vez',
    description: 'Tu primera transferencia paso a paso. Todo lo que necesitas saber.',
    icon: '🚀',
  },
  {
    title: 'Requisitos y Documentos',
    slug: 'requisitos-enviar-dinero',
    description: 'Qué documentos necesitas. ID, SSN, CLABE y datos del destinatario.',
    icon: '📋',
  },
  {
    title: 'Mejor Forma de Enviar',
    slug: 'mejor-forma-enviar-dinero',
    description: 'Apps vs tiendas físicas. Cuál es la mejor opción para ti.',
    icon: '🎯',
  },
  {
    title: 'Tiempo de Entrega',
    slug: 'tiempo-entrega-envio',
    description: 'Cuánto tarda en llegar el dinero según el servicio.',
    icon: '⏱️',
  },
]

const deliveryGuides = [
  {
    title: 'Efectivo vs Depósito Bancario',
    slug: 'efectivo-vs-deposito',
    description: 'Comparamos los dos métodos de entrega. Cuál te conviene más.',
    icon: '🏦',
  },
  {
    title: 'Sin Cuenta Bancaria',
    slug: 'sin-cuenta-bancaria',
    description: 'Opciones de cobro en efectivo: Elektra, Oxxo, Coppel y más.',
    icon: '💵',
  },
]

const trustGuides = [
  {
    title: 'Proveedores Confiables',
    slug: 'proveedores-confiables',
    description: '¿Es seguro enviar dinero por internet? Servicios regulados y confiables.',
    icon: '🔒',
  },
]

const otherGuides = [
  {
    title: 'Dónde Enviar Dinero',
    slug: 'donde-enviar-dinero',
    description: 'Apps móviles vs agentes físicos cerca de ti.',
    icon: '📍',
  },
  {
    title: 'Límites de Envío',
    slug: 'limites-de-envio',
    description: 'Cuánto puedes enviar por mes según el servicio.',
    icon: '📊',
  },
  {
    title: 'Impuestos y Regulaciones',
    slug: 'impuestos-remesas-mexico',
    description: 'Lo que debes saber sobre impuestos en EE.UU. y México.',
    icon: '📑',
  },
  {
    title: 'Transferencias de Emergencia',
    slug: 'transferencias-emergencia',
    description: 'Opciones rápidas cuando es urgente.',
    icon: '⚡',
  },
  {
    title: 'Enviar sin SSN',
    slug: 'enviar-dinero-sin-papeles',
    description: 'Opciones sin número de Seguro Social.',
    icon: '📄',
  },
  {
    title: 'Desde Canadá o España',
    slug: 'enviar-desde-canada-espana',
    description: 'Opciones para enviar desde otros países.',
    icon: '🌎',
  },
]

// Combine all guides for schema
const allGuides = [...featuredGuides, ...costGuides, ...howToGuides, ...deliveryGuides, ...trustGuides, ...otherGuides]

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
            description: 'Guías completas para enviar dinero a México. Aprende sobre comisiones, tipos de cambio, tiempos de entrega y más.',
            url: 'https://enviardineromexico.com/guias/',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: allGuides.map((guide, index) => ({
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
                name: '¿Cómo enviar dinero a México de Estados Unidos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para enviar dinero a México desde EE.UU. necesitas: 1) Una identificación válida, 2) Tarjeta de débito o cuenta bancaria, 3) Datos de tu destinatario. Usa apps como Remitly, Sendwave o Félix Pago desde tu celular en 5-10 minutos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuál es la forma más barata de enviar dinero a México online?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sendwave ofrece $0 comisión en todas las transferencias. Félix Pago tiene la primera transferencia gratis. Remitly frecuentemente ofrece promociones sin comisión para depósitos bancarios.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué aplicación da mejor tipo de cambio para enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Wise ofrece el tipo de cambio medio del mercado (el más justo). Sendwave y Remitly también tienen tipos de cambio competitivos, generalmente dentro del 1% del tipo real.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué documentos necesito para enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Necesitas una identificación válida (licencia, pasaporte, ID estatal o matrícula consular). No se requiere SSN para montos pequeños. También necesitas datos del destinatario: nombre y CLABE para banco o ubicación para efectivo.',
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

      {/* Hero */}
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
            Guías para Enviar Dinero a México
          </h1>
          <p className="text-xl text-trust-blue-100 max-w-2xl">
            Todo lo que necesitas saber sobre cómo enviar dinero a México: costos, comisiones, tiempos de entrega, requisitos y las mejores opciones.
          </p>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Guías Más Populares</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}/`}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all group border-2 border-transparent hover:border-trust-blue-200"
              >
                <span className="text-3xl block mb-3">{guide.icon}</span>
                <h3 className="font-bold text-lg text-neutral-800 mb-2 group-hover:text-trust-blue-600">
                  {guide.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-3">
                  {guide.description}
                </p>
                <span className="text-trust-blue-600 font-medium text-sm group-hover:underline">
                  Leer guía →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guides */}
      <section className="section bg-green-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Costos y Comisiones</h2>
          <p className="text-neutral-600 mb-6">Aprende a ahorrar dinero en cada envío</p>
          <div className="grid md:grid-cols-2 gap-4">
            {costGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}/`}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all group flex items-start gap-4"
              >
                <span className="text-3xl">{guide.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-neutral-800 mb-1 group-hover:text-trust-blue-600">
                    {guide.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How-To Guides */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Cómo Enviar Dinero</h2>
          <p className="text-neutral-600 mb-6">Guías paso a paso para principiantes y expertos</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {howToGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}/`}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <span className="text-2xl block mb-2">{guide.icon}</span>
                <h3 className="font-bold text-neutral-800 mb-1 group-hover:text-trust-blue-600">
                  {guide.title}
                </h3>
                <p className="text-neutral-600 text-sm">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="section bg-orange-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Métodos de Entrega</h2>
          <p className="text-neutral-600 mb-6">Depósito bancario vs cobro en efectivo</p>
          <div className="grid md:grid-cols-2 gap-4">
            {deliveryGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}/`}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all group flex items-start gap-4"
              >
                <span className="text-3xl">{guide.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-neutral-800 mb-1 group-hover:text-trust-blue-600">
                    {guide.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Other Guides */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Más Guías</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...trustGuides, ...otherGuides].map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}/`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group flex items-start gap-3"
              >
                <span className="text-2xl">{guide.icon}</span>
                <div>
                  <h3 className="font-bold text-neutral-800 group-hover:text-trust-blue-600">
                    {guide.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-neutral-800 mb-8 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: '¿Cómo enviar dinero a México de Estados Unidos?',
                a: 'Para enviar dinero a México desde EE.UU. necesitas: 1) Una identificación válida, 2) Tarjeta de débito o cuenta bancaria, 3) Datos de tu destinatario. Usa apps como Remitly, Sendwave o Félix Pago desde tu celular en 5-10 minutos.',
              },
              {
                q: '¿Cuál es la forma más barata de enviar dinero a México?',
                a: 'Sendwave ofrece $0 comisión en todas las transferencias. Félix Pago tiene la primera transferencia gratis. Remitly ofrece promociones frecuentes sin comisión para depósitos bancarios.',
              },
              {
                q: '¿Qué aplicación da mejor tipo de cambio?',
                a: 'Wise ofrece el tipo de cambio medio del mercado (el más justo). Sendwave y Remitly también tienen tipos de cambio competitivos, generalmente dentro del 1% del tipo real.',
              },
              {
                q: '¿Qué documentos necesito para enviar dinero?',
                a: 'Necesitas una identificación válida (licencia, pasaporte o matrícula consular). No se requiere SSN para montos pequeños. También necesitas el nombre del destinatario y CLABE (para banco) o ubicación (para efectivo).',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-neutral-800 mb-2">{item.q}</h3>
                <p className="text-neutral-600">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/calculadora/" className="btn-primary">
              Usar Calculadora
            </Link>
            <Link href="/comparar/" className="btn-secondary">
              Comparar Servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
