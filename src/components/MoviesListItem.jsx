import React from 'react'

const MoviesListItem = ({movie}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <img src={movie.Poster} alt={movie.Title} height="200"/>
      <p>{movie.Title} - ({movie.Year})</p>
    </div>
  )
}

export default MoviesListItem