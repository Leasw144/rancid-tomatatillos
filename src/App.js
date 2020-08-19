import React, {Component} from 'react';
import './CSS/App.css';
import Header from './Components/Header'
import CardSection from './Components/CardSection'
import './assets/tomato.jpg'

class App extends Component {
import PropTypes from 'prop-types'

  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => this.setState({ movies }))
      // .then(movies => console.log(this.state))
      .catch(error => console.log('Movie not found'))
  }

  render() {
    return (
      <main className="App">
        <Header />
        <CardSection/>
      </main>
    )
  };

  App.PropTypes = {
    movies: PropTypes.array,
    error: PropTypes.string
  }


}

export default App;
