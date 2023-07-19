import React from 'react'

import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'
import portfolio from '../portfolio';

const Projects = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="Publications" text="Some of my recent works" />
        <WorkCard  object = {portfolio.projects}/>
        <Footer />
    </div>
  )
}

export default Projects