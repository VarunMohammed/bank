import Link from 'next/link'
import { motion, useScroll } from "framer-motion"
import Image from "next/image";

const About = () => {
    return(
        <div className='bg-white px-[16px] md:px-[120px] pt-16 lg:pt-32 flex flex-col gap-8 pb-12 items-center lg:items-start h-auto'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.5}} className='flex flex-col gap-2 items-center lg:items-start'>
                <h2 className='text-4xl lg:text-7xl xl:text-9xl text-black font-semibold text-center leading-tight lg:text-start'>Experience the Heart of <span className='text-red-600'>Kerala</span></h2>
                <p className='text-gray-700 text-center lg:text-lg xl:text-xl lg:text-start w-full lg:w-5/6 pt-3'>At Polima, we are commited to delivering the finest quality Kerala Matta Rice. Every grain is a tribute to the lush fields of our homeland and the hardworking farmers who nurture it. Whether you are in Kerala or anywhere else in thee world, let Polima bring you the comforting taste of home.</p>
            </motion.div>
            <Link href='/about'>
                <div className='w-32 bg-black border border-red-500 rounded-[82px] px-[20px] py-[12px] flex items-center justify-center'>
                    <p className='text-white tracking-tight'>Know More</p>
                </div>
            </Link>

        </div>
    )
}

export default About