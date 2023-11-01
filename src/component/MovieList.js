import React from 'react'
import MovieCard from './MovieCard.js'

function MovieList ({movies,title,}) {
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",margin:"auto",width:"90%"}}>

        {movies.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase()))
       
        .map(film=>(
        <MovieCard  film={film} key={film.id}/>))}
    </div>
  );
}

export default MovieList;
