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
    'mandar dinero a mexico',
    'transferir dinero a mexico',
    'remesas mexico',
    'remitly',
    'sendwave',
    'felix pago',
    'comparar transferencias',
    'tipo de cambio',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnviarDineroMexico | Compara y Ahorra en Transferencias a México',
    description:
      'La guía más completa en español para enviar dinero a México. Compara proveedores y ahorra en cada transferencia.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
