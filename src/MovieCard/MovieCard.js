import React from 'react'
import './MovieCard.css'


function MovieCard(props) {
    // const movieRatings = props.userRatings.find(movie => movie.rating === props.id)
    return (
      <article className='MovieCard' id={props.id} onClick={() => props.click(props.id)}>
        <img src={props.img} alt={props.title}/>
        <p><span>Title:</span> {props.title}</p>
        <p><span>Release Date:</span> {props.releaseDate}</p>
        <p><span>Average Rating:</span> {props.rating.toFixed(1)}</p>
        <p><span>Your Rating:</span></p>
        {/* {movieRatings && <p>movieRatings.movie</p>} */}
      </article>
    )
}

export default MovieCard
