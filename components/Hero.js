import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll } from "framer-motion"

const Hero = () => {
    const { scrollYProgress } = useScroll();

    return(
        <div className='bg-herobg bg-bottom px-[16px] md:px-[162px] flex flex-col md:pt-40 lg:pt-0 lg:flex-row items-center justify-center h-screen lg:h-screen gap-14 md:gap-0'>
            <div className='flex flex-col items-center gap-5 md:gap-10 justify-center md:pb-10'>
                {/*<div className='w-[280px] h-[40px] bg-red-600 flex items-center justify-start gap-1 rounded-lg border border-gray-200 px-[16px] py-[8px]'>
                    <Image src='/check.png' alt='logo' width={20} height={20} className='cursor-pointer' />
                    <p className='text-sm tracking-tight'>Some Heading</p>
                </div>*/}
                <h1 className='font-semibold text-4xl md:text-5xl text-center lg:w-2/4 text-white opacity-90'>Welcome to <span className='text-red-600 opacity-100'>Polima </span><br/>Where the taste of Kerala is brought to life in every grain</h1>
                <p className='lg:w-3/4 text-center leading-snug text-slate-100'>We specialize in Kerala Matta Rice, cultivated with love and tradition. For Malayalis around the world, our rice is more than just food - it is a journey back to the warmth of our homes, a celebration of our rich heritage, and a promise of health and flavor in every bite.</p>
                <Link href='/products'>
                    <div className='bg-black rounded-[82px] px-[20px] py-[14px] flex items-center justify-center backdrop-blur-md opacity-80 border border-red-500'>
                        <p className='text-white tracking-tight'>Explore Products</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Hero