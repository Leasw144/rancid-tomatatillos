import React from 'react';
import { render, waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// import MovieCard from './MovieCard'

describe('App', () => {
  // test when click on login button, you see the form
  // test when you fill out the form and submit, you see users name at the top.
  it('should see a login button in the header', () => {
    const app = (
      <App />
    )

    const { getByRole } = render(app)
    const loginBtn = getByRole('button', {name: 'Log in'})

    expect(loginBtn).toBeInTheDocument();
    })

    it('should see a login form on the click of Log in button', () => {
      const app = (
        <App />
      )
      
      const { getByRole, getByText } = render(app)
      const loginBtn = getByRole('button', {name: 'Log in'})
      
      fireEvent.click(loginBtn)

      const username = getByText('Username:')
      const password = getByText('Password:')
      const submitBtn = getByRole('button', {name: 'Submit'})

      expect(username).toBeInTheDocument()
      expect(password).toBeInTheDocument()
      expect(submitBtn).toBeInTheDocument()
      })

      it('should see a login form on the click of Log in button', async () => {
        const app = (
          <App />
        )
        
        const { getByRole, getByText, getByPlaceholderText} = render(app)
        const loginBtn = getByRole('button', {name: 'Log in'})
        
        fireEvent.click(loginBtn)
  
        const username = getByPlaceholderText('username')
        const password = getByPlaceholderText('password')
        const submitBtn = getByRole('button', {name: 'Submit'})
  
        fireEvent.change(username, {target: {value: 'claire@turing.io'}})
        fireEvent.change(password, {target: {value: 'qwer1234'}})
        // const test = getByPlaceholderText('claire@turing.io')
        // expect(test).toBeInTheDocument()
        fireEvent.click(submitBtn)
        await new Promise((r) => setTimeout(r, 2000));

        const greeting = getByText('Welcome', {exact: false})

        expect(greeting).toBeInTheDocument()
        // const greeting = await waitFor(() => getByText('Welcome', {exact: false})) 

        // await waitFor(() => expect(greeting).toBeInTheDocument())
        })
})
