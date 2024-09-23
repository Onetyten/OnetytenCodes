import React from 'react'

export default function PortfolioText(props) {
const{name,desc} = props
  return (
    
    <div className='grid justify-between w-full items-center h-full'>
    <h2 className='text-center text-white  text-xl lg:text-2xl font-bold'>
      {name}
    </h2>
    <p className='text-center text-white text-sm lg:text-lg font-light'>
      {desc}
    </p>
    <i className="fa-solid fa-circle-down text-4xl text-center text-my-yellow"></i>
  </div>

  )
}
