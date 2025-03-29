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
            <div>
                {/* Formulário de edição permanece igual */}
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
