import React from 'react'
import Intro_nav from './Intro_nav'
import Intro_text from './Intro_text'
import Profileimg from './profile_image.png'

export default function 
() {
  return (

    <div className='min-h-screen bg-my-blue w-full relative' id='Intro'>
        
      <Intro_nav/>
      <Intro_text/>
      

      <img src={Profileimg} className='absolute bottom-0 right-0 w-3/6 lg:w-2/6 md:w-3/6 object-cover animate-rise ' alt="" />




    </div>



  )
}
