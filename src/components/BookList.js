import React from 'react';

function BookList({ books }) {
    return (
        <div>
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
