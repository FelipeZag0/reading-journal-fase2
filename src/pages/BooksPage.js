
/*
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

*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BooksPage = ({ books, deleteBook, updateBook }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedBook, setEditedBook] = useState({
    title: '',
    author: '',
    genre: '',
    date: '',
  });

  const startEditing = (index) => {
    setEditingIndex(index);
    const book = books[index];
    setEditedBook({
      title: book.title,
      author: book.author,
      genre: book.genre,
      date: book.date,
    });
  };

  // Função para salvar a edição
  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateBook(editingIndex, editedBook);
    setEditingIndex(null);
  };

  // Formatar a data
  const formattedDate = (date) => new Date(date).toLocaleDateString('pt-BR');

  return (
    <div>
      <h1>Lista de Livros</h1>
      {editingIndex !== null ? (
        <div>
          <h2>Editar Livro</h2>
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              placeholder="Título"
              value={editedBook.title}
              onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Autor"
              value={editedBook.author}
              onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Gênero"
              value={editedBook.genre}
              onChange={(e) => setEditedBook({ ...editedBook, genre: e.target.value })}
              required
            />
            <input
              type="date"
              value={editedBook.date}
              onChange={(e) => setEditedBook({ ...editedBook, date: e.target.value })}
              required
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p><strong>{book.title}</strong> por {book.author} - {book.genre} - {formattedDate(book.date)}</p>
              <div style={{ display: 'flex', gap: '5px' }}>
                <button onClick={() => startEditing(index)}>Editar</button>
                <button onClick={() => deleteBook(index)}>Excluir</button>
              </div>

            </li>
          ))}
        </ul>
      )}
      <Link to="/add">
        <button>Cadastrar</button>
      </Link>
    </div>
  );
};

export default BooksPage;
