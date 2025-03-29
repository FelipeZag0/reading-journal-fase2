import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getBooks, createBook, updateBook, deleteBook } from './services/api';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddBookPage from './pages/AddBookPage';
import BooksPage from './pages/BooksPage';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleAddBook = async (book) => {
    try {
      await createBook(book);
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleUpdateBook = async (id, updatedBook) => {
    try {
      await updateBook(id, updatedBook);
      fetchBooks();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <Router>
      <div className="navbar">
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/add">Cadastrar</Link></li>
          <li><Link to="/books">Lista de Livros</Link></li>
        </ul>
      </div>

      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add" element={<AddBookPage addBook={handleAddBook} />} />
          <Route
            path="/books"
            element={
              <BooksPage
                books={books}
                deleteBook={handleDeleteBook}
                updateBook={handleUpdateBook}
              />
            }
          />
        </Routes>      </div>
      <Footer />
    </Router>
  );
}

export default App;
