import React from "react";
import { Col, Image } from "react-bootstrap";
import {Link} from 'react-router-dom'
const Card = ({mov})=> {
  return (
    <Col sm={6} md={4} lg={3}>      
      <Link to={`/DetailsMovie/${mov.id}`}>
        <div className="item-card position-relative mt-3 rounded">
          <Image className="img-item img-fluid" src={`https://image.tmdb.org/t/p/w500/`+ mov.poster_path} />
          <div className="overly-card position-absolute p-3 text-capitalize">
            <p>movie name : <span>{mov.original_title}</span> </p>
            <p>date : <span>{mov.release_date}</span></p>
            <p>vote count : <span>{mov.vote_count}</span></p>
            <p>rate : <span>{mov.vote_average}</span></p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default Card;
