import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
    let findMovieIRated = props.userRatings.find(movie => movie.movie_id === props.id)
    return (
        <article className='MovieCard' id={props.id} >
          <img src={props.img} alt={props.title}/>
          <p><span>Title:</span> {props.title}</p>
          <p><span>Release Date:</span> {props.releaseDate}</p>
          <p><span>Average Rating:</span> {props.rating.toFixed(1)}</p>
          {findMovieIRated && 
            <p>
              <span>Your Rating:</span>{findMovieIRated.rating}
            </p>
          }
        </article>
    )
}

export default MovieCard
