# Reading Journal 📚

**Desenvolvido por:** Felipe Zago  
Aplicação CRUD de um diário de leitura. Projeto elaborado para a disciplina de **Desenvolvimento de Sistemas Frontend**, do curso de **Análise e Desenvolvimento de Sistemas da PUCRS (5° trimestre)**.

---

## 🛠 Tecnologias Utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Cypress](https://img.shields.io/badge/cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Axios](https://img.shields.io/static/v1?style=for-the-badge&message=Axios&color=5A29E4&logo=Axios&logoColor=FFFFFF&label=)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

---

## ▶️ Como Executar o Projeto

1. Clone este repositório ou descompacte o `.zip`:
   ```bash
   git clone https://github.com/SeuUsuario/Reading-Journal.git
   ```

2. Clone e execute o back-end necessário:
   - Repositório: https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/
   - No terminal:
     ```bash
     cd DesenvolvimentoFrontend/readingJournal-api/
     npm install
     npm start
     ```

   > **Obs:** A API deve rodar em `http://localhost:5000/`. Caso contrário, altere a URL em `src/services/api/api.js` e nos testes Cypress em `cypress/tests/e2e/*`.

3. Navegue até a pasta do frontend:
   ```bash
   cd exemplos/context-react-project
   npm install
   npm start
   ```

4. Após execução, o resultado esperado é:
   ![Resultado Esperado](./resultado.gif)

---

## ✅ Testes

Este projeto possui testes automatizados com **Cypress**.

- Rodar testes em modo headless:
  ```bash
  npm test
  ```

- Abrir interface gráfica do Cypress:
  ```bash
  npx cypress open
  ```

![Test Run Finished](./readme_assets/images/test-run-finished.png)

---

## 📦 Componentes

### `ChildrenComponent`

- **Props:** `items`, `onAdd`
- **Função:** renderiza uma lista de dados e adiciona novos via callback.

### `List`

- Usa o `ChildrenComponent` com dados do contexto, disparando alterações via callback.

### `Navbar`

- Usa `Link` do `react-router-dom` para navegar entre páginas.

### `BookForm.js`

- Formulário para adicionar ou editar livros.
- Props: `bookToEdit`, `setBookToEdit`, `setUpdateHappened`
- Validações simples + requisições ao back-end + alertas.

![BookForm](./readme_assets/images/book-form.png)

### `BookList.js`

- Props: `bookList`, `setUpdateHappened`
- Mapeia lista de livros e exibe opções de editar e excluir.

![BookList](./readme_assets/images/book-list.png)
![BookList Edit](./readme_assets/images/book-list-edit.png)

### `NavBar.js`

- Barra de navegação fixa com estilização para itens ativos/hover.

![NavBar](./readme_assets/images/navbar.png)

---

## 🖥️ Demonstração de Uso

### Navegação

![Navegação](./readme_assets/gifs/navigation.gif)

### Cadastro de Livros

![Cadastro](./readme_assets/gifs/save-book.gif)

### Editar Livros

![Edição](./readme_assets/gifs/edit-book.gif)

### Excluir Livros

![Exclusão](./readme_assets/gifs/delete-book.gif)

---

## 📌 Considerações Finais

Este projeto foi desenvolvido para fins didáticos e demonstra funcionalidades como:

- React Context API
- React Router
- Comunicação Frontend ↔ Backend
- Testes End-to-End com Cypress

Obrigado por conferir o projeto! 🚀
