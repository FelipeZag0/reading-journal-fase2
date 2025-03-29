/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getBooks, createBook, updateBook, deleteBook } from './services/api';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddBookPage from './pages/AddBookPage';
import BooksPage from './pages/BooksPage';
import api from './services/api';
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
      setLoading(false);
    } catch (err) {
      setError('Erro ao carregar livros');
      setLoading(false);
      console.error(err);
    }
  };

  const handleAddBook = async (book) => {
    try {
      await createBook(book);
      fetchBooks();
    } catch (err) {
      console.error('Erro ao adicionar livro:', err);
      throw err;
    }
  };

//  const handleUpdateBook = async (id, updatedBook) => {
//    try {
//      await updateBook(id, updatedBook);
//      fetchBooks();
//    } catch (err) {
//      console.error('Erro ao atualizar livro:', err);
//      throw err;
//    }
//  };

  const handleUpdateBook = async (id, book) => {
    try {
      const response = await api.put(`/books/${id}`, book);
      fetchBooks(); // Atualiza a lista
      return response.data;
    } catch (err) {
      console.error('Detalhes do erro:', err.response?.data);
      throw err;
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (err) {
      console.error('Erro ao deletar livro:', err);
    }
  };

  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
*/

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getBooks, createBook, updateBook, deleteBook } from './services/api';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddBookPage from './pages/AddBookPage';
import BooksPage from './pages/BooksPage';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
      setLoading(false);
    } catch (err) {
      setError('Erro ao carregar livros');
      setLoading(false);
      console.error(err);
    }
  };

  const handleAddBook = async (book) => {
    try {
      await createBook(book);
      setSuccessMessage('Livro adicionado com sucesso!');
      setTimeout(() => setSuccessMessage(''), 3000);
      fetchBooks();
    } catch (err) {
      setError('Erro ao adicionar livro: ' + err.message);
      console.error(err);
    }
  };

  const handleUpdateBook = async (id, book) => {
    try {
      await updateBook(id, book);
      setSuccessMessage('Livro atualizado com sucesso!');
      setTimeout(() => setSuccessMessage(''), 3000);
      fetchBooks();
    } catch (err) {
      setError('Erro ao atualizar livro: ' + err.message);
      console.error(err);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setSuccessMessage('Livro removido com sucesso!');
      setTimeout(() => setSuccessMessage(''), 3000);
      fetchBooks();
    } catch (err) {
      setError('Erro ao deletar livro: ' + err.message);
      console.error(err);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        
        <div className="messages-container">
          {error && (
            <div className="error-message" onClick={() => setError(null)}>
              {error}
            </div>
          )}
          {successMessage && (
            <div className="success-message" onClick={() => setSuccessMessage('')}>
              {successMessage}
            </div>
          )}
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
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;