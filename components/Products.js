import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Products = () => {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-12 flex flex-col items-center lg:items-start'>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-3/4'>
                    <h1 className='font-semibold text-4xl text-black'>Our <span className='text-red-600'>Products</span></h1>
                    <p className='text-center lg:text-start text-gray-900'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-24 pb-16'>
                <motion.div className='h-36 flex flex-col items-center lg:items-start'>
                    <Image src='/polimahero.png' alt='icon' width={78} height={78} className='pb-[30px]'/>
                    <h2 className='pb-[20px] text-red-600 font-semibold'>Polima Palakadan Matta Short Grain (Unda)</h2>
                </motion.div>
                <div className='h-40 flex flex-col items-center lg:items-start'>
                    <Image src='/polimahero.png' alt='icon' width={78} height={78} className='pb-[30px]'/>
                    <h2 className='pb-[20px] text-red-600 font-semibold'>Polima Palakadan Matta Long Grain (Vadi)</h2>
                </div>
                <div className='h-36 hidden'>
                    <Image src='/icon.png' alt='icon' width={78} height={78} className='pb-[30px]'/>
                    <h2 className='pb-[20px] text-red-600 font-semibold'>Rice</h2>
                </div>
            </div>
            <Link href='/about'>
                <div className='w-40 bg-red-600 rounded-[82px] px-[20px] py-[14px] flex items-center justify-center'>
                    <p className='text-white tracking-tight'>Explore Products</p>
                </div>
            </Link>
        </div>
    )
}

export default Products