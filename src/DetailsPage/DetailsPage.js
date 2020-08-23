import React from 'react'
import './DetailsPage.css'

function DetailsPage(props) {
  console.log('Details Page props', props)
  return (
    <section className='DetailsPage'>
      <h1 className='movie-title'>Lord of Rings</h1>
      <img src='' alt='Picture of Frodo' />
      <article>
        <h2>Description:</h2>
        <p>something something die</p>
        <p>Release Date: 12/12/2002</p>
        <p>Overview: ksadfjalkdfjafklj</p>
        <p>release date: 20/20/20</p>
        <p>runtime: 300</p>
        <p>average_rating: 10</p>
        <p>budget:300 million</p>
        {/* {props.overview > 0 && <p> overview: {props.overview}</p>}
        {props.release_date > 0 && <p> Release Date: {props.release_date}</p>}
        {props.runtime > 0 && <p> runtime: {props.runtime}</p>}
        {props.average_rating > 0 && <p> Average Rating: {props.average_rating}</p>}
        {props.budget > 0 && <p> Budget: {props.budget}</p>}
        {props.revenue > 0 && <p> Revenue: {props.revenue}</p>}
        {props.tagline > 0 && <p> Budget: {props.tagline}</p>} */}
      </article>
      
    </section>
  )
}

export default DetailsPage