import React from 'react';
import { Link } from 'react-router-dom';

const BooksPage = ({ books, deleteBook }) => {
  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {books.map((book, index) => {
          const formattedDate = new Date(book.date).toLocaleDateString('pt-BR');
          
          return (
            <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p><strong>{book.title}</strong> por {book.author} - {book.genre} - {formattedDate}</p>
              <button onClick={() => deleteBook(index)}>Excluir</button>
            </li>
          );
        })}
      </ul>
      <Link to="/add">
        <button>Cadastrar</button>
      </Link>
    </div>
  );
};

export default BooksPage;

