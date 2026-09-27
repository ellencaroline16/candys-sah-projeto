import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-verde ${
      scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Candy's Sah"
            className="w-14 h-14 object-contain"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-serif italic text-xl text-marrom font-bold">
              Candy's Sah
            </span>
            <span className="text-xs tracking-widest uppercase text-marrom-muted mt-0.5">
              Confeitaria Artesanal
            </span>
          </div>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase text-marrom-mid transition hover:bg-verde-pale hover:text-verde-dark"
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
              className="ml-2 px-5 py-2 rounded-lg bg-verde text-white text-sm font-bold tracking-wide uppercase transition hover:bg-verde-dark"
            >
              Encomendar
            </a>
          </li>
        </ul>

        {/* Hambúrguer mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-marrom transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-marrom transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-marrom transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-creme-dark px-6 pb-6 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-semibold tracking-wide uppercase text-marrom-mid border-b border-creme-dark"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511992781797"
            target="_blank"
            rel="noreferrer"
            className="mt-2 py-3 rounded-lg bg-verde text-white text-center font-bold tracking-wide uppercase"
          >
            Encomendar
          </a>
        </div>
      )}
    </nav>
  );
}
