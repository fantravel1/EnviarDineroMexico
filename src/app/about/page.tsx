import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | EnviarDineroMexico',
  description:
    'Conoce la misión de EnviarDineroMexico.com: ayudar a la comunidad latina a enviar dinero a México de forma segura y económica.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-16">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Sobre EnviarDineroMexico
          </h1>
          <p className="text-xl text-trust-blue-100 text-center max-w-2xl mx-auto">
            La guía más completa en español para enviar dinero a México de forma segura y económica.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Nuestra Misión</h2>
            <p>
              EnviarDineroMexico.com nació con una misión clara: <strong>ayudar a los millones de
              mexicanos en Estados Unidos a encontrar la mejor forma de enviar dinero a sus familias</strong>.
            </p>
            <p>
              Cada año, más de $65 mil millones fluyen de Estados Unidos a México en forma de remesas.
              Detrás de cada dólar hay una historia de sacrificio, amor y esperanza. Entendemos que
              cada centavo cuenta, y por eso nos dedicamos a comparar opciones de manera transparente
              y honesta.
            </p>

            <h2>¿Por Qué Existimos?</h2>
            <p>
              A pesar de ser uno de los corredores de remesas más grandes del mundo, no existía un
              recurso completo en español que comparara todas las opciones disponibles. La mayoría
              de la información estaba en inglés o era promocional de los propios proveedores.
            </p>
            <p>
              Creamos EnviarDineroMexico.com para llenar ese vacío: una fuente independiente,
              en español mexicano, diseñada específicamente para nuestra comunidad.
            </p>

            <h2>Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-trust-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-trust-blue-800 mb-2">Confianza (Trust)</h3>
                <p className="text-trust-blue-700">
                  Compartimos información verificada y actualizada. Cuando algo no está claro, lo decimos.
                </p>
              </div>
              <div className="bg-success-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-success-green-800 mb-2">Transparencia</h3>
                <p className="text-success-green-700">
                  Revelamos nuestras relaciones de afiliados y cómo ganamos dinero. Sin secretos.
                </p>
              </div>
              <div className="bg-warm-accent-50 p-6 rounded-lg">
                <h3 className="font-bold text-warm-accent-800 mb-2">Familismo</h3>
                <p className="text-warm-accent-700">
                  Entendemos que envías dinero a tu familia. Tratamos cada comparación con ese respeto.
                </p>
              </div>
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h3 className="font-bold text-neutral-800 mb-2">Independencia</h3>
                <p className="text-neutral-700">
                  Ningún proveedor nos paga para ser el #1. Nuestras recomendaciones se basan en datos.
                </p>
              </div>
            </div>

            <h2>Cómo Ganamos Dinero</h2>
            <p>
              Somos transparentes: ganamos dinero a través de enlaces de afiliados. Cuando haces clic
              en un enlace y te registras en un servicio, podemos recibir una comisión del proveedor.
              <strong> Esto nunca tiene costo adicional para ti.</strong>
            </p>
            <p>
              Importante: esto NO afecta nuestras recomendaciones. De hecho, algunos de nuestros
              proveedores favoritos (como Sendwave y Félix Pago) no tienen programas de afiliados.
              Los recomendamos porque son buenos, no porque nos paguen.
            </p>

            <h2>Nuestro Equipo</h2>
            <p>
              EnviarDineroMexico.com es operado por un equipo de profesionales financieros y
              desarrolladores web con experiencia en fintech y servicios financieros para la
              comunidad latina.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Link
              href="/about/metodologia/"
              className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg text-neutral-800 mb-2">Nuestra Metodología</h3>
              <p className="text-neutral-600">
                Conoce cómo evaluamos y comparamos los servicios de remesas.
              </p>
              <span className="text-trust-blue-600 font-medium mt-2 inline-block">Ver metodología →</span>
            </Link>
            <Link
              href="/about/politica-editorial/"
              className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg text-neutral-800 mb-2">Política Editorial</h3>
              <p className="text-neutral-600">
                Nuestros estándares de contenido y proceso de verificación.
              </p>
              <span className="text-trust-blue-600 font-medium mt-2 inline-block">Ver política →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'EnviarDineroMexico',
            url: 'https://enviardineromexico.com',
            description: 'La guía más completa en español para enviar dinero a México',
            foundingDate: '2025',
          }),
        }}
      />
    </>
  )
}
