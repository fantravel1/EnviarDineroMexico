'use client'

import { useState, useMemo } from 'react'
import { providers, type Provider } from '@/data/providers'
import { formatUSD, formatPercentage, cn } from '@/lib/utils'
import { AffiliateDisclosure } from './AffiliateDisclosure'

// Simulated exchange rate (in production, this would come from an API)
const MID_MARKET_RATE = 17.25 // USD to MXN

interface CalculatorResult {
  provider: Provider
  fee: number
  exchangeRate: number
  recipientGets: number
  totalCost: number
  costPercentage: number
}

export function ComparisonCalculator() {
  const [amount, setAmount] = useState(500)
  const [deliveryMethod, setDeliveryMethod] = useState<'bank' | 'cash'>('bank')

  const results = useMemo((): CalculatorResult[] => {
    return providers.map((provider) => {
      // Get fee based on delivery method
      const feeStr = deliveryMethod === 'bank'
        ? provider.fees.bankDeposit
        : provider.fees.cashPickup
      const fee = parseFloat(feeStr.replace('$', '')) || 0

      // Calculate exchange rate with markup
      const markupMatch = provider.fees.exchangeRateMarkup.match(/~?(\d+\.?\d*)%/)
      const markup = markupMatch ? parseFloat(markupMatch[1]) / 100 : 0.02
      const exchangeRate = MID_MARKET_RATE * (1 - markup)

      // Calculate what recipient gets
      const amountAfterFee = amount - fee
      const recipientGets = amountAfterFee * exchangeRate

      // Calculate total cost
      const fairValue = amount * MID_MARKET_RATE
      const totalCost = fairValue - recipientGets
      const costPercentage = (totalCost / (amount * MID_MARKET_RATE)) * 100

      return {
        provider,
        fee,
        exchangeRate,
        recipientGets,
        totalCost: totalCost / MID_MARKET_RATE, // Convert back to USD
        costPercentage,
      }
    }).sort((a, b) => a.totalCost - b.totalCost) // Sort by best value
  }, [amount, deliveryMethod])

  const quickAmounts = [200, 300, 500, 1000]

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
        Calcula tu Transferencia
      </h2>

      {/* Amount input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-neutral-600 mb-2">
          ¿Cuánto quieres enviar?
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-neutral-400">
            $
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value) || 0))}
            className="input-field-amount pl-10"
            min="1"
            max="10000"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-neutral-400">
            USD
          </span>
        </div>
        {/* Quick amount buttons */}
        <div className="flex gap-2 mt-3">
          {quickAmounts.map((quickAmount) => (
            <button
              key={quickAmount}
              onClick={() => setAmount(quickAmount)}
              className={cn(
                'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors',
                amount === quickAmount
                  ? 'bg-trust-blue-600 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              )}
            >
              ${quickAmount}
            </button>
          ))}
        </div>
      </div>

      {/* Delivery method */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-neutral-600 mb-2">
          Método de entrega
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setDeliveryMethod('bank')}
            className={cn(
              'py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2',
              deliveryMethod === 'bank'
                ? 'bg-trust-blue-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            )}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Cuenta Bancaria
          </button>
          <button
            onClick={() => setDeliveryMethod('cash')}
            className={cn(
              'py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2',
              deliveryMethod === 'cash'
                ? 'bg-trust-blue-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            )}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Efectivo
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-600">
          Resultados (mejor valor primero)
        </h3>
        {results.map((result, index) => (
          <div
            key={result.provider.id}
            className={cn(
              'p-4 rounded-lg border-2 transition-colors',
              index === 0
                ? 'border-success-green-500 bg-success-green-50'
                : 'border-neutral-200 bg-white hover:border-neutral-300'
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-trust-blue-600">
                  {result.provider.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">
                    {result.provider.name}
                  </h4>
                  <p className="text-xs text-neutral-500">
                    {result.provider.tagline}
                  </p>
                </div>
              </div>
              {index === 0 && (
                <span className="px-2 py-1 bg-success-green-600 text-white text-xs font-bold rounded-full">
                  Mejor Valor
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center mt-4">
              <div>
                <p className="text-xs text-neutral-500">Comisión</p>
                <p className="font-semibold text-neutral-800">
                  {result.fee === 0 ? 'Gratis' : formatUSD(result.fee)}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Reciben</p>
                <p className="font-semibold text-success-green-600">
                  ${result.recipientGets.toFixed(2)} MXN
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Costo Total</p>
                <p className="font-semibold text-neutral-800">
                  {formatUSD(result.totalCost)} ({formatPercentage(result.costPercentage)})
                </p>
              </div>
            </div>

            <a
              href={result.provider.affiliateUrl || result.provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'mt-4 w-full py-3 rounded-lg font-semibold text-center block transition-colors',
                index === 0
                  ? 'bg-success-green-600 text-white hover:bg-success-green-700'
                  : 'bg-trust-blue-600 text-white hover:bg-trust-blue-700'
              )}
            >
              Enviar con {result.provider.name}
            </a>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 pt-4 border-t border-neutral-200">
        <p className="text-xs text-neutral-500">
          * Los tipos de cambio y comisiones son aproximados y pueden variar.
          Verifica los valores actuales directamente con cada proveedor.
          Tipo de cambio medio de referencia: {MID_MARKET_RATE} MXN/USD.
        </p>
        <AffiliateDisclosure variant="compact" />
      </div>
    </div>
  )
}
