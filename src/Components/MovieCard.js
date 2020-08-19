import React from 'react'
import '../CSS/MovieCard.css'


function MovieCard(props) {
  console.log('movie Card props', props)
    return (
      <article className='MovieCard'>
        <img src={props.poster_path} alt={props.title}/>
        <p>Title: {props.title}</p>
        <p>Average Rating: {props.rating}</p>
        <p>Release Date: {props.releaseDate}</p>
      </article>
    )
}

export default MovieCard
