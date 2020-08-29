import React from 'react'
import './MovieCard.css'
import {Link, render } from 'react-browser-router'
import DetailsPage from '../DetailsPage/DetailsPage'


function MovieCard(props) {
  // console.log('These are your movie props', props)
  console.log('props.userRatings', props.userRatings)
    // let myRatings = props.userRatings.filter(movie => movie.rating)
    // const myRatings = props.userRatings.find(movie)
    // console.log('myRatings', myRatings)
    return (
      <Link to={`/movies/${props.id}`} render={() => <DetailsPage {...this.state.movieInfo} userId={this.state.user.id} resetter={this.resetState} submitRating={this.postUserRating} />} >
        <article className='MovieCard' id={props.id} onClick={() => props.click(props.id)}>
          <img src={props.img} alt={props.title}/>
          <p><span>Title:</span> {props.title}</p>
          <p><span>Release Date:</span> {props.releaseDate}</p>
          <p><span>Average Rating:</span> {props.rating.toFixed(1)}</p>
          
          {/* {movieRatings && <p><span>Your Rating:</span>I'm showing up</p>} */}
        </article>
      </Link>
    )
}

export default MovieCard
// return Redirect to=''