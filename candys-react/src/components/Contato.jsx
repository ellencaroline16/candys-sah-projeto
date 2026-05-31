export default function Contato() {
  const infos = [
    { label: "Retirada", val: "Av. Moinho Fabrini, 385", note: "Jardim Independência · São Bernardo do Campo, SP · 09861-160" },
    { label: "Instagram", val: "@candys_sah" },
    { label: "WhatsApp", val: "(11) 99278-1797" },
    { label: "Pagamento", val: "PIX · Cartão · Dinheiro", note: "50% na confirmação · CNPJ 51.028.662/0001-00" },
    { label: "Prazo mínimo", val: "3 dias de antecedência", note: "Urgências: +10% sobre o total" },
  ];

  return (
    <section id="contato" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-2">
          Fale conosco
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal mb-12 leading-tight">
          Vamos criar algo <em className="italic text-roxo">especial</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Esquerda */}
          <div>
            <div className="bg-roxo rounded-2xl p-8 text-center mb-8">
              <p className="font-serif italic text-white text-2xl mb-2">
                "I'll be there for you..."
              </p>
              <p className="text-white/50 text-sm tracking-widest uppercase">
                A Sabrina está esperando sua encomenda
              </p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Todas as encomendas são feitas pelo WhatsApp com no mínimo 3 dias
              de antecedência. Consulte disponibilidade, personalizações e
              valores diretamente com a Sabrina.
            </p>

            <a
              href="https://wa.me/5511992781797"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-roxo text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide uppercase transition hover:bg-roxo-dark"
            >
              Chamar no WhatsApp
            </a>
          </div>

          {/* Direita — informações */}
          <div className="bg-roxo-pale rounded-2xl p-8 border border-roxo/10">
            {infos.map((info) => (
              <div
                key={info.label}
                className="py-4 border-b border-roxo/10 last:border-0 last:pb-0 first:pt-0"
              >
                <p className="text-xs font-bold tracking-widest uppercase text-roxo mb-1">
                  {info.label}
                </p>
                <p className="text-gray-900 text-base font-semibold">{info.val}</p>
                {info.note && (
                  <p className="text-gray-500 text-sm mt-0.5">{info.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
