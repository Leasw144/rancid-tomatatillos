import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {BrowserRouter, Route} from 'react-router-dom'
import {authorizeUser, getMovies, findMovie} from './APICalls'

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
  
  // showMovieDetails = () => {
  //   this.setState(prevState => ({isShowingDetails: !prevState.isShowingDetails}))
  // }

  showInfo = (id) =>{
    console.log('this function has been passed down successfully, bro', id)
    this.setState(prevState => ({ isShowingDetails: !prevState.isShowingDetails }))
    this.findMovie(id)
  }
  // Create a function in app that invokes our API to go to the movie
  // Pass this function down to MovieCard
  // then OnClick of the card, the id would be fed into the function which calls the fetch
  // // the fetch resets the state
  // Have conditional logic hear, where if the movieInfo state is truthy, render details page
  // pass down movie info as prop to details page


  stateHandler() {
    // if the state has changed in any way, we want to render the appropriate component
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
          {/* {this.state.isLogInShowing ? <Login getUser={this.getUser} /> : <CardSection allMovies= {this.state.movies} showInfo={this.showInfo}/>}
          {this.state.error && <p className='error-msg'>{this.state.error}</p>}
          {this.state.isShowingDetails ? <DetailsPage movieInfo={this.state.movieInfo} /> : <CardSection allMovies={this.state.movies} showInfo={this.showInfo} />} */}
      </main>
    )
  };

  // App.PropTypes = {
  //   movies: PropTypes.array,
  //   error: PropTypes.string
  // }

}

export default App;
