import { useEffect, useState } from 'react'




export default function MobileCard(props) {
    const [numberIndex,setNumberIndex] = useState(0)
    const {imageSeries} = props

useEffect(()=>{
    const timer = setTimeout(() => {
        setNumberIndex((prevIndex)=>(prevIndex+1)%imageSeries.length)
    }, 1000);

    return()=> clearTimeout(timer)
},[numberIndex,imageSeries.length])



  return (
    <div>
        <img src={imageSeries[numberIndex]} className='w-72' alt="" />
    </div>
  )
}
