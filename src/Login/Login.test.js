import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
jest.mock('../APICalls')




describe('App', () => {

  it('should see a login form on the click of Log in button', () => {
    app (
      <App />
    )

    const { getByRole, getByText } = render(app)
    const loginBtn = getByRole('button', { name: 'Log in' })

    fireEvent.click(loginBtn)

    const username = getByText('Username:')
    const password = getByText('Password:')
    const submitBtn = getByRole('button', { name: 'Submit' })

    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(submitBtn).toBeInTheDocument()
  })

})
