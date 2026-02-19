import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1E40AF',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://enviardineromexico.com'),
  title: {
    default: 'EnviarDineroMexico | Compara y Ahorra en Transferencias a México',
    template: '%s | EnviarDineroMexico',
  },
  description:
    'La guía más completa en español para enviar dinero a México. Compara Remitly, Sendwave, Félix Pago y más. Encuentra la forma más barata y rápida de enviar remesas.',
  keywords: [
    'enviar dinero a mexico',
    'como enviar dinero a mexico',
    'cómo enviar dinero a méxico de estados unidos',
    'mandar dinero a mexico',
    'cómo mandar dinero a méxico',
    'donde enviar dinero a mexico',
    'donde enviar dinero a mexico cerca de mi',
    'cuanto dinero puedo enviar a mexico por mes',
    'transferir dinero a mexico',
    'remesas mexico',
    'remitly',
    'sendwave',
    'felix pago',
    'comparar transferencias',
    'tipo de cambio',
    'envío de remesas a México 2026',
    'mejor app para enviar dinero a México',
    'cómo mandar dinero a México barato',
    'enviar dinero a México sin comisión',
    'apps para mandar dinero a México',
    'comparar servicios de remesas',
    'enviar remesas desde Estados Unidos',
    'Western Union alternativas México',
  ],
  authors: [{ name: 'EnviarDineroMexico' }],
  creator: 'EnviarDineroMexico',
  publisher: 'EnviarDineroMexico',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://enviardineromexico.com',
    siteName: 'EnviarDineroMexico',
    title: 'EnviarDineroMexico | Compara y Ahorra en Transferencias a México',
    description:
      'La guía más completa en español para enviar dinero a México. Compara proveedores, encuentra las mejores tarifas y envía dinero a tu familia.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Casas coloridas de Guanajuato México - EnviarDineroMexico.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnviarDineroMexico | Compara y Ahorra en Transferencias a México',
    description:
      'La guía más completa en español para enviar dinero a México. Compara proveedores y ahorra en cada transferencia.',
    images: [
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EnviarDineroMexico',
  url: 'https://enviardineromexico.com',
  logo: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
  description:
    'La guía más completa en español para enviar dinero a México. Compara proveedores de remesas, encuentra las mejores tarifas y envía dinero a tu familia de forma segura y económica.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Spanish', 'English'],
  },
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.hero-content p', '.faq-answer'],
  },
  url: 'https://enviardineromexico.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://enviardineromexico.com" />
        <link rel="alternate" hrefLang="es-MX" href="https://enviardineromexico.com" />
        <link rel="alternate" hrefLang="x-default" href="https://enviardineromexico.com" />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
        />
      </body>
    </html>
  )
}
