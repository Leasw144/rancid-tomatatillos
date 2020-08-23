import React, {Component} from 'react';
import './App-resources/App.css';
import Header from './Header/Header'
import CardSection from './CardSection/CardSection'
import DetailsPage from './DetailsPage/DetailsPage'
import './assets/tomato.jpg'
import Login from './Login/Login'
import {authorizeUser, getMovies } from './APICalls'
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
      isLogInShowing: false,
      movieInfo: {}
    }
    this.getMovies = getMovies
    this.authorizeUser = authorizeUser
  }

  componentDidMount() {
   this.getMovies()
  }

  handleClick = () => {
    this.setState(prevState => ({isLogInShowing: !prevState.isLogInShowing}))

  }

  logoutUser = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn, user:{}}))
  }

  getUser = (username, password)  => {
    this.authorizeUser(username, password)
  }

  render() {
    return (
      <main className="App">
        <Header loginPage={this.handleClick} logoutUser={this.logoutUser} user={this.state.user}/>
          {this.state.isLogInShowing ? <Login getUser={this.getUser} /> : <CardSection allMovies= {this.state.movies} />}
          {this.state.error && <p className='error-msg'>{this.state.error}</p>}
          {this.state.movieInfo.title && <DetailsPage movieInfo={this.state.movieInfo}/>}
      </main>
    )
  };

  // App.PropTypes = {
  //   movies: PropTypes.array,
  //   error: PropTypes.string
  // }

}

export default App;
