import React from 'react'
import EduCard from './EduCard'

export default function Education() {
  return (
    <div className='min-h-screen bg-my-blue max-w-full relative grid items-start' id='Education'>
        <h3 className=' text-white text-3xl lg:text-5xl font-bold block text-center pt-8 pl-3 absolute left-5 top-7'>Education</h3>
        
        <div className='w-full h-20 bg-my-blue  mt-2'>

        </div>

        <div className='w-full min-h-screen bg-my-grey-l-opacity flex flex-col justify-center items-center'>

            <EduCard date='2024' title='Web development, Python programming' location='Aptech computer institute, Adamasingba, Ibadan' p='In 2023, I embarked on a comprehensive learning journey in Web Development and Python programming at Aptech Computer Institute, located in Adamasingba, Ibadan. This program provided me with a solid foundation in front-end web development, where I mastered the intricacies of HTML, CSS, JavaScript. My Python programming experience was particularly enriching, as I delved into the languages versatile applications, including automation and data analysis. The hands-on projects and real-world scenarios I encountered helped me develop problem-solving skills and the ability to create efficient and Python programs'/>


            <EduCard date = '2019' title='Bachelor of Engineering in Computer Engineering Candidate' location='Olabisi Onabanjo University, Ibogun' p='Currently, I am pursuing a Bachelor of Engineering in Computer Engineering at Olabisi Onabanjo University, Ibogun. My academic journey here is marked by a deep engagement with the core principles of computer engineering, including digital systems, microprocessors, embedded systems, and software development. Through various projects and research, I have developed a strong analytical mindset My coursework and practical experiences are shaping me into a well-rounded engineer capable of tackling modern technological challenges. '/>

            <EduCard date = '2025'title='Front end Engineering Candidate' location='AltSchool Africa' p='In 2024, I expanded my expertise by becoming a Front-End Engineering candidate at AltSchool Africa. This specialized program focuses on developing advanced front-end development skills, with a curriculum that covers HTML, CSS, JavaScript, and modern frameworks such as React. My training emphasizes creating responsive, accessible, and user-centric web applications.' />

        </div>


    </div>
  )
}


    