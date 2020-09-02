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
    })
    .then(response => {
      if (response.ok) {
        return response
      } 
      else {
        throw response;
      }
    })
}

export function postComment (movieId, userComment, commentAuthor) {
  console.log('movieID in APIcalls', movieId)
  return fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`, {
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

export function getComments(movieId) {
  return fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw response;
    }
  })
}

export const postFavorite = (movieId) => {
  return fetch('http://localhost:3001/api/v1/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: movieId,
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

export const getFavorites = () => {
  return fetch('http://localhost:3001/api/v1/favorites')
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw response
    }
  })
}