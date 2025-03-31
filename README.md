```markdown
# Nome: Felipe Zago

## Para executar este projeto:

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/FelipeZag0/reading-journal

2. Entre na pasta do projeto no terminal:
   ```bash
   cd reading-journal
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie a API (em outro terminal):
   ```bash
   cd api && npm install && npm start
   ```

5. Inicie o frontend:
   ```bash
   npm run dev
   ```

## Demonstração

Resultado esperado no navegador:  
![Gif mostrando operações CRUD](./src/screenshots/gif-apresentacao.gif)

## Sobre o Projeto

Aplicação **Reading Journal** desenvolvida com React.js para gerenciamento de livros lidos, integrada com API REST. Funcionalidades principais:

### Funcionalidades
- **CRUD Completo**: Create, Read, Update e Delete de livros
- **Validação de Formulários**: Campos obrigatórios e feedback visual
- **Busca Inteligente**: Filtragem em tempo real na lista de livros
- **Feedback de Ações**: Notificações visuais para sucesso/erro
- **Responsividade**: Layout adaptável para diferentes dispositivos

**Tecnologias**: React 18, React Router 6, Material-UI, Axios, Testing Library

## Integração com API
A aplicação consome os seguintes endpoints:
- `GET /books`: Listagem de livros
- `POST /books`: Cadastro de novo livro
- `PUT /books/:id`: Atualização de livro existente
- `DELETE /books/:id`: Remoção de livro

## Componentes Principais

### `BookList` (`./src/components/BookList.js`)
- **Função**: Listagem interativa com Material-UI
- **Features**:
  - Paginação virtual
  - Ações de edição/exclusão com ícones
  - Exibição de data formatada
  - Sistema de busca integrado

### `BookForm` (`./src/components/BookForm.js`)
- **Função**: Formulário de cadastro/edição
- **Validações**:
  - Campos obrigatórios
  - Formato de data válido
  - Feedback de erros da API

### `NavBar` (`./src/components/NavBar.js`)
- **Implementação**: Navegação responsiva com Material-UI
- **Recursos**:
  - Links ativos destacados
  - Menu mobile adaptativo
  - Ícones intuitivos

## Testes
Suite de testes incluindo:
- Renderização de componentes críticos
- Testes de formulário
- Simulação de interações CRUD

Para executar os testes:
```bash
npm test
```

## Estrutura do Projeto
```
src/
├── components/    # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── services/      # Configuração da API
├── App.js         # Roteamento principal
└── tests/         # Testes unitários
```

## Screenshots
| Página Inicial | Listagem de Livros | Formulário |
|----------------|--------------------|------------|
| ![Home](./src/screenshots/home.png) | ![List](./src/screenshots/list.png) | ![Form](./src/screenshots/form.png) |

## Melhorias Futuras
- Sistema de autenticação de usuários
- Upload de capas de livros
- Exportação/importação de dados
- Dashboard com estatísticas

---
Desenvolvido por **Felipe Zago** - **PUCRS**  
[![Licença MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
``` 

Principais melhorias em relação ao modelo original:
1. Seção específica de integração com API
2. Detalhamento técnico dos componentes
3. Instruções de execução da API + frontend
4. Descrição expandida das tecnologias
5. Seção de testes e estrutura do projeto
6. Screenshots organizados
7. Badge de licença
8. Seção de melhorias futuras