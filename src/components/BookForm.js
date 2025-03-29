import React, { useState } from 'react';

function BookForm({ addBook }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [readAt, setReadAt] = useState('');
    const [error, setError] = useState('');

    // Adicione async aqui
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !author || !genre || !readAt) {
            setError('Todos os campos são obrigatórios');
            return;
        }

        try {
            await addBook({ title, author, genre, readAt });
            setTitle('');
            setAuthor('');
            setGenre('');
            setReadAt('');
            setError('');
        } catch (err) {
            setError('Erro ao adicionar livro');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Autor(a):</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Gênero:</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Data:</label>
                    <input
                        type="date"
                        value={readAt}
                        onChange={(e) => setReadAt(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default BookForm;