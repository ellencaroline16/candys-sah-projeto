export default function Footer() {
  return (
    <footer className="bg-roxo-dark py-10 px-6 text-center border-t border-white/10">
      <p className="font-serif italic text-white text-2xl mb-2">Candy's Sah</p>
      <p className="font-serif italic text-amarelo text-base mb-4">
        "I'll be there for you" · desde o primeiro brigadeiro
      </p>
      <p className="text-white/30 text-sm tracking-wide mb-6">
        Confeitaria artesanal · São Bernardo do Campo, SP
      </p>

      {/* Crédito de desenvolvimento */}
      <div className="border-t border-white/10 pt-5">
        <p className="text-white/25 text-xs tracking-wide">
          Desenvolvido por{" "}
          <a
            href="https://github.com/ellencaroline16"
            target="_blank"
            rel="noreferrer"
            className="text-white/45 hover:text-amarelo transition-colors duration-300 font-semibold"
          >
            Ellen Silva
          </a>
          {" "}· 2026
        </p>
      </div>
    </footer>
  );
}
