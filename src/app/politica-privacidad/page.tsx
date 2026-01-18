import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | EnviarDineroMexico.com',
  description:
    'Política de privacidad de EnviarDineroMexico.com. Cómo recopilamos, usamos y protegemos tu información.',
  keywords: ['politica privacidad', 'privacidad datos', 'proteccion informacion', 'uso datos personales', 'cookies', 'GDPR CCPA'],
  openGraph: {
    title: 'Política de Privacidad | EnviarDineroMexico.com',
    description: 'Política de privacidad de EnviarDineroMexico.com. Cómo recopilamos, usamos y protegemos tu información.',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function PoliticaPrivacidadPage() {
  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviardineromexico.com/' },
              { '@type': 'ListItem', position: 2, name: 'Política de Privacidad', item: 'https://enviardineromexico.com/politica-privacidad/' },
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
              <li className="text-white">Política de Privacidad</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-trust-blue-100">
            Última actualización: 17 de diciembre de 2025
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>1. Información General</h2>
            <p>
              EnviarDineroMexico.com (&quot;nosotros&quot;, &quot;nuestro&quot; o el &quot;Sitio&quot;) es un sitio web
              informativo de comparación de servicios de remesas. <strong>No somos un servicio financiero
              regulado, prestamista, ni banco.</strong> Operamos únicamente como un recurso educativo
              y de comparación.
            </p>
            <p>
              Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información
              que nos proporcionas cuando visitas nuestro sitio web.
            </p>

            <h2>2. Información que Recopilamos</h2>

            <h3>2.1 Información de Navegación</h3>
            <p>Cuando visitas nuestro sitio, podemos recopilar automáticamente:</p>
            <ul>
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Sitio web de referencia</li>
              <li>Información sobre tu ubicación geográfica general</li>
            </ul>

            <h3>2.2 Información que Proporcionas Voluntariamente</h3>
            <p>Si nos contactas a través del formulario de contacto, recopilamos:</p>
            <ul>
              <li>Nombre (si lo proporcionas)</li>
              <li>Correo electrónico</li>
              <li>Contenido de tu mensaje</li>
            </ul>

            <h3>2.3 Cookies y Tecnologías Similares</h3>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en el sitio.
              Estas pueden incluir:
            </p>
            <ul>
              <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
              <li><strong>Cookies de análisis:</strong> Para entender cómo los visitantes usan el sitio</li>
              <li><strong>Cookies de afiliados:</strong> Para rastrear referidos a nuestros socios</li>
            </ul>

            <h2>3. Cómo Usamos Tu Información</h2>
            <p>Usamos la información recopilada para:</p>
            <ul>
              <li>Operar y mejorar el sitio web</li>
              <li>Responder a tus consultas</li>
              <li>Analizar el uso del sitio para mejorarlo</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
            <p>
              <strong>No vendemos, alquilamos ni compartimos tu información personal con terceros
              para fines de marketing.</strong>
            </p>

            <h2>4. Enlaces de Afiliados</h2>
            <p>
              Nuestro sitio contiene enlaces de afiliados a servicios de remesas. Cuando haces clic
              en estos enlaces y te registras, podemos recibir una comisión del proveedor. Esto
              no tiene costo adicional para ti.
            </p>
            <p>
              Estos socios afiliados pueden usar cookies para rastrear las conversiones. Esta
              información se usa únicamente para calcular comisiones y no incluye información
              personal identificable.
            </p>

            <h2>5. Servicios de Terceros</h2>
            <p>Podemos utilizar servicios de terceros como:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Para análisis de tráfico del sitio</li>
              <li><strong>Plataformas de afiliados:</strong> Para rastreo de referidos</li>
              <li><strong>Servicios de hosting:</strong> Para alojar el sitio web</li>
            </ul>
            <p>
              Estos terceros tienen sus propias políticas de privacidad que te recomendamos revisar.
            </p>

            <h2>6. Seguridad de Datos</h2>
            <p>
              Implementamos medidas de seguridad razonables para proteger la información que
              recopilamos. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
            </p>

            <h2>7. Retención de Datos</h2>
            <p>
              Conservamos tu información solo mientras sea necesario para los fines descritos
              en esta política, o según lo requiera la ley. Los datos de análisis se retienen
              típicamente por 26 meses.
            </p>

            <h2>8. Tus Derechos</h2>
            <p>Dependiendo de tu ubicación, puedes tener derecho a:</p>
            <ul>
              <li>Acceder a tu información personal</li>
              <li>Corregir información inexacta</li>
              <li>Solicitar la eliminación de tu información</li>
              <li>Oponerte al procesamiento de tu información</li>
              <li>Retirar tu consentimiento</li>
            </ul>
            <p>
              Para ejercer estos derechos, contáctanos en:{' '}
              <a href="mailto:privacidad@enviardineroamexico.com" className="text-trust-blue-600">
                privacidad@enviardineroamexico.com
              </a>
            </p>

            <h3>8.1 Residentes de California (CCPA)</h3>
            <p>
              Si eres residente de California, tienes derechos adicionales bajo la Ley de Privacidad
              del Consumidor de California (CCPA), incluyendo el derecho a saber qué información
              personal recopilamos y el derecho a solicitar su eliminación.
            </p>

            <h3>8.2 Residentes de la Unión Europea (GDPR)</h3>
            <p>
              Si eres residente de la UE, tienes derechos bajo el Reglamento General de Protección
              de Datos (GDPR), incluyendo el derecho a la portabilidad de datos y el derecho a
              presentar una queja ante una autoridad de supervisión.
            </p>

            <h2>9. Menores de Edad</h2>
            <p>
              Nuestro sitio no está dirigido a menores de 18 años. No recopilamos conscientemente
              información de menores. Si eres padre/madre y crees que tu hijo nos ha proporcionado
              información, contáctanos para eliminarla.
            </p>

            <h2>10. Cambios a Esta Política</h2>
            <p>
              Podemos actualizar esta política periódicamente. Publicaremos cualquier cambio en
              esta página con una nueva fecha de &quot;última actualización&quot;. Te recomendamos revisar
              esta política regularmente.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta Política de Privacidad, contáctanos:
            </p>
            <ul>
              <li>Email: <a href="mailto:privacidad@enviardineroamexico.com" className="text-trust-blue-600">privacidad@enviardineroamexico.com</a></li>
              <li>Página de contacto: <Link href="/contacto/" className="text-trust-blue-600">enviardineromexico.com/contacto</Link></li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-neutral-500">
              <strong>Última actualización:</strong> 17 de diciembre de 2025
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
