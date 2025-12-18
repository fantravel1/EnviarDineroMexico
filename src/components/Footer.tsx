import Link from 'next/link'

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
    { name: 'Guia Primera Transferencia', href: '/guias/como-enviar-dinero-primera-vez/' },
    { name: 'Impuestos y Remesas', href: '/guias/impuestos-remesas-mexico/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Nosotros', href: '/nosotros/' },
  ],
  legal: [
    { name: 'Terminos de Servicio', href: '/terminos-servicio/' },
    { name: 'Politica de Privacidad', href: '/politica-privacidad/' },
    { name: 'Politica Editorial', href: '/about/politica-editorial/' },
    { name: 'Metodologia', href: '/about/metodologia/' },
    { name: 'Contacto', href: '/contacto/' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300">
      {/* Main footer content */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Proveedores */}
          <div>
            <h3 className="font-semibold text-white mb-4">Proveedores</h3>
            <ul className="space-y-2">
              {footerLinks.proveedores.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparaciones */}
          <div>
            <h3 className="font-semibold text-white mb-4">Comparaciones</h3>
            <ul className="space-y-2">
              {footerLinks.comparaciones.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="bg-neutral-700/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-neutral-300">
              <strong className="text-white">Aviso Legal:</strong> EnviarDineroMexico.com es un sitio
              informativo de comparación. <strong>NO somos un servicio financiero regulado, banco, ni
              transmisor de dinero.</strong> No procesamos transferencias. Toda la información es educativa
              y no constituye asesoramiento financiero. Los costos mostrados son estimaciones que pueden
              cambiar; verifica siempre con el proveedor antes de enviar dinero.
            </p>
          </div>
          <p className="text-sm text-neutral-400 max-w-3xl">
            <strong>Divulgación de Afiliados:</strong> Este sitio contiene enlaces de afiliados.
            Podemos recibir una comisión cuando te registras a través de nuestros enlaces, sin costo
            adicional para ti. Esto no afecta nuestra independencia editorial.
            <Link href="/about/politica-editorial/" className="underline hover:text-white ml-1">
              Ver política completa
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-neutral-900 py-4">
        <div className="container-wide flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © 2025 EnviarDineroMexico.com. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-neutral-500">
            <Link href="/terminos-servicio/" className="hover:text-neutral-300">Términos</Link>
            <Link href="/politica-privacidad/" className="hover:text-neutral-300">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
