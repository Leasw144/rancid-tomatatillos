import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Route, Switch, render, match, Redirect} from 'react-router-dom'
import { authorizeUser, getMovies, findMovie, getRatings, postRating, removeRating, postFavorite, getFavorites} from './APICalls'

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
      userRatings: [],
      favorites: []
      // movieInfo: {},
      // movieComments: [],
    }
    this.getMovies = getMovies
    this.authorizeUser = authorizeUser
    this.findMovie = findMovie
    this.postRating = postRating
    this.getRatings = getRatings
    this.removeRating = removeRating
    this.postFavorite = postFavorite
    // this.getComments = getComments
    
  }

  componentDidMount() {
    this.getMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch(error => {
      console.log('Error fetching all movies')
      this.setState({ error: 'An error has occurred'})
    })

  }

  getUser = async (username, password)  => {
    const data = await this.authorizeUser(username, password).catch(() => {
    console.log('Error fetching user')
    this.setState({error: 'Please check your login information'})
    console.log('this.state.error in App', this.state.error)
    })

    if (data) {
      this.setState({user: data.user})
      this.getRatings(this.state.user.id)
      await this.findFavorites()
      console.log('your stuff is here', this.state)
     
    }
  }

  postUserRating = async (userId, movieId, userRating) => {
    await this.postRating(userId, movieId, userRating)
    .then(data => this.setState({userRatings: [...this.state.userRatings, data.rating]}))
    .catch(error => {
      console.log('Error fetching rating')
      this.setState({error: 'Error posting ratings'})
    })
  }

  toggleFavorite = async (movieId) => {
    if (this.state.user.name) {
      try {
        await this.postFavorite(movieId)
        const allFavs = await this.findFavorites()
        await console.log('allFavs', allFavs)
      } catch (error) {
        console.log('Error fetching Favorites')
        this.setState({ error: 'Error posting favorites' })
      }
    }
  }

  findFavorites = async () => {
    try {
      const allFavs = await getFavorites() 
      this.setState({favorites: allFavs})
      console.log('right here!!!!', this.state)
    } catch(error) {
      console.log(error)
      this.setState({ error: 'Error posting favorites' })
    }
  }

  logoutUser = () => {
    this.setState({user: {}, userRatings:[], favorites: []})
    return <Redirect to='/' />
  }

  deleteRating = async (movieId, ratingId) => {
    await removeRating(this.state.user.id, ratingId)
    const updatedRatings = this.state.userRatings.filter(movie=> movie.movie_id !== movieId)
    this.setState({ userRatings: updatedRatings })
  }

  filterFavs = () => {
    return this.state.movies.reduce((favoriteMovies, movie) => {
      this.state.favorites.forEach(favoritedMovieId => {
        if (favoritedMovieId === movie.id) 
          favoriteMovies.push(movie)
        })
        console.log('fuck yeah', favoriteMovies)
      return favoriteMovies
    },[])
  }

  render() {
    return (
      <main className="App">
        <Header user={this.state.user} resetter={this.logoutUser} />
        <Switch>
          <Route 
            exact path='/' 
            render={() => {
              return (
                <CardSection 
                  movies={this.state.movies} 
                  userRatings={this.state.userRatings}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                  userInfo={this.state.user}
                  favoriteMovies={this.findFavs}
                />
              )
            }}
          />
          <Route
            exact path='/favorites'
            render={() => {
              return (
                <CardSection
                  filterFavorites={this.filterFavs}
                  allMovies={this.state.movies}
                  userRatings={this.state.userRatings}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                  userInfo={this.state.user}
                  movies={this.filterFavs()}
                />
              )
            }}
 
          />
          <Route 
            exact path='/login' 
            render={() => {
              return this.state.user.name ? <Redirect to='/'/> : <Login 
                getUser={this.getUser} 
                error={this.state.error} 
                user={this.state.user}
              />
            }} 
          />
          <Route 
            exact path='/movies/:id' 
            render={({ match }) => {
              return (
                <DetailsPage 
                  movieId={match.params.id}
                  userId={this.state.user.id} 
                  userName={this.state.user.name}
                  deleteRating={this.deleteRating} 
                  submitRating={this.postUserRating} 
                  error={this.state.error}
                  userRatings={this.state.userRatings}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
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
