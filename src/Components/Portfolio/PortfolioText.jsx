import React from 'react'

export default function PortfolioText(props) {
const{name,desc} = props
  return (
    
    <div className='grid justify-between w-full items-center h-full'>
    <h2 className='text-center text-white  text-lg lg:text-lg 2xl:text-2xl font-bold'>
      {name}
    </h2>
    <p className='text-center text-white text-sm lg:text-sm 2xl:text-lg  font-light'>
      {desc}
    </p>
    <i className="fa-solid fa-circle-down text-3xl 2xl:text-3xl text-center text-my-yellow"></i>
  </div>

  )
}
