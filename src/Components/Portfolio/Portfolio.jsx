import React from 'react'
import PortfolioCard from './PortfolioCard'
import MaurysKitchen from './Maury.png'
import Cara from './Cara1.png'
import Apod from './Apod.png'
import Fitflow from'./Fitflow.png'
import Solidus from './Solidus.png'


export default function Portfolio() {



  return (
    <div className='min-h-screen bg-my-blue max-w-full relative' id='Portfolio'>
        <h3 className=' text-white text-3xl lg:text-5xl font-bold block text-center pt-10'>Portfolio</h3>
        <div className='lg:flex grid justify-center flex-wrap w-full px-16 pt-16 pb-8'>
          
                <PortfolioCard src={MaurysKitchen} name="Maurys Kitchen"desc ="This dynamic restaurant website streamlines order communication, allowing customers to place table orders instantly transmitted to the kitchen. The centralized dashboard enables efficient delivery." link ="https://mauryskitchen.netlify.app/"  />

                <PortfolioCard src={Cara}  name="Cara Medical Institute" desc="This medical website is designed to connect you to a medical professional as urgently as possible" link ="https://carahealth.netlify.app/" />

                <PortfolioCard src={Apod}  name="NASA APOD" desc="This NASA Picture of the Day app delivers stunning daily images from space, accompanied by detailed descriptions. Explore the cosmos, discover breathtaking photos, and learn about the universe right from your device with a new image every day." link ="https://cosmicexplorer.netlify.app/" />

                <PortfolioCard src={Solidus}  name="Solidus Team Manager" desc ="As the Team Manager for our project assignment system, you will oversee the organization and allocation of teams to various projects. You can manage project tags, monitor team member counts, and ensure smooth transitions between teams as projects evolve. Optimize team efficiency, and ensure successful project delivery." link ="https://solidusteammanager.netlify.app/"/>

                <PortfolioCard src={Fitflow}  name="Fitflow" desc=" The ultimate fitness companion designed to help you achieve your health goals through personalized workout plans to put you on the path towards a stronger, healthier you." link ="https://fitflowlive.netlify.app/" /> 
                {/* ok */}
              
                

           

        </div>

        <div className='w-full flex justify-center'>
          <a href="https://github.com/Onetyten">
            <button className=' text-my-blue text-md  lg:text-xl font-bold text-center lg:p-4 p-3 lg:rounded-2xl rounded-md bg-my-yellow hover:text-white'>
              View more
            </button>
          </a>

        </div>
     










    </div>
  )
}
