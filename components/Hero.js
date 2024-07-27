import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return(
        <div className='bg-white px-[16px] md:px-[162px] flex flex-col pt-40 lg:pt-0 lg:flex-row items-center h-auto lg:h-screen gap-14 md:gap-0'>
            <div className='flex flex-col items-center lg:items-start gap-5 md:gap-10 justify-center md:pb-10'> 
                <div className='w-[280px] h-[40px] bg-red-600 flex items-center justify-start gap-1 rounded-lg border border-gray-200 px-[16px] py-[8px]'>
                    <Image src='/check.png' alt='logo' width={20} height={20} className='cursor-pointer' />
                    <p className='text-sm tracking-tight'>Some Heading</p>
                </div>
                <h1 className='font-semibold text-4xl md:text-5xl text-center lg:text-start lg:w-3/4 text-black'>Welcome to <span className='text-red-600'>Polima Foods</span><br/>Nurturing Your Nutrition Journey with Premium Rice and Flour</h1>
                <p className='lg:w-3/4 text-center lg:text-start leading-snug text-black'>At Polima Foods, we provide the finest rice and flour, ensuring every grain and scoop meets the highest standards. Explore our products today!</p>
                <Link href='/products'>
                    <div className='bg-red-600 rounded-[82px] px-[20px] py-[14px] flex items-center justify-center'>
                        <p className='text-white tracking-tight'>Explore Products</p>
                    </div>
                </Link>
            </div>
            <div>
                <Image src='/Container.png' alt='logo' width={700} height={700} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default Hero