import Image from 'next/image'

const Promise = () => {
    return(
        <div className='bg-white px-[16px] md:px-[120px] pt-12 flex flex-col'>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-3/4'>
                    <h2 className='text-4xl lg:text-5xl xl:text-6xl text-black font-semibold text-center lg:text-start'>Our <span className='text-red-600'>Promise</span></h2>
                    <p className='text-gray-700 text-center lg:text-lg xl:text-xl lg:text-start w-full lg:w-5/6'>Discover the rue taste of Kerala with Polima. Taste the tradition, feel the love.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-24 pb-12'>
                <div className='h-12 flex flex-col items-center lg:items-start'>
                    <h2 className='pb-[15px] text-red-600 font-semibold text-lg'>Quality</h2>
                    <p className='tracking-tight text-center lg:text-start w-3/4 text-black'>Premium Kerala Matta Rice with rich flavor and nutrients.</p>
                </div>
                <div className='h-12 flex flex-col items-center lg:items-start'>
                    <h2 className='pb-[15px] text-red-600 font-semibold text-lg'>Tradition</h2>
                    <p className='tracking-tight text-center lg:text-start w-3/4 text-black'>Honoring the age-old farming practices of our ancestors.</p>
                </div>
                <div className='h-12 flex flex-col items-center lg:items-start'>
                    <h2 className='pb-[15px] text-red-600 font-semibold text-lg'>Sustainability</h2>
                    <p className='tracking-tight text-center lg:text-start w-3/4 text-black'>Eco-friendly and sustainable farming methods.</p>
                </div>
            </div>
        </div>
    )
}

export default Promise