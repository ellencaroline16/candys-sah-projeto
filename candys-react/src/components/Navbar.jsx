import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Nossos Produtos", href: "#produtos" },
    { label: "Fale Conosco", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-amarelo ${
        scrolled ? "bg-creme/95 backdrop-blur shadow-sm" : "bg-creme"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="font-serif italic text-2xl text-roxo-dark">
            Candy's Sah
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-roxo-light mt-0.5">
            Confeitaria Artesanal
          </span>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase text-roxo transition hover:bg-roxo-pale hover:text-roxo-dark"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5511992781797"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-5 py-2 rounded-lg bg-roxo text-white text-sm font-bold tracking-wide uppercase transition hover:bg-roxo-dark"
            >
              Encomendar
            </a>
          </li>
        </ul>

        {/* Hamburguer mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-roxo-dark transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-roxo-dark transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-roxo-dark transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-creme border-t border-creme-dark px-6 pb-6 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-semibold tracking-wide uppercase text-roxo border-b border-creme-dark"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511992781797"
            target="_blank"
            rel="noreferrer"
            className="mt-2 py-3 rounded-lg bg-roxo text-white text-center font-bold tracking-wide uppercase"
          >
            Encomendar
          </a>
        </div>
      )}
    </nav>
  );
}
