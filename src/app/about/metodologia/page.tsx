import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metodología | Cómo Evaluamos Servicios de Remesas',
  description:
    'Conoce cómo evaluamos y comparamos los servicios para enviar dinero a México. Nuestra metodología transparente y basada en datos.',
}

export default function MetodologiaPage() {
  return (
    <>
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Metodología - Cómo Evaluamos Servicios de Remesas',
            description: 'Conoce cómo evaluamos y comparamos los servicios para enviar dinero a México. Nuestra metodología transparente y basada en datos.',
            url: 'https://enviardineromexico.com/about/metodologia/',
            dateModified: '2025-12-17',
            author: {
              '@type': 'Organization',
              name: 'EnviarDineroMexico',
              url: 'https://enviardineromexico.com',
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
              { '@type': 'ListItem', position: 2, name: 'Sobre Nosotros', item: 'https://enviardineromexico.com/about/' },
              { '@type': 'ListItem', position: 3, name: 'Metodología', item: 'https://enviardineromexico.com/about/metodologia/' },
            ],
          }),
        }}
      />
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-12">
        <div className="container-narrow">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-trust-blue-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/about/" className="hover:text-white">Sobre Nosotros</Link></li>
              <li>/</li>
              <li className="text-white">Metodología</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra Metodología
          </h1>
          <p className="text-xl text-trust-blue-100">
            Cómo evaluamos y comparamos los servicios de remesas a México.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Criterios de Evaluación</h2>
            <p>
              Evaluamos cada servicio de remesas basándonos en cinco criterios principales,
              ponderados según su importancia para el usuario promedio:
            </p>

            <div className="not-prose my-8 space-y-4">
              {[
                {
                  name: 'Costo Total',
                  weight: '40%',
                  description: 'Comisiones + diferencia en tipo de cambio. Medimos el costo real, no solo las comisiones publicitadas.',
                  color: 'bg-success-green-50 border-success-green-500',
                },
                {
                  name: 'Velocidad de Entrega',
                  weight: '20%',
                  description: 'Tiempo real desde que envías hasta que el receptor tiene el dinero disponible.',
                  color: 'bg-trust-blue-50 border-trust-blue-500',
                },
                {
                  name: 'Cobertura en México',
                  weight: '15%',
                  description: 'Cantidad de bancos soportados, ubicaciones de cobro en efectivo, y opciones de entrega.',
                  color: 'bg-warm-accent-50 border-warm-accent-500',
                },
                {
                  name: 'Facilidad de Uso',
                  weight: '15%',
                  description: 'Proceso de registro, diseño de app/web, y fricción general para completar una transferencia.',
                  color: 'bg-neutral-100 border-neutral-500',
                },
                {
                  name: 'Confiabilidad',
                  weight: '10%',
                  description: 'Reseñas de usuarios, regulación, historial de la empresa, y manejo de problemas.',
                  color: 'bg-family-red-50 border-family-red-500',
                },
              ].map((criteria) => (
                <div key={criteria.name} className={`${criteria.color} border-l-4 p-4 rounded-r-lg`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-neutral-800">{criteria.name}</h3>
                    <span className="bg-white px-2 py-1 rounded text-sm font-semibold">{criteria.weight}</span>
                  </div>
                  <p className="text-neutral-600">{criteria.description}</p>
                </div>
              ))}
            </div>

            <h2>Cómo Calculamos el Costo Total</h2>
            <p>
              Muchos servicios anuncian &quot;$0 comisiones&quot; pero ganan dinero a través de un margen
              desfavorable en el tipo de cambio. Por eso, siempre calculamos el <strong>costo total</strong>:
            </p>
            <pre className="bg-neutral-100 p-4 rounded-lg overflow-x-auto">
              Costo Total = Comisión + (Monto × Margen Tipo de Cambio)
            </pre>
            <p>
              Ejemplo: Si envías $500 con un servicio que cobra $0 de comisión pero tiene un
              margen del 2% en el tipo de cambio, tu costo real es $10 (2% de $500).
            </p>

            <h2>Fuentes de Datos</h2>
            <ul>
              <li><strong>Tarifas y tipos de cambio:</strong> Directamente de los sitios web oficiales de cada proveedor</li>
              <li><strong>Ratings de apps:</strong> App Store (iOS) y Google Play Store</li>
              <li><strong>Reseñas:</strong> Trustpilot y tiendas de aplicaciones</li>
              <li><strong>Datos de mercado:</strong> Banco de México, BBVA Research, Pew Research Center</li>
            </ul>

            <h2>Frecuencia de Actualización</h2>
            <ul>
              <li><strong>Tipos de cambio:</strong> La calculadora usa estimaciones; verifica siempre el valor actual</li>
              <li><strong>Comisiones:</strong> Verificamos mensualmente</li>
              <li><strong>Reviews:</strong> Actualizamos trimestralmente o cuando hay cambios significativos</li>
              <li><strong>Comparaciones:</strong> Actualizamos cuando hay cambios en tarifas o servicios</li>
            </ul>

            <h2>Limitaciones</h2>
            <p>
              Queremos ser honestos sobre lo que nuestra metodología NO puede capturar:
            </p>
            <ul>
              <li>Las tarifas y tipos de cambio cambian constantemente</li>
              <li>La experiencia puede variar según tu ubicación específica</li>
              <li>No podemos probar personalmente cada combinación de corredor</li>
              <li>Las reseñas de usuarios pueden no representar la experiencia típica</li>
            </ul>

            <h2>Contacto</h2>
            <p>
              Si crees que hemos cometido un error o tienes información actualizada,
              por favor contáctanos. Valoramos la precisión sobre todo.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-neutral-500">
              <strong>Última actualización de esta página:</strong> Diciembre 2025
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
