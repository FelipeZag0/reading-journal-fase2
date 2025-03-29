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
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const startEditing = (book) => {
    setEditingId(book.id);
    setEditedBook({
      title: book.title,
      author: book.author,
      genre: book.genre,
      readAt: book.readAt.split('T')[0] // Remove o horário se existir
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setError(null); // Limpa o erro anterior

    try {
      await updateBook(editingId, editedBook);
      setEditingId(null);
    } catch (err) {
      setError('Falha ao atualizar o livro. Tente novamente.');
      console.error('Erro ao atualizar:', err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const formattedDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div>
        <h1>Lista de Livros</h1>
        {editingId !== null ? (
<div className="edit-form-container">
    <h2>Editar Livro</h2>
    <form onSubmit={handleEditSubmit}>
      <div className="form-group">
        <label>Título:</label>
        <input
          type="text"
          value={editedBook.title}
          onChange={(e) => setEditedBook({...editedBook, title: e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <label>Autor:</label>
        <input
          type="text"
          value={editedBook.author}
          onChange={(e) => setEditedBook({...editedBook, author: e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <label>Gênero:</label>
        <input
          type="text"
          value={editedBook.genre}
          onChange={(e) => setEditedBook({...editedBook, genre: e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <label>Data de Leitura:</label>
        <input
          type="date"
          value={editedBook.readAt}
          onChange={(e) => setEditedBook({...editedBook, readAt: e.target.value})}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" disabled={isUpdating}>
          {isUpdating ? 'Salvando...' : 'Salvar'}
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancelar
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  </div>
) : (
            <>
                <ul>
                    {books.map((book) => (
                        <li key={book.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p><strong>{book.title}</strong> por {book.author} - {book.genre} - {formattedDate(book.readAt)}</p>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <button onClick={() => startEditing(book)}>Editar</button>
                                <button onClick={() => deleteBook(book.id)}>Excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link to="/add">
                    <button>Cadastrar</button>
                </Link>
            </>
        )}
    </div>
);
};

export default BooksPage;
