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
}

export function getMovies() {
 return fetch(`${rootURL}/movies`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw response;
    }
  })
}

// currently not in use. Will need to break apart similar to other fetch calls once we enable this feature.
export function getRatings(id) {
  fetch(`${rootURL}/users/${id}/ratings`)
    .then(response => response.json())
    .then(data => this.setState({ userRatings: data.ratings }))
    .catch(error => {
      console.log('Error fetching your ratings')
      this.setState({ error: 'We cannot find your ratings' })
  })
}

export function findMovie(id) {
  return fetch(`${rootURL}/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response;
      }
    })
}

export function postRating(userId, movieId, userRating) {
  return fetch(`${rootURL}/users/${userId}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      movie_id:movieId,
      rating: Number(userRating),
    })
  })
  // .then(response => response.json())
  // .then(data => this.setState({userRatings: data.userRating}))
  // .catch(error => {
  //   console.log('Error fetching user')
  //   this.setState({error: 'Please check your login information'})
  // })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response;
      }
    })
}

export function removeRating(userId,  ratingId) {
  return fetch(`${rootURL}/users/${userId}/ratings/${ratingId}`, 
  {
    method: 'DELETE',
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } 
    else {
      throw response;
    }
  })
}

export function postComment (userId, userComment, commentAuthor) {
  return fetch(`http://localhost:3001/api/v1/movies/${userId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        comment: userComment,
        author: commentAuthor,
      })
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw response;
    }
  })
}

