import React from 'react'
import myPhoto from '../images/portfolio_photo.png'


const Home = () => {
  return (
    <div className='flex'>
        <img className='w-1/2' src={myPhoto}/>
        <div className="">
          <h1 className="text-xl">
            I'm Software Engineer Matthew Stewart.
          </h1>
          <p className='text-base'>
            I develop helpful tech solutions for companies
          </p>
        </div>
    </div>
  )
}

export default Home