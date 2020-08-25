import React from 'React'
import MovieCard from './MovieCard'
import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('MovieCard', () => {
  it('should render a movie card with the correct content', () => {
    const movieCard = (
      <MovieCard 
        title='Akira'
        releaseDate='1988/07/16'
        key={1}
        img='img'
        rating={9.0}
      />
    )
    const { getByText } = render(movieCard)
    const movieTitle = screen.getByText('Akira');
    const movieReleaseDate = screen.getByText('1988/07/16');
    const movieImg = screen.getByRole('img')
    const movieRating = screen.getByText('9.0', {exact: false})

    expect(movieTitle).toBeInTheDocument();
    expect(movieReleaseDate).toBeInTheDocument();
    expect(movieImg).toBeInTheDocument();
    expect(movieRating).toBeInTheDocument();
    expect(screen.getByText('Akira')).toBeInTheDocument();
    })


});
