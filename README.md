# ✈️ Destino B&D - Travel Agency Landing Page

> Uma Landing Page de alta conversão desenvolvida para a agência de viagens **Destino B&D**, focada em experiência do usuário (UX), responsividade e integração direta com WhatsApp para captação de leads.

![Status do Projeto](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## 💻 Sobre o Projeto

Este projeto é uma **Single Page Application (SPA)** moderna construída para apresentar pacotes de viagem personalizados. O objetivo principal é a **conversão**: transformar visitantes em contatos no WhatsApp da agência de forma rápida e contextualizada.

### 🚀 Funcionalidades Principais

* **⚡ Performance:** Construído com **Vite**, garantindo carregamento instantâneo.
* **📱 Design Responsivo:** Layout fluido que se adapta perfeitamente a celulares (Mobile First) e desktops, utilizando **Tailwind CSS**.
* **💬 Integração Inteligente com WhatsApp (Growth Hacking):**
    * **Botões Contextuais:** Ao clicar em um pacote (ex: "Bangkok"), o usuário é redirecionado para o WhatsApp com uma mensagem pré-formatada citando aquele destino específico.
    * **Formulário de Leads:** Captura Nome, Telefone e Interesses, processa os dados e inicia uma conversa automática no WhatsApp com todas as informações estruturadas para o vendedor.
* **🎨 UI Moderna:** Uso de glassmorphism, gradientes e ícones **Lucide React** para uma estética premium.

## 🛠️ Tecnologias Utilizadas

* **[React](https://reactjs.org/):** Biblioteca principal para construção da interface.
* **[TypeScript](https://www.typescriptlang.org/) (TSX):** Para maior segurança e tipagem do código.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilitários para estilização rápida e responsiva.
* **[Vite](https://vitejs.dev/):** Build tool de próxima geração.
* **[Lucide React](https://lucide.dev/):** Biblioteca de ícones leves e consistentes.
* **[Vercel](https://vercel.com/):** Plataforma de hospedagem e deploy contínuo (CI/CD).

## 📂 Estrutura do Projeto

```bash
minha-landing-page/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Imagens e vetores (Logos, Fotos dos Destinos)
│   ├── App.tsx          # Componente principal e lógica de negócios
│   ├── index.css        # Configuração das diretivas do Tailwind
│   └── main.tsx         # Ponto de entrada da aplicação
├── tailwind.config.js   # Configuração de temas e caminhos do Tailwind
└── vite.config.ts       # Configuração do bundler