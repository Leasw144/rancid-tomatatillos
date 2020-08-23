import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import {BrowserRouter, Route} from 'react-router-dom'
import {authorizeUser, getMovies, findMovie, getRatings} from './APICalls'

import Header from './Header/Header'
import CardSection from './CardSection/CardSection'
import DetailsPage from './DetailsPage/DetailsPage'
import Login from './Login/Login'

import './App-resources/App.css';
import './assets/tomato.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      user:{},
      isLoggedIn: false,
      isLogInShowing: false,
      // userRatings:[],
      isShowingDetails: false,
      movieInfo: {}
    }
    this.getMovies = getMovies
    this.authorizeUser = authorizeUser
    this.findMovie = findMovie
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
  
  showInfo = (id) =>{
    console.log('this function has been passed down successfully, bro', id)
    this.setState(prevState => ({ isShowingDetails: !prevState.isShowingDetails }))
    this.findMovie(id)
  }

  stateHandler() {
    if(this.state.isLogInShowing) {
      return (
        <Login getUser={this.getUser} /> 
      ) 
    } else if (this.state.movieInfo.id) {
      return (
        <DetailsPage movieInfo={this.state.movieInfo} resetter={this.resetState} />
      )
    } else if (this.state.error) {
      return (
        <p className='error-msg'>{this.state.error}</p>
      )
    }
    return (
      <CardSection allMovies={this.state.movies} showInfo={this.showInfo} />
    )
  }

  resetState = () => {
    console.log('this is this', this)
    this.setState({isShowingDetails: false, movieInfo: {}})
    
  }

  render() {
    return (
      <main className="App">
        <Header loginPage={this.handleClick} logoutUser={this.logoutUser} user={this.state.user}/>
          {this.stateHandler()}
      </main>
    )
  };
}

export default App;
