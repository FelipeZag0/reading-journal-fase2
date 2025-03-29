import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BooksPage = ({ books, deleteBook, updateBook }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedBook, setEditedBook] = useState({
    title: '',
    author: '',
    genre: '',
    date: '',
  });

  const startEditing = (book) => {
    setEditingId(book.id);
    setEditedBook({
      title: book.title,
      author: book.author,
      genre: book.genre,
      date: book.date,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await updateBook(editingId, editedBook);
    setEditingId(null);
  };

  // Função para formatar a data
  const formattedDate = (date) => new Date(date).toLocaleDateString('pt-BR');

  // Função para cancelar a edição
  const handleCancelClick = () => {
    setEditingId(null); // Cancela a edição e retorna à lista
  };

  return (
    <div>
      <h1>Lista de Livros</h1>
      {editingId !== null ? (
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
              value={editedBook.readAt}
              onChange={(e) => setEditedBook({ ...editedBook, readAt: e.target.value })}
              required
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit">Salvar</button>
              <button type="button" onClick={handleCancelClick}>Cancelar</button>
            </div>
          </form>
        </div>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p>
                <strong>{book.title}</strong> por {book.author} - {book.genre} - Lido em {formattedDate(book.readAt)}
              </p>
              <div style={{ display: 'flex', gap: '5px' }}>
                <button onClick={() => startEditing(book)}>Editar</button>
                <button onClick={() => deleteBook(book.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {editingId === null && (
        <Link to="/add">
          <button>Cadastrar</button>
        </Link>
      )}
    </div>
  );
};

export default BooksPage;
