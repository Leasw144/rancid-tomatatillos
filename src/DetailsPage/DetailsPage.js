import React, {Component} from 'react'
import './DetailsPage.css'
import {Link} from 'react-router-dom'
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
    console.log('this.props', this.props)
    const movie = this.props.movieInfo
    const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
    <option key={number} value={number}>{number}</option>
    ))
    
    const findMovieIRated = this.props.userRatings.find(movie => movie.movie_id === this.props.movie.id)
      console.log('findMovieIRated', findMovieIRated)

    return (
      <section className='DetailsPage'>
        <section className='backdrop-parent'>
          {this.props.error && <h1>{this.props.error}</h1>}
          <img className='backdrop-img' src={this.props.movie.backdrop_path} alt={this.props.movie.title} />
          {this.props.movie.tagline && <p className='tag-line'>{this.props.movie.tagline}</p>}
        </section>
        <article className='movie-details'>
          <h1 className='movie-title'>{this.props.movie.title}</h1>
          <h2>Description:</h2>
          {this.props.movie.overview && <p><span>Overview:</span> {this.props.movie.overview}</p>}
          {this.props.movie.release_date && <p><span>Release Date:</span> {this.props.movie.release_date}</p>}
          {this.props.movie.runtime > 0 && <p><span>Runtime:</span> {this.props.movie.runtime}</p>}
          {this.props.movie.average_rating > 0 && <p><span>Average Rating:</span> {this.props.movie.average_rating.toFixed(1)}</p>}

          {findMovieIRated && <p><span>My Rating:</span> {findMovieIRated.rating.toFixed(1)}</p>}


          {this.props.movie.budget > 0 && <p><span>Budget:</span> {this.props.movie.budget}</p>}
          {this.props.movie.revenue > 0 && <p><span>Revenue:</span> {this.props.movie.revenue}</p>}
         <form className='rating-form'>
            <select  name='userRating' value={this.state.userRating} onChange={this.handleChange}>
              {ratingOptions}
            </select>
            <button type="button" onClick={() => this.props.submitRating(this.props.userId, this.props.movie.id, this.state.userRating)}>Submit Rating</button>
         </form>
  
         <Link  to='/'><button className='home-btn' >Return to Home</button></Link>        </article>
        
      </section>
    )
  }
}

export default DetailsPage


{/* <Route
          path="/destinations/:destinationName"
          render={({ match }) => {
            return (
              <div className="destinationDetails">
                <Header />
                <div className="bread-crumb-container">
                  <Link className="breadCrumbLink" to="/destinations">
                    <p className="main-bread-crumb">destinations </p>
                  </Link>{" "}
                  <p className="main-bread-crumb">
                    > {match.params.destinationName}
                  </p>
                </div>
                <div className="destination-details-container">
                  <DestinationDetails
                    selectedDestination={selectedDestination}
                    setDestinations={setDestinations}
                    destinations={destinations}
                  />
                </div>
              </div>
            );
          }}
        /> */}





