import { Link } from "react-router-dom";
const produtos = [
  {
    foto: "/images/brigadeiros.png",
    friends: '"The One with the Brigadeiro"',
    nome: "Brigadeiros Gourmet",
    desc: "Feitos com cacau 100% e ingredientes premium. Tradicionais, Especiais e Premium — mais de 20 sabores.",
    preco: "A partir de R$ 4,80 un.",
    badge: "roxo",
  },
  {
    foto: "/images/cheesecacke_de_mirtilo.png",
    friends: '"The Cheesecake"',
    nome: "Cheesecake de Mirtilo",
    desc: "Bom o suficiente pra comer no corredor — Ross e Chandler confirmariam. Calda de mirtilo ou frutas vermelhas.",
    preco: "R$ 140,00",
    badge: "amarelo",
  },
  {
    foto: "/images/kit_chandon.png",
    friends: '"The One with the Proposal"',
    nome: "Kit com Chandon",
    desc: "Mini Chandon + 6 brigadeiros 20g. Para os momentos que merecem uma celebração à altura.",
    preco: "R$ 120,00",
    badge: "amarelo",
  },
  {
    foto: "/images/bem_casado_.png",
    friends: '"We Were on a Break... cake"',
    nome: "Bem-casado",
    desc: "Doce tradicional com recheio de doce de leite. Porque nem todo break dura para sempre.",
    preco: "R$ 6,00 un.",
    badge: "roxo",
  },
  {
    foto: "/images/camafeu.png",
    friends: '"Could this BE any finer?"',
    nome: "Camafeu de Nozes",
    desc: "Doce fino clássico com acabamento elegante e nozes selecionadas. Um mimo especial.",
    preco: "R$ 6,00 un.",
    badge: "roxo",
  },
  {
    foto: "/images/cupcakes.png",
    friends: '"The One Phoebe Can\'t Stop Eating"',
    nome: "Cupcakes",
    desc: "Massa chocolate ou baunilha, recheios irresistíveis e cobertura de buttercream artesanal.",
    preco: "A partir de R$ 8,00 un.",
    badge: "amarelo",
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="bg-roxo-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs font-bold tracking-widest uppercase text-amarelo mb-2">
          Nossos produtos
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-4 leading-tight">
          "The One Where Everyone{" "}
          <em className="italic text-amarelo">Keeps Coming Back</em>"
        </h2>
        <p className="text-white/55 text-lg mb-12 max-w-xl leading-relaxed">
          Os queridinhos que a galera nunca para de pedir. Feitos com carinho,
          ingredientes selecionados e muito capricho.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((p) => (
            <div
              key={p.nome}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-creme">
                <img
                  src={p.foto}
                  alt={p.nome}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background = "#F0EBF8";
                  }}
                />
              </div>

              <div className="p-5">
                <p className="font-serif italic text-roxo-light text-sm mb-1">
                  {p.friends}
                </p>
                <h3 className="font-serif text-xl text-gray-900 mb-2 leading-snug">
                  {p.nome}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <span
                  className={`inline-block text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full ${
                    p.badge === "amarelo"
                      ? "bg-amarelo-pale text-amarelo-dark"
                      : "bg-roxo-pale text-roxo-dark"
                  }`}
                >
                  {p.preco}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Card CTA */}
        <div className="mt-8 bg-white/8 border border-amarelo/25 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif italic text-white text-xl mb-2">
              Esses são só os favoritos...
            </p>
            <p className="text-white/55 text-base">
              No cardápio completo tem brigadeiros em 3 tiers, kits especiais,
              sobremesas na travessa, cupcakes e muito mais.
            </p>
          </div>
          <Link
            to="/cardapio"
            className="flex-shrink-0 px-8 py-4 bg-amarelo text-gray-900 rounded-xl font-bold text-sm tracking-wide uppercase transition hover:bg-amarelo-dark whitespace-nowrap"
          >
            Ver cardápio completo →
          </Link>
        </div>

      </div>
    </section>
  );
}
