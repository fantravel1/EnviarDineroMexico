import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nuevas Opciones Digitales para Remesas en 2025 | EnviarDineroMexico',
  description:
    'Las apps y servicios más nuevos para enviar dinero a México en 2025. Comparación de características, costos y experiencia de usuario.',
}

export default function NuevasOpcionesDigitalesPage() {
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
              <li className="text-neutral-800">Nuevas Opciones 2025</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-trust-blue-100 text-trust-blue-700 px-2 py-1 rounded">
                Tecnología
              </span>
              <time className="text-sm text-neutral-500" dateTime="2025-01-05">
                5 de enero de 2025
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Nuevas Opciones Digitales para Remesas en 2025
            </h1>
            <p className="text-xl text-neutral-600">
              El mercado de remesas está evolucionando rápidamente. Conoce las
              nuevas opciones que hacen más fácil y barato enviar dinero a
              México.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 mb-6">
              En los últimos años, nuevas empresas fintech han revolucionado el
              mercado de remesas. Ya no es necesario hacer fila en Western Union
              o pagar comisiones altas. Estas son las opciones más innovadoras
              para 2025.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Tendencias Clave en Remesas Digitales
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-trust-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-trust-blue-800 mb-2">
                  📱 Apps Móviles Primero
                </h3>
                <p className="text-sm text-trust-blue-700">
                  Nuevos servicios diseñados específicamente para smartphones,
                  con procesos de verificación y envío simplificados.
                </p>
              </div>
              <div className="bg-success-50 p-4 rounded-lg">
                <h3 className="font-bold text-success-800 mb-2">
                  ⚡ Entregas Instantáneas
                </h3>
                <p className="text-sm text-success-700">
                  Depósitos a tarjeta de débito en segundos, eliminando la
                  espera de días hábiles.
                </p>
              </div>
              <div className="bg-warm-100 p-4 rounded-lg">
                <h3 className="font-bold text-warm-800 mb-2">
                  💰 Costos Más Bajos
                </h3>
                <p className="text-sm text-warm-700">
                  La competencia ha reducido el costo promedio de enviar $200 de
                  $15 a menos de $5.
                </p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg">
                <h3 className="font-bold text-neutral-800 mb-2">
                  🔐 Mayor Seguridad
                </h3>
                <p className="text-sm text-neutral-700">
                  Autenticación biométrica, encriptación avanzada y protección
                  contra fraude.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Las Apps Más Innovadoras
            </h2>

            <h3 className="text-xl font-bold text-neutral-800 mt-6 mb-3">
              1. Félix Pago – El Favorito de la Comunidad
            </h3>
            <p className="text-neutral-700 mb-4">
              Fundado por un inmigrante mexicano, Félix Pago entiende las
              necesidades de la comunidad. Su app en español fue diseñada para
              ser fácil de usar, incluso para personas no familiarizadas con la
              tecnología.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700 mb-4">
              <li>Entrega instantánea a cualquier tarjeta de débito mexicana</li>
              <li>Soporte al cliente en español vía WhatsApp</li>
              <li>Sin comisión para primer envío</li>
              <li>Programa de referidos: $10 por cada amigo que invite</li>
            </ul>
            <p className="text-neutral-700 mb-4">
              <Link
                href="/reviews/felix-pago/"
                className="text-trust-blue-600 hover:underline"
              >
                Leer reseña completa de Félix Pago →
              </Link>
            </p>

            <h3 className="text-xl font-bold text-neutral-800 mt-6 mb-3">
              2. Sendwave – Simplicidad Máxima
            </h3>
            <p className="text-neutral-700 mb-4">
              Sendwave (ahora parte de WorldRemit) ofrece una de las
              experiencias más simples del mercado. Sin cuenta bancaria
              requerida para enviar, y con un proceso de verificación que toma
              minutos.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700 mb-4">
              <li>0% comisión (el costo está en el tipo de cambio ~2%)</li>
              <li>Solo necesitas licencia de conducir o ID estatal</li>
              <li>Paga con tarjeta de débito, sin banco necesario</li>
              <li>Tracking en tiempo real del envío</li>
            </ul>
            <p className="text-neutral-700 mb-4">
              <Link
                href="/reviews/sendwave/"
                className="text-trust-blue-600 hover:underline"
              >
                Leer reseña completa de Sendwave →
              </Link>
            </p>

            <h3 className="text-xl font-bold text-neutral-800 mt-6 mb-3">
              3. Wise – El Rey del Tipo de Cambio
            </h3>
            <p className="text-neutral-700 mb-4">
              Para quienes envían montos grandes, Wise ofrece el tipo de cambio
              más competitivo del mercado. Su tarifa transparente muestra
              exactamente cuánto pagas.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-700 mb-4">
              <li>
                Tipo de cambio medio del mercado (sin markup escondido)
              </li>
              <li>Comisión baja y transparente (~0.5%)</li>
              <li>Ideal para envíos de $500+</li>
              <li>También ofrece tarjeta de débito multimoneda</li>
            </ul>
            <p className="text-neutral-700 mb-4">
              <Link
                href="/reviews/wise/"
                className="text-trust-blue-600 hover:underline"
              >
                Leer reseña completa de Wise →
              </Link>
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Comparación Rápida: Nuevos vs Tradicionales
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm my-4 border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-3 border">Servicio</th>
                    <th className="text-left p-3 border">Costo ($300)</th>
                    <th className="text-left p-3 border">Velocidad</th>
                    <th className="text-left p-3 border">App</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-success-50">
                    <td className="p-3 border font-medium">Félix Pago</td>
                    <td className="p-3 border">~$6</td>
                    <td className="p-3 border">Instantáneo</td>
                    <td className="p-3 border">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="bg-success-50">
                    <td className="p-3 border font-medium">Wise</td>
                    <td className="p-3 border">~$4.50</td>
                    <td className="p-3 border">1-2 días</td>
                    <td className="p-3 border">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="bg-success-50">
                    <td className="p-3 border font-medium">Sendwave</td>
                    <td className="p-3 border">~$6</td>
                    <td className="p-3 border">Minutos</td>
                    <td className="p-3 border">⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium">Remitly</td>
                    <td className="p-3 border">~$5</td>
                    <td className="p-3 border">Minutos-días</td>
                    <td className="p-3 border">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="bg-warning-50">
                    <td className="p-3 border font-medium">Western Union</td>
                    <td className="p-3 border">~$15</td>
                    <td className="p-3 border">Minutos-días</td>
                    <td className="p-3 border">⭐⭐⭐</td>
                  </tr>
                  <tr className="bg-warning-50">
                    <td className="p-3 border font-medium">MoneyGram</td>
                    <td className="p-3 border">~$12</td>
                    <td className="p-3 border">Minutos-días</td>
                    <td className="p-3 border">⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Lo Que Viene en 2025
            </h2>
            <p className="text-neutral-700 mb-4">
              El mercado de remesas sigue evolucionando. Estas son las
              tendencias que esperamos ver:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>
                <strong>Integración con billeteras digitales:</strong> Más
                opciones para enviar a CoDi, Mercado Pago y otras plataformas
              </li>
              <li>
                <strong>Remesas con criptomonedas:</strong> Opciones de
                stablecoins para reducir costos (aunque con curva de
                aprendizaje)
              </li>
              <li>
                <strong>Servicios adicionales:</strong> Pago de servicios,
                recargas telefónicas y más desde la misma app
              </li>
              <li>
                <strong>Mayor competencia de bancos:</strong> Bancos
                tradicionales mejorando sus servicios de transferencia
              </li>
            </ul>

            <div className="bg-trust-blue-50 border-l-4 border-trust-blue-600 p-6 my-8">
              <h3 className="font-bold text-trust-blue-800 mb-2">
                Conclusión
              </h3>
              <p className="text-trust-blue-700">
                Nunca ha sido mejor momento para enviar dinero a México. Las
                nuevas opciones digitales ofrecen mejores precios, mayor
                velocidad y experiencias de usuario superiores. Te recomendamos
                probar al menos 2-3 servicios diferentes para encontrar el que
                mejor funcione para ti.
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
                Comparar Todos los Servicios
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  )
}
