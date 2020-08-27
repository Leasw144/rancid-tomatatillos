import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Route, Switch, render, match, Redirect} from 'react-router-dom'
import {authorizeUser, getMovies, findMovie, getRatings, postRating} from './APICalls'

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
      userRatings:[],
      movieInfo: {}
    }
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

  getUser = (username, password)  => {
    this.authorizeUser(username, password)
    .then(data => {
      this.setState({user: data.user})
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
  
  showInfo = (id) =>{
    console.log('this function has been passed down successfully, bro', id)
    this.findMovie(id)
    .then( (data) =>  this.setState({movieInfo: data.movie}))
    .catch(error => {
      console.log('error Fetching Movie!')
      this.setState({error: 'Your movie has not been found! Please return home.'})
      console.log('stateErrMsg', this.state.error)
    })
    return <Redirect to={`/movies/${id}`} />
  }

  resetState = () => {
    this.setState({movieInfo: {}})
    return <Redirect to='/' />
  }

  render() {
    return (
      <main className="App">
        <Header user={this.state.user}/>
        <Switch>
          <Route 
            exact path='/' 
            render={() => {
             return <CardSection 
                allMovies={this.state.movies} 
                showInfo={this.showInfo}/>
            }}
          />
          <Route 
            exact path='/login' 
            render={() => {
              return <Login 
                getUser={this.getUser} 
                error={this.state.error} 
                user={this.state.user}
              /> 
            }}
          />
          <Route 
            exact path='/movies/:id' 
            render={() => {
              return (
                <DetailsPage 
                  movie={this.state.movieInfo} 
                  userId={this.state.user.id} 
                  resetter={this.resetState} 
                  submitRating={this.postUserRating} 
                  error={this.state.error}
                />
              )
            }}
          />
        </Switch>

      </main>
    )
  };
}

export default App;
