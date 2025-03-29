import React, { useState } from 'react';

function BookForm({ addBook }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [readAt, setReadAt] = useState('');
    const [genre, setGenre] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação básica: garantir que todos os campos foram preenchidos
        if (!title || !author || !readAt || !genre) {
            setError('Todos os campos são obrigatórios');
            return;
        }

        addBook({ title, author, readAt, genre });

        // Limpar os campos após o envio
        setTitle('');
        setAuthor('');
        setReadAt('');
        setGenre('');
        setError('');
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
