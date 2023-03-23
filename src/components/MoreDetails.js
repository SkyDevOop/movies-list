import React, { useState, useEffect } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MoreDetails = () => {
  const param = useParams()
  const [movie, setMovie] = useState([]);
  // Start Get one Movie By ID use axios
  const getmovie = async () => {
    const res = await axios.get(
      `
      https://api.themoviedb.org/3/movie/${param.id}?api_key=e470a4f5d6939a271ac0882e89e0bffc&language=en-US`
    );
    setMovie(res.data)
    
  };
  useEffect(() => {
    getmovie()
  }, []);
  return (
    <div className='text-light'>
      <Row>
        <Col>
          <div className="box-details d-flex flex-column flex-md-row text-center text-md-left">
            <div className=' me-md-5 mb-5 mb-md-0 '>
              <Image src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} alt="Movie" className='img-details rounded' />
              <a href={movie.homepage} target='_black'>
                <button className='show-movie d-block py-2 mt-3 border-0 mx-auto rounded text-capitalize'>Show Movie</button>
              </a>
              <Link to="/" >
                <button className='show-movie d-block py-2 mt-3 border-0 mx-auto rounded text-capitalize'>go to homePage</button>
              </Link>
            </div>
            <ul className='details-movie text-center fs-4 d-flex justify-content-center flex-column m-0 p-4 rounded' >
              <li>movie name : <span>{movie.original_title}</span></li>
              <li>date :<span>{movie.release_date}</span></li>
              <li>vote count : <span>{movie.vote_count}</span></li>
              <li>rate : <span>{movie.vote_average}</span></li>

            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='histoire mt-5 d-flex flex-column flex-md-row align-items-center p-3'>
            <h3 className='title-histoire m-0 mb-4 mb-md-0 text-center fw-bold'>Histoire :</h3>
            <p className='text-histoire ps-5'>{movie.overview}</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MoreDetails