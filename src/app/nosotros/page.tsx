import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | EnviarDineroMexico.com',
  description:
    'Conoce nuestra misión: ayudar a la comunidad mexicana en EE.UU. a enviar dinero a México de forma más económica y segura.',
}

export default function NosotrosPage() {
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
              <li className="text-white">Sobre Nosotros</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre EnviarDineroMexico
          </h1>
          <p className="text-xl text-trust-blue-100 max-w-2xl">
            Ayudando a la comunidad a enviar más dinero a México, pagando menos
            en comisiones.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">
              Nuestra Misión
            </h2>
            <p className="text-neutral-700 mb-6 text-lg">
              Cada año, los mexicanos en Estados Unidos envían más de{' '}
              <strong>$60 mil millones de dólares</strong> a sus familias en
              México. Pero millones de esos dólares se pierden en comisiones y
              tipos de cambio desfavorables.
            </p>
            <p className="text-neutral-700 mb-6">
              EnviarDineroMexico.com nació con una misión simple:{' '}
              <strong>
                ayudar a nuestra comunidad a conservar más de su dinero
              </strong>
              . Creemos que la información transparente sobre costos de remesas
              puede hacer una diferencia real en la vida de millones de
              familias.
            </p>

            <div className="bg-trust-blue-50 border-l-4 border-trust-blue-600 p-6 my-8">
              <p className="text-trust-blue-800 text-lg mb-0">
                Si podemos ayudar a cada familia a ahorrar $20 al mes en
                comisiones, eso representa{' '}
                <strong>$240 más al año para sus seres queridos</strong>.
                Multiplicado por millones de familias, el impacto es enorme.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mt-12 mb-6">
              Lo Que Hacemos
            </h2>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-neutral-800 mb-2">Comparamos</h3>
                <p className="text-neutral-600 text-sm">
                  Analizamos los costos reales de cada servicio, incluyendo
                  comisiones ocultas en el tipo de cambio.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-bold text-neutral-800 mb-2">Educamos</h3>
                <p className="text-neutral-600 text-sm">
                  Publicamos guías en español sobre cómo enviar dinero de forma
                  segura y económica.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-neutral-800 mb-2">Protegemos</h3>
                <p className="text-neutral-600 text-sm">
                  Advertimos sobre estafas y prácticas engañosas en la industria
                  de remesas.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mt-12 mb-6">
              Nuestros Principios
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-success-100 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-success-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Transparencia Total
                  </h3>
                  <p className="text-neutral-600">
                    Mostramos todos los costos de cada servicio, incluyendo
                    comisiones y diferencias en tipo de cambio. Cuando recibimos
                    compensación de un proveedor, lo indicamos claramente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-success-100 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-success-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Independencia Editorial
                  </h3>
                  <p className="text-neutral-600">
                    Nuestras reseñas y rankings se basan en investigación
                    objetiva, no en quién nos paga más. Criticamos a proveedores
                    caros aunque sean anunciantes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-success-100 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-success-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Comunidad Primero
                  </h3>
                  <p className="text-neutral-600">
                    Todo nuestro contenido está en español mexicano. Entendemos
                    las necesidades específicas de nuestra comunidad porque
                    somos parte de ella.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mt-12 mb-6">
              Cómo Nos Mantenemos
            </h2>
            <p className="text-neutral-700 mb-4">
              EnviarDineroMexico.com es un recurso gratuito. Nos mantenemos a
              través de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>
                <strong>Enlaces de afiliado:</strong> Cuando usas nuestros
                enlaces para registrarte en un servicio, podemos recibir una
                pequeña comisión. Esto no afecta el precio que pagas.
              </li>
              <li>
                <strong>Publicidad:</strong> Mostramos anuncios de proveedores
                de remesas, siempre claramente marcados como publicidad.
              </li>
            </ul>
            <p className="text-neutral-700">
              Importante: Nunca recomendamos un servicio solo porque nos paga
              más. Nuestro valor para ti depende de darte información honesta.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-warm-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-neutral-600 mb-6">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes
            posible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto/" className="btn-primary">
              Contactar
            </Link>
            <Link
              href="/guias/"
              className="btn-primary bg-white text-trust-blue-600 border-2 border-trust-blue-600 hover:bg-trust-blue-50"
            >
              Ver Guías
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
