import React from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas } from './components'
import RouteList from './router'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/layout/main-layout/Header'
import Footer from './components/layout/main-layout/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Header />
        <RouteList />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
