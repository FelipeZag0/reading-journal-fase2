import React, { useState } from 'react';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' },
  ]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div>
      <NavBar />
      <BookForm addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
