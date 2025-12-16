import Link from 'next/link'

const footerLinks = {
  proveedores: [
    { name: 'Sendwave', href: '/reviews/sendwave/' },
    { name: 'Félix Pago', href: '/reviews/felix-pago/' },
    { name: 'Remitly', href: '/reviews/remitly/' },
  ],
  comparaciones: [
    { name: 'Remitly vs Western Union', href: '/comparar/remitly-vs-western-union/' },
    { name: 'Sendwave vs Remitly', href: '/comparar/sendwave-vs-remitly/' },
    { name: 'Félix Pago vs Remitly', href: '/comparar/felix-pago-vs-remitly/' },
  ],
  recursos: [
    { name: 'Calculadora', href: '/calculadora/' },
    { name: 'Guía Primera Transferencia', href: '/guias/como-enviar-dinero-primera-vez/' },
    { name: 'Impuestos y Regulaciones', href: '/guias/impuestos-remesas-mexico/' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '/about/' },
    { name: 'Metodología', href: '/about/metodologia/' },
    { name: 'Política Editorial', href: '/about/politica-editorial/' },
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

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
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

        {/* Affiliate disclosure */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <p className="text-xs text-neutral-400 max-w-3xl">
            <strong>Divulgación:</strong> EnviarDineroMexico.com contiene enlaces de afiliados.
            Podemos recibir una comisión cuando te registras en servicios a través de nuestros
            enlaces, sin costo adicional para ti. Esto no afecta nuestra independencia editorial
            ni metodología de clasificación. Las tarifas y tipos de cambio pueden variar y deben
            verificarse directamente con cada proveedor antes de realizar una transferencia.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-neutral-900 py-4">
        <div className="container-wide flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © 2025 EnviarDineroMexico.com. Todos los derechos reservados.
          </p>
          <p className="text-xs text-neutral-500">
            Última actualización: Diciembre 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
