import React from 'react'
import { About, Landing, Mywork, Navbar, Skills, Testimonial,Resume,Contact } from '../../Components'

function MainPage() {
  return (
    <div>
      <Navbar />
      <Landing/>
       <About/>
      <Mywork/>
      <Testimonial/>
      <Skills/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default MainPage
