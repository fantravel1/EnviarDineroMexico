export interface Provider {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  logo?: string
  website: string
  affiliateUrl?: string
  hasAffiliateProgram: boolean

  // Fee structure
  fees: {
    bankDeposit: string
    cashPickup: string
    mobileWallet?: string
    creditCardSurcharge?: string
    freeThreshold?: string
    exchangeRateMarkup: string
  }

  // Cost examples
  costExamples: {
    amount: number
    fee: number
    exchangeLoss: number
    totalCost: number
    percentage: number
  }[]

  // Delivery
  delivery: {
    speed: string
    bankDeposit: string
    cashPickup: string
    mobileWallet?: string
  }

  // Mexico coverage
  coverage: {
    cashPickupLocations: string
    banks: string[]
    mobileWallets?: string[]
    cashPickupNetworks: string[]
  }

  // App/Platform
  platform: {
    type: 'mobile-only' | 'mobile-first' | 'web-first' | 'whatsapp'
    iosRating: number
    androidRating: number
    trustpilotRating: number
    totalReviews: string
    appDownloadRequired: boolean
  }

  // Limits
  limits: {
    daily: string
    monthly: string
    perTransfer?: string
    verificationRequired?: string
  }

  // Payment methods
  paymentMethods: {
    debitCard: boolean
    creditCard: boolean
    bankAccount: boolean
    cash: boolean
    applePay: boolean
    googlePay: boolean
  }

  // Best for
  bestFor: string[]
  limitations: string[]

  // Ratings
  ratings: {
    overall: number
    fees: number
    speed: number
    coverage: number
    ease: number
  }

  // Unique features
  uniqueFeatures: string[]

  // Last updated
  lastUpdated: string
}

export const providers: Provider[] = [
  {
    id: 'sendwave',
    name: 'Sendwave',
    slug: 'sendwave',
    tagline: 'Cero comisiones, solo app móvil',
    description: 'Sendwave ofrece transferencias sin comisión visible, generando ingresos a través de un margen del 2% en el tipo de cambio. Ideal para envíos regulares de montos pequeños a medianos.',
    website: 'https://www.sendwave.com',
    hasAffiliateProgram: false,

    fees: {
      bankDeposit: '$0',
      cashPickup: '$0',
      exchangeRateMarkup: '~2% sobre tasa media',
      freeThreshold: 'Siempre gratis',
    },

    costExamples: [
      { amount: 200, fee: 0, exchangeLoss: 4, totalCost: 4, percentage: 2 },
      { amount: 500, fee: 0, exchangeLoss: 10, totalCost: 10, percentage: 2 },
      { amount: 1000, fee: 0, exchangeLoss: 20, totalCost: 20, percentage: 2 },
    ],

    delivery: {
      speed: 'Minutos a horas',
      bankDeposit: 'Minutos (horario bancario)',
      cashPickup: 'Minutos',
    },

    coverage: {
      cashPickupLocations: 'Limitado',
      banks: ['BBVA Bancomer', 'Banorte', 'Santander', 'HSBC', 'Scotiabank'],
      cashPickupNetworks: ['OXXO (máx $177)', 'Banorte (máx $499)'],
    },

    platform: {
      type: 'mobile-only',
      iosRating: 4.7,
      androidRating: 4.7,
      trustpilotRating: 4.5,
      totalReviews: '150,000+',
      appDownloadRequired: true,
    },

    limits: {
      daily: '$999 (inicial) - $2,999 (verificado)',
      monthly: '$2,999 (inicial) - $12,000 (verificado)',
      perTransfer: '$999 - $2,999',
      verificationRequired: 'Licencia o pasaporte',
    },

    paymentMethods: {
      debitCard: true,
      creditCard: false,
      bankAccount: false,
      cash: false,
      applePay: false,
      googlePay: false,
    },

    bestFor: [
      'Envíos regulares de $200-$500',
      'Usuarios que prefieren simplicidad móvil',
      'Quienes quieren evitar comisiones visibles',
      'Transferencias a cuenta bancaria',
    ],

    limitations: [
      'Solo acepta tarjeta de débito',
      'Solo app móvil (sin versión web)',
      'Red limitada de cobro en efectivo',
      'Límites de transferencia bajos',
    ],

    ratings: {
      overall: 4.5,
      fees: 4.5,
      speed: 4.5,
      coverage: 3.5,
      ease: 5.0,
    },

    uniqueFeatures: [
      'Cero comisión de transferencia',
      'Diseño 100% móvil',
      'Soporte 24/7 en la app',
      'Notificaciones en tiempo real',
      '$10 de crédito promocional para nuevos usuarios',
    ],

    lastUpdated: '2025-12-16',
  },
  {
    id: 'felix-pago',
    name: 'Félix Pago',
    slug: 'felix-pago',
    tagline: 'Envía dinero por WhatsApp en 5 minutos',
    description: 'Félix Pago revoluciona las remesas usando WhatsApp—sin descargar apps. Utiliza tecnología blockchain (Stellar/USDC) para ofrecer transferencias instantáneas a bajo costo.',
    website: 'https://www.felixpago.com',
    hasAffiliateProgram: false,

    fees: {
      bankDeposit: '$2.99',
      cashPickup: '$4.98',
      exchangeRateMarkup: '~1.7% sobre tasa media',
      freeThreshold: 'Primera transferencia GRATIS',
    },

    costExamples: [
      { amount: 200, fee: 2.99, exchangeLoss: 3.40, totalCost: 6.40, percentage: 3.2 },
      { amount: 500, fee: 2.99, exchangeLoss: 8.50, totalCost: 11.50, percentage: 2.3 },
      { amount: 1000, fee: 2.99, exchangeLoss: 17, totalCost: 20, percentage: 2 },
    ],

    delivery: {
      speed: 'Instantáneo',
      bankDeposit: 'Instantáneo vía SPEI',
      cashPickup: 'Instantáneo',
      mobileWallet: 'Instantáneo',
    },

    coverage: {
      cashPickupLocations: '40,000+',
      banks: ['BBVA Bancomer', 'Banorte', 'Santander', 'HSBC', 'Scotiabank', 'Banco Azteca', 'Banamex'],
      mobileWallets: ['Mercado Pago', 'Nu (Nubank)', 'Spin by OXXO', 'Stori'],
      cashPickupNetworks: ['OXXO (20,000+)', 'Elektra', 'Coppel', 'Walmart', 'Bodega Aurrerá', '7-Eleven', 'Farmacias Guadalajara', 'Telecomm'],
    },

    platform: {
      type: 'whatsapp',
      iosRating: 0,
      androidRating: 0,
      trustpilotRating: 4.0,
      totalReviews: '370+',
      appDownloadRequired: false,
    },

    limits: {
      daily: '$1,500 (básico) - $2,999 (verificado)',
      monthly: '$3,000 (básico) - $9,999 (verificado)',
      verificationRequired: 'ID para límites más altos',
    },

    paymentMethods: {
      debitCard: true,
      creditCard: true,
      bankAccount: true,
      cash: true,
      applePay: false,
      googlePay: false,
    },

    bestFor: [
      'Primera transferencia (gratis)',
      'Usuarios que no quieren descargar apps',
      'Comunidad WhatsApp-nativa',
      'Entregas instantáneas vía SPEI',
      'Cobro en efectivo extenso',
    ],

    limitations: [
      'Pocas reseñas (370 en Trustpilot)',
      'Sin app tradicional',
      'Límites más bajos que Remitly',
    ],

    ratings: {
      overall: 4.3,
      fees: 4.0,
      speed: 5.0,
      coverage: 4.5,
      ease: 5.0,
    },

    uniqueFeatures: [
      '100% basado en WhatsApp',
      'Primera transferencia completamente gratis',
      'Tecnología blockchain (Stellar/USDC)',
      'Acepta mensajes de voz',
      'Entrega a billeteras móviles mexicanas',
      'Sin descarga de app requerida',
    ],

    lastUpdated: '2025-12-16',
  },
  {
    id: 'remitly',
    name: 'Remitly',
    slug: 'remitly',
    tagline: 'La opción más confiable con mayor cobertura',
    description: 'Remitly es el líder del mercado con la app mejor calificada (4.9★) y la red de cobro más extensa en México (470,000+ ubicaciones). Empresa pública (NASDAQ: RELY) con garantía de entrega.',
    website: 'https://www.remitly.com',
    affiliateUrl: 'https://www.remitly.com/us/en/mexico',
    hasAffiliateProgram: true,

    fees: {
      bankDeposit: '$1.99',
      cashPickup: '$3.99',
      mobileWallet: '$1.99',
      creditCardSurcharge: '+3%',
      exchangeRateMarkup: '~2% sobre tasa media',
      freeThreshold: 'Sin comisión en $500+',
    },

    costExamples: [
      { amount: 200, fee: 1.99, exchangeLoss: 4, totalCost: 6, percentage: 3 },
      { amount: 500, fee: 1.99, exchangeLoss: 10, totalCost: 12, percentage: 2.4 },
      { amount: 1000, fee: 0, exchangeLoss: 20, totalCost: 20, percentage: 2 },
    ],

    delivery: {
      speed: 'Express: minutos | Economy: 3-5 días',
      bankDeposit: 'Express: minutos',
      cashPickup: 'Express: minutos',
      mobileWallet: 'Minutos',
    },

    coverage: {
      cashPickupLocations: '470,000+',
      banks: ['BBVA Bancomer', 'Banorte', 'Santander', 'HSBC', 'Scotiabank', 'BanCoppel', 'Banco Azteca', 'Banamex'],
      cashPickupNetworks: ['OXXO (21,000+)', 'Elektra/Banco Azteca (2,000+)', 'Walmart', 'Bodega Aurrerá', '7-Eleven', 'Farmacias Guadalajara', 'BanCoppel'],
    },

    platform: {
      type: 'mobile-first',
      iosRating: 4.9,
      androidRating: 4.8,
      trustpilotRating: 4.6,
      totalReviews: '1,800,000+',
      appDownloadRequired: true,
    },

    limits: {
      daily: '$2,999 (básico) - $10,000 (Tier 3)',
      monthly: '$10,000 (básico) - $30,000 (Tier 3)',
      perTransfer: 'Hasta $100,000 con aprobación',
      verificationRequired: 'Pasaporte/Licencia/ID estatal',
    },

    paymentMethods: {
      debitCard: true,
      creditCard: true,
      bankAccount: true,
      cash: false,
      applePay: false,
      googlePay: false,
    },

    bestFor: [
      'Envíos de $500+ (sin comisión)',
      'Cobro en efectivo extenso',
      'Usuarios que valoran confiabilidad',
      'Montos grandes',
      'Múltiples opciones de entrega',
    ],

    limitations: [
      'Comisión extra del 3% con tarjeta de crédito',
      'Suspensiones de cuenta reportadas',
      'Apple Pay no disponible en EE.UU.',
    ],

    ratings: {
      overall: 4.8,
      fees: 4.0,
      speed: 4.5,
      coverage: 5.0,
      ease: 4.5,
    },

    uniqueFeatures: [
      'App mejor calificada (4.9★ iOS)',
      '470,000+ ubicaciones de cobro',
      'Garantía de entrega',
      'Retiro con código QR en Elektra',
      'Empresa pública (NASDAQ: RELY)',
      'Centro de ayuda en 18 idiomas',
      'Alertas de tipo de cambio',
    ],

    lastUpdated: '2025-12-16',
  },
]

export const providersBySlug: Record<string, Provider> = providers.reduce(
  (acc, provider) => ({ ...acc, [provider.slug]: provider }),
  {}
)

// Quick comparison data
export const quickComparison = {
  amounts: [200, 500, 1000],
  providers: ['sendwave', 'felix-pago', 'remitly'],
  bestFor: {
    firstTransfer: 'felix-pago',
    smallRegular: 'sendwave',
    largeAmounts: 'remitly',
    cashPickup: 'remitly',
    noAppDownload: 'felix-pago',
    highestRated: 'remitly',
  },
}
