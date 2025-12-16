import { Metadata } from 'next'
import Link from 'next/link'
import { ComparisonCalculator, AffiliateDisclosure } from '@/components'

export const metadata: Metadata = {
  title: 'Calculadora de Remesas a México | Compara Costos en Tiempo Real',
  description:
    'Calcula cuánto cuesta enviar dinero a México con diferentes proveedores. Compara Remitly, Sendwave, Félix Pago y más.',
}

export default function CalculadoraPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-trust-blue-600 to-trust-blue-800 text-white py-12">
        <div className="container-wide">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-trust-blue-200">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li className="text-white">Calculadora</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Calculadora de Remesas a México
          </h1>
          <p className="text-xl text-trust-blue-100 max-w-2xl">
            Ingresa el monto que quieres enviar y compara cuánto recibirá tu familiar
            con cada proveedor.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="max-w-xl mx-auto">
            <ComparisonCalculator />
          </div>

          <div className="mt-12">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-neutral-800 mb-8 text-center">
            ¿Cómo Funciona Nuestra Calculadora?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-trust-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💵</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Ingresa el Monto</h3>
              <p className="text-neutral-600 text-sm">
                Escribe cuántos dólares quieres enviar a México.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-trust-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Compara Opciones</h3>
              <p className="text-neutral-600 text-sm">
                Ve el costo total de cada proveedor, incluyendo comisiones y tipo de cambio.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-trust-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Elige y Envía</h3>
              <p className="text-neutral-600 text-sm">
                Selecciona la mejor opción y haz clic para comenzar tu transferencia.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Importante sobre los Costos</h3>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-trust-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>
                  <strong>Costo total = Comisión + Diferencia en tipo de cambio.</strong> Un servicio con &quot;$0 comisión&quot;
                  puede no ser el más barato si tiene un tipo de cambio desfavorable.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-trust-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>
                  Los tipos de cambio varían constantemente. Verifica siempre el valor actual directamente
                  con el proveedor antes de enviar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-trust-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>
                  El costo puede variar según el método de entrega (banco vs. efectivo) y el método de pago
                  (débito vs. crédito).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
