import React, {Component} from 'react';
import './CSS/App.css';
import Header from './Components/Header'
import CardSection from './Components/CardSection'
import './assets/tomato.jpg'
import PropTypes from 'prop-types'

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      user:{}
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => console.log('Movie not found'))
  }

  render() {
    return (
      <main className="App">
        <Header />
        <CardSection allMovies={this.state.movies}/>
      </main>
    )
  };

  // App.PropTypes = {
  //   movies: PropTypes.array,
  //   error: PropTypes.string
  // }


}

export default App;
