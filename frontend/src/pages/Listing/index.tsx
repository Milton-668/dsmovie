import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import { BASE_URL } from "utils/request";

function Listing() {

  //Forma incorreta
  axios.get(`${BASE_URL}/movies?size=10&page=0`)
  .then( response =>{
    console.log(response.data);
  });

  return (
    //fragment -> simula uma div não interfere em nada
    <>
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
