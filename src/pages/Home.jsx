import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Brands from '../components/Brands/Brands.jsx'
import Contact from '../components/Contact/Contact'
import ReservationForm from '../components/Reservation/ReservationForm'



const Home = () => {
  return (
    <div className="min-h-screen">

      <Hero />
      <Brands />
      <Services />
      <ReservationForm />
      <Contact />
    </div>
  )
}

export default Home