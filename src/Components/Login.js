import React, {Component} from 'react'
import '../CSS/Login.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
    username:'',
    password: ''
    }

  }

  getUser = () => {
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
      .then(data => console.log(data))
      .catch(err => console.error(err))
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

          <button onClick = {this.getUser}>Submit</button>
        </form>
      </section>
      )
  }




}

export default Login 