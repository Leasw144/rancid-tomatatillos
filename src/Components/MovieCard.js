import React from 'react'
import '../CSS/MovieCard.css'


function MovieCard(props) {
  // console.log('movie Card props', props)
    return (
      <article className='MovieCard'>
        {/* <img src={movie.poster_path} alt={movie.title}/> */}
        <p>Title: {props.title}</p>
        {/* <p>Average Rating: {movie.average_rating}</p> */}
        {/* <p>Release Date: {movie.release_date}</p> */}
      </article>
    )
}

export default MovieCard