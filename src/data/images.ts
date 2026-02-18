// Curated Mexican Unsplash images for use throughout the site
// All images are free to use under the Unsplash License (https://unsplash.com/license)

export interface UnsplashImage {
  id: string
  src: (width: number, height?: number) => string
  alt: string
  photographer: string
  category: 'hero' | 'city' | 'culture' | 'food' | 'nature' | 'people' | 'architecture'
}

function unsplashUrl(photoId: string, width: number, height?: number): string {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: width.toString(),
    q: '80',
  })
  if (height) {
    params.set('h', height.toString())
  }
  return `https://images.unsplash.com/${photoId}?${params.toString()}`
}

export const mexicanImages: Record<string, UnsplashImage> = {
  // Guanajuato at night - colorful hillside buildings (most famous Mexico Unsplash photo)
  guanajuatoNight: {
    id: 'photo-1518638150340-f706e86654de',
    src: (w, h) => unsplashUrl('photo-1518638150340-f706e86654de', w, h),
    alt: 'Casas coloridas iluminadas en las colinas de Guanajuato, México por la noche',
    photographer: 'Jezael Melgoza',
    category: 'hero',
  },
  // Colorful Mexican colonial architecture
  colorfulArchitecture: {
    id: 'photo-1547995886-6dc09384c6e6',
    src: (w, h) => unsplashUrl('photo-1547995886-6dc09384c6e6', w, h),
    alt: 'Arquitectura colonial colorida de México con fachadas vibrantes',
    photographer: 'Unsplash',
    category: 'architecture',
  },
  // Mexican market and food culture
  mexicanMarket: {
    id: 'photo-1585464231875-d9ef1f5ad396',
    src: (w, h) => unsplashUrl('photo-1585464231875-d9ef1f5ad396', w, h),
    alt: 'Mercado mexicano con frutas y productos frescos tradicionales',
    photographer: 'Unsplash',
    category: 'food',
  },
  // Warm golden light scene
  warmGolden: {
    id: 'photo-1512813195386-6cf811ad3542',
    src: (w, h) => unsplashUrl('photo-1512813195386-6cf811ad3542', w, h),
    alt: 'Escena cálida con luz dorada representando la conexión familiar',
    photographer: 'Unsplash',
    category: 'people',
  },
  // Mexican culture and traditions
  mexicanCulture: {
    id: 'photo-1595981234058-a9302fb97229',
    src: (w, h) => unsplashUrl('photo-1595981234058-a9302fb97229', w, h),
    alt: 'Cultura y tradiciones mexicanas con colores vibrantes',
    photographer: 'Unsplash',
    category: 'culture',
  },
  // Architecture and urban scene
  urbanMexico: {
    id: 'photo-1568402102990-bc541580b59f',
    src: (w, h) => unsplashUrl('photo-1568402102990-bc541580b59f', w, h),
    alt: 'Escena urbana de México con arquitectura moderna y tradicional',
    photographer: 'Unsplash',
    category: 'city',
  },
  // Mexican tacos and traditional food
  mexicanFood: {
    id: 'photo-1564053489984-317bbd824340',
    src: (w, h) => unsplashUrl('photo-1564053489984-317bbd824340', w, h),
    alt: 'Tacos mexicanos tradicionales con ingredientes frescos',
    photographer: 'Unsplash',
    category: 'food',
  },
  // Mexican interior/architectural detail
  architecturalDetail: {
    id: 'photo-1590523741831-ab7e8b8f9c7f',
    src: (w, h) => unsplashUrl('photo-1590523741831-ab7e8b8f9c7f', w, h),
    alt: 'Detalle arquitectónico de edificio mexicano con colores tradicionales',
    photographer: 'Unsplash',
    category: 'architecture',
  },
  // Landscape / nature of Mexico
  mexicanLandscape: {
    id: 'photo-1504730030853-eff311f57d3c',
    src: (w, h) => unsplashUrl('photo-1504730030853-eff311f57d3c', w, h),
    alt: 'Paisaje natural de México con vegetación exuberante',
    photographer: 'Unsplash',
    category: 'nature',
  },
  // Festival / celebration scene
  celebration: {
    id: 'photo-1533174072545-7a4b6ad7a6c3',
    src: (w, h) => unsplashUrl('photo-1533174072545-7a4b6ad7a6c3', w, h),
    alt: 'Celebración y festividad con luces y colores vibrantes de México',
    photographer: 'Unsplash',
    category: 'culture',
  },
  // Latin American scene
  latinScene: {
    id: 'photo-1552074284-5e88ef1aef18',
    src: (w, h) => unsplashUrl('photo-1552074284-5e88ef1aef18', w, h),
    alt: 'Escena latinoamericana con ambiente cultural y comunitario',
    photographer: 'Unsplash',
    category: 'people',
  },
  // Nature / water landscape
  naturalBeauty: {
    id: 'photo-1476514525535-07fb3b4ae5f1',
    src: (w, h) => unsplashUrl('photo-1476514525535-07fb3b4ae5f1', w, h),
    alt: 'Belleza natural de México con agua cristalina y paisaje tropical',
    photographer: 'Unsplash',
    category: 'nature',
  },
}

// Helper to get images by category
export function getImagesByCategory(category: UnsplashImage['category']): UnsplashImage[] {
  return Object.values(mexicanImages).filter(img => img.category === category)
}

// Get a specific image for page hero sections
export const heroImages = {
  home: mexicanImages.guanajuatoNight,
  comparar: mexicanImages.colorfulArchitecture,
  reviews: mexicanImages.urbanMexico,
  guias: mexicanImages.warmGolden,
  blog: mexicanImages.mexicanCulture,
  calculadora: mexicanImages.celebration,
  regional: mexicanImages.architecturalDetail,
  about: mexicanImages.mexicanLandscape,
}
