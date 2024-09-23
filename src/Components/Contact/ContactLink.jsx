import React from 'react'

export default function ContactLink(props) {
  const {icon,title,href} = props
  return (
    <ul>
        <a className='pt-4 text-white hover:text-my-grey'href={href} target='_blank' rel='noopener noreferrer'>
            <div className='mr-3 text-my-yellow  inline'>
              <i class={icon}></i>
            </div>
            
            <p className='inline  lg:text-2xl text-md  font-normal text-center '>
                {title}
            </p>
        </a>
    </ul>

    
  )
} 
