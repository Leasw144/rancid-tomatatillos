import React, {Component} from 'react';
import './App-resources/App.css';
import Header from './Header/Header'
import CardSection from './CardSection/CardSection'
import './assets/tomato.jpg'
import Login from './Login/Login'
import {authorizeUser} from './APICalls'
import PropTypes from 'prop-types'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      user:{},
      isLoggedIn: false,
      isLogInShowing: false
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        console.log('Error fetching all movies')
        this.setState({ error: 'An error has occured'})
      })
  }

  handleClick = () => {
    this.setState(prevState => ({isLogInShowing: !prevState.isLogInShowing}))
   
  }

  logoutUser = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn, user:{}}))
  }

  getUser = (username, password)  => {
    authorizeUser(username, password)
  }

  render() {
    return (
      <main className="App">
        <Header loginPage={this.handleClick} logoutUser={this.logoutUser} user={this.state.user}/>
          {this.state.isLogInShowing ? <Login getUser={this.getUser} /> : <CardSection allMovies= {this.state.movies} />}
          {this.state.error && <p className='error-msg'>{this.state.error}</p>}
      </main>
    )
  };

  // App.PropTypes = {
  //   movies: PropTypes.array,
  //   error: PropTypes.string
  // }

}

export default App;
