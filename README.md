# 💰 RossFin - Controle Financeiro Pessoal

**RossFin** é uma aplicação web em desenvolvimento que tem como objetivo fornecer um controle financeiro **simples e intuitivo** para pessoas físicas. Este projeto está em sua fase inicial, com foco no **cadastro e login de usuários**.

---

## 🚧 Status do Projeto

**⚠️ Em desenvolvimento ativo!**

Atualmente, o projeto implementa as funcionalidades básicas de **cadastro e login de usuários**. A aplicação está em fase de integração com o banco de dados **MySQL** e backend **Node.js**. Funcionalidades adicionais, como o controle financeiro, serão implementadas em etapas futuras.

---

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

### 🌐 Frontend
- **HTML5** e **CSS3** com **TailwindCSS** para o design responsivo e moderno
- **JavaScript** (Vanilla) para interatividade e manipulação de formulários

### ⚙️ Backend
- **Node.js** com **Express** para criar a API e lógica de servidor
- **MySQL** como banco de dados relacional para armazenar dados de usuários
- **bcrypt** para **hashing seguro de senhas**
- **CORS** e **Express JSON Middleware** para comunicação entre frontend e backend

---

## 📸 Screenshots

Aqui estão algumas capturas de tela do que foi desenvolvido até agora:

- **Página de Cadastro**: Tela onde o usuário pode criar uma conta, fornecendo nome, sobrenome, e-mail e senha.
![screencapture-127-0-0-1-5500-frontend-register-html-2025-04-22-17_00_59](https://github.com/user-attachments/assets/e43adff0-5f6d-437c-9803-8a77a00e3514)

- **Página de Login**: Tela onde o usuário pode fazer login usando o e-mail e a senha cadastrados.
![screencapture-127-0-0-1-5500-frontend-login-html-2025-04-22-17_03_10](https://github.com/user-attachments/assets/f284d5d7-cb95-4d60-b2ff-500900fd2e3a)

---

## 📦 Funcionalidades já disponíveis

- [x] **Cadastro de Usuários**: Formulário de cadastro que salva informações (nome, sobrenome, e-mail e senha) no banco de dados MySQL.
- [x] **Login de Usuários**: Sistema de autenticação utilizando e-mail e senha com verificação via bcrypt.
- [x] **Integração com MySQL**: Conexão com banco de dados para salvar e buscar informações dos usuários.

## 🚀 Pretensões Futuras de Features

O projeto está em desenvolvimento e diversas funcionalidades financeiras serão implementadas nas próximas etapas:

- **Adição de Contas a Pagar**: O usuário poderá cadastrar suas contas a pagar, como água, luz, internet, etc.
- **Opção de Marcar Conta como Paga**: Será possível marcar as contas como pagas, atualizando o status no banco de dados.
- **Visualização Total de Contas a Pagar**: Exibição do total de contas a pagar, incluindo a possibilidade de visualizar o valor total das contas por período (mensal, semanal, etc.).
- **Incluir e Excluir Contas em Massa**: O usuário poderá adicionar ou excluir múltiplas contas ao mesmo tempo, facilitando o gerenciamento.
- **Adicionar Data de Vencimento de Contas**: O sistema permitirá que o usuário adicione a data de vencimento para cada conta a pagar.
- **Controle de Contas Prestes a Vencer por Período**: Exibição das contas que estão prestes a vencer, permitindo ao usuário visualizar as contas a vencer nos próximos dias, semanas ou meses.
