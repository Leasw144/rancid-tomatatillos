import React, {Component} from 'react';
import './App-resources/App.css';
import Header from './Header/Header'
import CardSection from './CardSection/CardSection'
import './assets/tomato.jpg'
import Login from './Login/Login'
import PropTypes from 'prop-types'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      user:{},
      isLoggedIn: false,
      willLogIn: false
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        console.log('Error fetching all movies')
        this.setState({ error: 'An error has occured'})
      })
  }

  render() {
      return (
        <main className="App">
          <BrowserRouter>
            <Route path='/login'>
              <Header handleClick={this.handleClick}/>
              <Login />
            </Route>
              <button type='button' onClick={this.handleClick}> Click Me</button>
              {this.state.error && <p className='error-msg'>{this.state.error}</p>}
              <CardSection allMovies={this.state.movies} />
              {/* // {this.state.user.name && <CardSection allMovies={this.state.movies} /> } */}
              {this.state.user.name && <Login className="hidden"/>}
          </BrowserRouter>
        </main>
      )
    };

  getUser = (username, password)  => {
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
      .then(data => this.setState({user: data.user}))
      .catch(error => {
        console.log('Error fetching user')
        this.setState({error: 'Please check your login information'})
      })
  }

  // App.PropTypes = {
  //   movies: PropTypes.array,
  //   error: PropTypes.string
  // }

}

export default App;
