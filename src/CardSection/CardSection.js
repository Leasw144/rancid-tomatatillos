import React, {Component} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './CardSection.css'

function CardSection(props) {
  let movies;
  if (props.allMovies.length > 0) {
    movies = props.allMovies.map(movie => {
      return (
        <MovieCard
        key={movie.id}
        img={movie.poster_path}
        title={movie.title}
        releaseDate={movie.release_date}
        rating={movie.average_rating}
        />
      )
    })
  }
  return (
    <section className='card-section'>
      {movies}
    </section>
  )
}



export default CardSection
