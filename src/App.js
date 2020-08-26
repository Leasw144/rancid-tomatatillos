import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Route, Switch, render, match} from 'react-router-dom'
import {authorizeUser, getMovies, findMovie, getRatings, postRating} from './APICalls'


import Header from './Header/Header'
import CardSection from './CardSection/CardSection'
import DetailsPage from './DetailsPage/DetailsPage'
import Login from './Login/Login'
import moment from 'moment'


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
      userRatings:[],
      isShowingDetails: false,
      movieInfo: {}
    }
    // console.log(moment('2020/12/12').format("DD/MM/YYYY"))
    this.getMovies = getMovies
    this.authorizeUser = authorizeUser
    this.findMovie = findMovie
    this.postRating = postRating
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

  postUserRating = (userId, movieId, userRating) => {
    this.postRating(userId, movieId, userRating)
    // console.log('userid', userId)
    // console.log('movieId', movieId)
    // console.log('userRating', userRating)
  }
  
  showInfo = (id) =>{
    console.log('this function has been passed down successfully, bro', id)
    this.setState(prevState => ({ isShowingDetails: !prevState.isShowingDetails }))
    this.findMovie(id)
  }

  // stateHandler() {
  //   if(this.state.isLogInShowing) {
  //     return (
  //       <Login getUser={this.getUser} /> 
  //     ) 
  //   } else if (this.state.movieInfo.id) {
  //     return (
  //       <DetailsPage movieInfo={this.state.movieInfo} userId= {this.state.user.id} resetter={this.resetState} submitRating={this.postUserRating}/>
  //     )
  //   } else if (this.state.error) {
  //     return (
  //       <p className='error-msg'>{this.state.error}</p>
  //     )
  //   }
  //   return (
  //     <CardSection allMovies={this.state.movies} showInfo={this.showInfo} />
  //   )
  // }

  resetState = () => {
    // console.log('this is this', this)
    this.setState({isShowingDetails: false, movieInfo: {}})
    
  }

  render() {
    return (
      <main className="App">
        <Header loginPage={this.handleClick} logoutUser={this.logoutUser} user={this.state.user}/>
          {/* {this.stateHandler()} */}
        <Switch>
        
          <Route exact path='/movies' render={() => <CardSection allMovies={this.state.movies} showInfo={this.showInfo}/>}/>
          <Route exact path='/login' render={() => <Login getUser={this.getUser} />}/>

          <Route exact path='/movie/:id' 
            render={({match}) => {
              const {id} =match.params
              // const movie;
              return (
                <DetailsPage {...this.state.movieInfo} userId={this.state.user.id} resetter={this.resetState} submitRating={this.postUserRating} />
              )
            }}
          />
        </Switch>

      </main>
    )
  };
}

export default App;
