/*
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
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';

function AddBookPage({ addBook }) {
  const navigate = useNavigate();

  const handleAddBook = async (book) => {
    try {
      await addBook(book);
      navigate('/books');
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
    }
  };

  return (
    <div className="add-book-page">
      <h1>Adicionar Novo Livro</h1>
      <BookForm addBook={handleAddBook} />
    </div>
  );
}

export default AddBookPage;