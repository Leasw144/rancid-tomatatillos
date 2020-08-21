import React, {Component} from 'react';
import './CSS/App.css';
import Header from './Components/Header'
import CardSection from './Components/CardSection'
import './assets/tomato.jpg'
import Login from './Components/Login'
import PropTypes from 'prop-types'

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      user:{}
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
        <Header />
          {this.state.error && <p className='error-msg'>{this.state.error}</p>}
          <Login username={this.state.user} getUser={this.getUser} />
        {/* <CardSection allMovies={this.state.movies}/> */}
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
