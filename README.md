# ✈️ Destino B&D - Landing Page

> Projeto de Landing Page de alta conversão desenvolvido como freelancer para a agência de viagens **Destino B&D**. Focado em performance, UX e automação de leads via WhatsApp.

![Status do Projeto](https://img.shields.io/badge/Status-Finalizado-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## 🎯 Objetivo do Projeto

Criar uma **Single Page Application (SPA)** moderna para apresentação de pacotes turísticos personalizados. O desafio técnico foi garantir carregamento instantâneo e uma integração fluida com a API do WhatsApp para maximizar a conversão de leads sem necessidade de backend complexo.

## 🚀 Destaques Técnicos

* **⚡ Performance Extrema:** Build otimizado com **Vite**, garantindo pontuação alta no Lighthouse/PageSpeed.
* **📱 Mobile First & Responsividade:** Layout fluido construído com **Tailwind CSS**, adaptando-se perfeitamente de smartphones a monitores ultrawide.
* **💬 Automação de Leads (WhatsApp API):**
    * Desenvolvimento de lógica para links dinâmicos (`window.location.href`) que abrem o app do WhatsApp nativamente.
    * Mensagens pré-formatadas contextualizadas (o vendedor já recebe: "Olá, vim pelo site e quero saber sobre *Maragogi*").
* **🎨 UI/UX Moderna:** Design clean com *glassmorphism*, micro-interações e iconografia consistente (**Lucide React**).

## 🛠️ Stack Tecnológica

* **Core:** React 19 + TypeScript
* **Estilização:** Tailwind CSS + PostCSS
* **Build Tool:** Vite
* **Analytics:** Vercel Analytics
* **Ícones:** Lucide React
* **Deploy:** Vercel

## 📂 Estrutura e Organização

O código foi estruturado pensando em escalabilidade e manutenção, com componentes desacoplados e tipagem estrita para evitar bugs em produção.

```bash
src/
├── assets/          # Otimização de imagens (WebP/JPG)
├── components/      # (Lógica modularizada)
├── App.tsx          # Lógica principal e roteamento de estado
└── main.tsx         # Entry point