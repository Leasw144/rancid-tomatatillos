import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardSection from './CardSection';
import '@testing-library/jest-dom'
import App from '../App'
import { BrowserRouter, Route } from 'react-router-dom'

describe('CardSection', () => {
  it('should display a poster image', () => {
    render(
      <CardSection/>
    )


  })
})