import React from 'react'

export default function Intro_links() {
  return (
      <div className='mt-5 flex flex-col lg:flex-row items-start lg:items-end '>
        

        <div className='h-1 bg-white mb-5 lg:mb-0 w-1/5  mt-7 lg:mt-1 relative'>
          <p className='absolute bottom-2 mb- lg:mb-0  text-my-yellow left-0 text-md mb'>
            contacts
          </p>
        </div>
        <div className='flex flex-col lg:flex-row justify-around w-64 '>
        <a href="tel:+2349155073769">
          <i className="fa-solid fa-phone text-md lg:text-3xl text-white hover:text-my-grey"></i></a>
        <a href="mailto:labaekaabdulrazaq@gmail.com">
          <i class="fa-solid fa-envelope  text-md lg:text-3xl  text-white hover:text-my-grey" ></i></a>
        <a href="https://x.com/Onetyten_exe">
          <i class="fa-brands fa-x-twitter text-md lg:text-3xl  text-white hover:text-my-grey"></i>
        </a>
        <a href="www.linkedin.com/in/labaeka-adetayo-a9681a247">
          <i class="fa-brands fa-linkedin text-md lg:text-3xl  text-white hover:text-my-grey"></i>
        </a>
        
        
        
      


        </div>

      






    </div>
  )
}
