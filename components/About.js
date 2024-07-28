import Link from 'next/link'
import { motion, useScroll } from "framer-motion"

const About = () => {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-12 flex flex-col gap-5 pb-12 items-center lg:items-start'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.5}} className='flex flex-col gap-2 items-center lg:items-start'>
                <h1 className='text-4xl text-black font-semibold text-center lg:text-start'>Experience the Heart of <span className='text-red-600'>Kerala</span></h1>
                <p className='text-gray-700 text-center lg:text-start w-full lg:w-3/4'>At Polima, we are commited to delivering the finest quality Kerala Matta Rice. Every grain is a tribute to the lush fields of our homeland and the hardworking farmers who nurture it. Whether you are in Kerala or anywhere else in thee world, let Polima bring you the comforting taste of home.</p>
            </motion.div>
            <Link href='/about'>
                <div className='w-32 bg-red-600 rounded-[82px] px-[20px] py-[14px] flex items-center justify-center'>
                    <p className='text-white tracking-tight'>Know More</p>
                </div>
            </Link>
        </div>
    )
}

export default About