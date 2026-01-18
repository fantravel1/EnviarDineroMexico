import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Servicio | EnviarDineroMexico.com',
  description:
    'Términos y condiciones de uso de EnviarDineroMexico.com. Aviso legal y descargo de responsabilidad.',
  keywords: ['terminos de servicio', 'condiciones uso', 'aviso legal', 'descargo responsabilidad', 'terminos legales', 'condiciones envio dinero'],
  openGraph: {
    title: 'Términos de Servicio | EnviarDineroMexico.com',
    description: 'Términos y condiciones de uso de EnviarDineroMexico.com. Aviso legal y descargo de responsabilidad.',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function TerminosServicioPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Términos de Servicio', item: 'https://enviardineromexico.com/terminos-servicio/' },
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
              <li className="text-white">Términos de Servicio</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Términos de Servicio
          </h1>
          <p className="text-xl text-trust-blue-100">
            Última actualización: 17 de diciembre de 2025
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h2 className="font-bold text-yellow-800 mb-2">AVISO LEGAL IMPORTANTE</h2>
            <p className="text-yellow-700">
              EnviarDineroMexico.com es un sitio web informativo de comparación. <strong>NO somos
              un servicio financiero regulado, banco, prestamista, ni transmisor de dinero.</strong> No
              procesamos transferencias ni manejamos fondos. Somos únicamente un recurso educativo
              y de comparación.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar EnviarDineroMexico.com (&quot;el Sitio&quot;), aceptas estar sujeto
              a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos
              términos, no debes utilizar el Sitio.
            </p>

            <h2>2. Naturaleza del Servicio</h2>

            <h3>2.1 Qué Somos</h3>
            <p>
              EnviarDineroMexico.com es un sitio web de información y comparación que proporciona:
            </p>
            <ul>
              <li>Comparaciones de servicios de remesas de terceros</li>
              <li>Información educativa sobre envío de dinero a México</li>
              <li>Calculadoras de costos estimados</li>
              <li>Reseñas de servicios financieros</li>
            </ul>

            <h3>2.2 Qué NO Somos</h3>
            <p className="font-semibold">EnviarDineroMexico.com NO es:</p>
            <ul>
              <li>Un servicio financiero regulado</li>
              <li>Un banco o institución crediticia</li>
              <li>Un transmisor de dinero o remesador</li>
              <li>Un asesor financiero autorizado</li>
              <li>Un intermediario de transferencias</li>
            </ul>
            <p>
              <strong>No procesamos, enviamos, ni recibimos transferencias de dinero.</strong> Todas
              las transacciones se realizan directamente entre tú y los proveedores de servicios
              terceros.
            </p>

            <h2>3. Información y Precisión</h2>

            <h3>3.1 Naturaleza de la Información</h3>
            <p>
              La información presentada en este Sitio es <strong>únicamente para fines informativos
              y educativos</strong>. No constituye:
            </p>
            <ul>
              <li>Asesoramiento financiero, legal o fiscal</li>
              <li>Una recomendación personalizada</li>
              <li>Una garantía de resultados o ahorros</li>
              <li>Una oferta vinculante de ningún servicio</li>
            </ul>

            <h3>3.2 Precisión de Datos</h3>
            <p>
              Nos esforzamos por mantener la información precisa y actualizada. Sin embargo:
            </p>
            <ul>
              <li><strong>Las tarifas y tipos de cambio cambian constantemente</strong> y pueden
                ser diferentes al momento de tu transferencia</li>
              <li>Las comisiones mostradas son <strong>estimaciones basadas en información pública</strong></li>
              <li>Las ofertas promocionales pueden expirar o cambiar sin previo aviso</li>
              <li>Los tiempos de entrega son aproximados y pueden variar</li>
            </ul>
            <p>
              <strong>SIEMPRE verifica los precios, términos y condiciones actuales directamente
              con el proveedor antes de realizar una transferencia.</strong>
            </p>

            <h3>3.3 Calculadora de Costos</h3>
            <p>
              Nuestra calculadora proporciona <strong>estimaciones aproximadas</strong> basadas en
              datos públicos. Los resultados:
            </p>
            <ul>
              <li>No son cotizaciones vinculantes</li>
              <li>Pueden diferir de los costos reales</li>
              <li>No incluyen todas las variables posibles (ubicación, método de pago, etc.)</li>
            </ul>

            <h2>4. Enlaces de Afiliados</h2>
            <p>
              Este Sitio contiene enlaces de afiliados. Esto significa:
            </p>
            <ul>
              <li>Podemos recibir una comisión si te registras a través de nuestros enlaces</li>
              <li>Esto <strong>no tiene costo adicional para ti</strong></li>
              <li>Las comisiones no afectan el precio que pagas al proveedor</li>
              <li>Nuestra metodología de evaluación es independiente de las relaciones de afiliados</li>
            </ul>
            <p>
              Para más detalles, consulta nuestra <Link href="/about/politica-editorial/" className="text-trust-blue-600">Política Editorial</Link>.
            </p>

            <h2>5. Limitación de Responsabilidad</h2>

            <h3>5.1 Descargo General</h3>
            <p>
              El Sitio y su contenido se proporcionan &quot;TAL CUAL&quot; y &quot;SEGÚN DISPONIBILIDAD&quot;,
              sin garantías de ningún tipo, ya sean expresas o implícitas.
            </p>

            <h3>5.2 No Responsabilidad por Terceros</h3>
            <p>
              <strong>No somos responsables de:</strong>
            </p>
            <ul>
              <li>Las acciones, productos o servicios de proveedores terceros</li>
              <li>Transferencias fallidas, retrasadas o incorrectas</li>
              <li>Pérdidas financieras resultantes de usar servicios de terceros</li>
              <li>Cambios en tarifas, tipos de cambio o políticas de proveedores</li>
              <li>Problemas técnicos en sitios de terceros</li>
              <li>Fraudes o estafas cometidas por terceros</li>
            </ul>

            <h3>5.3 Límite de Daños</h3>
            <p>
              En ningún caso seremos responsables por daños indirectos, incidentales, especiales,
              consecuentes o punitivos, incluyendo pérdida de ganancias, datos o uso.
            </p>

            <h2>6. Uso Aceptable</h2>
            <p>Al usar este Sitio, aceptas:</p>
            <ul>
              <li>No usar el Sitio para actividades ilegales</li>
              <li>No intentar acceder sin autorización a nuestros sistemas</li>
              <li>No copiar, reproducir o distribuir nuestro contenido sin permiso</li>
              <li>Proporcionar información veraz si nos contactas</li>
              <li>No usar el Sitio de manera que pueda dañarlo o sobrecargarlo</li>
            </ul>

            <h2>7. Propiedad Intelectual</h2>
            <p>
              Todo el contenido del Sitio, incluyendo textos, gráficos, logotipos, íconos y
              software, es propiedad de EnviarDineroMexico.com o sus proveedores de contenido
              y está protegido por leyes de derechos de autor.
            </p>

            <h2>8. Enlaces Externos</h2>
            <p>
              El Sitio contiene enlaces a sitios web de terceros. No controlamos ni somos
              responsables del contenido, políticas de privacidad o prácticas de sitios externos.
              El acceso a estos sitios es bajo tu propio riesgo.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier momento.
              Los cambios entrarán en vigor inmediatamente después de su publicación en el Sitio.
              Tu uso continuado del Sitio constituye aceptación de los términos modificados.
            </p>

            <h2>10. Ley Aplicable</h2>
            <p>
              Estos Términos se rigen por las leyes de Estados Unidos. Cualquier disputa
              se resolverá en los tribunales competentes.
            </p>

            <h2>11. Divisibilidad</h2>
            <p>
              Si alguna disposición de estos Términos se considera inválida o inaplicable,
              las disposiciones restantes continuarán en pleno vigor y efecto.
            </p>

            <h2>12. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos Términos de Servicio:
            </p>
            <ul>
              <li>Email: <a href="mailto:legal@enviardineroamexico.com" className="text-trust-blue-600">legal@enviardineroamexico.com</a></li>
              <li>Página de contacto: <Link href="/contacto/" className="text-trust-blue-600">enviardineromexico.com/contacto</Link></li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-neutral-100 rounded-lg">
            <h3 className="font-bold text-neutral-800 mb-4">Documentos Relacionados</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-privacidad/" className="text-trust-blue-600 hover:underline">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/about/politica-editorial/" className="text-trust-blue-600 hover:underline">
                  Política Editorial y Afiliados
                </Link>
              </li>
              <li>
                <Link href="/about/metodologia/" className="text-trust-blue-600 hover:underline">
                  Metodología de Evaluación
                </Link>
              </li>
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
