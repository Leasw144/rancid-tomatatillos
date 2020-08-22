import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  
  it('Should get information from the server', async () => {
    const {getByText} = render(<App />)

    // const cardSection = await waitFor(() => getByText('Greenland'))
    // console.log('tasdjfh', cardSection)
    const movieCard = await waitFor(() => getByText('Akira'))
    expect(cardSection).toBeInTheDocument()
    expect(movieCard).toBeInTheDocument()
  })
})
