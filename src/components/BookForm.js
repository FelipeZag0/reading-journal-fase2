import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import usePostBook from "../hooks/api/usePostBook";
import useEditBook from "../hooks/api/useEditBook";
import { toast } from "react-toastify";

export default function BookForm({ bookToEdit, setBookToEdit, setUpdateHappened }) {
    const { postBook } = usePostBook();
    const { editBook } = useEditBook();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        readAt: "",
    });

    useEffect(() => {
        if (bookToEdit) {
            setFormData({
                title: bookToEdit.title,
                author: bookToEdit.author,
                genre: bookToEdit.genre,
                readAt: bookToEdit.readAt,
            });
        }
    }, [bookToEdit]);

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function cancelForm() {
        setBookToEdit?.({});
        setFormData({ title: "", author: "", genre: "", readAt: "" });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        // Validações
        if (!formData.title.trim()) {
            toast.error("Título é obrigatório");
            return;
        }
        if (!formData.author.trim()) {
            toast.error("Autor é obrigatório");
            return;
        }
        if (!formData.genre.trim()) {
            toast.error("Gênero é obrigatório");
            return;
        }
        if (!formData.readAt) {
            toast.error("Data de leitura é obrigatória");
            return;
        }
        
        // Validação de data futura
        const today = new Date();
        const selectedDate = new Date(formData.readAt);
        if (selectedDate > today) {
            toast.error("Data não pode ser futura");
            return;
        }

        try {
            if (bookToEdit) {
                const updatedBook = await editBook({ ...formData, id: bookToEdit.id });
                toast.success(`Livro "${updatedBook.title}" atualizado!`);
                setBookToEdit({});
                setUpdateHappened(updatedBook);
            } else {
                const newBook = await postBook(formData);
                toast.success(`"${newBook.title}" cadastrado!`);
                setFormData({ title: "", author: "", genre: "", readAt: "" });
            }
        } catch (err) {
            toast.error("Erro ao salvar livro"); // Mensagem simplificada
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="form-label">Título:</label>
            <input
                className="form-control mb-3"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Título do Livro"
                required
            />

            <label className="form-label">Autor(a):</label>
            <input
                className="form-control mb-3"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Autor do Livro"
                required
            />

            <label className="form-label">Gênero:</label>
            <input
                className="form-control mb-3"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                placeholder="Gêneros"
                required
            />

            <label className="form-label">Data de leitura:</label>
            <input
                className="form-control mb-4"
                name="readAt"
                type="date"
                value={formData.readAt}
                onChange={handleInputChange}
                required
            />

            <div className="d-flex justify-content-center gap-3 mt-4">
                <Button variant="danger" onClick={cancelForm} data-cy="cancel">
                    Cancelar
                </Button>
                <Button variant="success" type="submit" data-cy="confirm">
                    {bookToEdit ? "Atualizar" : "Adicionar"}
                </Button>
            </div>
        </form>
    );
}