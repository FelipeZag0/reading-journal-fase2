import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const getBooks = () => api.get('/books');
export const getBook = (id) => api.get(`/books/${id}`);
export const createBook = (book) => api.post('/books', book);
//export const updateBook = (id, book) => api.put(`/books/${id}`, book);
export const deleteBook = (id) => api.delete(`/books/${id}`);

export const updateBook = async (id, book) => {
    try {
        const response = await api.put(`/books/${id}`, book);
        return response.data;
    } catch (error) {
        // Adiciona informações úteis ao erro
        const apiError = new Error(error.response?.data?.message || 'Erro ao atualizar livro');
        apiError.response = error.response;
        throw apiError;
    }
};

export default api;