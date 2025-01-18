import React, { useEffect, useRef } from 'react';
import Intro_links from './Intro_links';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import Resume from './Resume.pdf'

export default function Intro_text() {
  const nameRef = useRef(null);

  useEffect(() => {

    const name = new SplitType(nameRef.current, {
      types: 'words, chars', // Split by words and characters
    });

    const characters = name.chars;
    characters.forEach(char => {
      char.classList.add('translate-y-full');
    });

    // GSAP animation
    gsap.to(characters, {
      y: 0,
      stagger: 0.1,
      delay: 0.02,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        characters.forEach(char => {
          char.classList.remove('translate-y-full');
        });
      }
    });

    // Cleanup function to revert the split on unmount
    return () => {
      name.revert();
    };
  }, []);

  return (
    <div className=' ml-6 lg:ml-24 min-h-screen'>
      <h2 className='mt-20 lg:mt-40 text-white text-2xl font-light lg:text-5xl'>
        I'm <span className='text-my-yellow text-2xl lg:text-5xl font-bold inline' ref={nameRef}>Adetayo Labaeka</span>
      </h2>
      <h2 className='text-my-grey text-2xl lg:text-3xl font-light mt-5'>
        Front-end Engineer
      </h2>
      <p className='w-4/6 lg:w-2/6 text-white mt-10 text-sm md:text-md '>
      I specialize in the JavaScript stack, including HTML, CSS, JavaScript, React, React Native, and more, as detailed below. I invite you to explore my portfolio and discover the passion and dedication that fuel my craft. Whether you are here to check out my latest project or learn more about my expertise in the world of web development and programming in general, I hope you find inspiration in my projects and feel the passion I felt while making them.
      </p>

      <Intro_links />
      <a href={Resume} download="Labaeka Adetayo" target='_blank'>
        <button className='rounded-md border-4 h-12 md:h-14 w-24 md:w-36 text-sm lg:text-md  text-center  text-my-yellow border-my-yellow mt-5 hover:bg-my-yellow hover:text-white'>
          Resume(CV)
        </button>
      </a>

    </div>
  );
}
