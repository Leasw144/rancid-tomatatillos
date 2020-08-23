import React from 'react'
import './DetailsPage.css'

function DetailsPage(props) {
  console.log('Details Page props', props)
  const movie = props.movieInfo
  return (
    <section className='DetailsPage'>
      <h1 className='movie-title'>{movie.title}</h1>
      <img src={movie.backdrop_path} alt={movie.title} />
      <article>
        <h2>Description:</h2>
        {movie.overview && <p> overview: {movie.overview}</p>}
        {movie.release_date && <p> Release Date: {movie.release_date}</p>}
        {movie.runtime > 0 && <p> runtime: {movie.runtime}</p>}
        {movie.average_rating > 0 && <p> Average Rating: {movie.average_rating}</p>}
        {movie.budget > 0 && <p> Budget: {movie.budget}</p>}
        {movie.revenue > 0 && <p> Revenue: {movie.revenue}</p>}
        {movie.tagline && <p> Budget: {movie.tagline}</p>}
        <button type='button' onClick={props.resetter}>Return to Home </button>
      </article>
      
    </section>
  )
}

export default DetailsPage