import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import useGetBooks from "../hooks/api/useGetBooks";
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner'; // Adicionado spinner

export default function BookListPage() {
  const [bookList, setBookList] = useState([]);
  const [updateHappened, setUpdateHappened] = useState();

  const { getBooks, getBooksLoading } = useGetBooks(); // Adicionado estado de loading

  useEffect(() => {
    async function fetchData() {
      try {
        const bookList = await getBooks();

        setBookList(bookList);
      } catch (err) {
        toast.error("Erro ao carregar lista de livros"); // Mensagem simplificada
      }
    }

    fetchData();
  }, [updateHappened]);

  // Feedback visual de carregamento
  if (getBooksLoading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Lista de Livros</h2>
      <BookList bookList={bookList} setUpdateHappened={setUpdateHappened} />
    </div>
  );
}
