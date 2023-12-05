import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <div className='bg-cover bg-neutral-200'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
    </div>
  )
}

export default App
