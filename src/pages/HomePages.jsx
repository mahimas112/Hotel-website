import React from 'react'
import HomeCards from './Home/About Us'
import Other from './Home/Team'
import Products from './Home/Gallery'
import HeroSection from '../pages/Home/Hero'
import Room from './Home/Room'
import Service from './Home/Service'
import Gallery from './Home/Gallery'
import Blog from './Home/Blog'


const HomePages = () => {
  return (
    <div>
      <HeroSection />
      <HomeCards/>
      <Room />
      <Service />
      <Other/>
      <Gallery/>
      <Blog />
    </div>
  )
}

export default HomePages