import PortfolioCard from './PortfolioCard'
import MaurysKitchen from './Maury.png'
import Cara from './Cara1.png'
import Apod from './Apod.png'
import Solidus from './Solidus.png'
import Mori from './MorieRecipee.png'
import Stock from './Stock.png'
import MobileCard from './MobileCard'


import Liftimg1 from './Mobile screenshots/lift mobile/Screenshot_20250117-161131.png'
import Liftimg2 from './Mobile screenshots/lift mobile/Screenshot_20250117-161234.png'
import Liftimg3 from './Mobile screenshots/lift mobile/Screenshot_20250117-161354.png'
import Liftimg4 from './Mobile screenshots/lift mobile/Screenshot_20250117-161427.png'
import Liftimg6 from './Mobile screenshots/lift mobile/Screenshot_20250117-161539.png'
import Liftimg7 from './Mobile screenshots/lift mobile/Screenshot_20250117-161554.png'
import Liftimg8 from './Mobile screenshots/lift mobile/Screenshot_20250117-161620.png'
import Liftimg9 from './Mobile screenshots/lift mobile/Screenshot_20250117-161642.png'
import Liftimg10 from './Mobile screenshots/lift mobile/Screenshot_20250117-161652.png'
import Liftimg11 from './Mobile screenshots/lift mobile/Screenshot_20250117-161704.png'
import Liftimg12 from './Mobile screenshots/lift mobile/Screenshot_20250117-161713.png'
import Liftimg13 from './Mobile screenshots/lift mobile/Screenshot_20250117-161726.png'
import Liftimg14 from './Mobile screenshots/lift mobile/Screenshot_20250117-161737.png'
import Liftimg15 from './Mobile screenshots/lift mobile/Screenshot_20250117-161746.png'
import Liftimg16 from './Mobile screenshots/lift mobile/Screenshot_20250117-161916.png'
import Liftimg17 from './Mobile screenshots/lift mobile/Screenshot_20250117-161932.png'
import Liftimg18 from './Mobile screenshots/lift mobile/Screenshot_20250117-161943.png'
import Liftimg19 from './Mobile screenshots/lift mobile/Screenshot_20250117-162005.png'



import darkLiftImg1 from './Mobile screenshots/lift mobile/dark/1.png'
import darkLiftImg2 from './Mobile screenshots/lift mobile/dark/2.png'
import darkLiftImg3 from './Mobile screenshots/lift mobile/dark/3.png'
import darkLiftImg4 from './Mobile screenshots/lift mobile/dark/4.png'
import darkLiftImg5 from './Mobile screenshots/lift mobile/dark/5.png'
import darkLiftImg6 from './Mobile screenshots/lift mobile/dark/6.png'
import darkLiftImg7 from './Mobile screenshots/lift mobile/dark/7.png'
import darkLiftImg8 from './Mobile screenshots/lift mobile/dark/8.png'
import darkLiftImg9 from './Mobile screenshots/lift mobile/dark/9.png'
import darkLiftImg10 from './Mobile screenshots/lift mobile/dark/10.png'


import lightLiftImg1 from './Mobile screenshots/lift mobile/light/1.png'
import lightLiftImg2 from './Mobile screenshots/lift mobile/light/2.png'
import lightLiftImg3 from './Mobile screenshots/lift mobile/light/3.png'
import lightLiftImg4 from './Mobile screenshots/lift mobile/light/4.png'
import lightLiftImg5 from './Mobile screenshots/lift mobile/light/5.png'
import lightLiftImg6 from './Mobile screenshots/lift mobile/light/6.png'
import lightLiftImg7 from './Mobile screenshots/lift mobile/light/7.png'
import lightLiftImg8 from './Mobile screenshots/lift mobile/light/8.png'
import lightLiftImg9 from './Mobile screenshots/lift mobile/light/9.png'
import lightLiftImg10 from './Mobile screenshots/lift mobile/light/10.png'
import lightLiftImg11 from './Mobile screenshots/lift mobile/light/11.png'
import lightLiftImg12 from './Mobile screenshots/lift mobile/light/12.png'
import lightLiftImg13 from './Mobile screenshots/lift mobile/light/13.png'
import lightLiftImg14 from './Mobile screenshots/lift mobile/light/14.png'




export default function Portfolio() {
  const LiftImageSeries = [
    Liftimg1, Liftimg2, Liftimg3, Liftimg4,
    Liftimg6, Liftimg7, Liftimg8, Liftimg9, Liftimg10,
    Liftimg11, Liftimg12, Liftimg13, Liftimg14, Liftimg15,
    Liftimg16, Liftimg17, Liftimg18, Liftimg19,
  ];
  const LiftDarkImages = [
    darkLiftImg1,darkLiftImg2,darkLiftImg3,darkLiftImg4,darkLiftImg5,darkLiftImg6,darkLiftImg7,darkLiftImg8,darkLiftImg9,darkLiftImg10
  ];

  const LiftLightImages = [
    lightLiftImg1,lightLiftImg2,lightLiftImg3,lightLiftImg4,lightLiftImg5,lightLiftImg6,lightLiftImg7,lightLiftImg8,lightLiftImg9,lightLiftImg10,lightLiftImg11,lightLiftImg12,lightLiftImg13,lightLiftImg14,
  ];



  return (
    <div className='min-h-screen bg-my-blue max-w-full relative' id='Portfolio'>
        <h3 className=' text-white text-3xl lg:text-4xl 2xl:text-4xl  font-bold block text-center pt-10 lg:pt-6'>Portfolio</h3>
        <h3 className=' text-my-yellow text-2xl lg:text-3xl 2xl:text-3xl  font-bold block text-center py-8 lg:py-10'>Web applications</h3>
        <div className='lg:flex grid justify-center flex-wrap w-full px-0 lg:px-10 pt-8 lg:pt-8 pb-4 lg:pb-4'>
          
                <PortfolioCard src={MaurysKitchen} name="Maurys Kitchen"desc ="This dynamic restaurant website streamlines order communication, allowing customers to place table orders instantly transmitted to the kitchen. The centralized dashboard enables efficient delivery." link ="https://mauryskitchen.netlify.app/"  />

                <PortfolioCard src={Mori}  name="Mori's recipee" desc="This is a recipe website developed using React, seamlessly integrated with the MealDB API to deliver a vast selection of recipes. Tailwind CSS is utilized for modern and responsive styling, ensuring a visually appealing interface." link ="https://morisrecipee.netlify.app" /> 

                <PortfolioCard src={Cara}  name="Cara Medical Institute" desc="This medical website is designed to connect you to a medical professional as urgently as possible" link ="https://carahealth.netlify.app/" />

                <PortfolioCard src={Apod}  name="NASA APOD" desc="This NASA Picture of the Day app delivers stunning daily images from space, accompanied by detailed descriptions. Explore the cosmos, discover breathtaking photos, and learn about the universe right from your device with a new image every day." link ="https://cosmicexplorer.netlify.app/" />

                <PortfolioCard src={Solidus}  name="Solidus Team Manager" desc ="As the Team Manager for our project assignment system, you will oversee the organization and allocation of teams to various projects. You can manage project tags, monitor team member counts, and ensure smooth transitions between teams as projects evolve. Optimize team efficiency, and ensure successful project delivery." link ="https://solidusteammanager.netlify.app/"/>

                <PortfolioCard src={Stock}  name="Stock Ninja" desc="This is a stock market website built with React, utilizing the Finnhub API to provide real-time financial data, including stock prices, charts, and company information. The site offers users an organized, responsive experience, allowing them to track and analyze market trends efficiently" link ="https://stockninjawatchlist.netlify.app" /> 

                

                
                
              
                

           

        </div>

        <h3 className=' text-my-yellow text-2xl lg:text-3xl 2xl:text-3xl  font-bold block text-center py-10 lg:py-5'>Mobile applications</h3>
        <div className='lg:flex grid justify-center flex-wrap w-full px-16 pt-0 lg:pt-0 pb-8 lg:pb-10'>
          {/* <MobileCard imageSeries = {LiftImageSeries}/> */}
          <MobileCard imageSeries = {LiftDarkImages}/>
          <MobileCard imageSeries = {LiftLightImages}/>
        </div>
        

        

        <div className='w-full flex justify-center'>
          <a href="https://github.com/Onetyten" target='_blank'>
            <button className=' text-my-blue text-md lg:text-lg 2xl:text-xl font-bold text-center 2xl:p-4 lg:p-2  p-3 lg:rounded-xl rounded-sm 2xl:rounded-md  bg-my-yellow hover:text-white'>
              View more
            </button>
          </a>

        </div>
     










    </div>
  )
}
