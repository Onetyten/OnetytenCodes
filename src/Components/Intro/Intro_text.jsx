import React, { useEffect, useRef } from 'react';
import Intro_links from './Intro_links';
import SplitType from 'split-type';
import { gsap } from 'gsap';

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
      <h2 className='text-my-grey text-2xl lg:text-5xl font-light mt-5'>
        Front-end Engineer
      </h2>
      <p className='w-4/6 lg:w-2/6 text-white mt-10 text-md lg:text-xl'>
        Dynamic professional with a track record of elevating performance through strategic thinking and versatile skills. Excels in both independent and collaborative environments, applying a robust work ethic to swiftly navigate diverse processes and advance organizational goals. Combines resourcefulness with a result-oriented approach, consistently driving growth and operational efficiency to enhance service value and meet evolving company needs.
      </p>
      {/* <button className='rounded-md border-4 h-14 w-36 text-my-yellow border-my-yellow mt-5'>
        Contact Me
      </button> */}
      <Intro_links />
    </div>
  );
}
