'use client'

import Image from "next/image";
import Hero from '@components/Hero'
import BottomCTA from "@components/BottomCTA";
import Products from '@components/Products'
import About from '@components/About'
import Promise from "@components/Promise";
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <main>
        <Hero />
      </main>
      <About />
      <Products />
      <Promise />
      <BottomCTA />
    </>
  );
}