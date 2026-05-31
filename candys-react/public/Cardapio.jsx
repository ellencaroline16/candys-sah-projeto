import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const categorias = [
  { id: "brigadeiros", label: "Brigadeiros" },
  { id: "presentes", label: "Presentes" },
  { id: "kits", label: "Kits" },
  { id: "infantis", label: "Infantis" },
  { id: "finos", label: "Doces Finos" },
  { id: "cupcakes", label: "Cupcakes" },
  { id: "bolos", label: "Bolos" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "cheesecake", label: "Cheesecake" },
];

function SaboresGrid({ sabores, premium }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {sabores.map((s) => (
        <span
          key={s}
          className={`text-sm px-3 py-1.5 rounded-full border font-medium ${
            premium
              ? "bg-amarelo-pale border-amarelo/40 text-yellow-800"
              : "bg-white border-creme-dark text-gray-600"
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function PrecoRow({ desc, preco, alt }) {
  return (
    <div className={`flex justify-between items-center px-4 py-3 text-sm ${alt ? "bg-creme" : "bg-white"} border-b border-creme-dark last:border-0`}>
      <span className="text-gray-600">{desc}</span>
      <span className="font-serif font-bold text-roxo ml-4 whitespace-nowrap">{preco}</span>
    </div>
  );
}

export default function Cardapio() {
  const [ativa, setAtiva] = useState("brigadeiros");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollTo = (id) => {
    setAtiva(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handler = () => {
      for (const cat of [...categorias].reverse()) {
        const el = document.getElementById(cat.id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setAtiva(cat.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#FDFAF3" }}>

      {/* CAPA compacta */}
      <div className="bg-roxo-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, #F4C842 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="inline-block bg-amarelo text-gray-900 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">✦ Cardápio 2026</span>
            <h1 className="font-serif italic text-white text-5xl md:text-6xl mb-2 leading-tight">Candy's Sah</h1>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Confeitaria Artesanal · São Bernardo do Campo, SP</p>
            <p className="font-serif italic text-white/60 text-base max-w-sm leading-relaxed">
              "I'll be there for you... com muito brigadeiro."
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            {[
              { label: "Instagram", val: "@candys_sah" },
              { label: "WhatsApp", val: "(11) 99278-1797" },
              { label: "Retirada", val: "Av. Moinho Fabrini, 385" },
            ].map(i => (
              <div key={i.label} className="text-right">
                <p className="text-white/30 text-xs tracking-widest uppercase">{i.label}</p>
                <p className="text-white/80 text-sm font-semibold">{i.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner amarelo informações */}
        <div className="bg-amarelo">
          <div className="max-w-5xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3">
            {[
              { label: "Prazo mín.", val: "3 dias · urgência +10%" },
              { label: "Pagamento", val: "PIX · Cartão · Dinheiro" },
              { label: "Entrada", val: "50% na confirmação" },
              { label: "PIX CNPJ", val: "51.028.662/0001-00" },
              { label: "Retirada", val: "Av. Moinho Fabrini, 385" },
              { label: "Entrega", val: "Frete sob consulta" },
            ].map(i => (
              <div key={i.label}>
                <p className="text-xs font-bold text-yellow-900/60 uppercase tracking-wider">{i.label}</p>
                <p className="text-sm font-semibold text-gray-900 leading-tight">{i.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAV INTERNA STICKY */}
      <div className="sticky top-0 z-40 bg-white border-b-2 border-amarelo shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-0.5 py-2 overflow-x-auto scrollbar-none">
            {categorias.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition whitespace-nowrap ${
                  ativa === c.id ? "bg-roxo text-white" : "text-gray-500 hover:bg-roxo-pale hover:text-roxo"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-0">

        {/* ── BRIGADEIROS ── */}
        <section id="brigadeiros" className="py-10 border-b-2 border-creme-dark">
          <div className="flex items-baseline gap-3 mb-1">
            <p className="text-xs font-bold tracking-widest uppercase text-roxo">The One With the Brigadeiro</p>
          </div>
          <h2 className="font-serif text-3xl font-normal mb-1">Brigadeiros <em className="italic text-roxo">Gourmet</em></h2>
          <p className="font-serif italic text-sm text-roxo-light mb-6">"Could this BE any tastier?" — Chandler Bing, provavelmente</p>

          {/* Tier Tradicionais */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-roxo text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">Tradicionais</span>
              <span className="text-xs text-gray-400">R$ 4,80 un. · R$ 4,60 c/ 12+</span>
            </div>
            <SaboresGrid sabores={["Cacau 100% c/ confeito ao leite", "Beijinho"]} />
          </div>

          {/* Tier Especiais */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-roxo-light text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">Especiais</span>
              <span className="text-xs text-gray-400">R$ 5,00 un. · R$ 4,80 c/ 12+</span>
            </div>
            <SaboresGrid sabores={["Tradicional Meio Amargo","Cacau 70%","Amendoim","Confete","Chocolate Branco","Maracujá","Prestígio","Limão","Ninho","Moranguinho","Casadinho Ninho c/ Morango","Casadinho Ninho c/ Chocolate"]} />
          </div>

          {/* Tier Premium */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-amarelo text-gray-900 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">Premium</span>
              <span className="text-xs text-gray-400">R$ 5,30 un. · R$ 5,00 c/ 12+</span>
            </div>
            <SaboresGrid premium sabores={["Pistache c/ confeito pistache","Pistache c/ semente pistache","Ninho com Nutella","Ferrero Rocher","Milho","Café","Cereja","Crème Brûlée","Romeu e Julieta","Churros c/ doce de leite","Morango c/ confeito Callebaut","Morango em flor/rosa","Brigatone"]} />
            <p className="text-xs text-gray-400 mt-2">* Pistache c/ semente: R$ 5,50 un. · R$ 5,20 c/ 12+ · Formato flor/letras disponíveis em sabores selecionados.</p>
          </div>

          {/* Cento */}
          <div className="bg-roxo-pale rounded-xl overflow-hidden border border-roxo/10">
            <div className="bg-roxo/10 px-5 py-2.5">
              <p className="text-xs font-bold tracking-widest uppercase text-roxo">Cento de brigadeiros 15g</p>
            </div>
            <div className="divide-y divide-creme-dark">
              <PrecoRow desc="Sabores Tradicionais" preco="R$ 250,00" alt />
              <PrecoRow desc="Sabores Especiais" preco="R$ 280,00" />
              <PrecoRow desc="Sabores Premium · formato flor/letras" preco="R$ 300,00" alt />
            </div>
          </div>
        </section>

        {/* ── PRESENTES ── */}
        <section id="presentes" className="py-10 border-b-2 border-creme-dark">
          <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-1">The One With the Gift</p>
          <h2 className="font-serif text-3xl font-normal mb-6">Brigadeiros <em className="italic text-roxo">para presente</em></h2>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="rounded-xl overflow-hidden border border-creme-dark">
              <div className="bg-roxo px-4 py-3">
                <p className="text-white font-semibold text-sm">Tradicionais & Especiais 20g</p>
                <p className="text-white/50 text-xs mt-0.5">Com laço e tag: +R$ 1,50</p>
              </div>
              <div className="divide-y divide-creme-dark">
                <PrecoRow desc="2 unidades" preco="R$ 14,00" alt />
                <PrecoRow desc="4 unidades" preco="R$ 24,00" />
                <PrecoRow desc="6 unidades" preco="R$ 34,00" alt />
                <PrecoRow desc="8 unidades" preco="R$ 45,00" />
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl overflow-hidden border border-amarelo/40">
              <div className="bg-amarelo px-4 py-3">
                <p className="text-gray-900 font-semibold text-sm">Premium 20g · flor e letras</p>
                <p className="text-gray-700/60 text-xs mt-0.5">Com laço e tag: +R$ 1,50</p>
              </div>
              <div className="divide-y divide-creme-dark">
                <PrecoRow desc="2 unidades" preco="R$ 15,00" alt />
                <PrecoRow desc="4 unidades" preco="R$ 26,00" />
                <PrecoRow desc="6 unidades" preco="R$ 37,00" alt />
                <PrecoRow desc="8 unidades" preco="R$ 48,00" />
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl overflow-hidden border border-creme-dark">
              <div className="bg-roxo/10 px-4 py-3">
                <p className="text-roxo-dark font-semibold text-sm">Caixa unitária gourmet</p>
                <p className="text-gray-500 text-xs mt-0.5">Com laço e tag personalizada</p>
              </div>
              <div className="divide-y divide-creme-dark">
                <PrecoRow desc="Até 19 un." preco="R$ 6,80 cada" alt />
                <PrecoRow desc="20+ unidades" preco="R$ 6,60 cada" />
                <PrecoRow desc="60+ unidades" preco="R$ 6,20 cada" alt />
                <PrecoRow desc="100+ unidades" preco="R$ 5,80 cada" />
              </div>
            </div>
          </div>
        </section>

        {/* ── KITS COM BEBIDAS ── */}
        <section id="kits" className="py-10 border-b-2 border-creme-dark">
          <div className="bg-roxo-dark rounded-2xl overflow-hidden">
            <div className="px-6 pt-6 pb-4">
              <p className="text-xs font-bold tracking-widest uppercase text-amarelo mb-1">The One With the Perfect Gift</p>
              <h2 className="font-serif text-3xl font-normal text-white mb-1">Kits com <em className="italic text-amarelo">bebidas</em></h2>
              <p className="text-white/40 text-sm mb-0">Todos acompanham 6 brigadeiros 20g</p>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { icon: "🍷", nome: "Kit com Vinho", desc: "Quinta do Morgado 245ml · Tinto Seco ou Branco Suave", preco: "R$ 70,00" },
                { icon: "🍺", nome: "Kit com Cerveja", desc: "Heineken 250ml ou Corona 210ml · outros rótulos sob consulta", preco: "R$ 65,00" },
                { icon: "🥂", nome: "Kit com Chandon", desc: "Mini Chandon · Réserve Brut, Brut Rosé ou Passion", preco: "R$ 120,00" },
              ].map((k) => (
                <div key={k.nome} className="px-6 py-5 flex items-start gap-4">
                  <span className="text-3xl shrink-0">{k.icon}</span>
                  <div>
                    <p className="font-serif text-white text-lg mb-1">{k.nome}</p>
                    <p className="text-white/45 text-xs leading-relaxed mb-3">{k.desc}</p>
                    <p className="font-serif text-amarelo text-xl font-bold">{k.preco}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KITS INFANTIS ── */}
        <section id="infantis" className="py-10 border-b-2 border-creme-dark">
          <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-1">The One For the Kids</p>
          <h2 className="font-serif text-3xl font-normal mb-6">Kits <em className="italic text-roxo">infantis</em></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { nome: "Kit Mini Chef — Opção 1", desc: "2 cupcakes + 3 tubetes (confetes, granulado colorido e ao leite) + saco de confeitar 80g (chocolate ou ninho)", preco: "R$ 40,00", cor: "roxo" },
              { nome: "Kit Mini Chef — Opção 2", desc: "1 mini bolo + saco de confeitar 80g + saquinho de confeitos + 3 brigadeiros (chocolate ou ninho)", preco: "R$ 40,00", cor: "roxo" },
              { nome: "Castelo Kids", desc: "Para montar e pintar · 6 cores de guache lavável + 1 pincel + 6 brigadeiros 20g à escolha", preco: "R$ 95,00", note: "Consultar disponibilidade", cor: "amarelo" },
            ].map((k) => (
              <div key={k.nome} className={`rounded-xl overflow-hidden border ${k.cor === "amarelo" ? "border-amarelo/40" : "border-creme-dark"}`}>
                <div className={`px-4 py-3 ${k.cor === "amarelo" ? "bg-amarelo" : "bg-roxo"}`}>
                  <p className={`font-semibold text-sm ${k.cor === "amarelo" ? "text-gray-900" : "text-white"}`}>{k.nome}</p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{k.desc}</p>
                  <p className="font-serif font-bold text-roxo text-lg">{k.preco}</p>
                  {k.note && <p className="text-gray-400 text-xs mt-1">{k.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DOCES FINOS ── */}
        <section id="finos" className="py-10 border-b-2 border-creme-dark">
          <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-1">Could this BE any finer?</p>
          <h2 className="font-serif text-3xl font-normal mb-6">Doces <em className="italic text-roxo">Finos</em></h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { nome: "Camafeu de Nozes", preco: "R$ 6,00 un." },
              { nome: "Bem-casado", desc: '"We Were on a Break... cake" · recheio de doce de leite', preco: "R$ 6,00 un." },
            ].map((d) => (
              <div key={d.nome} className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-creme-dark">
                <div>
                  <p className="font-serif text-lg text-gray-900">{d.nome}</p>
                  {d.desc && <p className="font-serif italic text-xs text-roxo-light mt-0.5">{d.desc}</p>}
                </div>
                <span className="font-serif font-bold text-roxo text-base ml-4 whitespace-nowrap">{d.preco}</span>
              </div>
            ))}
          </div>

          {/* Verrines */}
          <div className="rounded-xl overflow-hidden border border-creme-dark">
            <div className="bg-roxo/8 border-b border-creme-dark px-5 py-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-serif italic text-gray-900 text-base">Verrines</p>
                <p className="font-serif italic text-xs text-roxo-light">"Could this BE any creamier?"</p>
              </div>
              <div className="flex gap-3 text-xs text-gray-500">
                <span className="bg-white px-3 py-1 rounded-full border border-creme-dark">Sem tampa R$ 6,00</span>
                <span className="bg-white px-3 py-1 rounded-full border border-creme-dark">Com tampa personalizada R$ 9,00</span>
              </div>
            </div>
            <div className="p-4">
              <SaboresGrid sabores={["Maracujá c/ ganache meio amargo","Limão c/ merengue maçaricado","Pistache c/ frutas vermelhas","Coco com abacaxi","Ninho com Nutella","Cheesecake frutas vermelhas","Cheesecake de blueberry"]} />
            </div>
          </div>
        </section>

        {/* ── CUPCAKES ── */}
        <section id="cupcakes" className="py-10 border-b-2 border-creme-dark">
          <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-1">Smelly Cat Cupcakes</p>
          <h2 className="font-serif text-3xl font-normal mb-6"><em className="italic text-roxo">Cupcakes</em></h2>

          {/* Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Massas", val: "Chocolate · Baunilha", am: false },
              { label: "Recheios", val: "Brigadeiro chocolate · Ninho · Morango", am: false },
              { label: "Coberturas", val: "Brigadeiro Choc. · Morango · Ninho · Chantininho", am: false },
              { label: "Toppings +R$ 1", val: "Kinder Bueno · Ovomaltine Rocks", am: true },
            ].map((i) => (
              <div key={i.label} className={`rounded-xl p-3 border text-sm ${i.am ? "bg-amarelo-pale border-amarelo/40" : "bg-white border-creme-dark"}`}>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${i.am ? "text-yellow-700" : "text-roxo"}`}>{i.label}</p>
                <p className="text-gray-700 leading-snug">{i.val}</p>
              </div>
            ))}
          </div>

          {/* Tabela preços */}
          <div className="rounded-xl overflow-hidden border border-creme-dark">
            <div className="bg-roxo/8 px-5 py-2.5 border-b border-creme-dark">
              <p className="text-xs font-bold tracking-widest uppercase text-roxo">Tabela de preços</p>
            </div>
            <div className="divide-y divide-creme-dark">
              <PrecoRow desc="Cupcake · acima de 20 un. R$ 7,00 · caixa p/ presente R$ 10,00" preco="R$ 8,00 cada" alt />
              <PrecoRow desc="Mini Cupcake · acima de 20 un. R$ 5,00 · caixa 2 un. R$ 14,00" preco="R$ 6,00 cada" />
              <PrecoRow desc="Cupcake OvoMaltine · acima de 20 un. R$ 8,00 · caixa p/ presente R$ 11,00" preco="R$ 9,00 cada" alt />
            </div>
          </div>
        </section>

        {/* ── BOLOS ── */}
        <section id="bolos" className="py-10 border-b-2 border-creme-dark">
          <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-1">How You Doin'?</p>
          <h2 className="font-serif text-3xl font-normal mb-6"><em className="italic text-roxo">Bolos</em></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { nome: "Bolo recheado e decorado", desc: "Massas: baunilha, chocolate ou coco. Coberturas: chantininho, chantilly ou ganache. Recheios variados: ninho trufado, pistache, red velvet e mais.", preco: "Sob consulta", note: "Valor por qtde, cobertura e decoração", am: false },
              { nome: "Mini Bolo", desc: "Massa baunilha ou chocolate c/ chantininho. Recheios: chocolate trufado, ninho, brigadeiro branco c/ morango, doce de leite c/ abacaxi, prestígio.", preco: "R$ 80,00", note: "Com 6 brigs R$ 120,00 · Ganache R$ 140,00", am: false },
              { nome: "Bolo de Pote 200g", desc: "Baunilha ou chocolate. Recheios: brigadeiro branco c/ morango, pistache c/ frutas vermelhas, crocante de amendoim, doce de leite c/ abacaxi e mais.", preco: "R$ 18,00", note: "Acima de 50 un. R$ 15,00 cada", am: true },
            ].map((b) => (
              <div key={b.nome} className={`rounded-xl overflow-hidden border ${b.am ? "border-amarelo/40" : "border-creme-dark"}`}>
                <div className={`px-4 py-3 ${b.am ? "bg-amarelo" : "bg-roxo"}`}>
                  <p className={`font-serif text-base font-normal ${b.am ? "text-gray-900" : "text-white"}`}>{b.nome}</p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{b.desc}</p>
                  <p className="font-serif font-bold text-roxo text-lg">{b.preco}</p>
                  {b.note && <p className="text-gray-400 text-xs mt-1">{b.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SOBREMESAS ── */}
        <section id="sobremesas" className="py-10 border-b-2 border-creme-dark">
          <div className="bg-roxo-dark rounded-2xl overflow-hidden">
            <div className="px-6 pt-6 pb-4 border-b border-white/10">
              <p className="text-xs font-bold tracking-widest uppercase text-amarelo mb-1">The One With the Dessert</p>
              <h2 className="font-serif text-3xl font-normal text-white mb-0.5">Sobremesas na <em className="italic text-amarelo">Travessa</em></h2>
              <p className="text-white/40 text-sm">Disponíveis em ~600g ou ~1,2kg</p>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="divide-y divide-white/10">
                {[
                  { nome: "Banoffee Tradicional", preco: "R$ 80,00 · R$ 130,00" },
                  { nome: "Banoffee Ganache ½ Amargo", preco: "R$ 90,00 · R$ 140,00" },
                  { nome: "Pavetone de Ganache ✦ sazonal", preco: "R$ 100,00 · R$ 165,00" },
                  { nome: "Bombom de Morango c/ Ganache", preco: "R$ 95,00 · R$ 160,00" },
                ].map((s, i) => (
                  <div key={s.nome} className={`flex justify-between items-center px-5 py-4 ${i % 2 === 0 ? "bg-white/5" : ""}`}>
                    <p className="text-white/80 text-sm">{s.nome}</p>
                    <p className="font-serif text-amarelo text-sm font-bold ml-4 whitespace-nowrap">{s.preco}</p>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-white/10">
                {[
                  { nome: "Bombom de Uva c/ Brigadeiro Ninho", preco: "R$ 85,00 · R$ 140,00" },
                  { nome: "Torta de Limão", preco: "R$ 80,00 · R$ 110,00" },
                  { nome: "Torta de Ninho Trufada c/ Ganache", preco: "R$ 100,00 · R$ 165,00" },
                  { nome: "Torta de Morango", preco: "R$ 90,00 · R$ 155,00" },
                ].map((s, i) => (
                  <div key={s.nome} className={`flex justify-between items-center px-5 py-4 ${i % 2 === 0 ? "bg-white/5" : ""}`}>
                    <p className="text-white/80 text-sm">{s.nome}</p>
                    <p className="font-serif text-amarelo text-sm font-bold ml-4 whitespace-nowrap">{s.preco}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CHEESECAKE ── */}
        <section id="cheesecake" className="py-10">
          <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-1">The Cheesecake</p>
          <h2 className="font-serif text-3xl font-normal mb-1"><em className="italic text-roxo">Cheesecake</em></h2>
          <p className="font-serif italic text-sm text-roxo-light mb-6">"Bom o suficiente pra comer no corredor" — Ross e Chandler saberiam</p>
          <div className="rounded-xl overflow-hidden border border-creme-dark">
            <PrecoRow desc="Calda de Mirtilo ou Frutas Vermelhas" preco="R$ 140,00" alt />
            <PrecoRow desc="Calda de Morango" preco="R$ 130,00" />
            <PrecoRow desc="Calda de Goiabada" preco="R$ 120,00" alt />
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <div className="bg-roxo-dark mt-4 py-10 px-6 text-center">
        <p className="font-serif italic text-white text-2xl mb-1">Candy's Sah</p>
        <p className="font-serif italic text-amarelo text-sm mb-6">"I'll be there for you" · desde o primeiro brigadeiro</p>
        <a
          href="https://wa.me/5511992781797"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-roxo hover:bg-roxo-light transition text-white px-8 py-3 rounded-xl font-bold text-sm tracking-wide uppercase mb-6"
        >
          Fazer encomenda no WhatsApp
        </a>
        <div className="border-t border-white/10 pt-5">
          <Link to="/" className="text-white/40 text-sm hover:text-white/70 transition">
            ← Voltar ao site
          </Link>
        </div>
      </div>

    </div>
  );
}
