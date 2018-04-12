import React from 'react'
import PropTypes from 'prop-types'

import './SearchMovie.css'

const handleSubmit = async (e, OnResults) => {
  e.preventDefault()
  const inputMovie = e.target.inputMoviee.value

  OnResults(inputMovie)
}

const SearchMovie = (props) => {

  const { OnResults } = props

  return (
    <div className = 'inputMovie'>
      <form onSubmit = { (e) => handleSubmit(e, OnResults) }>
        <div className = 'field has-addons'>
          <div className = 'control'>
            <input
              id = 'inputMovie'
              name = 'inputMoviee'
              className = 'input'
              type = 'text'
              placeholder = 'Search a movie...' />
          </div>
          <div className = 'control'>
            <button className = 'button is-info'>
              Search!
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

SearchMovie.propTypes = {
  OnResults: PropTypes.func
}

export default SearchMovie
