import React from 'react'
import Header from '../header'
import Footer from '../footer'
import About from '../about'
import Works from '../works'

function Home() {
  return (
    <>

        <Header />
        <About />

        <Works id="projects"/>

    </>
  )
}

export default Home