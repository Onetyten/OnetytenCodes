import { useEffect, useState } from 'react'




export default function MobileCard(props) {
    const [numberIndex,setNumberIndex] = useState(0)
    const {imageSeries} = props
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setInterval(() => {
        setIsVisible(false); 
        setTimeout(() => {
          setNumberIndex((prevIndex) => (prevIndex + 1) % imageSeries.length); // Change image
          setIsVisible(true);
        }, 500); 
      }, 3500);
  
      return () => clearInterval(timer); // Clean up interval
    }, [imageSeries]);



  return (
    <div>
        <img src={imageSeries[numberIndex]} alt="" className={`w-72 image-fade ${isVisible ? 'visible' : ''}`} />
    </div>
  )
}
