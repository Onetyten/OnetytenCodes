import React from 'react'
import Skill_card from './Skill_card'
import ReactImg from './react.png'
import HtmlImg from './html.svg'
import CssImg from './css.svg'
import JavascriptImg from './javascript.svg'
import TailwindImg from './tailwind.svg'
import PythonImg from './python.svg'
import FigmaImg from './figma.svg'
import GithubImg from './github.png'



export default function Skills() {
  return (
    <div className='min-h-screen bg-my-blue max-w-full relative' id='Skills'>
      <h3 className=' text-white text-3xl lg:text-5xl font-bold block text-center pt-10'>My Skills</h3>
      <div className='flex justify-center flex-wrap w-full pl-10 py-10 lg:p-16' >

        <Skill_card name="React" src ={ReactImg} skillPoint = "h-3/6" percent="60%"/>
        <Skill_card name="HTML" src ={HtmlImg} skillPoint = "h-full" percent="100"/>
        <Skill_card name="CSS" src ={CssImg} skillPoint = "h-3/6" percent="80%"/>
        <Skill_card name="JavaScript" src ={JavascriptImg} skillPoint = "h-4/6" percent="80%"/>
        <Skill_card name="Tailwind" src ={TailwindImg} skillPoint = "h-4/6" percent="80%"/>
        <Skill_card name="Python" src ={PythonImg} skillPoint = "h-3/6" percent="60%"/>
        <Skill_card name="Figma" src ={FigmaImg} skillPoint = "h-4/6" percent="80%" />
        <Skill_card name="Github" src ={GithubImg} skillPoint = "h-3/6" percent="60%"/>
        

        
      </div>
      







    </div>
  )
}
