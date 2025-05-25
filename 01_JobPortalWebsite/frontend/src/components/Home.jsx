import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './home/heroSection'
import Categories from './home/Categories'
import LatestJobs from './home/LatestJobs'
import Footer from './shared/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Categories/>
        <LatestJobs/>
        <Footer/>

    </div>
  )
}

export default Home