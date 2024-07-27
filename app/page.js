import Image from "next/image";
import Hero from '@components/Hero'
import BottomCTA from "@components/BottomCTA";
import FAQ from '@components/FAQ'
import Products from '@components/Products'
import About from '@components/About'
import WhyPolima from "@components/WhyPolima";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <About />
      <Products />
      <WhyPolima />
      <FAQ />
      <BottomCTA />
    </>
  );
}