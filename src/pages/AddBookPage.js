import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';

function AddBookPage({ addBook }) {
  const navigate = useNavigate();

  const handleAddBook = (book) => {
    addBook(book);
    navigate('/books');
  };

  return (
    <div>
      <h1>Cadastrar</h1>
      <BookForm addBook={handleAddBook} />
    </div>
  );
}

export default AddBookPage;
