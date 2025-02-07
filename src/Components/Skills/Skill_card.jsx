import { useState } from 'react'
import Skill_battery from './Skill_battery'
import PropTypes from 'prop-types'

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

    
    <div className='min-w-48 lg:min-w-52 p-6 2xl:p-8 bg-my-grey-l-opacity grid  mr-7 rounded-3xl mb-10 ' onMouseEnter={ShowBatt} onMouseLeave={HideBatt}>
        <div className='flex justify-center'>

          {/* skill */}

          <div className='flex justify-center w-4/6  2xl:w-full'>
              <img src={src} alt="" className='w-28 2xl:w-36' />
          </div>

        {/* battery charge skill effect */}
        
        {showBar && (<Skill_battery skillPoint = {skillPoint} percent = {percent} HideBatt = {HideBatt} ShowBatt = {ShowBatt} />)}
          
          
    
        </div>
        <p className='text-center lg:pr-0 text-white text-lg'>{name}</p>


        
        
    </div>
  )
}

Skill_card.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  skillPoint: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};