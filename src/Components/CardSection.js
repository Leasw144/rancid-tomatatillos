import React, {Component} from 'react'
import MovieCard from './MovieCard'
class CardSection extends Component {
  constructor() {
    super();
    this.state = {
      movies: null
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => this.setState({ movies }))
      .then(movies => console.log(this.state))
      .catch(error => console.log('Movie not found'))
  }

  render() {
    return (
      <section>
        <MovieCard movie={this.state.movies}/>
      </section>
    )
  }
  
}

export default CardSection