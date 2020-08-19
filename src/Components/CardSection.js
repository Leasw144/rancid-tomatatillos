import React, {Component} from 'react'
import MovieCard from './MovieCard'


function CardSection(props) {
  let movies;
  console.log('length', props.allMovies.movies)
  if (props.allMovies.length > 0) {
    console.log('test', props)
    movies = props.allMovies.movies.map(movie => {
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
    <section>
      {movies}
    </section>
  )
}



export default CardSection
