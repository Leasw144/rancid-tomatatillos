import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Route, Switch, render, match, Redirect} from 'react-router-dom'
import {authorizeUser, getMovies, findMovie, getRatings, postRating} from './APICalls'

import Header from './Header/Header'
import CardSection from './CardSection/CardSection'
import DetailsPage from './DetailsPage/DetailsPage'
import Login from './Login/Login'
// import moment from 'moment'

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
    .then(data => this.setState({movies: data.movies}))
    .catch(error => {
      console.log('Error fetching all movies')
      this.setState({ error: 'An error has occurred'})
    })
  }

  handleClick = () => {
    this.setState(prevState => ({isLogInShowing: !prevState.isLogInShowing}))
  }

  logoutUser = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn, user:{}}))
  }

  getUser = (username, password)  => {
    this.authorizeUser(username, password)
    .then(data => {
      this.setState({user: data.user, isLogInShowing: false})
    })
    .catch(error => {
      console.log('Error fetching user')
      this.setState({error: 'Please check your login information'})
      console.log('this.state.error in App', this.state.error)
    })
    return <Redirect to='/' />

  }

  postUserRating = (userId, movieId, userRating) => {
    this.postRating(userId, movieId, userRating)
    .then(data => this.setState({userRatings: data.userRating}))
    .catch(error => {
      console.log('Error fetching user')
      this.setState({error: 'Please check your login information'})
    })
  }
  
  showInfo = async (id) =>{
    console.log('this function has been passed down successfully, bro', id)
    this.setState(prevState => ({ isShowingDetails: !prevState.isShowingDetails }))
    let data = await this.findMovie(id)
    console.log('data1', data)
    console.log('data.movie', data)
    this.setState({movieInfo: data.movie})
    return <Redirect to='/movies/{id}' />
    // .catch(error => {
    //   console.log('error Fetching Movie!')
    //   this.setState({error: 'Your movie has not been found!'})
    // })
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
    return <Redirect to='/' />
  }

  render() {
    console.log('movieInfo', this.state.movieInfo)
    return (
      <main className="App">
        <Header loginPage={this.handleClick} logoutUser={this.logoutUser} user={this.state.user}/>
          {/* {this.stateHandler()} */}
        <Switch>
        
          <Route exact path='/' render={() => <CardSection allMovies={this.state.movies} showInfo={this.showInfo}/>}/>
          <Route exact path='/login' render={() => <Login getUser={this.getUser} error={this.state.error} user={this.state.user}/> }/>

          <Route exact path='/movies/:id' 
            render={({match}) => {
              const {id} =match.params
              // const movie;
              return (
                <DetailsPage movie={this.state.movieInfo} userId={this.state.user.id} resetter={this.resetState} submitRating={this.postUserRating} />
              )
            }}
          />
        </Switch>

      </main>
    )
  };
}

export default App;
