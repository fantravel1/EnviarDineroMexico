import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '5 Errores Comunes al Enviar Dinero a México (y Cómo Evitarlos)',
  description:
    'Los errores más costosos que cometen los migrantes al enviar dinero a México. Aprende a evitarlos y ahorra cientos de dólares al año.',
}

export default function ErroresComunesPage() {
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
              <li className="text-neutral-800">Errores Comunes</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-trust-blue-100 text-trust-blue-700 px-2 py-1 rounded">
                Consejos
              </span>
              <time className="text-sm text-neutral-500" dateTime="2025-01-10">
                10 de enero de 2025
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              5 Errores Comunes al Enviar Dinero a México (y Cómo Evitarlos)
            </h1>
            <p className="text-xl text-neutral-600">
              Estos errores le cuestan a la comunidad migrante millones de
              dólares cada año. Aquí te explicamos cómo evitarlos.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-warning-50 border border-warning-200 p-6 rounded-lg mb-8">
              <p className="text-warning-800 font-medium mb-0">
                El migrante promedio pierde entre $200-500 USD al año en
                comisiones y malos tipos de cambio. Sigue leyendo para saber
                cómo recuperar ese dinero.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Error #1: Fijarse Solo en la Comisión
            </h2>
            <p className="text-neutral-700 mb-4">
              &quot;¡0% de comisión!&quot; suena genial, pero el costo real está
              escondido en el tipo de cambio. Un servicio puede cobrar $0 de
              comisión pero darte un tipo de cambio 5% peor que el del mercado.
            </p>
            <div className="bg-neutral-50 p-4 rounded-lg my-4">
              <h4 className="font-bold text-neutral-800 mb-2">Ejemplo:</h4>
              <p className="text-neutral-700 text-sm">
                Tipo de cambio real: 18.00 MXN/USD
                <br />
                Servicio A: $0 comisión, pero tipo de cambio 17.10 (5% menos)
                <br />
                Servicio B: $3 comisión, tipo de cambio 17.82 (1% menos)
                <br />
                <strong>En un envío de $300:</strong>
                <br />
                Servicio A: Tu familia recibe $5,130 MXN
                <br />
                Servicio B: Tu familia recibe $5,346 MXN
                <br />
                <span className="text-success-600">
                  Servicio B es mejor por $216 MXN
                </span>
              </p>
            </div>
            <p className="text-neutral-700 mb-4">
              <strong>Solución:</strong> Siempre calcula el{' '}
              <em>monto total que recibe tu familia</em>, no solo la comisión
              que pagas.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Error #2: Usar el Mismo Servicio para Todo
            </h2>
            <p className="text-neutral-700 mb-4">
              Muchos migrantes usan Western Union porque es lo que conocen,
              aunque sea más caro. La lealtad a un solo servicio te cuesta
              dinero.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-4">
              <li>
                <strong>Para montos pequeños ($50-150):</strong> Sendwave o
                Félix Pago (sin comisión fija)
              </li>
              <li>
                <strong>Para montos medianos ($200-500):</strong> Remitly o Wise
              </li>
              <li>
                <strong>Para montos grandes ($1,000+):</strong> Wise
                (mejor tipo de cambio)
              </li>
              <li>
                <strong>Para emergencias:</strong> Félix Pago (entrega
                instantánea a tarjeta)
              </li>
            </ul>
            <p className="text-neutral-700 mb-4">
              <strong>Solución:</strong> Ten 2-3 apps instaladas y compara antes
              de cada envío.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Error #3: No Aprovechar Ofertas de Primer Envío
            </h2>
            <p className="text-neutral-700 mb-4">
              Casi todos los servicios de remesas ofrecen promociones generosas
              para nuevos usuarios: envíos gratis, mejores tipos de cambio, o
              bonos en efectivo.
            </p>
            <div className="bg-success-50 border border-success-200 p-4 rounded-lg my-4">
              <h4 className="font-bold text-success-800 mb-2">
                Ofertas Típicas de Primer Envío:
              </h4>
              <ul className="text-success-700 text-sm space-y-1">
                <li>
                  Remitly: Primer envío sin comisión + tipo de cambio
                  promocional
                </li>
                <li>Félix Pago: 0% de costo total en primer envío</li>
                <li>Wise: Primera transferencia sin comisión hasta $500</li>
                <li>WorldRemit: 3 envíos gratis para nuevos usuarios</li>
              </ul>
            </div>
            <p className="text-neutral-700 mb-4">
              <strong>Solución:</strong> Cuando necesites enviar dinero por
              primera vez, prueba un servicio nuevo y aprovecha su promoción.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Error #4: Enviar en Efectivo Cuando No Es Necesario
            </h2>
            <p className="text-neutral-700 mb-4">
              Los envíos para recoger en efectivo suelen ser más caros y menos
              seguros. Si tu familiar tiene cuenta bancaria o tarjeta de débito,
              depositar directamente es mejor opción.
            </p>
            <table className="w-full text-sm my-4 border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Método de Entrega</th>
                  <th className="text-left p-3 border">Costo Típico</th>
                  <th className="text-left p-3 border">Tiempo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Efectivo en tienda</td>
                  <td className="p-3 border">$5-15 + spread alto</td>
                  <td className="p-3 border">Minutos a horas</td>
                </tr>
                <tr>
                  <td className="p-3 border">Depósito bancario</td>
                  <td className="p-3 border">$0-5 + spread bajo</td>
                  <td className="p-3 border">1-2 días hábiles</td>
                </tr>
                <tr>
                  <td className="p-3 border">Tarjeta de débito</td>
                  <td className="p-3 border">$0-3 + spread bajo</td>
                  <td className="p-3 border">Minutos</td>
                </tr>
              </tbody>
            </table>
            <p className="text-neutral-700 mb-4">
              <strong>Solución:</strong> Ayuda a tu familia a abrir una cuenta
              bancaria o a obtener una tarjeta de débito en México. Bancos como
              BBVA, Banorte y Banco Azteca tienen opciones sin comisión mensual.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Error #5: No Verificar los Datos del Destinatario
            </h2>
            <p className="text-neutral-700 mb-4">
              Un error de un solo dígito en el número de cuenta puede hacer que
              tu dinero llegue a la persona equivocada o se retrase días.
            </p>
            <div className="bg-warning-50 border border-warning-200 p-4 rounded-lg my-4">
              <h4 className="font-bold text-warning-800 mb-2">
                Datos que Debes Verificar:
              </h4>
              <ul className="text-warning-700 text-sm space-y-1">
                <li>Nombre completo exactamente como aparece en su ID</li>
                <li>CLABE (18 dígitos) para transferencias bancarias</li>
                <li>
                  Número de tarjeta (16 dígitos) para depósitos a tarjeta
                </li>
                <li>
                  Dirección completa para envíos en efectivo
                </li>
              </ul>
            </div>
            <p className="text-neutral-700 mb-4">
              <strong>Solución:</strong> Pide a tu familiar que te envíe una
              foto de su tarjeta o estado de cuenta. Guarda los datos
              verificados en la app para futuros envíos.
            </p>

            <div className="bg-trust-blue-50 border-l-4 border-trust-blue-600 p-6 my-8">
              <h3 className="font-bold text-trust-blue-800 mb-2">
                Resumen: Cuánto Puedes Ahorrar
              </h3>
              <p className="text-trust-blue-700 mb-4">
                Si envías $300 al mes y corriges estos 5 errores:
              </p>
              <ul className="text-trust-blue-700 space-y-1">
                <li>
                  Comparar tipo de cambio total: <strong>$10-20/mes</strong>
                </li>
                <li>
                  Usar el servicio correcto para cada monto:{' '}
                  <strong>$5-10/mes</strong>
                </li>
                <li>
                  Aprovechar ofertas: <strong>$5-15/mes (promedio)</strong>
                </li>
                <li>
                  Depósito en lugar de efectivo: <strong>$5-10/mes</strong>
                </li>
              </ul>
              <p className="text-trust-blue-800 font-bold mt-4">
                Ahorro potencial: $300-600 USD al año
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
                Comparar Proveedores
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  )
}
