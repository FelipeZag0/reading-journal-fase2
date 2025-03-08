import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddBookPage from './pages/AddBookPage';
import BooksPage from './pages/BooksPage';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', date: '1949-06-08' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', date: '1960-07-11' },
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((book, i) => i !== index);
    setBooks(updatedBooks);
  };

  // Função para atualizar um livro
  const updateBook = (index, updatedBook) => {
    const updatedBooks = [...books];
    updatedBooks[index] = updatedBook; // Substitui o livro no índice especificado
    setBooks(updatedBooks); // Atualiza o estado com o novo array de livros
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
          <Route path="/add" element={<AddBookPage addBook={addBook} />} />
          <Route path="/books" element={<BooksPage books={books} deleteBook={deleteBook} updateBook={updateBook} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
