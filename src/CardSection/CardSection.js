import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './CardSection.css'
import { Link } from 'react-browser-router'
import DetailsPage from '../DetailsPage/DetailsPage'

function CardSection(props) {
  console.log('Your favs', props)
  // const filtered = props.filterFavs()

  let movies, favoriteMovie;

  


  if (props.movies.length > 0) {
    movies = props.movies.map(movie => {
      favoriteMovie = props.favorites.find(moviesFavoritedId => moviesFavoritedId === movie.id)
      return (
        <div key={movie.id}>
          <button type='button' onClick={() => props.toggleFavorite(movie.id)}>{favoriteMovie ? '♥️' :'♡'}</button>
          <Link to={`/movies/${movie.id}`} >
            <MovieCard
              id={movie.id}
              img={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              rating={movie.average_rating}
              userRatings={props.userRatings}
              favorites={props.favorites}
              toggleFavorite={props.toggleFavorite}
              userInfo={props.userInfo}
            />   
          </Link>
        </div>
      )
    })
  }

  return (
    <main>
      <Link to={'/favorites'}>
        {props.userInfo.name && <button type='button' onClick={props.filterFavorites}>filter</button>}
      </Link>
      <section className='card-section'>
        {movies}
      </section>
    </main>
  )
}



export default CardSection
