import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen bg-creme flex flex-col justify-center pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-roxo-pale rounded-full -translate-y-1/3 translate-x-1/3 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-amarelo-pale rounded-full translate-y-1/3 -translate-x-1/3 opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #F4C842 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 bg-amarelo text-gray-900 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            ✦ Confeitaria Artesanal · São Bernardo do Campo
          </span>

          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-tight mb-4">
            Doces que ficam
            <br />
            na <em className="text-roxo not-italic italic">memória</em>
          </h1>

          <blockquote className="border-l-4 border-roxo bg-roxo-pale px-5 py-4 rounded-r-xl mb-6 font-serif italic text-lg text-roxo-dark leading-relaxed">
            "I'll be there for you... com muito brigadeiro."
          </blockquote>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
            Brigadeiros finos, bolos decorados, kits especiais e sobremesas feitas com carinho e ingredientes selecionados para os seus momentos mais especiais.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="px-8 py-4 bg-roxo text-white rounded-xl font-bold text-base tracking-wide uppercase transition hover:bg-roxo-dark"
            >
              Ver produtos
            </a>
            <Link
              to="/cardapio"
              className="px-8 py-4 bg-amarelo text-gray-900 rounded-xl font-bold text-base tracking-wide uppercase transition hover:bg-amarelo-dark"
            >
              Ver cardápio completo
            </Link>
          </div>
        </div>

        <div className="bg-roxo-dark rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amarelo/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">
            Especialidade da casa
          </p>
          <h2 className="font-serif italic text-white text-3xl mb-2">
            Brigadeiros Gourmet
          </h2>
          <p className="text-white/50 text-base mb-6">
            Tradicionais · Especiais · Premium
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Pistache", "Crème Brûlée", "Ferrero Rocher"].map((s) => (
              <span key={s} className="bg-amarelo text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
                {s}
              </span>
            ))}
            <span className="bg-white/10 text-white/70 text-xs font-bold px-3 py-1.5 rounded-full">
              + 20 sabores
            </span>
          </div>
          <div className="bg-white/7 rounded-xl p-4 border border-white/10">
            <p className="font-serif italic text-white/70 text-base leading-relaxed">
              "Could this BE any tastier?"
            </p>
            <p className="text-white/35 text-xs tracking-widest uppercase mt-2">
              — Chandler Bing, provavelmente
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-roxo py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-0" style={{ animation: "marquee 22s linear infinite" }}>
          {[
            "Brigadeiros Finos","Bolos Decorados","Kit Noiva","The Cheesecake",
            "Sobremesas","I'll be there for you","Cupcakes","Kits Presentes","Feito com amor",
            "Brigadeiros Finos","Bolos Decorados","Kit Noiva","The Cheesecake",
            "Sobremesas","I'll be there for you","Cupcakes","Kits Presentes","Feito com amor",
          ].map((item, i) => (
            <span key={i} className="text-white/80 text-xs font-bold tracking-widest uppercase px-5">
              {item}{i % 9 !== 8 && <span className="text-amarelo mx-1">✦</span>}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
