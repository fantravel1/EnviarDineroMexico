import { Metadata } from 'next'
import { ComparisonCalculator, ProviderCard, ComparisonTable, AffiliateDisclosure } from '@/components'
import { providers } from '@/data/providers'
import Link from 'next/link'
import { mexicanImages } from '@/data/images'

export const metadata: Metadata = {
  title: 'Cómo Enviar Dinero a México desde Estados Unidos | Compara 2026',
  description:
    'Aprende cómo enviar dinero a México de Estados Unidos. Compara Remitly, Sendwave, Félix Pago y más. Encuentra dónde mandar dinero cerca de ti y cuánto puedes enviar por mes.',
  keywords: [
    'como enviar dinero a mexico',
    'cómo enviar dinero a méxico de estados unidos',
    'mandar dinero a mexico',
    'cómo mandar dinero a méxico',
    'donde enviar dinero a mexico',
    'donde enviar dinero a mexico cerca de mi',
    'cuanto dinero puedo enviar a mexico por mes',
    'remesas a mexico',
    'transferir dinero a mexico',
    'comparar servicios de remesas',
  ],
  openGraph: {
    title: 'Cómo Enviar Dinero a México desde Estados Unidos | Compara 2026',
    description:
      'Aprende cómo enviar dinero a México. Compara proveedores, encuentra ubicaciones cerca de ti y conoce los límites de envío.',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-image-section min-h-[600px] lg:min-h-[700px]">
        <img
          src={mexicanImages.guanajuatoNight.src(1920, 1080)}
          alt=""
          role="presentation"
          className="hero-bg object-cover w-full h-full"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="container-wide py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Cómo Enviar Dinero a México desde Estados Unidos
                </h1>
                <p className="text-lg md:text-xl text-trust-blue-100 mb-8 leading-relaxed">
                  Aprende cómo mandar dinero a México de forma segura y económica.
                  Compara Remitly, Sendwave, Félix Pago y más para encontrar dónde enviar dinero cerca de ti.
                </p>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <div className="glass-card flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
                    <svg className="w-5 h-5 text-success-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-white">100% en Español</span>
                  </div>
                  <div className="glass-card flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
                    <svg className="w-5 h-5 text-success-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-white">Comparaciones Actualizadas</span>
                  </div>
                  <div className="glass-card flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
                    <svg className="w-5 h-5 text-success-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-white">Sin Costo para Ti</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="stat-card">
                    <p className="text-3xl md:text-4xl font-bold text-white">$65B</p>
                    <p className="text-sm text-trust-blue-200 mt-1">Remesas anuales</p>
                  </div>
                  <div className="stat-card">
                    <p className="text-3xl md:text-4xl font-bold text-white">12M+</p>
                    <p className="text-sm text-trust-blue-200 mt-1">Personas enviando</p>
                  </div>
                  <div className="stat-card">
                    <p className="text-3xl md:text-4xl font-bold text-white">96%</p>
                    <p className="text-sm text-trust-blue-200 mt-1">Desde EE.UU.</p>
                  </div>
                </div>
              </div>

              {/* Calculator */}
              <div className="lg:pl-8">
                <ComparisonCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mexican Flag Decorative Strip */}
      <div className="mexican-gradient h-1" />

      {/* Affiliate Disclosure */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-4">
        <div className="container-wide">
          <AffiliateDisclosure />
        </div>
      </section>

      {/* Featured Providers */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              Los 3 Mejores Proveedores para Enviar Dinero a México
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Basado en comisiones más bajas, menor fricción y diseño móvil,
              estos tres proveedores son nuestra recomendación principal.
            </p>
            <div className="section-divider mt-6" />
          </div>

          {/* Decorative image banner */}
          <div className="rounded-2xl overflow-hidden max-w-3xl mx-auto mb-10">
            <img
              src={mexicanImages.colorfulArchitecture.src(800, 200)}
              alt={mexicanImages.colorfulArchitecture.alt}
              className="w-full h-32 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              Comparación Detallada de Costos por Proveedor
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Mira exactamente cuánto cuesta enviar diferentes cantidades con cada proveedor.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <ComparisonTable amounts={[200, 500, 1000]} />

          <div className="text-center mt-8">
            <Link href="/comparar/" className="btn-primary">
              Ver Todas las Comparaciones
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              ¿Cómo Funciona?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Enviar dinero a México nunca ha sido más fácil. Sigue estos simples pasos.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-trust-blue-600 via-success-green-500 to-trust-blue-600 opacity-30" />

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Compara',
                  description: 'Usa nuestra calculadora para ver las comisiones y tipos de cambio de cada proveedor.',
                },
                {
                  step: '2',
                  title: 'Elige',
                  description: 'Selecciona el proveedor que mejor se adapte a tus necesidades y presupuesto.',
                },
                {
                  step: '3',
                  title: 'Regístrate',
                  description: 'Crea una cuenta en la app o plataforma del proveedor elegido.',
                },
                {
                  step: '4',
                  title: 'Envía',
                  description: 'Ingresa los datos de tu familiar y envía el dinero. ¡Llegará en minutos!',
                },
              ].map((item) => (
                <div key={item.step} className="text-center relative">
                  {/* Numbered gradient circle */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-trust-blue-600 to-success-green-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  {/* Card container */}
                  <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-neutral-800 mb-2">{item.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinos Populares */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              Destinos Populares
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Guías específicas para enviar dinero a los estados más populares de México.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/enviar-dinero-a-mexico/a-jalisco/" className="image-card h-64">
              <img
                src={mexicanImages.architecturalDetail.src(600, 400)}
                alt={mexicanImages.architecturalDetail.alt}
              />
              <div className="image-card-overlay">
                <h3 className="text-xl font-bold text-white">Jalisco</h3>
                <p className="text-sm text-white/80">Guadalajara y más</p>
              </div>
            </Link>

            <Link href="/enviar-dinero-a-mexico/a-michoacan/" className="image-card h-64">
              <img
                src={mexicanImages.mexicanLandscape.src(600, 400)}
                alt={mexicanImages.mexicanLandscape.alt}
              />
              <div className="image-card-overlay">
                <h3 className="text-xl font-bold text-white">Michoacán</h3>
                <p className="text-sm text-white/80">Morelia y región</p>
              </div>
            </Link>

            <Link href="/enviar-dinero-a-mexico/a-oaxaca/" className="image-card h-64">
              <img
                src={mexicanImages.mexicanMarket.src(600, 400)}
                alt={mexicanImages.mexicanMarket.alt}
              />
              <div className="image-card-overlay">
                <h3 className="text-xl font-bold text-white">Oaxaca</h3>
                <p className="text-sm text-white/80">Tradición y cultura</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <div className="section-divider mt-2 mb-8" />
          </div>

          {/* Decorative culture image */}
          <div className="rounded-2xl overflow-hidden max-w-2xl mx-auto mb-10">
            <img
              src={mexicanImages.mexicanCulture.src(400, 200)}
              alt={mexicanImages.mexicanCulture.alt}
              className="w-full h-40 object-cover"
            />
          </div>

          <div className="space-y-4">
            {[
              {
                question: '¿Cómo enviar dinero a México de Estados Unidos?',
                answer: 'Para enviar dinero a México desde Estados Unidos, necesitas: 1) Una identificación válida (licencia, pasaporte o matrícula consular), 2) Una tarjeta de débito o cuenta bancaria, y 3) Los datos de tu destinatario. Puedes usar apps como Remitly, Sendwave o Félix Pago. El proceso toma solo 5-10 minutos desde tu celular.',
              },
              {
                question: '¿Dónde puedo enviar dinero a México cerca de mí?',
                answer: 'Puedes enviar dinero a México desde cualquier lugar usando apps móviles como Remitly, Sendwave o Félix Pago. Si prefieres ir en persona, Western Union y MoneyGram tienen agentes en farmacias, tiendas de abarrotes y supermercados. Sin embargo, las apps son más baratas y convenientes.',
              },
              {
                question: '¿Cuánto dinero puedo enviar a México por mes?',
                answer: 'Los límites varían por proveedor: Remitly permite hasta $2,999/día y $10,000/mes para cuentas verificadas. Sendwave tiene límites similares. Western Union puede permitir hasta $7,500/transacción. En México, las remesas de familiares directos son exentas de impuestos sin límite, pero los bancos reportan depósitos mayores a 15,000 MXN/mes al SAT.',
              },
              {
                question: '¿Cuál es la forma más barata de mandar dinero a México?',
                answer: 'Para montos pequeños ($200-500), Sendwave suele ser la opción más económica con su política de cero comisiones. Para montos mayores ($500+), Remitly ofrece transferencias sin comisión. Félix Pago es ideal para la primera transferencia ya que es completamente gratis.',
              },
              {
                question: '¿Cuánto tarda en llegar el dinero a México?',
                answer: 'Con transferencias Express de Remitly o transferencias de Félix Pago, el dinero puede llegar en minutos. Sendwave también ofrece entregas rápidas para depósitos bancarios. Las opciones de economía pueden tardar 3-5 días hábiles pero suelen tener mejores tipos de cambio.',
              },
              {
                question: '¿Es seguro enviar dinero por estas apps?',
                answer: 'Sí, todos los proveedores que recomendamos están regulados y utilizan encriptación bancaria. Remitly es una empresa pública (NASDAQ: RELY), Sendwave pertenece a Zepz (WorldRemit Group), y Félix Pago ha recibido inversión de firmas reconocidas como QED Investors.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-neutral-50 rounded-2xl border border-neutral-200 shadow-sm group transition-all duration-200 hover:shadow-md"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-neutral-800 hover:text-trust-blue-600 transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-trust-blue-500 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/guias/" className="text-trust-blue-600 hover:underline font-medium text-lg">
              Ver más guías y recursos →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-image-section min-h-[350px]">
        <img
          src={mexicanImages.celebration.src(1920, 600)}
          alt=""
          role="presentation"
          className="hero-bg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/70 to-neutral-900/80" />
        <div className="hero-content">
          <div className="container-narrow text-center py-20 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              ¿Listo para Enviar Dinero a tu Familia?
            </h2>
            <p className="text-lg text-neutral-200 mb-10 max-w-xl mx-auto leading-relaxed">
              Usa nuestra calculadora gratuita para encontrar la mejor opción
              y comienza a ahorrar en cada transferencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calculadora/"
                className="btn-cta bg-white text-neutral-900 hover:bg-neutral-100 font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Usar Calculadora Gratis
              </Link>
              <Link
                href="/guias/como-enviar-dinero-primera-vez/"
                className="btn-secondary border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200"
              >
                Guía para Principiantes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'EnviarDineroMexico',
            url: 'https://enviardineromexico.com',
            description: 'La guía más completa en español para enviar dinero a México',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://enviardineromexico.com/buscar?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
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
                name: '¿Cómo enviar dinero a México de Estados Unidos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para enviar dinero a México desde Estados Unidos, necesitas: 1) Una identificación válida (licencia, pasaporte o matrícula consular), 2) Una tarjeta de débito o cuenta bancaria, y 3) Los datos de tu destinatario. Puedes usar apps como Remitly, Sendwave o Félix Pago. El proceso toma solo 5-10 minutos desde tu celular.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Dónde puedo enviar dinero a México cerca de mí?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Puedes enviar dinero a México desde cualquier lugar usando apps móviles como Remitly, Sendwave o Félix Pago. Si prefieres ir en persona, Western Union y MoneyGram tienen agentes en farmacias, tiendas de abarrotes y supermercados.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto dinero puedo enviar a México por mes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Los límites varían por proveedor: Remitly permite hasta $2,999/día y $10,000/mes para cuentas verificadas. Sendwave tiene límites similares. Western Union puede permitir hasta $7,500/transacción. En México, las remesas de familiares directos son exentas de impuestos sin límite.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuál es la forma más barata de mandar dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para montos pequeños ($200-500), Sendwave suele ser la opción más económica con su política de cero comisiones. Para montos mayores ($500+), Remitly ofrece transferencias sin comisión.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto tarda en llegar el dinero a México?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Con transferencias Express de Remitly o transferencias de Félix Pago, el dinero puede llegar en minutos. Sendwave también ofrece entregas rápidas para depósitos bancarios.',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
