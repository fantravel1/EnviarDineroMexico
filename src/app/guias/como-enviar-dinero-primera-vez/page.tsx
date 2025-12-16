import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Cómo Enviar Dinero a México por Primera Vez | Guía 2025',
  description: 'Guía paso a paso para enviar dinero a México por primera vez. Qué documentos necesitas, mejores opciones para principiantes, errores comunes a evitar.',
  keywords: ['como enviar dinero a mexico', 'primera transferencia mexico', 'enviar remesas por primera vez', 'guia enviar dinero mexico'],
}

export default function PrimeraVezPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-success-green to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-green-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Primera Vez</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo Enviar Dinero a México por Primera Vez
            </h1>
            <p className="text-xl text-green-100">
              Guía completa paso a paso para principiantes
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Primera Vez Enviando Dinero a México?
              </h2>
              <p className="text-gray-700 mb-4">
                Enviar dinero a tu familia en México es más fácil y barato que nunca.
                Ya no necesitas ir a un agente de Western Union y pagar altas comisiones.
                Con tu celular puedes enviar dinero en minutos, a veces completamente gratis.
              </p>
              <p className="text-gray-700">
                Esta guía te llevará paso a paso por todo lo que necesitas saber para
                hacer tu primera transferencia de forma segura y económica.
              </p>
            </section>

            {/* What You Need */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Lo Que Necesitas Para Empezar
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">📱 Un smartphone o computadora</h3>
                  <p className="text-green-700 text-sm">
                    La mayoría de servicios funcionan desde tu celular. Si no tienes smartphone,
                    Félix Pago funciona desde WhatsApp en cualquier teléfono.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🪪 Identificación válida</h3>
                  <p className="text-blue-700 text-sm">
                    Licencia de conducir, ID estatal, pasaporte, o matrícula consular.
                    <strong> No necesitas SSN</strong> para montos pequeños.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">💳 Forma de pago</h3>
                  <p className="text-purple-700 text-sm">
                    Tarjeta de débito (más común), cuenta bancaria, o tarjeta prepagada.
                    Las tarjetas de crédito funcionan pero tienen cargos extra.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">📋 Datos de tu destinatario</h3>
                  <p className="text-orange-700 text-sm">
                    Nombre completo y para depósito bancario: número CLABE de 18 dígitos.
                    Para efectivo: solo nombre y ubicación donde cobrarán.
                  </p>
                </div>
              </div>
            </section>

            {/* Step by Step */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Guía Paso a Paso
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Elige un servicio de envío
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Para tu primera vez, recomendamos <strong>Félix Pago</strong> porque:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Tu primera transferencia es <strong>completamente gratis</strong></li>
                      <li>Funciona desde WhatsApp (no necesitas descargar app)</li>
                      <li>El proceso toma solo 5 minutos</li>
                      <li>El dinero llega instantáneamente</li>
                    </ul>
                    <Link href="/reviews/felix-pago" className="inline-block mt-2 text-trust-blue hover:underline">
                      Ver cómo usar Félix Pago →
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Crea tu cuenta
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Necesitarás proporcionar:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Tu nombre completo (como aparece en tu ID)</li>
                      <li>Correo electrónico</li>
                      <li>Número de teléfono</li>
                      <li>Foto de tu identificación (para verificación)</li>
                    </ul>
                    <p className="text-gray-500 text-sm mt-2">
                      La verificación puede ser instantánea o tomar hasta 24 horas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Ingresa los datos de tu destinatario
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Dependiendo de cómo quieres que reciban el dinero:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800">Depósito Bancario</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• Nombre del titular</li>
                          <li>• CLABE (18 dígitos)</li>
                          <li>• Nombre del banco</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800">Cobro en Efectivo</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• Nombre completo</li>
                          <li>• Ciudad/Estado</li>
                          <li>• Dónde quieren cobrar</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Ingresa el monto a enviar
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Verás exactamente:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Cuánto pagas en dólares</li>
                      <li>La comisión (si hay)</li>
                      <li>El tipo de cambio</li>
                      <li>Cuántos pesos recibirá tu familia</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-success-green text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Paga la transferencia
                    </h3>
                    <p className="text-gray-600 mb-3">
                      La forma más común es con tarjeta de débito. Ingresa:
                    </p>
                    <ul className="text-gray-600 list-disc list-inside space-y-1">
                      <li>Número de tarjeta</li>
                      <li>Fecha de vencimiento</li>
                      <li>CVV (código de 3 dígitos atrás)</li>
                      <li>Código postal de facturación</li>
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
                      Recibirás una confirmación por correo/SMS. Tu familia recibirá
                      notificación cuando el dinero esté disponible.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Errores Comunes a Evitar
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-800">❌ Usar tarjeta de crédito</h3>
                  <p className="text-red-700 text-sm mt-1">
                    Las tarjetas de crédito cobran un cargo extra del 2-3%. Usa tarjeta
                    de débito o cuenta bancaria para evitar este costo.
                  </p>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-800">❌ No verificar el nombre</h3>
                  <p className="text-red-700 text-sm mt-1">
                    El nombre del destinatario debe coincidir exactamente con su ID.
                    Si pones &quot;Juan Pérez&quot; pero su ID dice &quot;Juan José Pérez García&quot;,
                    pueden tener problemas para cobrar.
                  </p>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-800">❌ Ignorar el tipo de cambio</h3>
                  <p className="text-red-700 text-sm mt-1">
                    No solo veas la comisión. A veces un servicio dice &quot;$0 comisión&quot;
                    pero gana dinero dándote un mal tipo de cambio. Compara el total que reciben.
                  </p>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                  <h3 className="font-semibold text-red-800">❌ Ir a Western Union sin comparar</h3>
                  <p className="text-red-700 text-sm mt-1">
                    Las tiendas físicas cobran mucho más que las apps. Puedes ahorrar
                    $10-20 por envío usando Sendwave, Remitly o Félix Pago.
                  </p>
                </div>
              </div>
            </section>

            {/* Best for Beginners */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mejores Opciones para Principiantes
              </h2>

              <div className="space-y-4">
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">1. Félix Pago</h3>
                    <span className="bg-success-green text-white px-2 py-1 rounded text-sm font-medium">
                      Recomendado
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Primera transferencia GRATIS. No necesitas descargar app - funciona
                    por WhatsApp. El más fácil para empezar.
                  </p>
                  <Link href="/reviews/felix-pago" className="text-trust-blue hover:underline text-sm">
                    Ver detalles →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">2. Remitly</h3>
                    <span className="bg-trust-blue/10 text-trust-blue px-2 py-1 rounded text-sm font-medium">
                      Más confiable
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    La app mejor calificada (4.9★). Garantía de entrega. Ideal si tu
                    familia necesita cobrar en efectivo.
                  </p>
                  <Link href="/reviews/remitly" className="text-trust-blue hover:underline text-sm">
                    Ver detalles →
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">3. Sendwave</h3>
                    <span className="bg-warm-accent/10 text-warm-accent px-2 py-1 rounded text-sm font-medium">
                      Más barato
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    $0 comisión siempre. Perfecto si vas a enviar dinero regularmente
                    y tu familia puede recibir en cuenta bancaria.
                  </p>
                  <Link href="/reviews/sendwave" className="text-trust-blue hover:underline text-sm">
                    Ver detalles →
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Necesito Social Security Number?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No para montos menores a $1,000/día. Puedes usar ITIN, matrícula
                    consular, o solo tu ID extranjera en algunos servicios.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Cuánto tarda en llegar?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Depósito bancario: minutos a horas. Cobro en efectivo: disponible
                    en minutos pero tu familia debe ir a la tienda a recogerlo.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Es seguro?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, los servicios que recomendamos están regulados y usan
                    encriptación bancaria. Millones de personas los usan cada día.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué pasa si hay un error?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Todos los servicios tienen soporte al cliente en español.
                    Remitly tiene garantía de devolución si algo sale mal.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Start CTA */}
            <div className="bg-gradient-to-br from-success-green to-green-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">¿Listo para empezar?</h3>
              <p className="text-green-100 text-sm mb-4">
                Félix Pago ofrece tu primera transferencia completamente gratis.
              </p>
              <Link
                href="/reviews/felix-pago"
                className="block w-full text-center bg-white text-success-green font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                Empezar ahora
              </Link>
            </div>

            {/* Checklist */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Lista de verificación</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">Tengo mi ID lista</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">Tengo tarjeta de débito</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">Sé el nombre completo del destinatario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">Sé cómo quieren recibir (banco o efectivo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success-green">☐</span>
                  <span className="text-gray-600 text-sm">Tengo el CLABE si es depósito bancario</span>
                </li>
              </ul>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Otras Guías</h3>
              <div className="space-y-2">
                <Link href="/guias/transferencias-emergencia" className="block text-trust-blue hover:underline text-sm">
                  Transferencias de emergencia →
                </Link>
                <Link href="/guias/enviar-dinero-sin-papeles" className="block text-trust-blue hover:underline text-sm">
                  Enviar sin documentos →
                </Link>
                <Link href="/calculadora" className="block text-trust-blue hover:underline text-sm">
                  Calculadora de costos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Cómo Enviar Dinero a México por Primera Vez',
            description: 'Guía paso a paso para enviar dinero a México',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Elige un servicio',
                text: 'Selecciona un servicio de envío como Félix Pago, Remitly o Sendwave',
              },
              {
                '@type': 'HowToStep',
                name: 'Crea tu cuenta',
                text: 'Proporciona tu información personal e identificación',
              },
              {
                '@type': 'HowToStep',
                name: 'Ingresa los datos del destinatario',
                text: 'Agrega el nombre y datos bancarios o de cobro',
              },
              {
                '@type': 'HowToStep',
                name: 'Ingresa el monto',
                text: 'Especifica cuánto quieres enviar y revisa el costo total',
              },
              {
                '@type': 'HowToStep',
                name: 'Paga la transferencia',
                text: 'Usa tu tarjeta de débito o cuenta bancaria para pagar',
              },
            ],
          }),
        }}
      />
    </main>
  )
}
