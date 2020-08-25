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
        <h1 className='movie-title'>{movie.title}</h1>
        <img src={movie.backdrop_path} alt={movie.title} />
        <article>
          <h2>Description:</h2>
          {movie.overview && <p> overview: {movie.overview}</p>}
          {movie.release_date && <p> Release Date: {movie.release_date}</p>}
          {movie.runtime > 0 && <p> runtime: {movie.runtime}</p>}
          {movie.average_rating > 0 && <p> Average Rating: {movie.average_rating}</p>}
          {movie.budget > 0 && <p> Budget: {movie.budget}</p>}
          {movie.revenue > 0 && <p> Revenue: {movie.revenue}</p>}
          {movie.tagline && <p> Budget: {movie.tagline}</p>}
         <form>
            {/* <NumericInput  min={1} max={10} value={0}/> */}
            <select  name='userRating' value={this.state.userRating} onChange={this.handleChange}>
              {ratingOptions}
            </select>
            <button type="button" onClick={() => this.props.submitRating(this.props.userId, this.props.movieInfo.id, this.state.userRating)}>Submit Rating</button>
         </form>
  
          <button type='button' onClick={this.props.resetter}>Return to Home </button>
        </article>
        
      </section>
    )
  }
}

export default DetailsPage