import React, {Component} from 'react'
import './Login.css';
import App from '../App';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
    username:'',
    password: '',
    error: ''
    }

    this.getUser = props.getUser;
    console.log('login', props)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleLogIn = (event) => {
    event.preventDefault();
    this.getUser(this.state.username, this.state.password);
    console.log(this.getUser)
  }

  render() {
    return (
      <section className='Login'>
        <form className='form-section'>
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
          <button onClick = { event => this.handleLogIn(event)}>Submit</button>
        </form>
      </section>
      )
  }




}

export default Login
