import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getBooks, createBook, updateBook, deleteBook } from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const handleUpdateBook = async (id, updatedBook) => {
    try {
      await updateBook(id, updatedBook);
      fetchBooks();
    } catch (err) {
      console.error('Erro ao atualizar livro:', err);
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
