import React, {Component} from 'react'
import './Login.css';
import PropTypes from 'prop-types'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
    username:'',
    password: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogIn = async (event) => {
    event.preventDefault();
    await this.props.getUser(this.state.username, this.state.password);
  }

  render() {
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

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

Login.defaultProps = {
  username: '',
  password: ''
}
export default Login
