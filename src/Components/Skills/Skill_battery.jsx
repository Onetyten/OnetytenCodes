import React from 'react'
import Fluid from './Fluid.gif'

export default function Skill_battery(props) {
    const{skillPoint,percent,HideBatt,ShowBatt} = props
  return (
    <div className='w-20 2xl:w-28 bg-my-grey-l-opacity ml-10 overflow-hidden rounded-md lg:rounded-3xl flex items-end slideout'  >


       
          <div className={`w-full bg-my-yellow ${skillPoint} relative flex flex-col`} >

            <img src={Fluid} className='absolute bottom-full' alt="" />
            <p className='text-center text-white text-md 2xl:text-2xl font-bold pt-6'>{percent}</p>


          
          
        </div>


    </div>
  )
}
