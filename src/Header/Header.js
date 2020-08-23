import React, { Component } from 'react'
import './Header.css'
import tomato from '../assets/tomato.jpg'

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
  <button onClick={props.user.name ? props.logoutUser : props.loginPage} type='button' className='login-page-button'>Log {props.user.name ? 'out' : 'in'}</button>
    </header>
  )
}

export default Header
