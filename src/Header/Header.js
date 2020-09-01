import React from 'react'
import './Header.css'
import tomato from '../assets/tomato.jpg'
import { Link, NavLink } from 'react-browser-router'
import Login from '../Login/Login'

function Header(props) {
  return (
    <header>
      <img className= 'tomato' src={tomato} alt='tomato' />
      <div>
        <h1>
          Rancid Tomatatillos
        </h1>
        {props.user.name && <h2>Welcome {props.user.name}!</h2>}
      </div>

      {props.user.name ? <button type='button' onClick={props.resetter}>Log out</button> : 
      <NavLink to='/login' >
        {/* render={Login} */}
        <button>Log in</button>
      </NavLink>}
    </header>
  )
}

export default Header
