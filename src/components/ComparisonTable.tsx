import { providers } from '@/data/providers'
import { cn, formatUSD } from '@/lib/utils'
import Link from 'next/link'

interface ComparisonTableProps {
  amounts?: number[]
  showAllProviders?: boolean
}

export function ComparisonTable({
  amounts = [200, 500, 1000],
  showAllProviders = false
}: ComparisonTableProps) {
  const displayProviders = showAllProviders ? providers : providers.slice(0, 3)

  return (
    <div className="table-container">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-trust-blue-600">Proveedor</th>
            <th>Comisión</th>
            {amounts.map((amount) => (
              <th key={amount}>Costo ${amount}</th>
            ))}
            <th>Velocidad</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayProviders.map((provider, index) => (
            <tr key={provider.id}>
              <td className="sticky left-0 z-10 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trust-blue-100 to-trust-blue-200 flex items-center justify-center">
                    <span className="font-bold text-trust-blue-600">
                      {provider.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">{provider.name}</p>
                    <p className="text-xs text-neutral-500">
                      {provider.platform.appDownloadRequired ? 'App' : 'WhatsApp'}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <span className={cn(
                  'font-semibold',
                  provider.fees.bankDeposit === '$0' ? 'text-success-green-600' : 'text-neutral-800'
                )}>
                  {provider.fees.bankDeposit}
                </span>
              </td>
              {amounts.map((amount) => {
                const example = provider.costExamples.find(e => e.amount === amount)
                return (
                  <td key={amount}>
                    {example ? (
                      <span className="font-semibold">
                        {formatUSD(example.totalCost)} ({example.percentage}%)
                      </span>
                    ) : (
                      <span className="text-neutral-400">-</span>
                    )}
                  </td>
                )
              })}
              <td>
                <span className="text-sm">{provider.delivery.speed.split(' | ')[0]}</span>
              </td>
              <td>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold">{provider.ratings.overall}</span>
                </div>
              </td>
              <td>
                <Link
                  href={`/reviews/${provider.slug}/`}
                  className="text-trust-blue-600 hover:underline font-medium"
                >
                  Ver más →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs text-neutral-500 mt-4">
        * Los costos incluyen comisión + diferencia en tipo de cambio. Los valores son aproximados y pueden variar.
      </p>
    </div>
  )
}
