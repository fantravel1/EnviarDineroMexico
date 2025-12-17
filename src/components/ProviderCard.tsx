import Link from 'next/link'
import { type Provider } from '@/data/providers'
import { cn, generateStarRating } from '@/lib/utils'

interface ProviderCardProps {
  provider: Provider
  featured?: boolean
  showDetails?: boolean
}

export function ProviderCard({ provider, featured = false, showDetails = true }: ProviderCardProps) {
  return (
    <div
      className={cn(
        'provider-card p-6',
        featured && 'featured-provider'
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-trust-blue-100 to-trust-blue-200 flex items-center justify-center">
            <span className="text-xl font-bold text-trust-blue-600">
              {provider.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-800">
              {provider.name}
            </h3>
            <p className="text-sm text-neutral-500">{provider.tagline}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-yellow-500 text-sm">
            {generateStarRating(provider.ratings.overall)}
          </div>
          <p className="text-xs text-neutral-500">
            {provider.platform.totalReviews} reseñas
          </p>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center p-3 bg-neutral-50 rounded-lg">
          <p className="text-xs text-neutral-500 mb-1">Comisión</p>
          <p className="font-semibold text-neutral-800">{provider.fees.bankDeposit}</p>
        </div>
        <div className="text-center p-3 bg-neutral-50 rounded-lg">
          <p className="text-xs text-neutral-500 mb-1">Velocidad</p>
          <p className="font-semibold text-neutral-800 text-sm">{provider.delivery.speed.split(' | ')[0]}</p>
        </div>
        <div className="text-center p-3 bg-neutral-50 rounded-lg">
          <p className="text-xs text-neutral-500 mb-1">App</p>
          <p className="font-semibold text-neutral-800">
            {provider.platform.iosRating > 0 ? `${provider.platform.iosRating}★` : 'WhatsApp'}
          </p>
        </div>
      </div>

      {showDetails && (
        <>
          {/* Best for */}
          <div className="mb-4">
            <p className="text-xs font-medium text-neutral-600 mb-2">Ideal para:</p>
            <div className="flex flex-wrap gap-1">
              {provider.bestFor.slice(0, 3).map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-success-green-50 text-success-green-700 text-xs rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Unique features */}
          <div className="mb-4">
            <p className="text-xs font-medium text-neutral-600 mb-2">Características:</p>
            <ul className="space-y-1">
              {provider.uniqueFeatures.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                  <svg className="w-4 h-4 text-success-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <Link
          href={`/reviews/${provider.slug}/`}
          className="flex-1 py-3 px-4 border-2 border-trust-blue-600 text-trust-blue-600 font-semibold rounded-lg text-center hover:bg-trust-blue-50 transition-colors"
        >
          Ver Review
        </Link>
        <a
          href={provider.affiliateUrl || provider.website}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex-1 py-3 px-4 font-semibold rounded-lg text-center transition-colors',
            featured
              ? 'bg-warm-accent-500 text-white hover:bg-warm-accent-600'
              : 'bg-trust-blue-600 text-white hover:bg-trust-blue-700'
          )}
        >
          Visitar Sitio
        </a>
      </div>
    </div>
  )
}
