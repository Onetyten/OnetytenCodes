import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';




export default function MobileCard(props) {
    const [numberIndex,setNumberIndex] = useState(0)
    const {imageSeries} = props
    const [isVisible, setIsVisible] = useState(true);
    function getRandomDelay(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // timer
    useEffect(() => {
      const timer = setInterval(() => {
        setIsVisible(false); 
        setTimeout(() => {
          setNumberIndex((prevIndex) => (prevIndex + 1) % imageSeries.length); // Change image
          setIsVisible(true);
        }, 100); 
      }, getRandomDelay(1500,3000));
  
      return () => clearInterval(timer); // Clean up interval
    }, [imageSeries]);



  return (
    <div>
        <img src={imageSeries[numberIndex]} alt="" className={`w-72 hover:scale-105 image-fade ${isVisible ? 'visible' : ''}`} />
    </div>
  )
}


MobileCard.propTypes = {
  imageSeries: PropTypes.arrayOf(PropTypes.string).isRequired,
};
