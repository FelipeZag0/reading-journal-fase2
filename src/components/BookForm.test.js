import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';

describe('BookList', () => {
    const mockBooks = [
        { id: 1, title: 'Livro 1', author: 'Autor 1', genre: 'Gênero 1', readAt: '2023-01-01' },
        { id: 2, title: 'Livro 2', author: 'Autor 2', genre: 'Gênero 2', readAt: '2023-02-01' }
    ];

    it('renders list of books', () => {
        render(<BookList books={mockBooks} />);

        expect(screen.getByText('Livro 1 - Autor 1 - Gênero 1')).toBeInTheDocument();
        expect(screen.getByText('Livro 2 - Autor 2 - Gênero 2')).toBeInTheDocument();
    });

    it('renders empty state when no books', () => {
        render(<BookList books={[]} />);

        expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
});