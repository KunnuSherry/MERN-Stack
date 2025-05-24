import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './home/heroSection'
import Categories from './home/Categories'
import LatestJobs from './home/LatestJobs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Categories/>
        <LatestJobs/>

    </div>
  )
}

export default Home