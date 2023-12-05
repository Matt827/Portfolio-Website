import React from 'react'
import myPhoto from '../images/my_img.png'


const Home = () => {
  return (
    <div class=''>
        <img class='' src={myPhoto}/>
        <p class="text-center">
            this text goes next to my picture
        </p>
    </div>
  )
}

export default Home