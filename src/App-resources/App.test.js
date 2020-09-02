import React from 'react';
import { render, waitFor, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { authorizeUser, getMovies } from '../APICalls';
import { MemoryRouter } from 'react-router-dom';
jest.mock('../APICalls')
// import MovieCard from './MovieCard'

describe('App', () => {
  let loginBtn, title, img, movies;
  beforeEach(() => {
    getMovies.mockResolvedValueOnce({
      "movies": [
        {
          "id": 524047,
          "poster_path": "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
          "title": "Greenland",
          "average_rating": 7.125,
          "release_date": "2020-07-29"
        },
        {
          "id": 606234,
          "poster_path": "https://image.tmdb.org/t/p/original//eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//u9YEh2xVAPVTKoaMNlB5tH6pXkm.jpg",
          "title": "Archive",
          "average_rating": 7.6,
          "release_date": "2020-08-13"
        }
      ]
    })
      


    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    loginBtn = screen.getByRole('button', {name: 'Log in'})
    title = screen.getByText('Rancid Tomatatillos')
    img = screen.getByRole('img')
  })
  it('should see a login button, the title, and image in the header', () => {
    expect(loginBtn).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument()
    })
  it('should be able to see movie cards on page load', async () => {
    const movie1 = await waitFor(() => screen.getByText('Greenland'))
    const movie2 = await waitFor(() => screen.getByText('Archive'))
     
    expect(movie1).toBeInTheDocument()
    expect(movie2).toBeInTheDocument()
  })
   
})
