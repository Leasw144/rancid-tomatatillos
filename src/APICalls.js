import React from 'react'
import moment from 'moment'

const  rootURL = 'https://rancid-tomatillos.herokuapp.com/api/v2';

export function authorizeUser(username, password) {
  return fetch(`${rootURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: password,
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response;
      }
    })
    // .then(response => response.json())
    // .then(data => this.setState({user: data.user, isLogInShowing: false}))
    // .catch(error => {
    //   console.log('Error fetching user')
    //   this.setState({error: 'Please check your login information'})
    // })

}

export function getMovies() {
  fetch(`${rootURL}/movies`)
  .then(response => response.json())
  .then(data => this.setState({movies: data.movies}))
  .catch(error => {
    console.log('Error fetching all movies')
    this.setState({ error: 'An error has occurred'})
  })
}

export function getRatings(id) {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${id}/ratings`)
    .then(response => response.json())
    .then(data => this.setState({ userRatings: data.ratings }))
    .catch(error => {
      console.log('Error fetching your ratings')
      this.setState({ error: 'We cannot find your ratings' })
  })
}

export function findMovie(id) {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => this.setState({movieInfo: data.movie}))
    .catch(error => {
      console.log('error Fetching Movie!')
      this.setState({error: 'Your movie has not been found!'})
    })
}

export function postRating(userId, movieId, userRating) {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      movie_id:movieId,
      rating: Number(userRating),
    })
  })
    .then(response => response.json())
    .then(data => this.setState({userRatings: data.userRating}))
    .catch(error => {
      console.log('Error fetching user')
      this.setState({error: 'Please check your login information'})
    })
}