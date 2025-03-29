import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

test('submits form with correct data', () => {
    const mockAddBook = jest.fn();
    render(<BookForm addBook={mockAddBook} />);

    fireEvent.change(screen.getByLabelText(/título/i), { target: { value: '1984' } });
    fireEvent.change(screen.getByLabelText(/autor/i), { target: { value: 'Orwell' } });
    fireEvent.change(screen.getByLabelText(/gênero/i), { target: { value: 'Dystopian' } });
    fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '1949-06-08' } });

    fireEvent.click(screen.getByText(/adicionar/i));

    expect(mockAddBook).toHaveBeenCalledWith({
        title: '1984',
        author: 'Orwell',
        genre: 'Dystopian',
        date: '1949-06-08'
    });
});