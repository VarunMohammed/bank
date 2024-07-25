import Image from 'next/image'

const Products = () => {
    return(
        <div className='bg-light-black px-[16px] md:px-[162px] pt-12 flex flex-col'>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-2/4'>
                    <h1 className='font-semibold text-4xl'>Our <span className='text-neon-green'>Products</span></h1>
                    <p className='text-center lg:text-start'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                </div>
                <div className='w-[382px] h-[83px] bg-footer-black rounded-[83px] border border-nav-border p-[14px] flex flex-row justify-between'>
                    <div className='w-[170px] bg-neon-green h-[55px] rounded-[140px] p-[14px] flex items-center justify-center'>
                        <p className='text-black font-semibold'>For Individuals</p>
                    </div>
                    <div className='w-[170px] h-[55px] rounded-[140px] p-[14px] flex items-center justify-center'>
                        <p className='text-white'>For Businesses</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-24 pb-24'>
                <div className='h-48 flex flex-col items-center'>
                    <Image src='/icon.png' alt='icon' width={78} height={78} className='pb-[30px]'/>
                    <h2 className='pb-[20px]'>Checking Accounts</h2>
                    <p className='text-sm text-center w-2/3 text-gray-400'>Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
                </div>
                <div className='h-48 flex flex-col items-center'>
                    <Image src='/icon.png' alt='icon' width={78} height={78} className='pb-[30px]'/>
                    <h2 className='pb-[20px]'>Checking Accounts</h2>
                    <p className='text-sm text-center w-2/3 text-gray-400'>Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
                </div>
                <div className='h-48 flex flex-col items-center'>
                    <Image src='/icon.png' alt='icon' width={78} height={78} className='pb-[30px]'/>
                    <h2 className='pb-[20px]'>Checking Accounts</h2>
                    <p className='text-sm text-center w-2/3 text-gray-400'>Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
                </div>
            </div>
        </div>
    )
}

export default Products