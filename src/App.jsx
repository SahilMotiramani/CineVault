import React from 'react'
import Header from './Components/Header'
import TrendingMovies from './Components/TrendingMovies'
import TrendingTv from './Components/TrendingTv'
import TopMovies from './Components/TopMovies'
import TopTv from './Components/TopTv'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <TrendingMovies></TrendingMovies>
      <TrendingTv></TrendingTv>
      <TopMovies></TopMovies>
      <TopTv></TopTv>
      <Footer></Footer>
    </div>
  )
}

export default App
