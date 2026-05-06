# Sistema de Manutenção de Frotas de Veículos 🚗

Projeto desenvolvido para a disciplina de Programação para Web do curso de Ciência da Computação do IFSul Campus Passo Fundo.

## 📋 Descrição

O sistema foi desenvolvido com o objetivo de realizar o gerenciamento de veículos, tipos de serviços automotivos e manutenções realizadas em uma frota de veículos.

A aplicação possui:

- Frontend desenvolvido em React com Vite
- Backend desenvolvido em Node.js com Express
- Banco de dados PostgreSQL
- Comunicação entre frontend e backend através de API REST
- Deploy em nuvem utilizando Vercel e Render
- Configuração PWA (Progressive Web App)

---

# 🚀 Tecnologias utilizadas

## Frontend

- React
- Vite
- Bootstrap
- Axios
- React Router DOM

## Backend

- Node.js
- Express
- Sequelize ORM
- PostgreSQL
- Dotenv
- Cors

## Hospedagem

- Vercel (Frontend/PWA)
- Render (Backend/API e PostgreSQL)

---

# 🌐 Links do projeto

## Frontend (Vercel)

https://sistema-manutencao-frotas-eliel100s-projects.vercel.app/

## Backend/API (Render)

https://sistema-manutencao-frotas.onrender.com

## Codigo completo no GITHub

https://github.com/eliel100/sistema-manutencao-frotas

---



# ⚙️ Funcionalidades

## Veículos

- Cadastrar veículo
- Listar veículos
- Editar veículo
- Excluir veículo

## Tipos de Serviço

- Cadastrar tipo de serviço
- Listar tipos de serviço
- Editar tipo de serviço
- Excluir tipo de serviço

## Manutenções

- Cadastrar manutenção
- Listar manutenções
- Editar manutenção
- Excluir manutenção

---

# 🗄️ Banco de Dados

O sistema utiliza PostgreSQL com três tabelas principais:

## veiculos

Armazena os dados dos veículos cadastrados.

## tipos_servico

Armazena os tipos de serviços automotivos.

## manutencoes

Tabela responsável pelo histórico de manutenções realizadas.

Possui relacionamento com:

- veiculos
- tipos_servico

através de chave estrangeira.

---

# 🔗 Relacionamentos

- Um veículo pode possuir várias manutenções.
- Um tipo de serviço pode estar associado a várias manutenções.
- Cada manutenção pertence a um veículo e a um tipo de serviço.

---

# 🧠 Estrutura do Projeto

## Backend

O backend foi organizado utilizando:

- routes
- controllers
- models
- config

### Routes

Responsáveis pelas rotas da API.

### Controllers

Responsáveis pelas regras de negócio e operações CRUD.

### Models

Responsáveis pela modelagem das tabelas utilizando Sequelize.

### Config

Responsável pela configuração da conexão com o banco de dados.

---

## Frontend

O frontend foi organizado utilizando:

- pages
- components
- services

### Pages

Páginas do sistema.

### Components

Componentes reutilizáveis como Navbar.

### Services

Configuração do Axios para comunicação com a API.

---

# 🔄 API REST

A comunicação entre frontend e backend ocorre através de requisições HTTP utilizando Axios.

Métodos utilizados:

- GET
- POST
- PUT
- DELETE

---

# 📱 PWA

O sistema foi configurado como Progressive Web App utilizando:

- vite-plugin-pwa

Permitindo instalação como aplicativo web.

---

# ▶️ Como executar localmente

## Backend


cd backend
npm install
npm start

## Frontend

cd frontend
npm install
npm run dev