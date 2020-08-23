import React from 'react'
import './MovieCard.css'


function MovieCard(props) {
    return (
      <article className='MovieCard' id={props.id}>
        <img src={props.img} alt={props.title}/>
        <p><span>Title:</span> {props.title}</p>
        <p><span>Average Rating:</span> {props.rating}</p>
        <p><span>Release Date:</span> {props.releaseDate}</p>
      </article>
    )
}

export default MovieCard
