import React, {Component} from 'react'
import MovieCard from './MovieCard'
class CardSection extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     movies: null
  //   }
  // }
  //
  // componentDidMount() {
  //   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  //     .then(response => response.json())
  //     .then(movies => this.setState({ movies }))
  //     // .then(movies => console.log(this.state))
  //     .catch(error => console.log('Movie not found'))
  // }

  render() {
    console.log('lives in card section', this.state.movies)
    const allMovies = this.state.movies.map(movie => {
      return (
      <MovieCard movie={movie} />
    )
  })
    return (
      <section>
        {allMovies}
      </section>
    )
  }

}

export default CardSection
