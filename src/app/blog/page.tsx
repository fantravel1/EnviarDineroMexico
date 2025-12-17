import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Noticias y Consejos sobre Remesas a México',
  description:
    'Últimas noticias, consejos y actualizaciones sobre envío de dinero a México. Mantente informado sobre tipos de cambio, nuevos servicios y regulaciones.',
}

const posts = [
  {
    title: 'Tipo de Cambio Peso-Dólar 2025: Lo Que Debes Saber',
    slug: 'tipo-de-cambio-2025',
    date: '2025-01-15',
    excerpt:
      'Análisis del tipo de cambio peso-dólar para 2025 y cómo afecta tus remesas. Consejos para maximizar el valor de tus envíos.',
    category: 'Análisis',
  },
  {
    title: '5 Errores Comunes al Enviar Dinero a México (y Cómo Evitarlos)',
    slug: 'errores-comunes-remesas',
    date: '2025-01-10',
    excerpt:
      'Los errores más costosos que cometen los migrantes al enviar dinero a México y estrategias prácticas para evitarlos.',
    category: 'Consejos',
  },
  {
    title: 'Nuevas Opciones Digitales para Remesas en 2025',
    slug: 'nuevas-opciones-digitales-2025',
    date: '2025-01-05',
    excerpt:
      'Las apps y servicios más nuevos para enviar dinero a México. Comparación de características y costos.',
    category: 'Tecnología',
  },
]

export default function BlogPage() {
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
              <li className="text-white">Blog</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Blog de Remesas
          </h1>
          <p className="text-xl text-trust-blue-100 max-w-2xl">
            Noticias, consejos y actualizaciones para enviar dinero a México de
            forma inteligente.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium bg-trust-blue-100 text-trust-blue-700 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <time
                      className="text-sm text-neutral-500"
                      dateTime={post.date}
                    >
                      {new Date(post.date).toLocaleDateString('es-MX', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h2 className="font-bold text-xl text-neutral-800 mb-3">
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="hover:text-trust-blue-600"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-trust-blue-600 font-medium hover:underline"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-warm-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">
            ¿Buscas la Mejor Opción para Enviar Dinero?
          </h2>
          <p className="text-neutral-600 mb-6">
            Usa nuestra calculadora para comparar costos reales entre
            proveedores.
          </p>
          <Link href="/calculadora/" className="btn-primary">
            Comparar Proveedores
          </Link>
        </div>
      </section>
    </>
  )
}
