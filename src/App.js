import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreDetails from "./components/MoreDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [numberPages, setNumberPages] = useState(0);
  // Start Get All Movies By Axios
  const getAllData = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=e470a4f5d6939a271ac0882e89e0bffc&language=en-US"
    );
    setMovies(res.data.results);
    setNumberPages(500);
  };
  // End Get All Movies By Axios

  // Start Get Current Page
  const getDataPage = async (pageNumber) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e470a4f5d6939a271ac0882e89e0bffc&language=en-US&page=${pageNumber}`
    );
    setMovies(res.data.results);
    setNumberPages(numberPages);
  };
  // End Get Current Page
  useEffect(() => {
    getAllData();
  }, []);
  // Start Find By Search
  const Search = async (word) => {
    if (word === "") {
      getAllData();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e470a4f5d6939a271ac0882e89e0bffc&language=en-US&query=${word}`
      );
      let allData = res.data.results;
      const filMov = allData.filter((el) => {
        return el.poster_path !== null;
      });
      setMovies(filMov);
      setNumberPages(res.data.total_pages);
    }
  };
  // End Find By Search

  return (
    <>
      <NavBar Search={Search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/" 
              element={<MovieList lenghtMovies={movies} getDataPage={getDataPage} numberPages={numberPages} />} />
            <Route path="/DetailsMovie/:id" element={<MoreDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
