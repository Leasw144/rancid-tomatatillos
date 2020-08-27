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
          {this.props.movie.budget > 0 && <p><span>Budget:</span> {this.props.movie.budget}</p>}
          {this.props.movie.revenue > 0 && <p><span>Revenue:</span> {this.props.movie.revenue}</p>}
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





