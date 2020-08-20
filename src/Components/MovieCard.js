import React from 'react'
import '../CSS/MovieCard.css'


function MovieCard(props) {
  console.log('movie Card props', props)
    return (
      <article className='MovieCard'>
        <img src={props.img} alt={props.title}/>
        <p><span>Title:</span> {props.title}</p>
        <p><span>Average Rating:</span> {props.rating}</p>
        <p><span>Release Date:</span> {props.releaseDate}</p>
      </article>
    )
}

export default MovieCard
