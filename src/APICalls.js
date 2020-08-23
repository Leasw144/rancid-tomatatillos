import React from 'react'

export function authorizeUser(username, password) {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: password,
    })
  })
    .then(response => response.json())
    .then(data => this.setState({user: data.user, isLogInShowing: false}))
    .catch(error => {
      console.log('Error fetching user')
      this.setState({error: 'Please check your login information'})
    })

}

export function getMovies() {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => this.setState({movies: data.movies}))
  .catch(error => {
    console.log('Error fetching all movies')
    this.setState({ error: 'An error has occurred'})
  })
}

// export function getRatings(id) {
//   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${id}/ratings`)
//     .then(response => response.json())
//     .then(data => this.setState({ userRatings: data.ratings }))
//     .catch(error => {
//       console.log('Error fetching your ratings')
//       this.setState({ error: 'We cannot find your ratings' })
//   })
// }

export function findMovie(id) {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => this.setState({movieInfo: data.movie}))
    .catch(error => {
      console.log('error Fetching Movie!')
      this.setState({error: 'Your movie has not been found!'})
    })

}