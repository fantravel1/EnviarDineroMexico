import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Cómo Enviar Dinero a México desde EE.UU. | Guía 2025',
  description: 'Aprende cómo enviar dinero a México paso a paso. Compara las mejores opciones, comisiones, tiempos de entrega y requisitos. Guía completa 2025 con costos reales.',
  keywords: [
    'cómo enviar dinero a México',
    'como enviar dinero a mexico',
    'enviar dinero a mexico desde estados unidos',
    'mandar dinero a mexico',
    'transferir dinero a mexico',
    'envio de dinero a mexico',
    'como mandar dinero a mexico',
    'remesas a mexico',
  ],
  openGraph: {
    title: 'Cómo Enviar Dinero a México desde Estados Unidos | Guía 2025',
    description: 'Guía completa para enviar dinero a México. Compara opciones, costos y tiempos de entrega.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function ComoEnviarDineroPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Cómo Enviar Dinero a México desde Estados Unidos',
            description: 'Guía paso a paso para enviar dinero a México de forma segura y económica',
            totalTime: 'PT10M',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'USD',
              value: '0-5',
            },
            step: [
              {
                '@type': 'HowToStep',
                name: 'Elige un servicio de envío',
                text: 'Compara opciones como Sendwave, Remitly, Wise o Félix Pago según tus necesidades',
              },
              {
                '@type': 'HowToStep',
                name: 'Crea tu cuenta',
                text: 'Regístrate con tu nombre, correo electrónico y sube tu identificación',
              },
              {
                '@type': 'HowToStep',
                name: 'Ingresa datos del destinatario',
                text: 'Proporciona el nombre completo y CLABE bancario o ubicación para cobro en efectivo',
              },
              {
                '@type': 'HowToStep',
                name: 'Selecciona el monto',
                text: 'Ingresa cuánto quieres enviar y revisa el tipo de cambio y comisiones',
              },
              {
                '@type': 'HowToStep',
                name: 'Realiza el pago',
                text: 'Paga con tarjeta de débito o cuenta bancaria para evitar cargos extra',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Cuál es la forma más barata de enviar dinero a México online?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para enviar dinero barato a México, Sendwave ofrece 0% comisión en todas las transferencias. Félix Pago tiene la primera transferencia gratis. Remitly ofrece promociones frecuentes sin comisión para depósitos bancarios.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo puedo enviar dinero a México desde Estados Unidos sin perder en el tipo de cambio?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para obtener el mejor tipo de cambio, usa servicios como Wise que ofrecen el tipo de cambio medio del mercado con una comisión transparente. Evita Western Union y casas de cambio que tienen márgenes ocultos del 2-4%.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué documentos necesito para enviar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Necesitas una identificación válida (licencia de conducir, pasaporte, ID estatal o matrícula consular). No se requiere SSN para montos pequeños. También necesitas los datos del destinatario: nombre completo y CLABE bancario o ubicación para efectivo.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo enviar dinero rápido a México en minutos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para envío instantáneo, usa Sendwave o Félix Pago para depósito bancario (llega en minutos). Para efectivo rápido, Remitly Express y Western Union ofrecen disponibilidad en minutos pero con comisiones más altas.',
                },
              },
            ],
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
              { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://enviardineromexico.com/guias/' },
              { '@type': 'ListItem', position: 3, name: 'Cómo Enviar Dinero', item: 'https://enviardineromexico.com/guias/como-enviar-dinero/' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-blue to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-blue-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias/" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Cómo Enviar Dinero</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo Enviar Dinero a México desde Estados Unidos
            </h1>
            <p className="text-xl text-blue-100">
              Guía completa 2025: compara opciones, costos y tiempos de entrega
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer Box */}
            <section className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-green-800 mb-3">
                Respuesta Rápida: ¿Cómo enviar dinero a México?
              </h2>
              <p className="text-green-700 mb-4">
                La forma más fácil es usar una <strong>app en tu celular</strong> como Sendwave, Remitly o Félix Pago.
                En 5-10 minutos puedes enviar dinero que llega en minutos a la cuenta bancaria de tu familia
                o disponible para cobrar en efectivo. Solo necesitas tu ID y tarjeta de débito.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/reviews/sendwave/" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                  Sendwave: $0 comisión
                </Link>
                <Link href="/reviews/remitly/" className="bg-white text-green-700 px-4 py-2 rounded-lg text-sm font-medium border border-green-300 hover:bg-green-50">
                  Remitly: Más popular
                </Link>
              </div>
            </section>

            {/* Introduction */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Envío de Dinero a México: Lo Que Debes Saber
              </h2>
              <p className="text-gray-700 mb-4">
                Cada año, millones de personas en Estados Unidos envían más de <strong>$60 mil millones</strong> en
                remesas a México. Ya sea para apoyar a tu familia, pagar gastos de emergencia, o enviar
                dinero regularmente, hay muchas opciones disponibles hoy en día.
              </p>
              <p className="text-gray-700 mb-4">
                La buena noticia es que <strong>ya no necesitas ir a una tienda física</strong> y pagar altas
                comisiones. Con tu celular puedes enviar dinero en minutos, a veces completamente gratis.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-trust-blue">5-10 min</div>
                  <div className="text-sm text-gray-600">Tiempo para enviar</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-success-green">$0-5</div>
                  <div className="text-sm text-gray-600">Costo típico por envío</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">Minutos</div>
                  <div className="text-sm text-gray-600">Tiempo de llegada</div>
                </div>
              </div>
            </section>

            {/* Options Overview */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Opciones para Enviar Dinero a México
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-trust-blue p-4 bg-blue-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Apps Móviles (Recomendado)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Sendwave, Remitly, Félix Pago, Wise. Las más baratas y rápidas.
                    Envías desde tu celular en minutos.
                  </p>
                  <p className="text-success-green font-medium text-sm">Comisión: $0-5 | Tiempo: Minutos a horas</p>
                </div>

                <div className="border-l-4 border-gray-300 p-4 bg-gray-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Servicios Online</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Xoom (PayPal), WorldRemit. Buenos para quienes ya tienen cuenta PayPal
                    o prefieren usar computadora.
                  </p>
                  <p className="text-gray-600 font-medium text-sm">Comisión: $0-10 | Tiempo: Minutos a 1 día</p>
                </div>

                <div className="border-l-4 border-orange-300 p-4 bg-orange-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tiendas Físicas</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Western Union, MoneyGram, Ria. En Walmart, Walgreens, tiendas locales.
                    Más caro pero útil si no tienes smartphone.
                  </p>
                  <p className="text-orange-600 font-medium text-sm">Comisión: $5-15+ | Tiempo: Minutos a horas</p>
                </div>

                <div className="border-l-4 border-purple-300 p-4 bg-purple-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Transferencia Bancaria</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Directamente desde tu banco a un banco en México. Más lento y con
                    comisiones altas, no recomendado para remesas.
                  </p>
                  <p className="text-purple-600 font-medium text-sm">Comisión: $25-50 | Tiempo: 3-5 días</p>
                </div>
              </div>
            </section>

            {/* Step by Step */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cómo Enviar Dinero a México: Paso a Paso
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Elige un servicio de envío
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Considera estos factores al elegir:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li><strong>Costo total:</strong> Comisión + tipo de cambio</li>
                      <li><strong>Velocidad:</strong> ¿Cuánto tardará en llegar?</li>
                      <li><strong>Método de entrega:</strong> ¿Banco o efectivo?</li>
                      <li><strong>Facilidad:</strong> ¿Qué tan fácil es usar?</li>
                    </ul>
                    <Link href="/comparar/" className="inline-block mt-2 text-trust-blue hover:underline">
                      Comparar todos los servicios →
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Crea tu cuenta
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Descarga la app o visita el sitio web. Necesitarás proporcionar:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Nombre completo (como aparece en tu ID)</li>
                      <li>Correo electrónico</li>
                      <li>Número de teléfono</li>
                      <li>Dirección en Estados Unidos</li>
                      <li>Foto de tu identificación (para verificación)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Ingresa los datos de tu destinatario
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800">Para Depósito Bancario</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>Nombre completo del titular</li>
                          <li>CLABE (18 dígitos)</li>
                          <li>Nombre del banco</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800">Para Cobro en Efectivo</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>Nombre completo</li>
                          <li>Ciudad y Estado</li>
                          <li>Dónde quieren cobrar</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Selecciona el monto a enviar
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Verás exactamente:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Cuánto pagas en dólares</li>
                      <li>La comisión del servicio</li>
                      <li>El tipo de cambio que recibirás</li>
                      <li>Cuántos pesos llegará a tu familia</li>
                    </ul>
                    <Link href="/calculadora/" className="inline-block mt-2 text-trust-blue hover:underline">
                      Usar calculadora de costos →
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Paga la transferencia
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Las opciones de pago más comunes son:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li><strong>Tarjeta de débito:</strong> La más rápida y económica</li>
                      <li><strong>Cuenta bancaria (ACH):</strong> Sin comisión extra pero más lento</li>
                      <li><strong>Tarjeta de crédito:</strong> Funciona pero con cargo extra del 2-3%</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-lg">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      ¡Listo! El dinero está en camino
                    </h3>
                    <p className="text-gray-600">
                      Recibirás confirmación por correo o SMS. Tu familia recibirá notificación
                      cuando el dinero esté disponible para cobrar o depositado en su cuenta.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Servicios para Enviar Dinero a México
              </h2>

              <div className="space-y-4">
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Sendwave</h3>
                    <span className="bg-success-green text-white px-2 py-1 rounded text-sm font-medium">
                      Más Barato
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>$0 comisión siempre.</strong> Mejor tipo de cambio. Ideal para
                    envíos regulares a cuenta bancaria. Llega en minutos.
                  </p>
                  <Link href="/reviews/sendwave/" className="text-trust-blue hover:underline text-sm">
                    Ver detalles →
                  </Link>
                </div>

                <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Remitly</h3>
                    <span className="bg-trust-blue text-white px-2 py-1 rounded text-sm font-medium">
                      Más Confiable
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    La app mejor calificada (4.9★). Excelente para cobro en efectivo.
                    Garantía de entrega. Amplia cobertura en México.
                  </p>
                  <Link href="/reviews/remitly/" className="text-trust-blue hover:underline text-sm">
                    Ver detalles →
                  </Link>
                </div>

                <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Wise</h3>
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-medium">
                      Mejor Tipo de Cambio
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Tipo de cambio real del mercado. Comisión transparente y baja.
                    Ideal para montos grandes ($1,000+).
                  </p>
                  <Link href="/reviews/wise/" className="text-trust-blue hover:underline text-sm">
                    Ver detalles →
                  </Link>
                </div>

                <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">Félix Pago</h3>
                    <span className="bg-warm-accent text-white px-2 py-1 rounded text-sm font-medium">
                      Primera Vez Gratis
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Primera transferencia 100% gratis. Funciona desde WhatsApp sin
                    descargar app. Perfecto para principiantes.
                  </p>
                  <Link href="/reviews/felix-pago/" className="text-trust-blue hover:underline text-sm">
                    Ver detalles →
                  </Link>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/comparar/" className="btn-primary">
                  Comparar Todos los Servicios
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes sobre Enviar Dinero a México
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuál es la forma más barata de enviar dinero a México online?
                  </h3>
                  <p className="text-gray-600">
                    Para enviar dinero barato a México, <strong>Sendwave</strong> ofrece 0% comisión en todas
                    las transferencias. <strong>Félix Pago</strong> tiene la primera transferencia gratis.
                    Remitly ofrece promociones frecuentes sin comisión para depósitos bancarios.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cómo puedo enviar dinero a México sin perder en el tipo de cambio?
                  </h3>
                  <p className="text-gray-600">
                    Para obtener el mejor tipo de cambio, usa servicios como <strong>Wise</strong> que
                    ofrecen el tipo de cambio medio del mercado con una comisión transparente. Evita
                    Western Union y casas de cambio que tienen márgenes ocultos del 2-4%.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué documentos necesito para enviar dinero a México?
                  </h3>
                  <p className="text-gray-600">
                    Necesitas una <strong>identificación válida</strong> (licencia de conducir, pasaporte,
                    ID estatal o matrícula consular). No se requiere SSN para montos pequeños. También
                    necesitas los datos del destinatario: nombre completo y CLABE bancario o ubicación
                    para efectivo.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cómo enviar dinero rápido a México en minutos?
                  </h3>
                  <p className="text-gray-600">
                    Para envío instantáneo, usa <strong>Sendwave o Félix Pago</strong> para depósito
                    bancario (llega en minutos). Para efectivo rápido, Remitly Express y Western Union
                    ofrecen disponibilidad en minutos pero con comisiones más altas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Puedo enviar dinero a México directamente a cuenta bancaria?
                  </h3>
                  <p className="text-gray-600">
                    Sí, la mayoría de los servicios permiten enviar directamente a cualquier cuenta
                    bancaria en México usando el <strong>número CLABE de 18 dígitos</strong>. Es la
                    opción más rápida y generalmente más barata que el cobro en efectivo.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Es seguro enviar dinero a México por internet?
                  </h3>
                  <p className="text-gray-600">
                    Sí, los servicios que recomendamos están <strong>regulados por el gobierno de EE.UU.</strong> y
                    usan encriptación bancaria. Millones de personas envían remesas por internet cada día.
                    Busca servicios con licencia de transmisor de dinero y buenas calificaciones.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Consejos para Enviar Dinero a México
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Usa tarjeta de débito</h3>
                  <p className="text-green-700 text-sm">
                    Las tarjetas de crédito cobran un cargo adicional del 2-3%.
                    La tarjeta de débito es más económica.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Compara el costo total</h3>
                  <p className="text-blue-700 text-sm">
                    No solo veas la comisión. Compara cuántos pesos recibirá
                    tu familia después de todo.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Elige depósito bancario</h3>
                  <p className="text-purple-700 text-sm">
                    Generalmente es más barato y rápido que el cobro en
                    efectivo. Y tu familia no tiene que salir.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Verifica los datos</h3>
                  <p className="text-orange-700 text-sm">
                    El nombre debe coincidir exactamente con la ID del
                    destinatario. Verifica el CLABE antes de enviar.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="bg-gradient-to-br from-trust-blue to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Empieza a enviar hoy</h3>
              <p className="text-blue-100 text-sm mb-4">
                Compara los mejores servicios y encuentra la opción más económica para ti.
              </p>
              <Link
                href="/comparar/"
                className="block w-full text-center bg-white text-trust-blue font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Comparar servicios
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/enviar-dinero-sin-comisiones/" className="block text-trust-blue hover:underline text-sm">
                  Enviar sin comisiones →
                </Link>
                <Link href="/guias/mejor-tipo-de-cambio/" className="block text-trust-blue hover:underline text-sm">
                  Mejor tipo de cambio →
                </Link>
                <Link href="/guias/tiempo-entrega-envio/" className="block text-trust-blue hover:underline text-sm">
                  Tiempos de entrega →
                </Link>
                <Link href="/guias/requisitos-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Requisitos y documentos →
                </Link>
                <Link href="/guias/como-enviar-dinero-primera-vez/" className="block text-trust-blue hover:underline text-sm">
                  Guía para principiantes →
                </Link>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Calcula tu envío</h3>
              <p className="text-gray-600 text-sm mb-4">
                Compara costos reales de diferentes servicios para tu monto específico.
              </p>
              <Link
                href="/calculadora/"
                className="block w-full text-center bg-success-green text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Usar calculadora
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Por qué confiar en nosotros</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Comparamos precios reales actualizados
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Solo recomendamos servicios regulados
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Sin publicidad engañosa
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Información verificada por expertos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
