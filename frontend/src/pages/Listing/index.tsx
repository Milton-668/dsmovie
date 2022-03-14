import axios from 'axios';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/pagination';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/request';

function Listing() {

  const [pageNumber, setPageNumber] = useState(0);
  
  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=10&page=1`)
    .then( response =>{
      // Converte o data em MoviePage ou seja está aterelado a página passada via URL
      const data = response.data as MoviePage;
      console.log(data);
      setPageNumber(data.number);
    });
  }, []);

  return (
    //fragment -> simula uma div não interfere em nada
    <>
    <p>{pageNumber}</p>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Listing;
