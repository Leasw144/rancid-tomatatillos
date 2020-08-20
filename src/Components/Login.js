import React, {Component} from 'react'
import '../CSS/Login.css';
import App from '../App';

class Login extends Component {
  constructor(){
    super();
    this.state = {
    username:'',
    password: '',
    error: ''
    }

  }

  getUser(event) {
    event.preventDefault()
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,

      })
    })
      .then(response => response.json())
      .then(data => this.setState({user: data.user}))
      .catch(error => {
        console.log('Error fetching user')
        this.setState({error: 'Please check your login information'})
      })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <section className='form-parent'>
        <form className='Login'>
          <label for="username">Username:</label>
          <input 
          type='text' 
          name='username'
          value={this.state.username}
          onChange = {this.handleChange}
          />

          <label for="password">Password:</label>
          <input 
          type='password' 
          name='password'
          value={this.state.password}
          onChange = {this.handleChange}
          />
          { this.state.error && <p className='error-msg'>{this.state.userError}</p> }
          <button onClick = { event => this.getUser(event)}>Submit</button>
        </form>
      </section>
      )
  }




}

export default Login 