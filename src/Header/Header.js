import React from 'react'
import './Header.css'
import tomato from '../assets/tomato.jpg'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header>
      <Link to='/'><img className='tomato' src={tomato} alt='tomato' /></Link>
      <div>
        <h1>
          Rancid Tomatatillos
        </h1>
        {props.user.name && <h2>Welcome { props.user.name }!</h2>}
      </div>

      {props.user.name ? 
      <Link to='/'>
        <button type='button' onClick={ props.resetter }>Log out</button>
      </Link> : 
      <Link to='/login' > 
        <button>Log in</button>
      </Link>}
    </header>
  )
}

export default Header
