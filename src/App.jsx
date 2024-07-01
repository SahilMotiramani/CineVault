import React from 'react'
import Header from './Components/Header'
import TrendingMovies from './Components/TrendingMovies'
import TrendingTv from './Components/TrendingTv'
import TopMovies from './Components/TopMovies'
import TopTv from './Components/TopTv'

function App() {
  return (
    <div>
      <Header></Header>
      <TrendingMovies></TrendingMovies>
      <TrendingTv></TrendingTv>
      <TopMovies></TopMovies>
      <TopTv></TopTv>
    </div>
  )
}

export default App
