import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchMovie from './../SearchMovie/SearchMovie'
import ListMovie from './../ListMovie/ListMovie'

import './Main.css'

const APIKEY = '74b26a9'

class Main extends Component {
  static propTypes = {
    movies: PropTypes.array,
    OnResults: PropTypes.func
  }

  constructor () {
    super()

    this.state = {
      resultsMovie: [],
      search: false
    }
  }

  getData = async (data) => {
    let res = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${data}`)
    res = await res.json()
    return res.Search
  }

  handleResult = async ( resul = '' ) => {
    const resultsMovie = await this.getData(resul)
    this.setState(
      {
        resultsMovie: resultsMovie || [],
        search: true
       }
     )
  }

  handlePaint = () => {
    if( this.state.search === false ) {
      return <p>Buscar una Pelicula</p>
    }

    if(this.state.resultsMovie.length === 0){
      return <p>No se encontro niguna pelicula... Vuelva a itentarlo</p>
    }

    return <ListMovie
              movies = { this.state.resultsMovie } />
  }

  render () {
    return (
      <div className = 'main'>
         <SearchMovie
           OnResults = { this.handleResult }/>
        { this.handlePaint() }
      </div>
    )
  }
}

export default Main
