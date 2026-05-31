# 🍫 Candy's Sah — Site Institucional

Projeto extensionista desenvolvido como parte da grade curricular do curso de **Análise e Desenvolvimento de Sistemas** da **PUCPR EAD**, com o objetivo de aplicar conhecimentos técnicos na prática, beneficiando um negócio real da comunidade.

---

## 📌 Sobre o projeto

A **Candy's Sah** é uma confeitaria artesanal localizada em São Bernardo do Campo, SP, comandada por Sabrina Alves Rodrigues. O projeto consiste no desenvolvimento de um site institucional completo para o negócio, incluindo apresentação da marca, cardápio digital e canal de contato direto com a confeiteira.

---

## 🗂️ Estrutura do repositório

```
candys-sah-projeto/
├── candys-sah-html/     → Versão 1: site estático em HTML, CSS e JavaScript
└── candys-react/        → Versão 2: site refatorado em React com Tailwind CSS
```

---

## 🧱 Versão 1 — HTML, CSS e JavaScript

A primeira versão do projeto foi desenvolvida com tecnologias web básicas, sem uso de frameworks.

**Tecnologias utilizadas:**
- HTML5
- CSS3 (variáveis CSS, Flexbox, Grid)
- JavaScript puro

**Funcionalidades:**
- Página inicial com seções Hero, Sobre, Produtos e Contato
- Cardápio digital completo com todos os itens e preços
- Identidade visual personalizada com paleta roxo e amarelo
- Easter eggs temáticos inspirados na série Friends
- Link direto para o WhatsApp da confeiteira
- Layout responsivo

---

## ⚛️ Versão 2 — React + Tailwind CSS

A segunda versão refatora todo o projeto em componentes React, melhorando a organização do código, a responsividade e a experiência do usuário.

**Tecnologias utilizadas:**
- React 18
- Tailwind CSS 3
- React Router DOM (navegação entre páginas)

**Melhorias em relação à versão HTML:**
- Componentização — cada seção é um componente independente e reutilizável
- Roteamento com React Router — navegação fluida entre Home e Cardápio sem recarregar a página
- Navbar responsiva com menu hambúrguer no mobile
- Seção "Sobre" com foto da fundadora e do casal, com textos reais da história do negócio
- Cards de produtos com fotos reais dos doces
- Cardápio com barra de navegação interna por categoria
- Fontes e espaçamentos mais legíveis e consistentes

**Estrutura de componentes:**
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Sobre.jsx
│   ├── Produtos.jsx
│   ├── Contato.jsx
│   └── Footer.jsx
└── pages/
    ├── Home.jsx
    └── Cardapio.jsx
```

---

## 🚀 Como rodar localmente

**Versão HTML:**
Basta abrir o arquivo `index.html` no navegador ou usar a extensão Live Server do VSCode.

**Versão React:**
```bash
cd candys-react
npm install
npm start
```
Acesse em `http://localhost:3000`

---

## 👩‍💻 Desenvolvedora

**Ellen Caroline**
Estudante de Análise e Desenvolvimento de Sistemas — PUCPR EAD
Projeto Extensionista — 2026
