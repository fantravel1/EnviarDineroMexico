import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impuestos y Remesas a Mexico 2025 | Guia Legal y Fiscal',
  description: 'Todo sobre impuestos y remesas a Mexico. Limites del IRS, reportes FBAR, declaracion en Mexico. Informacion general (no es asesoria fiscal).',
  keywords: ['impuestos remesas mexico', 'IRS remesas', 'FBAR remesas', 'SAT remesas', 'limites enviar dinero'],
  alternates: {
    canonical: '/guias/impuestos-remesas-mexico/',
  },
}

export default function ImpuestosRemesasPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Impuestos y Remesas a Mexico 2025 - Guia Legal y Fiscal',
            description: 'Informacion general sobre impuestos y remesas a Mexico. Limites, reportes y consideraciones fiscales.',
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
            datePublished: '2025-12-17',
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
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviardineromexico.com/' },
              { '@type': 'ListItem', position: 2, name: 'Guias', item: 'https://enviardineromexico.com/guias/' },
              { '@type': 'ListItem', position: 3, name: 'Impuestos y Remesas', item: 'https://enviardineromexico.com/guias/impuestos-remesas-mexico/' },
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
              <li><Link href="/guias/" className="hover:text-white">Guias</Link></li>
              <li>/</li>
              <li className="text-white">Impuestos y Remesas</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Impuestos y Remesas a Mexico
          </h1>
          <p className="text-xl text-trust-blue-100">
            Informacion general sobre aspectos fiscales al enviar dinero a Mexico
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          {/* Important Disclaimer */}
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-red-800 text-lg mb-2">Aviso Legal Importante</h2>
            <p className="text-red-700 mb-4">
              <strong>Esta informacion es solo educativa y NO constituye asesoria fiscal, legal o financiera.</strong>
            </p>
            <p className="text-red-700 text-sm">
              Las leyes fiscales son complejas y cambian frecuentemente. Cada situacion es diferente.
              Siempre consulta con un profesional de impuestos certificado (CPA, Enrolled Agent, o
              abogado fiscal) para tu situacion especifica. EnviarDineroMexico no es responsable
              de decisiones tomadas basadas en esta informacion.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Aspectos Fiscales en Estados Unidos</h2>

            <h3>Las remesas NO son un gasto deducible</h3>
            <p>
              Enviar dinero a familiares en Mexico generalmente <strong>no es deducible de impuestos</strong> en
              Estados Unidos. El dinero que envias a tu familia se considera un regalo (gift), no un gasto.
            </p>

            <h3>Limites de Reporte al IRS</h3>
            <p>
              El IRS tiene umbrales de reporte que debes conocer:
            </p>
            <div className="bg-trust-blue-50 p-4 rounded-lg not-prose mb-4">
              <ul className="space-y-2 text-trust-blue-800">
                <li><strong>$10,000 o mas en efectivo:</strong> Los bancos y servicios de remesas
                  reportan automaticamente transacciones en efectivo de $10,000 o mas (CTR - Currency Transaction Report).</li>
                <li><strong>Multiples transacciones:</strong> Dividir una transaccion grande en varias
                  pequenas para evitar el reporte (&quot;structuring&quot;) es ilegal.</li>
                <li><strong>$18,000 por persona (2024):</strong> Puedes dar hasta $18,000 por ano a
                  cada persona sin tener que reportar. Si das mas, debes presentar el Form 709.</li>
              </ul>
            </div>

            <h3>FBAR (Foreign Bank Account Report)</h3>
            <p>
              Si tienes cuentas bancarias en Mexico con un total combinado de mas de $10,000 en
              cualquier momento del ano, debes presentar el FBAR (FinCEN Form 114). Esto aplica
              si tienes firma autorizada en la cuenta, aunque no sea tuya.
            </p>

            <h3>Formularios Relevantes</h3>
            <ul>
              <li><strong>Form 709:</strong> Gift Tax Return - si das mas de $18,000 a una persona en un ano</li>
              <li><strong>FBAR/FinCEN 114:</strong> Si tienes cuentas extranjeras con mas de $10,000</li>
              <li><strong>Form 8938:</strong> FATCA - para activos financieros extranjeros que excedan ciertos umbrales</li>
            </ul>

            <h2>Aspectos Fiscales en Mexico</h2>

            <h3>Quien recibe las remesas</h3>
            <p>
              Para el receptor en Mexico, las remesas familiares generalmente <strong>no son gravables</strong> como
              ingreso, ya que se consideran donativos. Sin embargo, el SAT (Servicio de Administracion
              Tributaria) monitorea los depositos.
            </p>

            <h3>Depositos de Alto Valor (IDE)</h3>
            <p>
              Mexico tiene el Impuesto a los Depositos en Efectivo (IDE) que aplica a depositos
              en efectivo mayores a ciertos montos mensuales. Las transferencias electronicas
              generalmente no estan sujetas a este impuesto.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg not-prose mb-4">
              <p className="text-yellow-800">
                <strong>Nota:</strong> Si el receptor usa las remesas para actividades comerciales
                o negocios, podria tener obligaciones fiscales en Mexico. Es importante que consulten
                con un contador en Mexico si tienen dudas.
              </p>
            </div>

            <h2>Recomendaciones Generales</h2>

            <div className="space-y-4 not-prose">
              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-800 mb-2">1. Mantiene Registros</h3>
                <p className="text-neutral-600 text-sm">
                  Guarda comprobantes de todas tus transferencias. Los servicios digitales como
                  Remitly, Sendwave y Felix Pago generan recibos automaticos que puedes descargar.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-800 mb-2">2. No hagas &quot;Structuring&quot;</h3>
                <p className="text-neutral-600 text-sm">
                  Nunca dividas una transferencia grande en varias pequenas para evitar reportes.
                  Esto es ilegal y puede resultar en investigaciones y multas severas.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-800 mb-2">3. Declara lo que corresponda</h3>
                <p className="text-neutral-600 text-sm">
                  Si tienes cuentas en Mexico o envias grandes cantidades, asegurate de cumplir
                  con los requisitos de reporte. Es mejor declarar de mas que omitir informacion.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-800 mb-2">4. Consulta a un profesional</h3>
                <p className="text-neutral-600 text-sm">
                  Si envias cantidades significativas o tienes una situacion fiscal compleja,
                  invierte en una consulta con un CPA o Enrolled Agent que conozca de remesas
                  internacionales.
                </p>
              </div>
            </div>

            <h2>Preguntas Frecuentes</h2>

            <h3>Tengo que pagar impuestos por enviar dinero a mi familia?</h3>
            <p>
              Generalmente no. Enviar dinero a familiares es considerado un regalo y no genera
              impuestos para ti. Sin embargo, si excedes ciertos limites, podrias tener que
              presentar formularios informativos.
            </p>

            <h3>Pueden quitarme dinero si envio mucho?</h3>
            <p>
              No, pero las instituciones financieras pueden reportar transacciones grandes
              al gobierno. Si el dinero es legitimo y no estas evadiendo impuestos, no
              deberia haber problema.
            </p>

            <h3>Me afecta en mi declaracion de impuestos?</h3>
            <p>
              Las remesas familiares no son deducibles ni afectan tu declaracion de impuestos
              directamente. Solo si tienes que presentar formularios como el 709 o FBAR por
              exceder ciertos limites.
            </p>

            <h3>Cuanto es el maximo que puedo enviar?</h3>
            <p>
              No hay un limite maximo legal para enviar dinero a Mexico. Los limites que ves
              en los servicios de remesas (ej. $10,000 por transaccion) son limites operativos
              de cada empresa, no limites legales.
            </p>
          </div>

          {/* Resources */}
          <div className="mt-12 bg-neutral-50 rounded-lg p-6">
            <h2 className="font-bold text-neutral-800 text-xl mb-4">Recursos Oficiales</h2>
            <p className="text-neutral-600 mb-4">
              Para informacion oficial y actualizada, consulta estas fuentes:
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>
                <strong>IRS (USA):</strong>{' '}
                <a
                  href="https://www.irs.gov/businesses/gifts-inheritances"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trust-blue-600 hover:underline"
                >
                  irs.gov/businesses/gifts-inheritances
                </a>
              </li>
              <li>
                <strong>FinCEN (FBAR):</strong>{' '}
                <a
                  href="https://www.fincen.gov/report-foreign-bank-and-financial-accounts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trust-blue-600 hover:underline"
                >
                  fincen.gov/report-foreign-bank-and-financial-accounts
                </a>
              </li>
              <li>
                <strong>SAT (Mexico):</strong>{' '}
                <a
                  href="https://www.sat.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trust-blue-600 hover:underline"
                >
                  sat.gob.mx
                </a>
              </li>
            </ul>
          </div>

          {/* Final Disclaimer */}
          <div className="mt-8 p-4 bg-neutral-100 rounded-lg">
            <p className="text-sm text-neutral-600">
              <strong>Recordatorio:</strong> Esta guia proporciona informacion general y educativa.
              No es asesoria fiscal ni legal. Las leyes cambian y cada situacion es unica.
              Siempre consulta con un profesional calificado antes de tomar decisiones fiscales.
            </p>
          </div>

          {/* Related Guides */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-bold text-neutral-800 mb-4">Otras Guias Utiles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guias/como-enviar-dinero-primera-vez/" className="block p-4 bg-white rounded-lg border hover:border-trust-blue-300 transition-colors">
                <h4 className="font-semibold text-trust-blue-600">Como Enviar por Primera Vez</h4>
                <p className="text-sm text-neutral-600">Guia paso a paso para tu primera transferencia</p>
              </Link>
              <Link href="/guias/enviar-dinero-sin-papeles/" className="block p-4 bg-white rounded-lg border hover:border-trust-blue-300 transition-colors">
                <h4 className="font-semibold text-trust-blue-600">Enviar Dinero sin SSN</h4>
                <p className="text-sm text-neutral-600">Opciones con ITIN o matricula consular</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-neutral-500">
              <strong>Ultima actualizacion:</strong> 17 de diciembre de 2025
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
