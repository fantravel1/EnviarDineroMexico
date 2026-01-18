import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Servicios Confiables para Enviar Dinero a México',
  description: 'Descubre los proveedores más confiables para enviar dinero a México. Comparamos seguridad, regulaciones, calificaciones y garantías. Servicios verificados 2025.',
  keywords: [
    'proveedores confiables para enviar dinero a México',
    'servicios seguros para enviar dinero a mexico',
    'es seguro enviar dinero por internet a mexico',
    'que plataformas son confiables para remesas',
    'servicios de remesas confiables mexico',
  ],
  openGraph: {
    title: 'Proveedores Confiables para Enviar Dinero a México',
    description: 'Los servicios más seguros y confiables para enviar remesas a México.',
    type: 'article',
    locale: 'es_MX',
  },
}

export default function ProveedoresConfiablesPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://enviardineromexico.com/' },
              { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://enviardineromexico.com/guias/' },
              { '@type': 'ListItem', position: 3, name: 'Proveedores Confiables', item: 'https://enviardineromexico.com/guias/proveedores-confiables/' },
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
                name: '¿Es seguro enviar dinero a México por internet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, los servicios regulados como Remitly, Sendwave, Wise y Western Union son seguros. Están licenciados como transmisores de dinero en EE.UU. y usan encriptación bancaria. Millones de personas envían remesas por internet cada día sin problemas.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué plataformas de envío de dinero a México son confiables?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las plataformas más confiables son: Remitly (4.9★, garantía de devolución), Sendwave (4.8★, parte de WorldRemit), Wise (4.7★, regulado en múltiples países), y Félix Pago. Todas están reguladas y tienen millones de usuarios.',
                },
              },
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
                <li className="text-white">Proveedores Confiables</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Proveedores Confiables para Enviar Dinero a México
            </h1>
            <p className="text-xl text-blue-100">
              Los servicios más seguros y con mejor reputación
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Answer */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-blue-800 mb-3">
                ¿Es Seguro Enviar Dinero por Internet?
              </h2>
              <p className="text-blue-700 mb-4">
                <strong>Sí</strong>, los servicios que recomendamos están regulados por el gobierno de EE.UU.
                como transmisores de dinero licenciados. Usan encriptación de grado bancario y
                tienen millones de usuarios satisfechos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Regulados</span>
                <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Encriptación SSL</span>
                <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Soporte 24/7</span>
              </div>
            </section>

            {/* What Makes a Provider Trustworthy */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Qué Hace Confiable a un Servicio?
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Regulación</h3>
                  <p className="text-green-700 text-sm">
                    Licencia de transmisor de dinero en EE.UU. (FinCEN) y regulación estatal.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Calificaciones</h3>
                  <p className="text-blue-700 text-sm">
                    4+ estrellas en App Store/Google Play con miles de reseñas verificadas.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-2">Seguridad</h3>
                  <p className="text-purple-700 text-sm">
                    Encriptación SSL de 256 bits, autenticación de dos factores, detección de fraude.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">Garantías</h3>
                  <p className="text-orange-700 text-sm">
                    Garantía de entrega, devolución si hay problemas, soporte al cliente en español.
                  </p>
                </div>
              </div>
            </section>

            {/* Trusted Providers */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Los Proveedores Más Confiables
              </h2>

              <div className="space-y-6">
                {/* Remitly */}
                <div className="border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl">Remitly</h3>
                      <p className="text-gray-500 text-sm">La app más popular</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-trust-blue text-white px-3 py-1 rounded-full text-sm font-bold">4.9★</div>
                      <p className="text-xs text-gray-500 mt-1">+5M usuarios</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600"><strong>Regulación:</strong></p>
                      <ul className="text-sm text-gray-500 mt-1">
                        <li>✓ FinCEN registrado</li>
                        <li>✓ Licenciado en 50 estados</li>
                        <li>✓ Empresa pública (NASDAQ)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600"><strong>Garantías:</strong></p>
                      <ul className="text-sm text-gray-500 mt-1">
                        <li>✓ Garantía de entrega</li>
                        <li>✓ Devolución si hay error</li>
                        <li>✓ Soporte 24/7 en español</li>
                      </ul>
                    </div>
                  </div>

                  <Link href="/reviews/remitly/" className="text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>

                {/* Sendwave */}
                <div className="border-2 border-green-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl">Sendwave</h3>
                      <p className="text-gray-500 text-sm">Propiedad de WorldRemit</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-success-green text-white px-3 py-1 rounded-full text-sm font-bold">4.8★</div>
                      <p className="text-xs text-gray-500 mt-1">+3M usuarios</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600"><strong>Regulación:</strong></p>
                      <ul className="text-sm text-gray-500 mt-1">
                        <li>✓ FinCEN registrado</li>
                        <li>✓ Parte de WorldRemit Group</li>
                        <li>✓ Regulado globalmente</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600"><strong>Ventajas:</strong></p>
                      <ul className="text-sm text-gray-500 mt-1">
                        <li>✓ $0 comisión siempre</li>
                        <li>✓ Transferencias instantáneas</li>
                        <li>✓ App muy bien calificada</li>
                      </ul>
                    </div>
                  </div>

                  <Link href="/reviews/sendwave/" className="text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>

                {/* Wise */}
                <div className="border-2 border-purple-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl">Wise</h3>
                      <p className="text-gray-500 text-sm">Antes TransferWise</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4.7★</div>
                      <p className="text-xs text-gray-500 mt-1">+16M usuarios</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600"><strong>Regulación:</strong></p>
                      <ul className="text-sm text-gray-500 mt-1">
                        <li>✓ Regulado en múltiples países</li>
                        <li>✓ Empresa pública (LSE)</li>
                        <li>✓ 16+ millones de clientes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600"><strong>Ventajas:</strong></p>
                      <ul className="text-sm text-gray-500 mt-1">
                        <li>✓ Tipo de cambio real</li>
                        <li>✓ Transparencia total</li>
                        <li>✓ Muy establecido</li>
                      </ul>
                    </div>
                  </div>

                  <Link href="/reviews/wise/" className="text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>

                {/* Western Union */}
                <div className="border-2 border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl">Western Union</h3>
                      <p className="text-gray-500 text-sm">El más conocido</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">3.5★</div>
                      <p className="text-xs text-gray-500 mt-1">170+ años</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600"><strong>Regulación:</strong></p>
                      <ul className="text-sm text-gray-500 mt-1">
                        <li>✓ Licenciado globalmente</li>
                        <li>✓ 170+ años de historia</li>
                        <li>✓ Empresa pública (NYSE)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600"><strong>Notas:</strong></p>
                      <ul className="text-sm text-gray-500 mt-1">
                        <li>• Más caro que apps</li>
                        <li>• Útil para emergencias</li>
                        <li>• Cobertura masiva en México</li>
                      </ul>
                    </div>
                  </div>

                  <Link href="/reviews/western-union/" className="text-trust-blue hover:underline text-sm font-medium">
                    Ver review completo →
                  </Link>
                </div>
              </div>
            </section>

            {/* Red Flags */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Señales de Alerta: Servicios a Evitar
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-800 mb-2">No tiene licencia visible</h3>
                  <p className="text-red-700 text-sm">
                    Todo transmisor de dinero legítimo en EE.UU. debe estar registrado con FinCEN
                    y tener licencias estatales. Evita servicios que no muestren sus licencias.
                  </p>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Tipos de cambio demasiado buenos</h3>
                  <p className="text-red-700 text-sm">
                    Si un servicio ofrece un tipo de cambio significativamente mejor que todos
                    los demás, es probable que sea una estafa o tenga cargos ocultos.
                  </p>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Piden información sensible extra</h3>
                  <p className="text-red-700 text-sm">
                    Nunca compartas contraseñas bancarias, PINs de tarjetas, o información
                    que no sea necesaria para la transferencia.
                  </p>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Sin reseñas o muchas negativas</h3>
                  <p className="text-red-700 text-sm">
                    Revisa las reseñas en App Store, Google Play y Trustpilot. Un servicio
                    legítimo tendrá miles de reseñas con calificación alta.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Es seguro enviar dinero a México por internet?
                  </h3>
                  <p className="text-gray-600">
                    <strong>Sí</strong>, los servicios regulados como Remitly, Sendwave, Wise y
                    Western Union son seguros. Están licenciados como transmisores de dinero en
                    EE.UU. y usan encriptación bancaria. Millones de personas envían remesas
                    por internet cada día sin problemas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué plataformas de envío de dinero a México son confiables?
                  </h3>
                  <p className="text-gray-600">
                    Las plataformas más confiables son: <strong>Remitly</strong> (4.9★, garantía de
                    devolución), <strong>Sendwave</strong> (4.8★, parte de WorldRemit),
                    <strong> Wise</strong> (4.7★, regulado en múltiples países), y
                    <strong> Félix Pago</strong>. Todas están reguladas y tienen millones de usuarios.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué pasa si mi dinero no llega?
                  </h3>
                  <p className="text-gray-600">
                    Los servicios confiables tienen garantía de entrega. Si hay un problema,
                    contacta al soporte al cliente. Remitly, por ejemplo, ofrece reembolso
                    completo si el dinero no llega en el tiempo prometido.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-trust-blue to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">El más confiable</h3>
              <p className="text-blue-100 text-sm mb-4">
                Remitly: 4.9★ con garantía de entrega.
              </p>
              <Link
                href="/reviews/remitly/"
                className="block w-full text-center bg-white text-trust-blue font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Ver Remitly
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Señales de confianza</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Registrado con FinCEN
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  4+ estrellas en App Store
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Soporte en español
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">✓</span>
                  Garantía de devolución
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Guías Relacionadas</h3>
              <div className="space-y-2">
                <Link href="/guias/aplicaciones-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Apps para enviar dinero →
                </Link>
                <Link href="/guias/como-enviar-dinero/" className="block text-trust-blue hover:underline text-sm">
                  Cómo enviar dinero →
                </Link>
                <Link href="/comparar/" className="block text-trust-blue hover:underline text-sm">
                  Comparar servicios →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
