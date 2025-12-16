import { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'

export const metadata: Metadata = {
  title: 'Transferencias de Emergencia a México | Envío Urgente 2025',
  description: 'Cómo enviar dinero urgente a México. Opciones más rápidas, llegada en minutos, disponible 24/7. Emergencias médicas, desastres, situaciones urgentes.',
  keywords: ['enviar dinero urgente mexico', 'transferencia emergencia mexico', 'envio rapido mexico', 'dinero urgente familia mexico'],
}

export default function EmergenciaPage() {
  return (
    <main className="min-h-screen bg-neutral-bg">
      {/* Hero */}
      <section className="bg-gradient-to-br from-family-red to-red-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <ol className="flex items-center gap-2 text-red-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li>/</li>
                <li><Link href="/guias" className="hover:text-white">Guías</Link></li>
                <li>/</li>
                <li className="text-white">Emergencias</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Transferencias de Emergencia a México
            </h1>
            <p className="text-xl text-red-100">
              Cómo enviar dinero urgente cuando cada minuto cuenta
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <AffiliateDisclosure />

        {/* Emergency Alert */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mt-8">
          <h2 className="text-xl font-bold text-red-800 mb-3">
            🚨 ¿Necesitas enviar dinero AHORA MISMO?
          </h2>
          <p className="text-red-700 mb-4">
            La opción más rápida es <strong>Félix Pago</strong> (vía WhatsApp) - llegada
            instantánea vía SPEI a cualquier banco mexicano, 24/7 incluyendo fines de semana.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/reviews/felix-pago"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Usar Félix Pago →
            </Link>
            <Link
              href="/reviews/remitly"
              className="inline-block bg-white border border-red-300 text-red-700 font-semibold py-2 px-6 rounded-lg hover:bg-red-50 transition-colors"
            >
              Alternativa: Remitly Express →
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Fastest Options */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Las Opciones Más Rápidas
              </h2>

              <div className="space-y-4">
                <div className="border-2 border-red-200 bg-red-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">1. Félix Pago</h3>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      INSTANTÁNEO
                    </span>
                  </div>
                  <ul className="text-gray-700 space-y-2 mb-3">
                    <li>⚡ <strong>Llegada:</strong> Instantánea (SPEI 24/7)</li>
                    <li>📱 <strong>Cómo:</strong> Vía WhatsApp, sin descargar app</li>
                    <li>💰 <strong>Costo:</strong> $2.99 (primera transferencia gratis)</li>
                    <li>🏦 <strong>Destino:</strong> Cualquier cuenta bancaria mexicana</li>
                    <li>⏰ <strong>Disponible:</strong> 24/7, incluyendo fines de semana</li>
                  </ul>
                  <p className="text-red-700 text-sm font-medium">
                    ✓ Mejor opción para emergencias - el dinero llega en segundos
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">2. Remitly Express</h3>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      MINUTOS
                    </span>
                  </div>
                  <ul className="text-gray-600 space-y-1 mb-3">
                    <li>⚡ <strong>Llegada:</strong> Minutos (depósito o efectivo)</li>
                    <li>📱 <strong>Cómo:</strong> App o web</li>
                    <li>💰 <strong>Costo:</strong> $1.99-3.99</li>
                    <li>📍 <strong>Cobro:</strong> 470,000+ ubicaciones en México</li>
                  </ul>
                  <p className="text-gray-600 text-sm">
                    ✓ Mejor si necesitan cobrar en efectivo urgentemente
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">3. Western Union</h3>
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      MINUTOS
                    </span>
                  </div>
                  <ul className="text-gray-600 space-y-1 mb-3">
                    <li>⚡ <strong>Llegada:</strong> Minutos (efectivo)</li>
                    <li>📱 <strong>Cómo:</strong> App, web, o en persona</li>
                    <li>💰 <strong>Costo:</strong> $5-15 (más caro)</li>
                    <li>📍 <strong>Cobro:</strong> 500,000+ ubicaciones incluyendo zonas rurales</li>
                  </ul>
                  <p className="text-gray-600 text-sm">
                    ✓ Mejor cobertura en pueblos pequeños y zonas remotas
                  </p>
                </div>
              </div>
            </section>

            {/* By Situation */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Según Tu Situación
              </h2>

              <div className="space-y-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🏥 Emergencia Médica</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Si tu familia necesita pagar un hospital o medicinas urgentemente:
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li><strong>Opción 1:</strong> Félix Pago → cuenta del hospital/farmacia</li>
                    <li><strong>Opción 2:</strong> Remitly Express → cobro en OXXO cerca del hospital</li>
                    <li><strong>Consejo:</strong> Muchos hospitales aceptan pago directo con CLABE</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">🏠 Desastre Natural / Emergencia en Casa</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Terremoto, inundación, o emergencia similar:
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li><strong>Opción 1:</strong> Western Union si la zona tiene poca infraestructura</li>
                    <li><strong>Opción 2:</strong> Depósito bancario si los bancos están funcionando</li>
                    <li><strong>Consejo:</strong> Verifica que las tiendas de cobro estén abiertas antes de enviar</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">✈️ Familiar Varado / Documentos</h3>
                  <p className="text-purple-700 text-sm mb-3">
                    Alguien necesita dinero para boleto, pasaporte, o trámite urgente:
                  </p>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li><strong>Opción 1:</strong> Félix Pago a su cuenta bancaria</li>
                    <li><strong>Opción 2:</strong> Remitly para cobro en aeropuerto (si hay Elektra/OXXO)</li>
                    <li><strong>Consejo:</strong> Envía un poco extra por si hay costos inesperados</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">💼 Pago Urgente / Deuda</h3>
                  <p className="text-green-700 text-sm mb-3">
                    Necesitan pagar algo antes de cierta hora/fecha:
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li><strong>Opción 1:</strong> Félix Pago directo a la cuenta del acreedor</li>
                    <li><strong>Opción 2:</strong> Remitly Express a cuenta bancaria</li>
                    <li><strong>Consejo:</strong> SPEI funciona 24/7, no hay que esperar horario bancario</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Consejos para Emergencias
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ten los datos listos</h3>
                    <p className="text-gray-600 text-sm">
                      Guarda el CLABE y datos de tu familia en tu teléfono. En emergencia
                      no quieres estar buscando números.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">💳</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Usa tarjeta de débito</h3>
                    <p className="text-gray-600 text-sm">
                      Es más rápido que transferencia bancaria y no tiene los cargos
                      extra de tarjeta de crédito.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ten la app instalada</h3>
                    <p className="text-gray-600 text-sm">
                      Si usas Remitly o Sendwave regularmente, mantén tu cuenta verificada
                      para enviar sin demoras cuando sea urgente.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">🏦</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Considera depósito bancario</h3>
                    <p className="text-gray-600 text-sm">
                      Es más rápido que efectivo porque no requiere que alguien vaya
                      a una tienda. SPEI es instantáneo 24/7.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cuidado con fraudes</h3>
                    <p className="text-gray-600 text-sm">
                      En emergencias somos vulnerables. Si alguien que no conoces te pide
                      dinero urgente, verifica directamente con tu familia.
                    </p>
                  </div>
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
                    ¿Puedo enviar de noche o en fin de semana?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sí, Félix Pago y Remitly funcionan 24/7. SPEI (sistema bancario
                    mexicano) también opera las 24 horas, todos los días.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Qué es lo más rápido para cobro en efectivo?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Remitly Express - disponible en minutos en OXXO, Elektra, y miles
                    de tiendas. Tu familia solo necesita ID y el código de referencia.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ¿Hay límite de cuánto puedo enviar de emergencia?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Los límites varían: Remitly hasta $2,999/día básico, Félix Pago
                    hasta $1,500/día. Para más, necesitas verificación adicional.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency CTA */}
            <div className="bg-gradient-to-br from-family-red to-red-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">⚡ Envío Instantáneo</h3>
              <p className="text-red-100 text-sm mb-4">
                Félix Pago envía dinero al instante via SPEI, 24/7.
              </p>
              <Link
                href="/reviews/felix-pago"
                className="block w-full text-center bg-white text-red-600 font-semibold py-3 px-4 rounded-lg hover:bg-red-50 transition-colors"
              >
                Enviar ahora
              </Link>
            </div>

            {/* Speed Comparison */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Velocidad Comparada</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Félix Pago (SPEI)</span>
                  <span className="font-bold text-red-600">Segundos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Remitly Express</span>
                  <span className="font-bold text-orange-600">Minutos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Western Union</span>
                  <span className="font-bold text-yellow-600">Minutos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Sendwave</span>
                  <span className="font-bold text-blue-600">Horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Wise</span>
                  <span className="font-bold text-gray-600">1-2 días</span>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Otras Guías</h3>
              <div className="space-y-2">
                <Link href="/guias/como-enviar-dinero-primera-vez" className="block text-trust-blue hover:underline text-sm">
                  Guía para principiantes →
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
    </main>
  )
}
