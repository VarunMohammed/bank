import Image from "next/image";
import Hero from '@components/Hero'
import BottomCTA from "@components/BottomCTA";
import Testimonials from "@components/Testimonials";
import FAQ from '@components/FAQ'
import Features from '@components/Features'
import UseCases from '@components/UseCases'
import Products from '@components/Products'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <Products />
      <UseCases />
      <Features />
      <FAQ />
      <Testimonials />
      <BottomCTA />
    </>
  );
}