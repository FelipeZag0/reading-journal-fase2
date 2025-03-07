import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddBookPage from './pages/AddBookPage';
import BooksPage from './pages/BooksPage';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian', date: '08/06/1949' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction', date: '11/07/1960' },
  ]);


  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((book, i) => i !== index);
    setBooks(updatedBooks);
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
          <Route path="/books" element={<BooksPage books={books} deleteBook={deleteBook} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
