import React from 'react'
import '../CSS/MovieCard.css'


function MovieCard(props) {
  console.log('movie Card props', props)
  return (
    <article className='MovieCard'>
      <img src='https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg' alt='movie'/>
      <p>Title:</p>
      <p>Average Rating:</p>
      <p>Release Date: </p>
    </article>
  )
}

export default MovieCard