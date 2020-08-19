import React, {Component} from 'react'
import MovieCard from './MovieCard'


function CardSection(props) {
  let movies;
  console.log('length', props.allMovies.length)
  if (props.allMovies) {
    console.log('test')
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
}



export default CardSection
