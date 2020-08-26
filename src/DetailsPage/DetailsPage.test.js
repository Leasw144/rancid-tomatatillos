import React from 'react';
import DetailsPage from '../DetailsPage/DetailsPage';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DetailsPage', () => {
  it.only('should display a movie page when a movie card is clicked', () => {
    const detailsPage = (
      <DetailsPage 
        img='https://image.tmdb.org/t/p/original//qZ4NYuwME0j6QgJmIE6AZMgmCaj.jpg'
        title='Akira'
        releaseDate='1988/07/16'
        runtime={124}
        budget={10000000}
        averageRating={5.2}
        tagLine='Neo-Tokyo is about to E.X.P.L.O.D.E.'
        overview='A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.'
      />
      )
      const { getByText } = render(detailsPage);
      const movieImg = screen.getByRole('img');
      const movieTitle = screen.getByText('Akira');
      const movieReleaseDate = screen.getByText('1988/07/16');
      const movieRunTime = screen.getByText('124', {exact: false})
      const movieBudget = screen.getByText('10000000', {exact: false})
      const movieRating = screen.getByText('5.2', {exact: false});
      const movieTagLine = screen.getByText('Neo-Tokyo is about to E.X.P.L.O.D.E.');
      const movieOverview = screen.getByText(
        'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.'
      )
  
      expect(movieImg).toBeInTheDocument();
      expect(movieTitle).toBeInTheDocument();
      expect(movieReleaseDate).toBeInTheDocument();
      expect(movieRunTime).toBeInTheDocument();
      expect(movieBudget).toBeInTheDocument();
      expect(movieRating).toBeInTheDocument();
      expect(movieTagLine).toBeInTheDocument();
      expect(movieOverview).toBeInTheDocument();

  })












})