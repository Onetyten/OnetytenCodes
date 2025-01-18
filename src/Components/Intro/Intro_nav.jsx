import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'


export default function Intro_nav() {

  const[isOPen,setIsOPen] = useState(false)
  const toggleNavBar = () =>{
    setIsOPen(!isOPen)
  }

  return (
    <div className='relative'>
      <nav className='flex w-full justify-between pt-10 text-md items-center' >

        <img src="src/assets/Logo.svg" alt="" className='ml-8 w-0'/>
        <ul className='lg:w-full hidden lg:flex justify-around text-my-grey '>
          <li>
            <Link to="#Intro" className='mr-20  hover:text-white'>
              Home
            </Link>

            <Link to="#Skills" className='mr-20 hover:text-white'>
              Skills
            </Link>
            <Link to="#Portfolio"  className='mr-20 hover:text-white'>
              Portfolio
            </Link>
            <Link to="#Education" className='mr-20 hover:text-white'>
              Education
            </Link>
            <Link to="#Contact" className='mr-20 hover:text-white'>
              Contact
            </Link>
          </li>
        </ul>
        
        <i className="fa-solid fa-bars text-white text-2xl lg:hidden pr-7" onClick={toggleNavBar}></i>
      </nav>

      {isOPen && (
        < div className=' grid gap-y-4 justify-center text-white py-5 bg-my-grey bg-opacity-25 backdrop-blur-lg rounded-xl text-lg absolute w-full z-10 lg:hidden'>
          <Link to="#Intro" className='  hover:text-white  text-center'>
            Home
          </Link>

          <Link to="#Skills" className=' hover:text-white  text-center'>
            Skills
          </Link>
          <Link to="#Portfolio"  className=' hover:text-white text-center'>
            Portfolio
          </Link>
          <Link to="#Education" className=' hover:text-white  text-center'>
            Education
          </Link>
          <Link to="#Contact" className=' hover:text-white text-center'>
            Contact
          </Link>
       </div>


      )}

      



    </div>
  )
}
