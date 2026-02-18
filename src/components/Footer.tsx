import Link from 'next/link'
import { mexicanImages } from '@/data/images'

const footerLinks = {
  proveedores: [
    { name: 'Sendwave', href: '/reviews/sendwave/' },
    { name: 'Felix Pago', href: '/reviews/felix-pago/' },
    { name: 'Remitly', href: '/reviews/remitly/' },
    { name: 'Wise', href: '/reviews/wise/' },
    { name: 'Western Union', href: '/reviews/western-union/' },
    { name: 'Xoom', href: '/reviews/xoom/' },
    { name: 'MoneyGram', href: '/reviews/moneygram/' },
    { name: 'WorldRemit', href: '/reviews/worldremit/' },
  ],
  comparaciones: [
    { name: 'Remitly vs Western Union', href: '/comparar/remitly-vs-western-union/' },
    { name: 'Sendwave vs Remitly', href: '/comparar/sendwave-vs-remitly/' },
    { name: 'Wise vs Western Union', href: '/comparar/wise-vs-western-union/' },
    { name: 'Alternativas a Western Union', href: '/comparar/alternativas-western-union/' },
    { name: 'Ver todas las comparaciones', href: '/comparar/' },
  ],
  recursos: [
    { name: 'Calculadora', href: '/calculadora/' },
    { name: 'Cómo Enviar Dinero', href: '/guias/como-enviar-dinero/' },
    { name: 'Enviar Sin Comisiones', href: '/guias/enviar-dinero-sin-comisiones/' },
    { name: 'Cuánto Cuesta Enviar', href: '/guias/cuanto-cuesta-enviar-dinero/' },
    { name: 'Mejor Tipo de Cambio', href: '/guias/mejor-tipo-de-cambio/' },
    { name: 'Apps para Enviar', href: '/guias/aplicaciones-enviar-dinero/' },
    { name: 'Requisitos y Documentos', href: '/guias/requisitos-enviar-dinero/' },
    { name: 'Todas las Guías', href: '/guias/' },
  ],
  legal: [
    { name: 'Terminos de Servicio', href: '/terminos-servicio/' },
    { name: 'Politica de Privacidad', href: '/politica-privacidad/' },
    { name: 'Politica Editorial', href: '/about/politica-editorial/' },
    { name: 'Metodologia', href: '/about/metodologia/' },
    { name: 'Contacto', href: '/contacto/' },
  ],
}

const trustSignals = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    label: 'Información Actualizada 2025',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: '100% Independiente',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    label: 'En Español',
  },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Hero-like CTA Section */}
      <div className="relative overflow-hidden">
        <img
          src={mexicanImages.guanajuatoNight.src(1920, 400)}
          alt={mexicanImages.guanajuatoNight.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/85 to-neutral-900/70" />
        <div className="relative container-wide py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">
              Compara y ahorra
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Empieza a ahorrar en tus transferencias
            </h2>
            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
              Usa nuestra calculadora gratuita para encontrar el proveedor con
              las comisiones más bajas y el mejor tipo de cambio para tu envío.
            </p>
            <Link
              href="/calculadora/"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-colors shadow-lg shadow-emerald-500/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Abrir Calculadora
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Signals Row */}
      <div className="border-y border-neutral-800 bg-neutral-900/80">
        <div className="container-wide py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-3 text-neutral-400"
              >
                <span className="text-emerald-500">{signal.icon}</span>
                <span className="text-sm font-medium">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-wide py-14 md:py-18">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Proveedores */}
          <div>
            <h3 className="flex items-center gap-0 font-semibold text-white mb-5">
              <span className="inline-block w-1 h-5 bg-emerald-500 rounded-full mr-3" />
              Proveedores
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.proveedores.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparaciones */}
          <div>
            <h3 className="flex items-center gap-0 font-semibold text-white mb-5">
              <span className="inline-block w-1 h-5 bg-blue-500 rounded-full mr-3" />
              Comparaciones
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.comparaciones.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="flex items-center gap-0 font-semibold text-white mb-5">
              <span className="inline-block w-1 h-5 bg-amber-500 rounded-full mr-3" />
              Recursos
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="flex items-center gap-0 font-semibold text-white mb-5">
              <span className="inline-block w-1 h-5 bg-rose-500 rounded-full mr-3" />
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="mt-14 pt-10 border-t border-neutral-800">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Aviso Legal */}
            <div className="bg-neutral-800/60 rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-semibold text-white text-sm">Aviso Legal</h4>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                EnviarDineroMexico.com es un sitio informativo de comparación.{' '}
                <strong className="text-neutral-300">
                  NO somos un servicio financiero regulado, banco, ni transmisor de dinero.
                </strong>{' '}
                No procesamos transferencias. Toda la información es educativa y no constituye
                asesoramiento financiero. Los costos mostrados son estimaciones que pueden cambiar;
                verifica siempre con el proveedor antes de enviar dinero.
              </p>
            </div>

            {/* Divulgación de Afiliados */}
            <div className="bg-neutral-800/60 rounded-2xl p-6 border border-neutral-700/50">
              <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-semibold text-white text-sm">Divulgación de Afiliados</h4>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Este sitio contiene enlaces de afiliados. Podemos recibir una comisión cuando te
                registras a través de nuestros enlaces, sin costo adicional para ti. Esto no afecta
                nuestra independencia editorial.{' '}
                <Link
                  href="/about/politica-editorial/"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                >
                  Ver política completa
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mexican Flag Gradient Strip */}
      <div
        className="h-[3px]"
        style={{
          background: 'linear-gradient(to right, #006847 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, #CE1126 66.66%)',
        }}
      />

      {/* Bottom Bar */}
      <div className="bg-neutral-950 py-5">
        <div className="container-wide flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            &copy; 2025 EnviarDineroMexico.com. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500">
            <Link href="/terminos-servicio/" className="hover:text-neutral-300 transition-colors">
              Términos
            </Link>
            <Link href="/politica-privacidad/" className="hover:text-neutral-300 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
