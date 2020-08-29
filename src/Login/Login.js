import React, {Component} from 'react'
import './Login.css';
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
    username:'',
    password: '',
    // toCardSection: false
    }

    // this.getUser = props.getUser;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogIn = async (event) => {
    event.preventDefault();
    const myVar = await this.props.getUser(this.state.username, this.state.password);
    // console.log('this.props.user,above', this.props.user)
    // if (this.props.user.name) {
      // console.log('myVar:', myVar)
      // this.setState({user: this.props.user})
      // console.log('this.props.user, below', this.props.user)
      // return <Redirect from='/login' to='/' />
    //  }
  }

  render() {
    // if (this.state.toCardSection === true) {
    //   return (
    //     <Redirect to='/' />
    //   )
    // }
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
          { this.props.error && <p className='error-msg'>{this.props.error}</p> }
          <button onClick={event => this.handleLogIn(event)}>Submit</button>
        </form>
      </section>
      )
  }




}

export default Login
