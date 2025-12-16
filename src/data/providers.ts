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
  {
    id: 'wise',
    name: 'Wise',
    slug: 'wise',
    tagline: 'Tipo de cambio real sin margen oculto',
    description: 'Wise (antes TransferWise) ofrece el tipo de cambio medio del mercado real sin margen oculto. Cobra una comisión transparente que muestra exactamente cuánto pagas. Ideal para transparencia total.',
    website: 'https://wise.com',
    affiliateUrl: 'https://wise.com/invite',
    hasAffiliateProgram: true,

    fees: {
      bankDeposit: '$1.50-4.50 (variable)',
      cashPickup: 'No disponible',
      exchangeRateMarkup: '0% (tipo de cambio real)',
      freeThreshold: 'N/A - siempre cobra comisión transparente',
    },

    costExamples: [
      { amount: 200, fee: 2.80, exchangeLoss: 0, totalCost: 2.80, percentage: 1.4 },
      { amount: 500, fee: 4.12, exchangeLoss: 0, totalCost: 4.12, percentage: 0.82 },
      { amount: 1000, fee: 7.12, exchangeLoss: 0, totalCost: 7.12, percentage: 0.71 },
    ],

    delivery: {
      speed: '1-2 días hábiles',
      bankDeposit: '24-48 horas',
      cashPickup: 'No disponible',
    },

    coverage: {
      cashPickupLocations: 'No disponible',
      banks: ['BBVA Bancomer', 'Banorte', 'Santander', 'HSBC', 'Scotiabank', 'Banamex'],
      cashPickupNetworks: [],
    },

    platform: {
      type: 'web-first',
      iosRating: 4.7,
      androidRating: 4.5,
      trustpilotRating: 4.3,
      totalReviews: '200,000+',
      appDownloadRequired: false,
    },

    limits: {
      daily: 'Hasta $1,000,000',
      monthly: 'Sin límite con verificación',
      perTransfer: 'Hasta $1,000,000',
      verificationRequired: 'Identificación y comprobante de domicilio',
    },

    paymentMethods: {
      debitCard: true,
      creditCard: true,
      bankAccount: true,
      cash: false,
      applePay: true,
      googlePay: true,
    },

    bestFor: [
      'Montos grandes ($1,000+)',
      'Usuarios que valoran transparencia',
      'Transferencias a cuenta bancaria',
      'Freelancers y nómadas digitales',
    ],

    limitations: [
      'Sin cobro en efectivo',
      'Más lento que otros proveedores',
      'Comisión variable puede ser alta en montos pequeños',
    ],

    ratings: {
      overall: 4.4,
      fees: 4.8,
      speed: 3.5,
      coverage: 3.0,
      ease: 4.5,
    },

    uniqueFeatures: [
      'Tipo de cambio medio real (sin margen)',
      'Tarjeta multimoneda disponible',
      'Cuenta multi-divisa',
      'Transparencia total en costos',
      'Empresa pública (LON: WISE)',
      'Calculadora de costos en tiempo real',
    ],

    lastUpdated: '2025-12-16',
  },
  {
    id: 'western-union',
    name: 'Western Union',
    slug: 'western-union',
    tagline: 'La red más grande con 150+ años de historia',
    description: 'Western Union es el gigante histórico de las remesas con la red de agentes más extensa del mundo. Ofrece múltiples opciones de envío y recepción, pero generalmente con costos más altos.',
    website: 'https://www.westernunion.com',
    affiliateUrl: 'https://www.westernunion.com/us/en/home.html',
    hasAffiliateProgram: true,

    fees: {
      bankDeposit: '$0-4.99',
      cashPickup: '$4.99-12.99',
      exchangeRateMarkup: '~2.5-4% sobre tasa media',
      freeThreshold: 'Promociones ocasionales',
    },

    costExamples: [
      { amount: 200, fee: 4.99, exchangeLoss: 7, totalCost: 12, percentage: 6 },
      { amount: 500, fee: 4.99, exchangeLoss: 17.50, totalCost: 22.50, percentage: 4.5 },
      { amount: 1000, fee: 8.99, exchangeLoss: 35, totalCost: 44, percentage: 4.4 },
    ],

    delivery: {
      speed: 'Minutos a 5 días',
      bankDeposit: '1-3 días hábiles',
      cashPickup: 'Minutos',
      mobileWallet: 'Minutos',
    },

    coverage: {
      cashPickupLocations: '500,000+',
      banks: ['BBVA Bancomer', 'Banorte', 'Santander', 'HSBC', 'Banamex', 'Banco Azteca'],
      mobileWallets: ['Mercado Pago'],
      cashPickupNetworks: ['Elektra (49,000+)', 'Oxxo', 'Walmart', 'Telecomm', 'Farmacias Guadalajara', 'Coppel', 'Chedraui'],
    },

    platform: {
      type: 'web-first',
      iosRating: 4.6,
      androidRating: 4.3,
      trustpilotRating: 3.2,
      totalReviews: '35,000+',
      appDownloadRequired: false,
    },

    limits: {
      daily: '$5,000 (online)',
      monthly: '$10,000 (online)',
      perTransfer: '$7,999 (online), $50,000 (agente)',
      verificationRequired: 'ID para montos mayores',
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
      'Cobro en efectivo inmediato',
      'Envío desde ubicaciones físicas',
      'Usuarios que prefieren marcas conocidas',
      'Áreas rurales de México',
    ],

    limitations: [
      'Costos más altos que competidores digitales',
      'Tipo de cambio menos favorable',
      'Calificaciones mixtas en Trustpilot',
      'Comisiones variables y confusas',
    ],

    ratings: {
      overall: 3.5,
      fees: 2.5,
      speed: 4.0,
      coverage: 5.0,
      ease: 3.5,
    },

    uniqueFeatures: [
      'Red de agentes más grande del mundo',
      '150+ años de experiencia',
      'Envío en persona disponible',
      'Entrega a billeteras móviles',
      'Servicio 24/7',
      'Garantía de satisfacción',
    ],

    lastUpdated: '2025-12-16',
  },
  {
    id: 'xoom',
    name: 'Xoom (PayPal)',
    slug: 'xoom',
    tagline: 'Respaldado por PayPal, confiabilidad garantizada',
    description: 'Xoom es el servicio de remesas de PayPal, ofreciendo la confiabilidad de una marca global con múltiples opciones de entrega incluyendo recarga de celulares.',
    website: 'https://www.xoom.com',
    affiliateUrl: 'https://www.xoom.com',
    hasAffiliateProgram: true,

    fees: {
      bankDeposit: '$0-4.99',
      cashPickup: '$4.99',
      mobileWallet: '$2.99',
      creditCardSurcharge: '+2.9%',
      exchangeRateMarkup: '~2-3% sobre tasa media',
      freeThreshold: 'Sin comisión enviando desde cuenta bancaria',
    },

    costExamples: [
      { amount: 200, fee: 0, exchangeLoss: 5, totalCost: 5, percentage: 2.5 },
      { amount: 500, fee: 0, exchangeLoss: 12.50, totalCost: 12.50, percentage: 2.5 },
      { amount: 1000, fee: 0, exchangeLoss: 25, totalCost: 25, percentage: 2.5 },
    ],

    delivery: {
      speed: 'Minutos a 4 días',
      bankDeposit: 'Minutos (con tarjeta)',
      cashPickup: 'Minutos',
      mobileWallet: 'Minutos',
    },

    coverage: {
      cashPickupLocations: '60,000+',
      banks: ['BBVA Bancomer', 'Banorte', 'Santander', 'HSBC', 'Scotiabank', 'Banamex'],
      mobileWallets: ['Mercado Pago'],
      cashPickupNetworks: ['OXXO', 'Elektra', 'Walmart', '7-Eleven', 'Coppel', 'Farmacias Guadalajara'],
    },

    platform: {
      type: 'mobile-first',
      iosRating: 4.8,
      androidRating: 4.6,
      trustpilotRating: 4.1,
      totalReviews: '25,000+',
      appDownloadRequired: false,
    },

    limits: {
      daily: '$2,999 (con tarjeta)',
      monthly: '$10,000',
      perTransfer: 'Hasta $10,000',
      verificationRequired: 'Cuenta PayPal verificada',
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
      'Usuarios de PayPal existentes',
      'Recarga de celulares en México',
      'Envíos desde cuenta bancaria (sin comisión)',
      'Múltiples opciones de entrega',
    ],

    limitations: [
      'Tipo de cambio menos competitivo',
      'Tarjeta de crédito tiene recargo',
      'Requiere cuenta PayPal',
    ],

    ratings: {
      overall: 4.0,
      fees: 3.5,
      speed: 4.5,
      coverage: 4.0,
      ease: 4.5,
    },

    uniqueFeatures: [
      'Parte de PayPal',
      'Recarga de celulares disponible',
      'Sin comisión desde cuenta bancaria',
      'Integración con cuenta PayPal',
      'Pago de servicios en México',
      'Tracking en tiempo real',
    ],

    lastUpdated: '2025-12-16',
  },
  {
    id: 'moneygram',
    name: 'MoneyGram',
    slug: 'moneygram',
    tagline: 'Red global con opciones digitales modernas',
    description: 'MoneyGram combina su extensa red física con servicios digitales modernos. Ofrece diversas opciones de envío y recepción con precios competitivos.',
    website: 'https://www.moneygram.com',
    affiliateUrl: 'https://www.moneygram.com',
    hasAffiliateProgram: true,

    fees: {
      bankDeposit: '$1.99',
      cashPickup: '$1.99-4.99',
      exchangeRateMarkup: '~2-3% sobre tasa media',
      freeThreshold: 'Promociones frecuentes',
    },

    costExamples: [
      { amount: 200, fee: 1.99, exchangeLoss: 5, totalCost: 7, percentage: 3.5 },
      { amount: 500, fee: 1.99, exchangeLoss: 12.50, totalCost: 14.50, percentage: 2.9 },
      { amount: 1000, fee: 1.99, exchangeLoss: 25, totalCost: 27, percentage: 2.7 },
    ],

    delivery: {
      speed: 'Minutos a 3 días',
      bankDeposit: '1-3 días hábiles',
      cashPickup: 'Minutos',
      mobileWallet: 'Minutos',
    },

    coverage: {
      cashPickupLocations: '350,000+',
      banks: ['BBVA Bancomer', 'Banorte', 'Santander', 'Banamex'],
      mobileWallets: ['Mercado Pago'],
      cashPickupNetworks: ['Walmart (4,500+)', 'OXXO', 'Elektra', 'Coppel', 'Farmacias Guadalajara', 'Telecomm'],
    },

    platform: {
      type: 'mobile-first',
      iosRating: 4.7,
      androidRating: 4.5,
      trustpilotRating: 3.8,
      totalReviews: '20,000+',
      appDownloadRequired: false,
    },

    limits: {
      daily: '$10,000',
      monthly: '$10,000',
      perTransfer: '$10,000',
      verificationRequired: 'ID para verificación',
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
      'Envío y recepción en Walmart',
      'Precios competitivos',
      'Flexibilidad de envío (online y en persona)',
      'Entrega a billeteras móviles',
    ],

    limitations: [
      'Tipo de cambio puede variar mucho',
      'Experiencia inconsistente en agentes',
      'Verificación puede demorar',
    ],

    ratings: {
      overall: 3.8,
      fees: 3.5,
      speed: 4.0,
      coverage: 4.5,
      ease: 4.0,
    },

    uniqueFeatures: [
      'Red Walmart extensa',
      'Opción de envío en persona',
      'MoneyGram Plus Rewards',
      'Recarga de celulares',
      'Pago de facturas',
      'Soporte multilingüe',
    ],

    lastUpdated: '2025-12-16',
  },
  {
    id: 'worldremit',
    name: 'WorldRemit',
    slug: 'worldremit',
    tagline: 'Más de 150 países, comisiones bajas',
    description: 'WorldRemit ofrece transferencias digitales a más de 150 países con comisiones competitivas y múltiples opciones de entrega incluyendo recarga de airtime.',
    website: 'https://www.worldremit.com',
    affiliateUrl: 'https://www.worldremit.com/en/refer-a-friend',
    hasAffiliateProgram: true,

    fees: {
      bankDeposit: '$2.99',
      cashPickup: '$3.99',
      mobileWallet: '$2.99',
      exchangeRateMarkup: '~1.5-2% sobre tasa media',
      freeThreshold: 'Primera transferencia gratis (promocional)',
    },

    costExamples: [
      { amount: 200, fee: 2.99, exchangeLoss: 3.50, totalCost: 6.50, percentage: 3.25 },
      { amount: 500, fee: 2.99, exchangeLoss: 8.75, totalCost: 11.75, percentage: 2.35 },
      { amount: 1000, fee: 2.99, exchangeLoss: 17.50, totalCost: 20.50, percentage: 2.05 },
    ],

    delivery: {
      speed: 'Minutos a 3 días',
      bankDeposit: '1-3 días hábiles',
      cashPickup: 'Minutos',
      mobileWallet: 'Minutos',
    },

    coverage: {
      cashPickupLocations: '60,000+',
      banks: ['BBVA Bancomer', 'Banorte', 'Santander', 'HSBC', 'Banamex'],
      mobileWallets: ['Mercado Pago'],
      cashPickupNetworks: ['OXXO', 'Elektra', 'Walmart', 'Coppel'],
    },

    platform: {
      type: 'mobile-first',
      iosRating: 4.6,
      androidRating: 4.4,
      trustpilotRating: 4.0,
      totalReviews: '100,000+',
      appDownloadRequired: false,
    },

    limits: {
      daily: '$5,000',
      monthly: '$25,000',
      perTransfer: '$5,000',
      verificationRequired: 'ID y comprobante de domicilio',
    },

    paymentMethods: {
      debitCard: true,
      creditCard: true,
      bankAccount: true,
      cash: false,
      applePay: true,
      googlePay: true,
    },

    bestFor: [
      'Envíos internacionales variados',
      'Recarga de celulares',
      'Usuarios de Apple/Google Pay',
      'Costos competitivos',
    ],

    limitations: [
      'Red de efectivo limitada vs competidores',
      'Depósitos bancarios más lentos',
      'Menos conocido en comunidad mexicana',
    ],

    ratings: {
      overall: 4.0,
      fees: 4.0,
      speed: 4.0,
      coverage: 3.5,
      ease: 4.5,
    },

    uniqueFeatures: [
      '150+ países disponibles',
      'Apple Pay y Google Pay',
      'Recarga de airtime internacional',
      'Promoción primera transferencia gratis',
      'Programa de referidos',
      'App multilingüe',
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
