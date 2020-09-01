import React, {Component} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './CardSection.css'
import { Link, render } from 'react-browser-router'
import DetailsPage from '../DetailsPage/DetailsPage'

function CardSection(props) {
  console.log('Your favs', props)
  let movies, favoriteMovie;
  if (props.allMovies.length > 0) {
    movies = props.allMovies.map(movie => {
      favoriteMovie = props.favorites.find(moviesFavoritedId => moviesFavoritedId === movie.id)
      return (
        <div>
          <button type='button' onClick={() => props.toggleFavorite(movie.id)}>{favoriteMovie ? '♥️' :'♡'}</button>
          <Link  key={movie.id} to={`/movies/${movie.id}`} >
            {/* render={DetailsPage} */}
            <MovieCard
              // key={movie.id}
              id={movie.id}
              img={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              rating={movie.average_rating}
              // click={props.showInfo}
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
        {props.userInfo.name && <button type='button' onClick={props.favoriteMovies}>filter</button>}
      </Link>
      <section className='card-section'>
        {movies}
      </section>
    </main>
  )
}



export default CardSection
