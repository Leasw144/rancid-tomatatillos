import React from 'react'
import './MovieCard.css'
import {Link, render } from 'react-browser-router'
import DetailsPage from '../DetailsPage/DetailsPage'


function MovieCard(props) {
  // console.log('These are your movie props', props)
    // const movieRatings = props.userRatings.find(movie => movie.rating === props.id)
    return (
      <Link to={`/movies/${props.id}`} render={() => <DetailsPage {...this.state.movieInfo} userId={this.state.user.id} resetter={this.resetState} submitRating={this.postUserRating} />} >
        <article className='MovieCard' id={props.id} onClick={() => props.click(props.id)}>
          <img src={props.img} alt={props.title}/>
          <p><span>Title:</span> {props.title}</p>
          <p><span>Release Date:</span> {props.releaseDate}</p>
          <p><span>Average Rating:</span> {props.rating.toFixed(1)}</p>
          <p><span>Your Rating:</span></p>
          {/* {movieRatings && <p>movieRatings.movie</p>} */}
        </article>
      </Link>
    )
}

export default MovieCard
// return Redirect to=''