import dayjs from "dayjs";
import { useState } from "react";
import BookForm from "../components/BookForm";
import { Button } from "react-bootstrap";
import useDeleteBook from "../hooks/api/useDeleteBook";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function BookList({ bookList, setUpdateHappened }) {
    const [bookToEdit, setBookToEdit] = useState({});

    const { deleteBook } = useDeleteBook();

    function deleteBookFromList(book) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger me-3",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: `Excluir livro "${book.title}"?`,
                text: "Esta ação não pode ser desfeita!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sim, excluir!",
                cancelButtonText: "Cancelar",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await deleteBook(book.id);
                        setUpdateHappened(book.id);
                        swalWithBootstrapButtons.fire({
                            title: "Livro excluído!",
                            text: `"${book.title}" foi removido.`,
                            icon: "success",
                        });
                    } catch (err) {
                        toast.error("Erro ao excluir livro"); // Mensagem simplificada
                    }
                }
            });
    }

    function openEditForm(book) {
        setBookToEdit(bookToEdit?.id === book.id ? {} : book);
    }

    return (
        <div className="w-100 d-flex flex-column align-items-center" data-cy="booklist">
            {bookList.map((book, index) => (
                <div
                    id={book.id}
                    className="book-card bg-white rounded p-4 m-4 d-flex flex-column"
                    key={book.id}
                    data-cy={`book-${index}`}
                >
                    <div className="d-flex flex-column flex-md-row"> {/* Layout responsivo */}
                        <div className="w-100">
                            <p className="d-flex justify-content-between fs-4" data-cy="booklist-title">
                                <b className="me-4">Título: </b>
                                <span>{book.title}</span>
                            </p>
                            <p className="d-flex justify-content-between fs-6" data-cy="booklist-author">
                                <b className="me-4">Autor: </b>
                                <span>{book.author}</span>
                            </p>
                            <p className="d-flex justify-content-between fs-6" data-cy="booklist-genre">
                                <b className="me-4">Gênero: </b>
                                <span>{book.genre}</span>
                            </p>
                            <p className="d-flex justify-content-between fs-6" data-cy="booklist-readat">
                                <b className="me-4">Data: </b>
                                <span>
                                    {book.readAt ?
                                        dayjs(book.readAt).format("DD/MM/YYYY") :
                                        "Data inválida"} {/* Tratamento de data */}
                                </span>
                            </p>
                        </div>

                        <div className="d-flex flex-column align-items-end ps-5">
                            <Button
                                variant="warning"
                                className="w-100 mb-3"
                                onClick={() => openEditForm(book)}
                                data-cy="edit"
                            >
                                <i className="bi bi-pencil-fill"></i> Editar
                            </Button>
                            <Button
                                variant="danger"
                                className="w-100 mb-3"
                                onClick={() => deleteBookFromList(book)}
                                data-cy="delete"
                            >
                                <i className="bi bi-trash-fill"></i> Excluir
                            </Button>
                        </div>
                    </div>

                    {bookToEdit.id === book.id && (
                        <div className="w-100 mt-3">
                            <hr />
                            <BookForm
                                bookToEdit={bookToEdit}
                                setBookToEdit={setBookToEdit}
                                setUpdateHappened={setUpdateHappened}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
