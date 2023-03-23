import React from 'react'
import { Row } from 'react-bootstrap'
import Card from './Card'
import MoviesPaginate from './MoviesPaginate'
import NotFound from './NotFound'

const MovieList = ({lenghtMovies, getDataPage, numberPages}) => {
  return (
<div>
      <Row>{
      lenghtMovies.length >=1
      ? (lenghtMovies.map((ele )=> {
        return(
            <Card key={ele.id} mov={ele}/>
          )
        })) 
      : ( <NotFound />)
      
      }</Row>
      {
      lenghtMovies.length >=1
      ?(<MoviesPaginate getDataPage={getDataPage} numberPages={numberPages}/>)
      :null}
</div>
  )
}

export default MovieList