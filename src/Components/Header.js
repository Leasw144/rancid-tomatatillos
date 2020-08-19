import React, { Component } from 'react'
import '../CSS/Header.css'

function Header() {
  return (
    <header>
      <img src='./assets/tomato.jpg' alt='tomato' />
      <h1>
        Welcome! X
      </h1>
      <button type='button' className='login-page-button'>Log In</button>
    </header>
  )
}

export default Header
