
const footerSections = [
  {
    title: "EXPLORAR",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Explorar", href: "/explorar" },
      { label: "Mi Lista", href: "/mi-lista" },
      { label: "Novedades", href: "/novedades" },
    ],
  },
  {
    title: "CUENTA / PLANES",
    links: [
      { label: "Planes y Tarifas", href: "/planes" },
      { label: "Canjear Código", href: "/canjear-codigo" },
      { label: "Métodos de Pago", href: "/metodos-de-pago" },
      { label: "Configuración", href: "/configuracion" },
    ],
  },
  {
    title: "LEGAL & SOPORTE",
    links: [
      { label: "Términos de Uso", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Centro de Ayuda", href: "/ayuda" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Discord", href: "https://discord.com" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background text-text-primary">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">

        <div className="flex flex-col gap-4">

          <a
            href="/"
            className="flex w-fit items-center gap-3"
            aria-label="Streamax - Inicio"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-surface shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <span className="text-lg font-black text-primary">
                S
              </span>
            </div>

            <span className="text-2xl font-extrabold tracking-wide">
              STREAMAX
            </span>
          </a>

          <p className="max-w-md text-sm leading-relaxed text-text-secondary">
            Tu plataforma definitiva de streaming en ultra alta
            definición 4K HDR y sonido cinematográfico inmersivo.
          </p>

        </div>
        {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">

            <h3 className="text-sm font-bold tracking-wide text-text-primary">
              {section.title}
            </h3>

            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="w-fit text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-border px-6 py-5 sm:flex-row">

        <p className="text-center text-xs font-medium text-text-secondary sm:text-left">
          © 2025 Streamax. Todos los derechos reservados.
        </p>

        <nav aria-label="Redes sociales">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">

            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-text-secondary transition-colors duration-200 hover:text-primary"
                >
                  {social.label}
                </a>
              </li>
            ))}

          </ul>
        </nav>

      </div>

    </footer>
  );
};

export default Footer;
