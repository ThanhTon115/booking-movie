import React from 'react'
import Home from './pages/Home'
import About from '../../components/About'
import Works from '../../components/Works'
import Contact from '../../components/Contact'

const module = [
  {
    path: '/',
    component: () => <Home />
  },
  {
    path: '/about',
    component: () => <About />
  },
  {
    path: '/work',
    component: () => <Works />
  },
  {
    path: '/contact',
    component: () => <Contact />
  }
]

export default module
