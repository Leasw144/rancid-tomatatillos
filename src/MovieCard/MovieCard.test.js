import React from 'React'
import MovieCard from './MovieCard'
import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('MovieCard', () => {
  it('should render a movie card with the correct content', () => {
    render(<MovieCard 
      title='Akira'
      releaseDate='1988/07/16'
      key={1}
      img='imgUrl@somesite.com'
      rating={9}
    />)
    })

    const movieTitle = screen.getByText('Akira');
    // const movieReleaseDate = screen.getByText('1988/07/16');
    // const movieImg = screen.getByText('imgUrl@somesite.com')
    // const movieRating = screen.getByText(9)

    expect(movieTitle).toBeInTheDocument();
    // expect(movieReleaseDate).toBeInTheDocument();
    // expect(movieImg).toBeInTheDocument();
    // expect(movieRating).toBeInTheDocument();
    // expect(screen.getByText('Akira')).toBeInTheDocument();

});
