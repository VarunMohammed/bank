'use client'

import Hero from '@components/Hero';
import BottomCTA from "@components/BottomCTA";
import About from '@components/About';
import Promise from "@components/Promise";

export default function Home() {
  return (
    <>
      <main className='overflow-hidden'>
        <Hero />
        <About id='about'/>
        <Promise />
        <BottomCTA />
      </main>
    </>
  );
}
