import React from 'react'
import HeaderSection from '../components/Header';
import logo from '../logo.svg';
import Hero from '../components/Hero';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import Art from '../components/Art';
import Team from '../components/Team';

const Homepage = () => {
  return (
    <div >
      <HeaderSection />

      <Hero />
      <Roadmap />
      <Art />
      <Team />
      <Faq />

    </div>
  )
}

export default Homepage