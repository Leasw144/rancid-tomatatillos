import React, {Component} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './CardSection.css'
import { Link, render } from 'react-browser-router'
import DetailsPage from '../DetailsPage/DetailsPage'

function CardSection(props) {
  let movies;
  if (props.allMovies.length > 0) {
    movies = props.allMovies.map(movie => {
      return (
        <div>
          
          <button type='button'>'♡'</button>
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
      <nav>
        {props.userInfo.name && <button type='button'>filter</button>}
      </nav>
      <section className='card-section'>
        {movies}
      </section>
    </main>
  )
}



export default CardSection
