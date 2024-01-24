import { useState } from 'react'
import { Navbar } from './Assets/navbar'
import { Hero } from './Assets/Hero'
import { Skills } from './Assets/skills'
import { Experience } from './Assets/Experience'
import { Projects } from './Assets/Projects'
import { Contact } from './Assets/contact'
import { Footer } from './Assets/footer'

  export default function App() {
    return (
      <>
        <Navbar/>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        
      </>
    )
  }


