import React, {Component} from 'react'
import './DetailsPage.css'
import {Link} from 'react-router-dom'
// import { render } from 'react-dom';
import { postComment, findMovie, getComments} from '../APICalls'  

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRating: '',
      movieComments: [],
      userComment: '',
      movieInfo: {},
    }
    this.postComment = postComment
    this.findMovie = findMovie
    this.getComments = getComments
  }

  componentDidMount() {
    this.getMovieDetails(this.props.movieId)
    this.getMovieComments(this.props.movieId)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  postUserComment = async (userComment) => {
    try {
      const {newComment} = await this.postComment(this.state.movieInfo.id, userComment, this.props.userName)
      this.setState({
        userComment: '',
        movieComments:[...this.state.movieComments, newComment]
      })
    } catch (error) {
      console.log('error commenting on movie!')
      this.setState({error: 'An error occurred. Your comment was not saved'})
    }
  }
  
  getMovieDetails = async (movieId) => {
    try {
      const { movie } = await this.findMovie(movieId)
      this.setState({movieInfo: movie})
    } catch (error) {
    }
  }

  getMovieComments = async (movieId) => {
    try {
      const {comments} = await this.getComments(movieId)
      this.setState({movieComments: comments})
    } catch (error) {
      this.setState({error: 'An error occurred getting movie comments.'})
    }
  }

  render() {
    const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
      <option key={number} value={number}>{number}</option>
      ))
    const comments = this.state.movieComments.map(movie => {
    return (<div key={movie.id}> {movie.author && movie.comment ? <p><span>{movie.author}:</span> {movie.comment}</p> : <p>{movie.comment}</p>}
            </div>)
    })
    const findMovieIRated = this.props.userRatings.find(movie => movie.movie_id === this.state.movieInfo.id)
    const displayUserRating = findMovieIRated ? <p><span>My Rating:</span> {findMovieIRated.rating.toFixed(1)}</p> : <p>You have not rated yet.</p>
    return (
      <section className='DetailsPage'>
        <section className='backdrop-parent'>
          {this.props.error && <h1>{this.props.error}</h1>}
          <img className='backdrop-img' src={this.state.movieInfo.backdrop_path} alt={this.state.movieInfo.title} />
          {this.state.movieInfo.tagline && <p className='tag-line'>{this.state.movieInfo.tagline}</p>}
          {this.props.userName && 
           <form className='comment-form'>
           <p>What did you think about {this.state.movieInfo.title}?</p>
           <textarea name='userComment' value={this.state.userComment} placeholder='Enter comments here...' onChange={this.handleChange}></textarea>
           <button type="button"  onClick={() => this.postUserComment(this.state.userComment)}>Submit Comment</button>
         </form>}
          <section className='comments-section'>
            <p className='movie-comments-title'><span>Movie comments:</span></p>
            {comments}
          </section>
        </section>

        <article className='movie-details'>
          <h1 className='movie-title'>{this.state.movieInfo.title}</h1>
          <h2>Description:</h2>
          {
            this.state.movieInfo.overview && 
              <p>
                <span>Overview:</span> {this.state.movieInfo.overview}
              </p>
          }
          {
            this.state.movieInfo.release_date && 
              <p>
                <span>Release Date:</span> {this.state.movieInfo.release_date}
              </p>
          }
          {
            this.state.movieInfo.runtime > 0 && 
              <p>
                <span>Runtime:</span> {this.state.movieInfo.runtime}
              </p>
          }
          {
            this.state.movieInfo.average_rating > 0 && 
            <p>
              <span>Average Rating:</span> {this.state.movieInfo.average_rating.toFixed(1)}
            </p>
          }
          {displayUserRating}
          {
            this.state.movieInfo.budget > 0 && 
            <p>
              <span>Budget:</span> {this.state.movieInfo.budget}
            </p>
          }
          {
            this.state.movieInfo.revenue > 0 && 
              <p>
                <span>Revenue:</span> {this.state.movieInfo.revenue}
              </p>
          }
         <form className='rating-form'>
            <select  
              name='userRating' 
              value={this.state.userRating} 
              onChange={this.handleChange}
            >
              {ratingOptions}
            </select>

            {findMovieIRated ? 
              <button type='button' onClick={() => this.props.deleteRating(findMovieIRated.movie_id, findMovieIRated.id)}>
                Delete Rating
              </button> : 
              <button type="button" onClick={() => this.props.submitRating(this.props.userId, this.state.movieInfo.id, this.state.userRating)}>
                Submit Rating
              </button>
            }
         </form>
          <Link  to='/'><button type="button" className='home-btn' >Return to Home</button></Link>        
         </article>
        
      </section>
    )
  }
}

export default DetailsPage







