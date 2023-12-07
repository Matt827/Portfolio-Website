import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className='bg-neutral-200'>
        <Home />
      </div>
      <div className="">
        <About />
        <Portfolio />
      </div>
    </>
  )
}

export default App
