import React from 'react'
import PropTypes from 'prop-types'

import './PaintMovie.css'

import img from './../../img/Film.jpg'

const PaintMovie = (props) => {
    const { title, poster, year } = props
    const posterEnd =
    (poster === 'N/A')
      ? img
      : poster

    return (
        <div className = "card">
          <div className = "card-image">
            <figure className = "image">
              <img
                src = { posterEnd }
                alt = { title } />
            </figure>
          </div>
          <div className = "card-content">
            <div className = "media">
              <div className = "media-content cai">
                <p className = "title is-4 titleCars">{ title }</p>
                <p className = "subtitle is-6">{ year }</p>
              </div>
            </div>
          </div>
        </div>
    )
}

PaintMovie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  year: PropTypes.string
}

export default PaintMovie
