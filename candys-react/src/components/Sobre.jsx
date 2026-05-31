export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-2">Quem somos</p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal mb-16 leading-tight">
          A Sabrina e o amor <br />
          pela <em className="italic text-roxo">confeitaria</em>
        </h2>

        {/* Bloco 1 — Sabrina + sonho */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <img
              src="/images/sabrina.png"
              alt="Sabrina — fundadora da Candy's Sah"
              className="w-full rounded-2xl object-cover aspect-[4/5] shadow-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-roxo-dark/90 backdrop-blur rounded-xl px-5 py-3">
              <p className="font-serif italic text-amarelo text-base">
                "Mergulhe nos seus sonhos"
              </p>
            </div>
          </div>

          <div>
            <div className="bg-amarelo-pale border-2 border-amarelo rounded-2xl p-6 mb-6">
              <p className="font-serif italic text-gray-800 text-lg leading-relaxed">
                "A verdade é que muito mais pessoas irão te dizer que você não vai conseguir... Mas não desista nunca do seu sonho e trabalhe nele com todo o seu amor, porque uma hora vai dar certo sim!"
              </p>
              <span className="block text-xs font-bold tracking-widest uppercase text-amarelo-dark mt-4">
                — Sabrina Alves Rodrigues, fundadora
              </span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              A <strong className="text-roxo-dark">Candy's Sah</strong> nasceu do sonho de Sabrina de ser dona do seu próprio tempo — e de transformar momentos especiais em experiências inesquecíveis através de doces artesanais.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Cada brigadeiro, cada bolo, cada kit é feito com atenção aos mínimos detalhes e ingredientes cuidadosamente selecionados. Porque aqui, doce bom precisa ser bonito primeiro.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-roxo-pale rounded-xl p-4 text-center">
                <p className="font-serif text-3xl text-roxo">100%</p>
                <p className="text-sm text-gray-500 mt-1">Artesanal</p>
              </div>
              <div className="bg-roxo-pale rounded-xl p-4 text-center">
                <p className="font-serif text-3xl text-roxo">3 dias</p>
                <p className="text-sm text-gray-500 mt-1">Prazo mínimo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2 — Casal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-2">
              Por trás de cada doce
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-normal mb-6 leading-tight">
              O time mais <em className="italic text-roxo">doce</em> 🫶
            </h3>

            <div className="bg-roxo-dark rounded-2xl p-6 mb-6">
              <p className="font-serif italic text-white/80 text-lg leading-relaxed">
                "Meu agradecimento a Deus por ter me dado o melhor parceiro da vida! Que está sempre do meu lado, me apoiando, colocando a mão na massa e me ajudando a realizar meu sonho de ser dona do meu tempo!"
              </p>
              <span className="block text-xs font-bold tracking-widest uppercase text-amarelo mt-4">
                — Sabrina sobre o Eri ❤️
              </span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              O <strong className="text-roxo-dark">Eri</strong> é o parceiro de vida e de trabalho que está sempre junto — das entregas ao apoio nos bastidores. A Candy's Sah é o resultado de muito amor, dedicação e trabalho em equipe.
            </p>
          </div>

          <div className="order-1 md:order-2 relative">
            <img
              src="/images/sabrina_e_eri.png"
              alt="Sabrina e Eri — o casal por trás da Candy's Sah"
              className="w-full rounded-2xl object-cover aspect-[4/3] shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-amarelo text-gray-900 rounded-xl px-5 py-3 shadow-lg">
              <p className="font-bold text-sm">Amor & Confeitaria</p>
              <p className="text-xs opacity-70">São Bernardo do Campo, SP</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
