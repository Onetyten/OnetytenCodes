import React from 'react'
import EduCard from './EduCard'

export default function Education() {
  return (
    <div className='min-h-screen bg-my-blue max-w-full relative grid items-start' id='Education'>
        <h3 className=' text-white text-3xl lg:text-3xl 2xl:text-4xl  font-bold block text-center pt-8 pl-3 absolute left-5 top-7'>Education</h3>
        
        <div className='w-full h-20 bg-my-blue  mt-2'>

        </div>

        <div className='w-full min-h-screen bg-my-grey-l-opacity flex flex-col justify-center items-center'>

            <EduCard date='2024' title='Web development, Python programming' location='Aptech computer institute, Adamasingba, Ibadan' p='In In 2023. I expanded my knowledge in Web Development and Python programming at Aptech Computer Institute, located in Adamasingba, Ibadan.This programme gave a solid foundation in front-end web development, where I mastered of HTML, CSS, JavaScript as well as python programming. During my time at Aptech, I acquired and a solid foundation of web development and got a training on the basics of Python Programming and its various appplications, including automation and data analysis. During this time, I collaborated with various developers to create visually appealing and functional web apps  '/>


            <EduCard date = '2019' title='Bachelor of Engineering in Computer Engineering Candidate' location='Olabisi Onabanjo University, Ibogun' p='Currently, I am pursuing a Bachelor of Engineering in Computer Engineering at Olabisi Onabanjo University, Ibogun. My experience here has exposed to core principles of computer engineering, including software development, Artificial intelligence, embedded systems, and digital system. Through various projects and research, I have developed a strong analytical mindset and my coursework and practical experiences has shaped me into a well-rounded engineer capable of tackling modern technological challenges. '/>

            <EduCard date = '2025'title='Front end Engineering Candidate' location='AltSchool Africa' p='In 2024, I expanded my expertise by becoming a Backend Engineering candidate at AltSchool Africa. This specialized program focuses on developing advanced backend development skills, with a curriculum that covers the MERN JavaScript stack (MongoDB, Express.js, React, Node.js) to make me a well-rounded full-stack developer. My training emphasizes collaboration in group settings and getting accustomed to the professional aspects of software development.' />

        </div>


    </div>
  )
}


    