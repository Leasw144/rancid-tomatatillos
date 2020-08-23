import React from 'react'

export const authorizeUser = (username, password) => {
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

