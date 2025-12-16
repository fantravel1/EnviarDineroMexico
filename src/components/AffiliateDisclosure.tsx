'use client'

import { cn } from '@/lib/utils'

interface AffiliateDisclosureProps {
  className?: string
  variant?: 'default' | 'compact' | 'inline'
}

export function AffiliateDisclosure({
  className,
  variant = 'default'
}: AffiliateDisclosureProps) {
  if (variant === 'inline') {
    return (
      <span className={cn('text-neutral-500 text-sm', className)}>
        (Enlace de afiliado)
      </span>
    )
  }

  if (variant === 'compact') {
    return (
      <p className={cn('text-xs text-neutral-500 mt-2', className)}>
        * Divulgación: Podemos recibir una comisión a través de este enlace.
      </p>
    )
  }

  return (
    <div className={cn('affiliate-disclosure', className)}>
      <p className="font-medium text-neutral-700 mb-1">
        Divulgación de Afiliados
      </p>
      <p>
        Este sitio contiene enlaces de afiliados. Podemos recibir una comisión
        cuando te registras en servicios a través de nuestros enlaces, sin costo
        adicional para ti. Esto no afecta nuestra independencia editorial ni
        metodología de clasificación. Siempre recomendamos basándonos en la
        calidad del servicio, no en la compensación.
      </p>
    </div>
  )
}
