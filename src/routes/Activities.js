import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import ActivityTimeline from '../components/ActivityTimeline'

const Activities = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="ACTIVITIES" text="Things I do. Things I have done."/>
        <ActivityTimeline />
        <Footer />
    </div>
  )
}

export default Activities
