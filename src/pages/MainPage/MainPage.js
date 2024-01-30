import React from 'react'
import { About, Landing, Mywork, Navbar, Testimonial } from '../../Components'
function MainPage() {
  return (
    <div>
      <Navbar />
      <Landing/>
      <About/>
      <Mywork/>
      <Testimonial/>
    </div>
  )
}

export default MainPage
