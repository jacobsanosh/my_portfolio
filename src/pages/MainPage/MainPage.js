import React from 'react'
import { About, Landing, Mywork, Navbar } from '../../Components'
function MainPage() {
  return (
    <div>
      <Navbar />
      <Landing/>
      <About/>
      <Mywork/>
    </div>
  )
}

export default MainPage
