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

  render() {
    return (
      <section className='form-parent'>
        <form className='Login'>
          <label for="username">Username:</label>
          <input 
          type='text' 
          name='username'
          value={this.state.username}
          />

          <label for="password">Password:</label>
          <input 
          type='password' 
          name='password'
          value={this.state.password}
          />

          <button>Submit</button>
        </form>
      </section>
      )
  }




}

export default Login 