import React, {Component} from 'react'
import './Login.css';
import App from '../App';
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
    username:'',
    password: '',
    error: '',
    toCardSection: false
    }

    this.getUser = props.getUser;
    // console.log('login', props)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleLogIn = (event) => {
    event.preventDefault();
    this.getUser(this.state.username, this.state.password);
    if(this.state.username) {
      this.setState({toCardSection: true})
    }
    // console.log(this.getUser)
  }

  render() {
    if (this.state.toCardSection === true) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <section className='Login'>
        <form className='form-section'>
          <label htmlFor="username">Username:</label>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange = {this.handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange = {this.handleChange}
          /> 
          { this.state.error && <p className='error-msg'>{this.state.userError}</p> }
          <button onClick={ event => this.handleLogIn(event)}>Submit</button>
        </form>
      </section>
      )
  }




}

export default Login
