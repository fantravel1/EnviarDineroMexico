import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política Editorial | Estándares de Contenido',
  description:
    'Conoce nuestros estándares editoriales, política de afiliados y proceso de verificación de contenido.',
  keywords: ['politica editorial', 'estandares contenido', 'politica afiliados', 'transparencia editorial', 'independencia editorial', 'verificacion contenido'],
  openGraph: {
    title: 'Política Editorial | Estándares de Contenido',
    description: 'Conoce nuestros estándares editoriales, política de afiliados y proceso de verificación de contenido.',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function PoliticaEditorialPage() {
  return (
    <>
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Política Editorial - Estándares de Contenido',
            description: 'Conoce nuestros estándares editoriales, política de afiliados y proceso de verificación de contenido.',
            url: 'https://enviardineromexico.com/about/politica-editorial/',
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
              { '@type': 'ListItem', position: 3, name: 'Política Editorial', item: 'https://enviardineromexico.com/about/politica-editorial/' },
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
              <li className="text-white">Política Editorial</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Política Editorial
          </h1>
          <p className="text-xl text-trust-blue-100">
            Nuestros estándares de contenido y compromiso con la transparencia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Independencia Editorial</h2>
            <p>
              Nuestras recomendaciones y reviews se basan exclusivamente en la calidad del servicio,
              no en compensación financiera. De hecho, varios de nuestros proveedores recomendados
              (Sendwave, Félix Pago) no tienen programas de afiliados.
            </p>
            <p>
              <strong>Ningún proveedor puede pagar para mejorar su posición en nuestras comparaciones.</strong>
            </p>

            <h2>Política de Afiliados</h2>
            <p>
              Participamos en programas de afiliados con algunos proveedores. Esto significa:
            </p>
            <ul>
              <li>Podemos recibir una comisión cuando te registras a través de nuestros enlaces</li>
              <li>Esto <strong>nunca tiene costo adicional para ti</strong></li>
              <li>Siempre indicamos cuando un enlace es de afiliado</li>
              <li>La compensación NO afecta nuestras recomendaciones</li>
            </ul>

            <h3>Proveedores con Programa de Afiliados</h3>
            <ul>
              <li><strong>Remitly:</strong> Sí, $5-20 por conversión</li>
              <li><strong>WorldRemit:</strong> Sí, ~$38 por conversión</li>
              <li><strong>Wise:</strong> Sí, $12-65 por conversión</li>
              <li><strong>Western Union:</strong> Sí, $10-20 por conversión</li>
              <li><strong>Sendwave:</strong> No (solo referidos entre usuarios)</li>
              <li><strong>Félix Pago:</strong> No</li>
            </ul>

            <h2>Estándares de Contenido</h2>

            <h3>Precisión</h3>
            <ul>
              <li>Verificamos todas las tarifas y comisiones directamente con los proveedores</li>
              <li>Incluimos la fecha de &quot;última actualización&quot; en todo el contenido</li>
              <li>Corregimos errores públicamente cuando los detectamos</li>
            </ul>

            <h3>Lenguaje</h3>
            <ul>
              <li>Usamos español mexicano, no traducciones automáticas</li>
              <li>Evitamos jerga financiera innecesaria</li>
              <li>Escribimos para un nivel de lectura accesible</li>
            </ul>

            <h3>Honestidad</h3>
            <ul>
              <li>Mostramos pros Y contras de cada servicio</li>
              <li>No hacemos afirmaciones que no podamos verificar</li>
              <li>Indicamos claramente cuando algo es una opinión vs. un hecho</li>
            </ul>

            <h2>Divulgación FTC</h2>
            <p>
              De acuerdo con las guías de la Federal Trade Commission (FTC) de Estados Unidos:
            </p>
            <div className="not-prose bg-neutral-100 border-l-4 border-trust-blue-600 p-4 rounded-r-lg my-6">
              <p className="text-neutral-700">
                <strong>Divulgación:</strong> EnviarDineroMexico.com contiene enlaces de afiliados.
                Podemos recibir una comisión cuando te registras en servicios a través de nuestros enlaces,
                sin costo adicional para ti. Esto no afecta nuestra independencia editorial ni metodología
                de clasificación.
              </p>
            </div>

            <h2>Regulación CFPB</h2>
            <p>
              Seguimos las guías del Consumer Financial Protection Bureau (CFPB) para contenido financiero:
            </p>
            <ul>
              <li>No usamos claims de &quot;gratis&quot; si hay costos ocultos en tipo de cambio</li>
              <li>Mostramos el costo total, no solo las comisiones</li>
              <li>Indicamos cuando las tarifas promocionales tienen fecha de expiración</li>
            </ul>

            <h2>Contacto</h2>
            <p>
              Si tienes preguntas sobre nuestra política editorial o crees que hemos
              violado alguno de estos principios, por favor contáctanos.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-neutral-500">
              <strong>Última actualización:</strong> Diciembre 2025
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
