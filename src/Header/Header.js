import React, { Component } from 'react'
import './Header.css'
import tomato from '../assets/tomato.jpg'
import { Link } from 'react-browser-router'
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
      <Link to='/login' render={Login}>Log {props.user.name ? 'out' : 'in'}</Link>
    </header>
  )
}

export default Header
