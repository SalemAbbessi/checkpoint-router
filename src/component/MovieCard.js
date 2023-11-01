import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
   
function MovieCard ({film}) {
  const navigate = useNavigate()
  return (
    
       <Card style={{ width: '18rem' }} onClick= { () => navigate(`${film.id}`)}>
      <Card.Img variant="top" src={film.posterURL}alt='moviecard' 
      witdh='100%'
      height='300px'/> 
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Text> { film.description } </Card.Text>
        <Button variant="primary">watch</Button>
      </Card.Body>
    </Card>
    
  )
}


export default MovieCard