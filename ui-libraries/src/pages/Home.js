import React from 'react'
import Movies from '../component/Movies'
import Hero from '../component/Hero'
import NavbarComponent from '../component/Navbar'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <NavbarComponent/>
      <Hero/>
      <Movies/>
      <Footer />
    </div>
  )
}

export default Home;
