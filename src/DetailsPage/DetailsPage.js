import React, {Component} from 'react'
import './DetailsPage.css'
// import NumericInput from 'react-numeric-input';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRating: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    const movie = this.props.movieInfo
    const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
    <option key={number} value={number}>{number}</option>
    ))
    
    return (
      <section className='DetailsPage'>
        <section className='backdrop-parent'>
          <img className='backdrop-img' src={movie.backdrop_path} alt={movie.title} />
          {movie.tagline && <p className='tag-line'>{movie.tagline}</p>}
        </section>
        <article className='movie-details'>
          <h1 className='movie-title'>{movie.title}</h1>
          <h2>Description:</h2>
          {movie.overview && <p><span>Overview:</span> {movie.overview}</p>}
          {movie.release_date && <p><span>Release Date:</span> {movie.release_date}</p>}
          {movie.runtime > 0 && <p><span>Runtime:</span> {movie.runtime}</p>}
          {movie.average_rating > 0 && <p><span>Average Rating:</span> {movie.average_rating.toFixed(1)}</p>}
          {movie.budget > 0 && <p><span>Budget:</span> {movie.budget}</p>}
          {movie.revenue > 0 && <p><span>Revenue:</span> {movie.revenue}</p>}
         <form className='rating-form'>
            {/* <NumericInput  min={1} max={10} value={0}/> */}
            <select  name='userRating' value={this.state.userRating} onChange={this.handleChange}>
              {ratingOptions}
            </select>
            <button type="button" onClick={() => this.props.submitRating(this.props.userId, this.props.movieInfo.id, this.state.userRating)}>Submit Rating</button>
         </form>
  
          <button className='home-btn' type='button' onClick={this.props.resetter}>Return to Home </button>
        </article>
        
      </section>
    )
  }
}

export default DetailsPage