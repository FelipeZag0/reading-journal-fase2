import React from 'react';

function BookList({ books }) {
    return (
        <div>
            <h2>Lista de livros</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <strong>{book.title}</strong> - {book.author} - {book.genre} - ({book.year})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
