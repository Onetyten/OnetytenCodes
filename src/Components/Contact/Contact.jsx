import React from 'react'
import ContactLink from './ContactLink'

export default function Contact() {
  return (
    <div className='min-h-screen grid grid-rows-2' id='Contact'>

        <div className=' max-w-full relative flex items-start justify-between bg-my-yellow p-7'>
            <div className='flex flex-col justify-center'>
           
                <h2 className='text-my-blue lg:text-5xl text-3xl font-bold mb-9'>
                    Get in touch
                </h2> 
                <a href="mailto:labaekaabdulrazaq@mail.com">
                    <button className='bg-my-blue text-my-yellow lg:text-xl text-md lg:p-5 p-3 lg:rounded-3xl rounded-md hover:border-4 border-white'>
                        Contact me
                    </button>
                </a>
 

            </div>
            <div className='bg-my-blue w-2/6 h-full border-b-0 lg:border-b-4 border-my-yellow rounded-l-xl lg:rounded-l-3xl'>
                {/* Additional content here */}
            </div>
        </div>

        <div className='grid items-center justify-center  bg-my-blue'>
            <div>
                <h2 className='lg:text-4xl text-3xl font-normal text-center text-my-yellow pt-4'>
                    Location   
                </h2>
                <div className='w-full h-1 bg-my-yellow mb-4'>

                </div>
                <ul>
                    <li className='lg:text-2xl  text-md font-normal text-center text-white pt-4 hover:text-my-grey'>
                        Ikeja, Lagos 100001
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='lg:text-4xl text-3xl font-normal text-center text-my-yellow pb-4'>
                    Connect  
                </h2>
                <div className='w-full h-1 bg-my-yellow mb-4'>

                </div>
                <ul className='grid gap-3'>
                    <ContactLink icon = 'fa-solid fa-phone' title='09155073769' href='tel:+09155073769' />
                    <ContactLink icon = 'fa-solid fa-envelope' title='E-mail' href='mailto:labaekaabdulrazaq@mail.com' />
                    <ContactLink icon = 'fa-brands fa-linkedin' title='Linkedin' href='www.linkedin.com/in/labaeka-adetayo-a9681a247' />
                    <ContactLink icon = 'fa-brands fa-whatsapp' title='07089126752' href='https://wa.me/07089126752'/>     
                </ul>
            </div>
        </div>
        
    </div>
  )
}
