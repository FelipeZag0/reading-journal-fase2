import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';

function AddBookPage({ addBook }) {
  const navigate = useNavigate();

  const handleAddBook = (book) => {
    addBook(book);
    navigate('/books');  // Redireciona para a página de lista de livros
  };

  return (
    <div>
      <h1>Cadastrar</h1>
      <BookForm addBook={handleAddBook} />
    </div>
  );
}

export default AddBookPage;
