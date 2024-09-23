import React from 'react'

export default function EduText(props) {
    const {p} = props
  return (
    <div>

        <p className='text-my-grey text-sm lg:text-xl'>
            {p}
        </p>

    </div>
  )
}
