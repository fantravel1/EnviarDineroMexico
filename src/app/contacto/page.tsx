import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto | EnviarDineroMexico.com',
  description:
    'Contáctanos para preguntas sobre comparación de servicios de remesas a México. Estamos aquí para ayudarte.',
}

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-16">
        <div className="container-wide">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-trust-blue-200">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Contacto</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-trust-blue-100 max-w-2xl">
            ¿Tienes preguntas sobre envío de dinero a México? Estamos aquí para
            ayudarte.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Formas de Contactarnos
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-trust-blue-100 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-trust-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">
                      Correo Electrónico
                    </h3>
                    <p className="text-neutral-600 mb-1">
                      Para preguntas generales y sugerencias:
                    </p>
                    <a
                      href="mailto:hola@enviardineroamexico.com"
                      className="text-trust-blue-600 hover:underline"
                    >
                      hola@enviardineroamexico.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-trust-blue-100 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-trust-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">
                      Preguntas Frecuentes
                    </h3>
                    <p className="text-neutral-600 mb-1">
                      Muchas respuestas están en nuestras guías:
                    </p>
                    <Link
                      href="/guias/"
                      className="text-trust-blue-600 hover:underline"
                    >
                      Ver guías y tutoriales
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-trust-blue-100 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-trust-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">
                      Reportar un Problema
                    </h3>
                    <p className="text-neutral-600 mb-1">
                      Para reportar información incorrecta o problemas técnicos:
                    </p>
                    <a
                      href="mailto:soporte@enviardineroamexico.com"
                      className="text-trust-blue-600 hover:underline"
                    >
                      soporte@enviardineroamexico.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-warm-50 rounded-lg">
                <h3 className="font-bold text-neutral-800 mb-2">
                  Tiempo de Respuesta
                </h3>
                <p className="text-neutral-600 text-sm">
                  Intentamos responder a todos los correos dentro de 24-48 horas
                  hábiles. Para asuntos urgentes relacionados con una
                  transferencia específica, por favor contacta directamente al
                  proveedor del servicio.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Preguntas Comunes
              </h2>

              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-bold text-neutral-800 mb-2">
                    ¿Ofrecen servicio de envío de dinero?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    No. Somos un sitio de comparación independiente. No enviamos
                    dinero ni procesamos transacciones. Comparamos servicios de
                    terceros para ayudarte a elegir la mejor opción.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-bold text-neutral-800 mb-2">
                    ¿Cómo ganan dinero?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Recibimos comisiones de algunos proveedores cuando usas
                    nuestros enlaces. Esto no afecta nuestras reseñas ni el
                    precio que pagas. Siempre mostramos todos los costos de
                    forma transparente.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-bold text-neutral-800 mb-2">
                    ¿Puedo sugerir un servicio para incluir?
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    ¡Sí! Si conoces un servicio de remesas que deberíamos
                    incluir, envíanos un correo con los detalles y lo
                    evaluaremos.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-bold text-neutral-800 mb-2">
                    Tuve un problema con una transferencia
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Lamentamos escuchar eso. Para problemas con transferencias
                    específicas, debes contactar directamente al servicio que
                    usaste (Remitly, Western Union, etc.). Ellos tienen acceso a
                    tu transacción y pueden ayudarte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">
            ¿Listo para Enviar Dinero?
          </h2>
          <p className="text-neutral-600 mb-6">
            Compara los mejores servicios y encuentra la opción perfecta para
            ti.
          </p>
          <Link href="/calculadora/" className="btn-primary">
            Comparar Proveedores
          </Link>
        </div>
      </section>
    </>
  )
}
