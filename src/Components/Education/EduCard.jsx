import React, { useState } from 'react'
import EduText from './EduText'

export default function EduCard(props) {
  const {date,title,location,p} = props
  const [pShow,setPShow] = useState(false)

  function ShowP(){
    setPShow(true)
  }
  function HideP(){
    setPShow(false)
  }





  return (
    <div className=' flex justify-center lg:p-7 px-0  py-7 hover:bg-my-grey-l-opacity w-4/5 rounded-3xl' onMouseEnter={ShowP} onMouseLeave={HideP}>
        <div className='lg:mr-7'>
          <p className='bg-my-grey lg:p-5 p-2 rounded-tr-full rounded-br-full '>
            {date}
          </p>
        </div>


        <div className='grid  items-start justify-center w-5 mr-7'>
          <div className='lg:h-5 h-0 bg-my-yellow rounded-xl lg:w-5 w-0'>

          </div>


          <div className='h-5/6 w-1 bg-white  m-auto rounded-xl'>
            
            
          </div>

        </div>


        <div className='w-2/5 text-white'>
          <h1 className='text-my-yellow lg:text-3xl text-xl mb-2'>
            {title}
          </h1>
          <h2 className='lg:text-2xl  text-md mb-2'>
            {location}
          </h2>
         { pShow && (<EduText p = {p}/>)}

        </div>
    </div>
  )
}
