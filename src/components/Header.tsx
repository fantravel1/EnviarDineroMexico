'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Inicio',
    href: '/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: 'Comparar',
    href: '/comparar/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    name: 'Reviews',
    href: '/reviews/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Guias',
    href: '/guias/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: 'Blog',
    href: '/blog/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
  {
    name: 'Calculadora',
    href: '/calculadora/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-neutral-900/5'
          : 'bg-white'
      )}
    >
      {/* Mexican flag gradient strip */}
      <div className="h-[3px] mexican-gradient w-full" />

      <nav className="container-wide" aria-label="Global">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Logo icon with Mexican flag colors */}
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-success-green-600 via-trust-blue-600 to-family-red-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <span className="text-white font-bold text-lg md:text-xl">$</span>
              {/* Small Mexican flag dot */}
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white overflow-hidden flex">
                <div className="w-1/3 bg-[#006847]" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-[#CE1126]" />
              </div>
            </div>
            <div className="hidden sm:flex items-baseline gap-0">
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-trust-blue-600 transition-colors duration-200">
                Enviar
              </span>
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-success-green-600 transition-colors duration-200">
                Dinero
              </span>
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-family-red-600 transition-colors duration-200">
                Mexico
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-1 lg:gap-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-semibold text-neutral-600 hover:text-trust-blue-600 transition-colors duration-200 group"
              >
                {item.name}
                {/* Hover underline animation */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-trust-blue-600 to-success-green-600 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/comparar/"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-warm-accent-500 text-white font-bold rounded-xl hover:bg-warm-accent-600 active:bg-warm-accent-700 transform hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-warm-accent-500/25 hover:shadow-xl hover:shadow-warm-accent-500/30"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              Comparar Ahora
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden relative p-2 rounded-xl text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegacion"
          >
            <span className="sr-only">Abrir menu</span>
            <div className="w-6 h-6 flex flex-col items-center justify-center gap-1.5">
              <span
                className={cn(
                  'block h-0.5 w-5 rounded-full bg-current transition-all duration-300',
                  mobileMenuOpen && 'translate-y-2 rotate-45'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-5 rounded-full bg-current transition-all duration-300',
                  mobileMenuOpen && 'opacity-0 scale-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-5 rounded-full bg-current transition-all duration-300',
                  mobileMenuOpen && '-translate-y-2 -rotate-45'
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu - full screen overlay */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-50 transition-all duration-300',
          mobileMenuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-neutral-900/50 backdrop-blur-sm transition-opacity duration-300',
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu panel */}
        <div
          className={cn(
            'absolute inset-x-0 top-0 bg-white shadow-2xl transition-transform duration-300 ease-out',
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          {/* Mexican flag gradient strip at top of mobile menu */}
          <div className="h-[3px] mexican-gradient w-full" />

          {/* Mobile menu header */}
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-neutral-100">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-success-green-600 via-trust-blue-600 to-family-red-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <div className="flex items-baseline">
                <span className="font-extrabold text-lg text-trust-blue-600">Enviar</span>
                <span className="font-extrabold text-lg text-success-green-600">Dinero</span>
                <span className="font-extrabold text-lg text-family-red-600">Mexico</span>
              </div>
            </Link>

            <button
              type="button"
              className="p-2 rounded-xl text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile navigation items */}
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-4 px-4 py-3.5 text-base font-semibold text-neutral-700 hover:bg-trust-blue-50 hover:text-trust-blue-600 rounded-xl transition-all duration-200',
                  mobileMenuOpen && 'animate-slide-down'
                )}
                style={{
                  animationDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                  animationFillMode: 'backwards',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 text-neutral-500 group-hover:bg-trust-blue-100 group-hover:text-trust-blue-600 transition-colors">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="px-4 sm:px-6 pb-6 pt-2">
            <Link
              href="/comparar/"
              className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-warm-accent-500 text-white font-bold text-lg rounded-xl hover:bg-warm-accent-600 active:bg-warm-accent-700 transition-all duration-200 shadow-lg shadow-warm-accent-500/25"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              Comparar Ahora
            </Link>

            {/* Trust indicator in mobile menu */}
            <p className="mt-4 text-center text-xs text-neutral-400">
              Comparaciones independientes y actualizadas
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
