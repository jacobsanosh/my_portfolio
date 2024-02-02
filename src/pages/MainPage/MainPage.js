import React from 'react'
import { About, Landing, Mywork, Navbar, Skills, Testimonial,Resume } from '../../Components'
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
    </div>
  )
}

export default MainPage
