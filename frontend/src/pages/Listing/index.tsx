import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  //Estado que guarda a pagina de busca da requisição
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=10&page=${pageNumber}&sort=id`)
      .then((response) => {
        // Converte o data em MoviePage ou seja está aterelado a página passada via URL
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber : number) => {
      setPageNumber(newPageNumber);
  }

  return (
    //fragment -> simula uma div não interfere em nada
    <>
      <Pagination page={page} onChange={handlePageChange}/>

      <div className="container">
        <div className="row">
          {page.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
