import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'

import Contact from '../components/Contact/Contact'
import ReservationForm from '../components/Reservation/ReservationForm'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Services />
      <ReservationForm />
      <Contact />
    </div>
  )
}

export default Home