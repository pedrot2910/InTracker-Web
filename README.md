
# 🚌 InTracker Web

**Acompanhe o transporte universitário em tempo real.**

O **InTracker** é uma aplicação desenvolvida para facilitar o acompanhamento do transporte universitário, permitindo que estudantes e demais usuários consultem a localização do ônibus, acompanhem atualizações e tenham acesso a informações relevantes sobre o serviço.

Este repositório contém a versão web do InTracker, desenvolvida para ampliar a acessibilidade da plataforma, permitindo seu uso em computadores, tablets e dispositivos móveis, incluindo iOS.

---

## 📌 Funcionalidades

- **Rastreamento em tempo real:** visualização da localização do ônibus por meio de um mapa interativo.
- **Mapa interativo:** navegação pelo mapa utilizando Leaflet e OpenStreetMap.
- **Status de conexão:** indicação do estado da comunicação com o ônibus e da disponibilidade do sinal GPS.
- **Atualizações e avisos:** exibição de notícias, comunicados, alterações de rotas e informações sobre o funcionamento do transporte.
- **Interface responsiva:** experiência adaptada para desktops, tablets e smartphones.
- **Navegação mobile:** alternância entre o mapa e as atualizações por meio de uma interface otimizada para dispositivos móveis.

---

## 🛠️ Tecnologias utilizadas

O projeto utiliza tecnologias modernas do ecossistema JavaScript e React.

| Tecnologia | Utilização |
|---|---|
| [React](https://react.dev/) | Construção da interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Vite](https://vite.dev/) | Ambiente de desenvolvimento e build |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização da aplicação |
| [React Router](https://reactrouter.com/) | Gerenciamento de rotas |
| [Leaflet](https://leafletjs.com/) | Mapas interativos |
| [React Leaflet](https://react-leaflet.js.org/) | Integração do Leaflet com React |
| [STOMP.js](https://github.com/stomp-js/stompjs) | Comunicação em tempo real |
| [Lucide React](https://lucide.dev/) | Biblioteca de ícones |

---

## 📂 Estrutura do projeto

```text
intracker-web/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── intracker/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

*Observação: a estrutura acima apresenta uma organização de referência e pode ser ajustada conforme a evolução do projeto.*

---

## ⚙️ Instalação e execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm (gerenciador de pacotes do Node.js).
- Git instalado.

### 1. Clone o repositório

```bash
git clone https://github.com/pedrot2910/InTracker-Web.git
```

### 2. Acesse a pasta do projeto

```bash
cd InTracker-Web
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm run dev
```

Por padrão, o Vite disponibilizará a aplicação em:

```text
http://localhost:5173
```

---

## 🔧 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run dev:demo` | Inicia o Vite utilizando o modo `demo` |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção |
| `npm run lint` | Executa a análise estática com ESLint |
| `npm run preview` | Disponibiliza uma prévia do build de produção |

---

## 🔗 Integração com o backend

O InTracker Web utiliza um backend independente para fornecer os dados e as funcionalidades da aplicação.

A comunicação entre o frontend e o backend permite a obtenção de informações sobre o transporte universitário, incluindo a localização do ônibus.

A arquitetura da aplicação é organizada da seguinte maneira:

```text
               INTRACKER
                   |
          +--------+--------+
          |                 |
      Frontend           Backend
       (Web)             (Spring Boot)
          |                 |
          |<----------------+
          |
     React + Vite
          |
          +------ HTTP / REST
          |
          +------ WebSocket / STOMP
                   |
             Dados do ônibus
             e localização GPS
```

O frontend é responsável pela apresentação das informações, enquanto o backend gerencia o processamento e a disponibilização dos dados.

---

## 🎨 Identidade visual

O InTracker utiliza uma identidade visual baseada em tons de verde e azul, buscando transmitir uma experiência simples, intuitiva e acessível.

A interface foi desenvolvida considerando a responsividade e a facilidade de utilização em diferentes dispositivos.

---

## 🚧 Status do projeto

**Em desenvolvimento.**

O projeto está em evolução, com implementação e aprimoramento de funcionalidades, melhorias na interface e integração com o backend.

---

## 👨‍💻 Desenvolvedores

**Pedro Teixeira de Lima Neto**

Desenvolvimento Frontend — InTracker Web.

---

<p align="center">
  Desenvolvido como parte do projeto <strong>InTracker</strong>.
</p>
