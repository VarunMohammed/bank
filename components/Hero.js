import Image from 'next/image'

const Hero = () => {
    return(
        <div className='bg-light-black px-[16px] md:px-[162px] flex flex-col pt-40 lg:pt-0 lg:flex-row items-center h-auto lg:h-screen gap-14 md:gap-0'>
            <div className='flex flex-col items-center lg:items-start gap-5 md:gap-10 justify-center md:pb-10'> 
                <div className='w-[280px] h-[40px] bg-nav-border flex items-center justify-center gap-1 rounded-lg border border-footer-black px-[16px] py-[8px]'>
                    <Image src='/check.png' alt='logo' width={20} height={20} className='cursor-pointer' />
                    <p className='text-sm tracking-tight'>No LLC Required, No Credit Check.</p>
                </div>
                <h1 className='font-semibold text-4xl md:text-5xl text-center lg:text-start lg:w-3/4 leading-snug'>Welcome to YourBank<br/>Empowering Your <span className='text-neon-green'>Financial Journey</span></h1>
                <p className='lg:w-3/4 text-center lg:text-start leading-snug'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers needs.</p>
                <div className='w-[145px] h-[50px] bg-neon-green rounded-[82px] px-[20px] py-[14px] flex items-center justify-center'>
                    <p className='text-black tracking-tight'>Open Account</p>
                </div>
            </div>
            <div>
                <Image src='/Container.png' alt='logo' width={700} height={700} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default Hero