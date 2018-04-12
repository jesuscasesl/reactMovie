import React from 'react'
import PropTypes from 'prop-types'

import PaintMovie from './../PaintMovie/PaintMovie'

import './ListMovie.css'

const ListMovie = (props) => {
  return (
    <div className = "movieList">
      {
        props.movies.map( (movies) => {
          return (
            <div className = "movieElement"  key = { movies.imdbID }>
              <PaintMovie
                title = { movies.Title }
                poster = { movies.Poster }
                year = { movies.Year }/>
            </div>
          )
        })
      }
    </div>
  )
}


ListMovie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  year: PropTypes.string
}

export default ListMovie
