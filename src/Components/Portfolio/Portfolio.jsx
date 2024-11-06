import React from 'react'
import PortfolioCard from './PortfolioCard'
import MaurysKitchen from './Maury.png'
import Cara from './Cara1.png'
import Apod from './Apod.png'
import Solidus from './Solidus.png'
import Mori from './MorieRecipee.png'
import Stock from './Stock.png'


export default function Portfolio() {



  return (
    <div className='min-h-screen bg-my-blue max-w-full relative' id='Portfolio'>
        <h3 className=' text-white text-3xl lg:text-4xl 2xl:text-5xl  font-bold block text-center pt-10 lg:pt-6'>Portfolio</h3>
        <div className='lg:flex grid justify-center flex-wrap w-full px-16 pt-16 lg:pt-8 pb-8 lg:pb-4'>
          
                <PortfolioCard src={MaurysKitchen} name="Maurys Kitchen"desc ="This dynamic restaurant website streamlines order communication, allowing customers to place table orders instantly transmitted to the kitchen. The centralized dashboard enables efficient delivery." link ="https://mauryskitchen.netlify.app/"  />

                <PortfolioCard src={Mori}  name="Mori's recipee" desc="This is a recipe website developed using React, seamlessly integrated with the MealDB API to deliver a vast selection of recipes. Tailwind CSS is utilized for modern and responsive styling, ensuring a visually appealing interface." link ="https://morisrecipee.netlify.app" /> 

                <PortfolioCard src={Cara}  name="Cara Medical Institute" desc="This medical website is designed to connect you to a medical professional as urgently as possible" link ="https://carahealth.netlify.app/" />

                <PortfolioCard src={Apod}  name="NASA APOD" desc="This NASA Picture of the Day app delivers stunning daily images from space, accompanied by detailed descriptions. Explore the cosmos, discover breathtaking photos, and learn about the universe right from your device with a new image every day." link ="https://cosmicexplorer.netlify.app/" />

                <PortfolioCard src={Solidus}  name="Solidus Team Manager" desc ="As the Team Manager for our project assignment system, you will oversee the organization and allocation of teams to various projects. You can manage project tags, monitor team member counts, and ensure smooth transitions between teams as projects evolve. Optimize team efficiency, and ensure successful project delivery." link ="https://solidusteammanager.netlify.app/"/>

                <PortfolioCard src={Stock}  name="Stock Ninja" desc="This is a stock market website built with React, utilizing the Finnhub API to provide real-time financial data, including stock prices, charts, and company information. The site offers users an organized, responsive experience, allowing them to track and analyze market trends efficiently" link ="https://stockninjawatchlist.netlify.app" /> 

                
                
              
                

           

        </div>

        <div className='w-full flex justify-center'>
          <a href="https://github.com/Onetyten">
            <button className=' text-my-blue text-md lg:text-lg 2xl:text-xl font-bold text-center 2xl:p-4 lg:p-2  p-3 lg:rounded-xl rounded-sm 2xl:rounded-md  bg-my-yellow hover:text-white'>
              View more
            </button>
          </a>

        </div>
     










    </div>
  )
}
