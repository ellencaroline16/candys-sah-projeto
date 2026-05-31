import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const categorias = [
  { id: "brigadeiros", label: "Brigadeiros" },
  { id: "presentes", label: "Presentes" },
  { id: "kits", label: "Kits c/ Bebidas" },
  { id: "infantis", label: "Kits Infantis" },
  { id: "finos", label: "Doces Finos" },
  { id: "cupcakes", label: "Cupcakes" },
  { id: "bolos", label: "Bolos" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "cheesecake", label: "Cheesecake" },
];

function SecaoHeader({ eyebrow, titulo, friends }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-1">{eyebrow}</p>
      <h2 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-1">
        {titulo}
      </h2>
      {friends && (
        <p className="font-serif italic text-roxo-light text-base">{friends}</p>
      )}
    </div>
  );
}

function TierBadge({ label, cor }) {
  const cores = {
    roxo: "bg-roxo text-white",
    amarelo: "bg-amarelo text-gray-900",
    light: "bg-roxo-light text-white",
  };
  return (
    <span className={`text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full ${cores[cor] || cores.roxo}`}>
      {label}
    </span>
  );
}

function SaboresGrid({ sabores, premium }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-3">
      {sabores.map((s) => (
        <div
          key={s}
          className={`rounded-xl px-4 py-3 text-sm font-medium border ${
            premium
              ? "bg-amarelo-pale border-amarelo/30 text-gray-700"
              : "bg-creme border-creme-dark text-gray-600"
          }`}
        >
          {s}
        </div>
      ))}
    </div>
  );
}

function TabelaPreco({ linhas }) {
  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-creme-dark">
      {linhas.map((l, i) => (
        <div
          key={i}
          className={`flex justify-between items-center px-5 py-3.5 text-base ${
            i % 2 === 0 ? "bg-white" : "bg-creme"
          } border-b border-creme-dark last:border-0`}
        >
          <span className="text-gray-600">{l.desc}</span>
          <span className="font-serif font-bold text-roxo whitespace-nowrap ml-4">{l.preco}</span>
        </div>
      ))}
    </div>
  );
}

function ProdutoCard({ nome, desc, preco, note, amarelo }) {
  return (
    <div className={`bg-white rounded-2xl p-5 border-t-4 border-1.5 border-creme-dark ${amarelo ? "border-t-amarelo" : "border-t-roxo"}`}>
      <h4 className="font-serif text-lg text-gray-900 mb-2 leading-snug">{nome}</h4>
      {desc && <p className="text-gray-500 text-sm leading-relaxed mb-3">{desc}</p>}
      {preco && <p className="font-serif font-bold text-roxo text-base">{preco}</p>}
      {note && <p className="text-gray-400 text-xs mt-1">{note}</p>}
    </div>
  );
}

export default function Cardapio() {
  const [ativa, setAtiva] = useState("brigadeiros");
  const navRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    setAtiva(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handler = () => {
      const offset = 160;
      for (const cat of [...categorias].reverse()) {
        const el = document.getElementById(cat.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setAtiva(cat.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-creme">

      {/* CAPA */}
      <div className="bg-roxo-dark relative overflow-hidden py-16 px-6 text-center">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle, #F4C842 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block bg-amarelo text-gray-900 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            ✦ Cardápio 2026
          </span>
          <h1 className="font-serif italic text-white text-5xl md:text-6xl mb-3">Candy's Sah</h1>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-6">
            Confeitaria Artesanal · São Bernardo do Campo
          </p>
          <div className="w-14 h-1 bg-amarelo mx-auto mb-6" />
          <p className="font-serif italic text-white/70 text-lg leading-relaxed mb-1">
            "I'll be there for you... com muito brigadeiro."
          </p>
          <p className="text-white/30 text-xs tracking-widest uppercase">
            — porque toda boa história tem um doce no meio
          </p>
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <p className="text-white/80 text-sm font-semibold">@candys_sah</p>
              <p className="text-white/40 text-xs">Instagram</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm font-semibold">(11) 99278-1797</p>
              <p className="text-white/40 text-xs">WhatsApp</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm font-semibold">São Bernardo do Campo, SP</p>
              <p className="text-white/40 text-xs">Retirada & Entrega</p>
            </div>
          </div>
        </div>
      </div>

      {/* INFORMAÇÕES IMPORTANTES */}
      <div className="bg-amarelo px-6 py-8">
        <h3 className="font-serif italic text-gray-900 text-xl mb-5">Informações importantes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: "Prazo", val: "Mínimo 3 dias de antecedência. Urgências: +10% sobre o total." },
            { label: "Pagamento", val: "PIX · Cartão de débito ou crédito · Dinheiro. 50% na confirmação." },
            { label: "PIX", val: "CNPJ: 51.028.662/0001-00" },
            { label: "Retirada", val: "Av. Moinho Fabrini, 385 · Jardim Independência · São Bernardo do Campo, SP" },
            { label: "Entrega", val: "Frete calculado por distância. Consulte pelo WhatsApp." },
            { label: "Quantidade mínima", val: "Consultar para alguns itens antes de confirmar o pedido." },
          ].map((i) => (
            <div key={i.label} className="bg-white/50 rounded-xl px-5 py-4">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-800 mb-1">{i.label}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{i.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NAV INTERNA FIXA */}
      <div ref={navRef} className="sticky top-0 z-40 bg-white border-b-2 border-amarelo shadow-sm">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 whitespace-nowrap">
            {categorias.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollToSection(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition whitespace-nowrap ${
                  ativa === c.id
                    ? "bg-roxo text-white"
                    : "text-gray-500 hover:bg-roxo-pale hover:text-roxo"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* BRIGADEIROS */}
        <section id="brigadeiros">
          <SecaoHeader
            eyebrow="The One With the Brigadeiro"
            titulo={<>Brigadeiros <em className="italic text-roxo">Gourmet</em></>}
            friends='"Could this BE any tastier?" — Chandler Bing, provavelmente'
          />

          {/* Tradicionais */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <TierBadge label="Tradicionais" cor="roxo" />
              <div className="flex-1 h-px bg-creme-dark" />
              <span className="font-serif text-roxo text-base whitespace-nowrap">R$ 4,80 un. · R$ 4,60 c/ 12+</span>
            </div>
            <SaboresGrid sabores={["Cacau 100% c/ confeito ao leite", "Beijinho"]} />
          </div>

          {/* Especiais */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <TierBadge label="Especiais" cor="light" />
              <div className="flex-1 h-px bg-creme-dark" />
              <span className="font-serif text-roxo text-base whitespace-nowrap">R$ 5,00 un. · R$ 4,80 c/ 12+</span>
            </div>
            <SaboresGrid sabores={["Tradicional Meio Amargo","Cacau 70%","Amendoim","Confete","Chocolate Branco","Maracujá","Prestígio","Limão","Ninho","Moranguinho","Casadinho Ninho c/ Morango","Casadinho Ninho c/ Chocolate"]} />
          </div>

          {/* Premium */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <TierBadge label="Premium" cor="amarelo" />
              <div className="flex-1 h-px bg-creme-dark" />
              <span className="font-serif text-roxo text-base whitespace-nowrap">R$ 5,30 un. · R$ 5,00 c/ 12+</span>
            </div>
            <SaboresGrid premium sabores={["Pistache c/ confeito pistache","Pistache c/ semente pistache","Ninho com Nutella","Ferrero Rocher","Milho","Café","Cereja","Crème Brûlée","Romeu e Julieta","Churros c/ doce de leite","Morango c/ confeito Callebaut","Morango em flor/rosa","Brigatone"]} />
            <p className="text-xs text-gray-400 mt-3">* Pistache c/ semente: R$ 5,50 un. · R$ 5,20 c/ 12+</p>
            <p className="text-xs text-gray-400 mt-1">* Formato flor/rosa e letras disponíveis em: casadinho, moranguinho, ninho, milho, limão, maracujá e chocolate branco.</p>
          </div>

          {/* Cento */}
          <div className="bg-roxo-pale rounded-2xl p-6 border border-roxo/10">
            <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-3">Cento de brigadeiros 15g</p>
            <TabelaPreco linhas={[
              { desc: "Sabores Tradicionais", preco: "R$ 250,00" },
              { desc: "Sabores Especiais", preco: "R$ 280,00" },
              { desc: "Sabores Premium · formato flor/letras", preco: "R$ 300,00" },
            ]} />
          </div>
        </section>

        {/* PRESENTES */}
        <section id="presentes">
          <SecaoHeader
            eyebrow="The One With the Gift"
            titulo={<>Brigadeiros <em className="italic text-roxo">para presente</em></>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-5 border-t-4 border-roxo border border-creme-dark">
              <h4 className="font-serif text-lg text-gray-900 mb-2">Tradicionais & Especiais 20g</h4>
              <p className="text-gray-500 text-sm mb-3">Caixinha com laço e tag personalizada (+R$ 1,50)</p>
              <TabelaPreco linhas={[
                { desc: "2 unidades", preco: "R$ 14,00" },
                { desc: "4 unidades", preco: "R$ 24,00" },
                { desc: "6 unidades", preco: "R$ 34,00" },
                { desc: "8 unidades", preco: "R$ 45,00" },
              ]} />
            </div>
            <div className="bg-white rounded-2xl p-5 border-t-4 border-amarelo border border-creme-dark">
              <h4 className="font-serif text-lg text-gray-900 mb-2">Premium 20g · flor e letras</h4>
              <p className="text-gray-500 text-sm mb-3">Caixinha com laço e tag personalizada (+R$ 1,50)</p>
              <TabelaPreco linhas={[
                { desc: "2 unidades", preco: "R$ 15,00" },
                { desc: "4 unidades", preco: "R$ 26,00" },
                { desc: "6 unidades", preco: "R$ 37,00" },
                { desc: "8 unidades", preco: "R$ 48,00" },
              ]} />
            </div>
            <div className="bg-white rounded-2xl p-5 border-t-4 border-roxo border border-creme-dark">
              <h4 className="font-serif text-lg text-gray-900 mb-2">Caixa unitária gourmet c/ laço e tag</h4>
              <p className="text-gray-500 text-sm mb-3">Brigadeiro gourmet em caixa individual personalizada</p>
              <TabelaPreco linhas={[
                { desc: "Até 19 un.", preco: "R$ 6,80 cada" },
                { desc: "20+ un.", preco: "R$ 6,60 cada" },
                { desc: "60+ un.", preco: "R$ 6,20 cada" },
                { desc: "100+ un.", preco: "R$ 5,80 cada" },
              ]} />
            </div>
          </div>
        </section>

        {/* KITS COM BEBIDAS */}
        <section id="kits" className="bg-roxo-dark rounded-3xl p-8 md:p-10">
          <SecaoHeader
            eyebrow="The One With the Perfect Gift"
            titulo={<span className="text-white">Kits com <em className="italic text-amarelo">bebidas</em></span>}
            friends="Todos acompanham 6 brigadeiros 20g"
          />
          <div className="grid sm:grid-cols-3 gap-5 mt-2">
            {[
              { icon: "🍷", nome: "Kit com Vinho", desc: "1 vinho Quinta do Morgado 245ml · Tinto Seco ou Branco Suave", preco: "R$ 70,00" },
              { icon: "🍺", nome: "Kit com Cerveja", desc: "1 Heineken 250ml ou 1 Corona 210ml · Outros rótulos sob consulta", preco: "R$ 65,00" },
              { icon: "🥂", nome: "Kit com Chandon", desc: "1 mini Chandon · Réserve Brut, Brut Rosé ou Passion", preco: "R$ 120,00" },
            ].map((k) => (
              <div key={k.nome} className="bg-white/8 border border-amarelo/25 rounded-2xl p-5">
                <span className="text-3xl mb-3 block">{k.icon}</span>
                <h4 className="font-serif text-lg text-white mb-2">{k.nome}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-3">{k.desc}</p>
                <p className="font-serif text-amarelo text-lg font-bold">{k.preco}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KITS INFANTIS */}
        <section id="infantis">
          <SecaoHeader
            eyebrow="The One For the Kids"
            titulo={<>Kits <em className="italic text-roxo">infantis</em></>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProdutoCard nome="Kit Mini Chef — Opção 1" desc="2 cupcakes + 3 tubetes (confetes, granulado colorido e granulado ao leite) + saco de confeitar 80g" preco="R$ 40,00" />
            <ProdutoCard nome="Kit Mini Chef — Opção 2" desc="1 mini bolo + saco de confeitar 80g + saquinho de confeitos + 3 brigadeiros" preco="R$ 40,00" />
            <ProdutoCard nome="Castelo Kids" desc="Para montar e pintar · 6 cores de guache lavável + 1 pincel + 6 brigadeiros 20g (sabores à escolha)" preco="R$ 95,00" note="Consultar disponibilidade" amarelo />
          </div>
        </section>

        {/* DOCES FINOS */}
        <section id="finos">
          <SecaoHeader
            eyebrow="Could this BE any finer?"
            titulo={<>Doces <em className="italic text-roxo">Finos</em></>}
          />
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <ProdutoCard nome="Camafeu de Nozes" preco="R$ 6,00 un." />
            <ProdutoCard nome="Bem-casado" desc='"We Were on a Break... cake" · Recheio de doce de leite' preco="R$ 6,00 un." />
          </div>
          <div className="bg-white rounded-2xl p-6 border border-creme-dark">
            <h4 className="font-serif italic text-xl text-gray-900 mb-1">Verrines</h4>
            <p className="text-sm text-gray-400 mb-4">"Could this BE any creamier?" · Potinhos de vidro · sem tampa R$ 6,00 · com tampa personalizada R$ 9,00</p>
            <SaboresGrid sabores={["Maracujá c/ ganache meio amargo","Limão c/ merengue maçaricado","Pistache c/ frutas vermelhas","Coco com abacaxi","Ninho com Nutella","Cheesecake frutas vermelhas","Cheesecake de blueberry"]} />
          </div>
        </section>

        {/* CUPCAKES */}
        <section id="cupcakes">
          <SecaoHeader
            eyebrow="Smelly Cat Cupcakes"
            titulo={<><em className="italic text-roxo">Cupcakes</em></>}
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Massas", val: "Chocolate · Baunilha" },
              { label: "Recheios", val: "Brigadeiro chocolate · Ninho · Morango" },
              { label: "Coberturas", val: "Brigadeiro Chocolate · Morango · Ninho · Chantininho" },
              { label: "Toppings", val: "Kinder Bueno · Ovomaltine Rocks (+R$ 1,00)", amarelo: true },
            ].map((i) => (
              <div key={i.label} className={`rounded-xl p-4 border ${i.amarelo ? "bg-amarelo-pale border-amarelo/40" : "bg-creme border-creme-dark"}`}>
                <p className={`text-xs font-bold tracking-widest uppercase mb-2 ${i.amarelo ? "text-amarelo-dark" : "text-roxo"}`}>{i.label}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{i.val}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <ProdutoCard nome="Cupcake" preco="R$ 8,00 · R$ 7,00 c/ 20+" note="Na caixa p/ presente: R$ 10,00" />
            <ProdutoCard nome="Mini Cupcake" preco="R$ 6,00 · R$ 5,00 c/ 20+" note="Caixa c/ 2 un. p/ presente: R$ 14,00" />
            <ProdutoCard nome="Cupcake OvoMaltine" desc="Massa chocolate c/ crocante de Ovomaltine, recheio cremoso e cobertura de brigadeiro" preco="R$ 9,00 · R$ 8,00 c/ 20+" note="Na caixa p/ presente: R$ 11,00" amarelo />
          </div>
        </section>

        {/* BOLOS */}
        <section id="bolos">
          <SecaoHeader
            eyebrow="How You Doin'?"
            titulo={<><em className="italic text-roxo">Bolos</em></>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProdutoCard nome="Bolo recheado e decorado" desc="Massas: baunilha, chocolate ou coco. Coberturas: chantininho, chantilly ou ganache. Recheios variados incluindo ninho trufado, pistache, red velvet e mais." preco="Sob consulta" note="Valor por quantidade, cobertura e decoração" />
            <ProdutoCard nome="Mini Bolo" desc="Massa baunilha ou chocolate c/ chantininho. Recheios: chocolate trufado, ninho, brigadeiro branco c/ morango, doce de leite c/ abacaxi, prestígio." preco="R$ 80,00 · R$ 120,00 c/ 6 brigs" note="Com ganache de chocolate: R$ 140,00" />
            <ProdutoCard nome="Bolo de Pote 200g" desc="Baunilha ou chocolate com recheios variados: brigadeiro branco c/ morango, pistache c/ frutas vermelhas, crocante de amendoim e mais." preco="R$ 18,00 · R$ 15,00 c/ 50+" amarelo />
          </div>
        </section>

        {/* SOBREMESAS */}
        <section id="sobremesas" className="bg-roxo-dark rounded-3xl p-8 md:p-10">
          <SecaoHeader
            eyebrow="The One With the Dessert"
            titulo={<span className="text-white">Sobremesas na <em className="italic text-amarelo">Travessa</em></span>}
            friends="Disponíveis em ~600g ou ~1,2kg"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {[
              { nome: "Banoffee Tradicional", preco: "R$ 80,00 · R$ 130,00" },
              { nome: "Banoffee Ganache ½ Amargo", preco: "R$ 90,00 · R$ 140,00" },
              { nome: "Pavetone de Ganache", desc: "Ao leite ou meio amargo · Sazonal", preco: "R$ 100,00 · R$ 165,00" },
              { nome: "Bombom de Morango", desc: "Brigadeiro branco c/ ganache", preco: "R$ 95,00 · R$ 160,00" },
              { nome: "Bombom de Uva c/ Ninho", desc: "Brigadeiro de ninho c/ ganache", preco: "R$ 85,00 · R$ 140,00" },
              { nome: "Torta de Limão", preco: "R$ 80,00 · R$ 110,00" },
              { nome: "Torta de Ninho Trufada", desc: "Com ganache ao leite ou meio amargo", preco: "R$ 100,00 · R$ 165,00" },
              { nome: "Torta de Morango", preco: "R$ 90,00 · R$ 155,00" },
            ].map((s) => (
              <div key={s.nome} className="bg-white/8 border border-amarelo/20 rounded-2xl p-4 border-t-2 border-t-amarelo">
                <h4 className="font-serif text-base text-white mb-1 leading-snug">{s.nome}</h4>
                {s.desc && <p className="text-white/45 text-xs mb-2">{s.desc}</p>}
                <p className="font-serif text-amarelo text-base font-bold">{s.preco}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHEESECAKE */}
        <section id="cheesecake">
          <SecaoHeader
            eyebrow="The Cheesecake"
            titulo={<><em className="italic text-roxo">Cheesecake</em></>}
            friends='"Bom o suficiente pra comer no corredor" — Ross e Chandler saberiam'
          />
          <div className="grid sm:grid-cols-3 gap-5">
            <ProdutoCard nome="Calda de Mirtilo ou Frutas Vermelhas" preco="R$ 140,00" amarelo />
            <ProdutoCard nome="Calda de Morango" preco="R$ 130,00" />
            <ProdutoCard nome="Calda de Goiabada" preco="R$ 120,00" />
          </div>
        </section>

      </div>

      {/* FOOTER DO CARDÁPIO */}
      <div className="bg-roxo-dark mt-12 py-10 px-6 text-center">
        <p className="font-serif italic text-white text-2xl mb-2">Candy's Sah</p>
        <p className="font-serif italic text-amarelo text-base mb-6">
          "I'll be there for you" · desde o primeiro brigadeiro
        </p>
        <a
          href="https://wa.me/5511992781797"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-roxo text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide uppercase transition hover:bg-roxo-light mb-8"
        >
          Fazer encomenda no WhatsApp
        </a>
        <div className="border-t border-white/10 pt-6">
          <Link
            to="/"
            className="text-white/40 text-sm hover:text-white/70 transition"
          >
            ← Voltar ao site
          </Link>
        </div>
      </div>

    </div>
  );
}
