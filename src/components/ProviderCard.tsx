import Link from 'next/link'
import { type Provider } from '@/data/providers'
import { cn, generateStarRating } from '@/lib/utils'

interface ProviderCardProps {
  provider: Provider
  featured?: boolean
  showDetails?: boolean
}

const providerColors: Record<string, { gradient: string; bg: string; text: string; border: string }> = {
  sendwave: {
    gradient: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
  'felix-pago': {
    gradient: 'from-green-500 to-emerald-400',
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
  },
  remitly: {
    gradient: 'from-indigo-600 to-blue-500',
    bg: 'bg-indigo-50',
    text: 'text-indigo-700',
    border: 'border-indigo-200',
  },
  wise: {
    gradient: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
  },
  'western-union': {
    gradient: 'from-yellow-500 to-amber-400',
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    border: 'border-yellow-200',
  },
  xoom: {
    gradient: 'from-blue-600 to-indigo-500',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
  moneygram: {
    gradient: 'from-orange-500 to-red-400',
    bg: 'bg-orange-50',
    text: 'text-orange-700',
    border: 'border-orange-200',
  },
  worldremit: {
    gradient: 'from-purple-500 to-violet-400',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
  },
}

const defaultColors = {
  gradient: 'from-trust-blue-500 to-trust-blue-400',
  bg: 'bg-trust-blue-50',
  text: 'text-trust-blue-700',
  border: 'border-trust-blue-200',
}

const tagColors = [
  { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200' },
  { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
  { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg key="half" className="w-4 h-4" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id={`half-star-${rating}`}>
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#half-star-${rating})`}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-medium text-neutral-600">{rating.toFixed(1)}</span>
    </div>
  )
}

export function ProviderCard({ provider, featured = false, showDetails = true }: ProviderCardProps) {
  const colors = providerColors[provider.slug] || defaultColors

  return (
    <div
      className={cn(
        'relative group overflow-hidden rounded-2xl bg-white border border-neutral-200/80',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/50',
        featured && 'shadow-lg shadow-warm-accent-200/40 ring-2 ring-warm-accent-300/50'
      )}
    >
      {/* Gradient header strip */}
      <div className={cn('h-2 w-full bg-gradient-to-r', colors.gradient)} />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-warm-accent-400 to-warm-accent-500 text-white text-xs font-bold shadow-md shadow-warm-accent-200/50">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Recomendado
          </span>
        </div>
      )}

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-sm',
                colors.gradient
              )}
            >
              <span className="text-xl font-bold text-white">
                {provider.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-neutral-800 leading-tight">
                {provider.name}
              </h3>
              <p className="text-sm text-neutral-500 mt-0.5 leading-snug">{provider.tagline}</p>
            </div>
          </div>
        </div>

        {/* Star rating */}
        <div className="flex items-center justify-between mb-5">
          <StarRating rating={provider.ratings.overall} />
          <span className="text-xs text-neutral-400">
            {provider.platform.totalReviews} resenas
          </span>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
          <div className={cn('text-center p-2.5 sm:p-3 rounded-xl border', colors.bg, colors.border)}>
            <p className="text-[11px] sm:text-xs text-neutral-500 mb-1 font-medium">Comision</p>
            <p className={cn('font-bold text-sm sm:text-base', colors.text)}>{provider.fees.bankDeposit}</p>
          </div>
          <div className="text-center p-2.5 sm:p-3 rounded-xl border bg-sky-50 border-sky-200">
            <p className="text-[11px] sm:text-xs text-neutral-500 mb-1 font-medium">Velocidad</p>
            <p className="font-bold text-sm sm:text-base text-sky-700">
              {provider.delivery.speed.split(' | ')[0]}
            </p>
          </div>
          <div className="text-center p-2.5 sm:p-3 rounded-xl border bg-violet-50 border-violet-200">
            <p className="text-[11px] sm:text-xs text-neutral-500 mb-1 font-medium">App</p>
            <p className="font-bold text-sm sm:text-base text-violet-700">
              {provider.platform.iosRating > 0 ? `${provider.platform.iosRating}★` : 'WhatsApp'}
            </p>
          </div>
        </div>

        {showDetails && (
          <>
            {/* Best for tags */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                Ideal para
              </p>
              <div className="flex flex-wrap gap-1.5">
                {provider.bestFor.slice(0, 3).map((item, index) => {
                  const tagColor = tagColors[index % tagColors.length]
                  return (
                    <span
                      key={index}
                      className={cn(
                        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
                        tagColor.bg,
                        tagColor.text,
                        tagColor.border
                      )}
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Features with checkmarks */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                Caracteristicas
              </p>
              <ul className="space-y-2">
                {provider.uniqueFeatures.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm text-neutral-600 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-success-green-100 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-success-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 pt-1">
          <Link
            href={`/reviews/${provider.slug}/`}
            className={cn(
              'flex-1 py-3 px-4 rounded-xl text-center font-semibold text-sm',
              'border-2 border-trust-blue-600 text-trust-blue-600',
              'hover:bg-trust-blue-50 active:bg-trust-blue-100',
              'transition-colors duration-200'
            )}
          >
            Ver Review
          </Link>
          <a
            href={provider.affiliateUrl || provider.website}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex-1 py-3 px-4 rounded-xl text-center font-semibold text-sm text-white',
              'transition-all duration-200',
              'flex items-center justify-center gap-1.5',
              featured
                ? 'bg-gradient-to-r from-warm-accent-500 to-warm-accent-600 hover:from-warm-accent-600 hover:to-warm-accent-700 shadow-md shadow-warm-accent-200/50'
                : 'bg-gradient-to-r from-trust-blue-600 to-trust-blue-700 hover:from-trust-blue-700 hover:to-trust-blue-800 shadow-md shadow-trust-blue-200/50'
            )}
          >
            Visitar Sitio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
