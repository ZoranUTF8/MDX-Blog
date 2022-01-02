import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showHero }) => {
  return (
    <header className="hero">
      {showHero && (
        <StaticImage
          src="../assets/person.png"
          placeholder="blurred"
          className="hero-person"
          alt="person-typing"
        />
      )}
    </header>
  )
}

export default Hero
