import React, { Component } from 'react'
import './Header.css'
import tomato from '../assets/tomato.jpg'

function Header() {
  return (
    <header>
      <img className= 'tomato' src={tomato} alt='tomato' />
      <h1>
        Welcome! X
      </h1>
      <button type='button' className='login-page-button'>Log In</button>
    </header>
  )
}

export default Header
