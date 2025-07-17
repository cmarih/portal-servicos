# 📝 Projeto: Portal de Serviços
## 📌 Descrição
Aplicação web desenvolvida com React + Vite que simula um portal de solicitações de serviços. O sistema permite que usuários naveguem entre páginas, consultem serviços disponíveis, preencham um formulário de solicitação e visualizem os pedidos enviados.

## 🧪 Funcionalidades
- Login simulado com redirecionamento para o painel principal

- Dashboard com listagem de serviços consumidos de uma API externa

- Formulário de solicitação que recebe o serviço selecionado e os dados do solicitante

- Armazenamento local das solicitações via localStorage

- Página “Minhas Solicitações” com listagem das solicitações realizadas

- Navbar de navegação entre as páginas e botão de logout

## 🧰 Tecnologias utilizadas
- [React](https://react.dev/)

- [Vite](https://vite.dev/)

- [React Router DOM](https://reactrouter.com/)

- [Axios](https://axios-http.com/) 

- [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

- [GitHub Codespaces](https://github.com/features/codespaces) (ambiente de desenvolvimento)

# 🎨 Estilização & Responsividade
O projeto foi aprimorado visualmente com o uso do [Tailwind CSS](https://tailwindcss.com/), trazendo:
- Estrutura padronizada entre todas as páginas por meio do componente Layout
- Navbar responsiva com botão hambúrguer em telas pequenas e ocultação automática de links
- Estilização moderna de formulários, títulos, botões e cards utilizando classes utilitárias
- Ajuste dinâmico do espaçamento do conteúdo conforme a abertura do menu mobile
- Tipografia e espaçamentos uniformes para uma melhor experiência em desktop e mobile

# 🧱 Organização do Projeto
- Criação dos componentes reutilizáveis `Navbar`, `Layout`, `Card`.
- Utilização de `useState`, `useNavigate` e `useEffect` para controle de estado e navegação
- Refatoração das páginas `Login` e `Dashboard` com base na estrutura do `Layout`
- Configuração personalizada do Tailwind em `tailwind.config.js` e `postcss.config.cjs`
- Atualização do `.gitignore` para excluir arquivos temporários, pastas de build e cache

Se quiser, posso formatar o README.md completo com emojis, introdução mais atrativa e instruções de instalação ou uso. Quer deixar essa vitrine ainda mais profissional? 💻🚀
