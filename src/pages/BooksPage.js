import React from 'react';
import { Link } from 'react-router-dom';

function BooksPage({ books, deleteBook }) {
  return (
    <div>
      <h1>Lista de Livros</h1>

      {/* Verifica se há livros e os exibe */}
      {books.length === 0 ? (
        <p>Não há livros cadastrados.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> por {book.author} - {book.genre} - {book.year}
              {/* Botão para excluir o livro */}
              <button onClick={() => deleteBook(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}

      {/* Botão para navegar até a página de cadastro */}
      <Link to="/add">
        <button>Cadastrar Novo Livro</button>
      </Link>
    </div>
  );
}

export default BooksPage;
