'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import Contact from '../components/Contact';
import { Analytics } from '@vercel/analytics/react';
export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <>
    <main className='bg-black'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <Contact />
      </main>
      <Analytics/>
    </>
  )
}

