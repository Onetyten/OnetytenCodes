import React from 'react'
import { useState } from 'react'
import Skill_battery from './Skill_battery'

export default function Skill_card(props) {
  const{name,src,skillPoint,percent} = props
  const[showBar,SetShowBar] = useState(false)




  function HideBatt(){

    SetShowBar(false)
    console.log("Order 66")
  }

  function ShowBatt(){
    SetShowBar(true)

    
    console.log("Order 66")
  }



  return (

    
    <div className='min-w-60 lg:min-w-96 p-8 bg-my-grey-l-opacity grid  mr-7 rounded-3xl mb-10 ' onMouseEnter={ShowBatt} onMouseLeave={HideBatt}>
        <div className='flex'>

          {/* skill */}

          <div className='flex justify-center w-4/6 lg:w-full'>
              <img src={src} alt="" className='w-48' />
          </div>

        {/* battery charge skill effect */}
        
        {showBar && (<Skill_battery skillPoint = {skillPoint} percent = {percent} HideBatt = {HideBatt} ShowBatt = {ShowBatt} />)}
          
          
    
        </div>
        <p className='text-center lg:pr-0 text-white text-lg lg:text-2xl'>{name}</p>


        
        
    </div>
  )
}
