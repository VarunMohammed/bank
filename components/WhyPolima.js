import Image from 'next/image'

const WhyPolima = () => {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-12 flex flex-col'>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-3/4'>
                    <h1 className='font-semibold text-4xl text-black'>Why <span className='text-red-600'>Polima</span></h1>
                    <p className='text-center lg:text-start text-gray-900'>At Polima Foods, quality is our top priority. We meticulously select only the finest rice and flour varieties, ensuring that every product meets our rigorous standards. Our commitment to excellence means you receive ingredients that are not only nutritious but also deliver exceptional taste and texture.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-24 pb-2'>
                <div className='h-48 flex flex-col items-center sm:items-start'>
                    <h2 className='pb-[20px] text-red-600 font-semibold'>Sustainable Sourcing</h2>
                    <p className='text-sm text-center sm:text-start w-3/4 text-black'>We are dedicated to sustainability and ethical sourcing practices. Our rice and flour are sourced from farms and suppliers that prioritize environmental stewardship and responsible farming methods. By choosing Polima Foods, you support eco-friendly practices and contribute to a more sustainable future.</p>
                </div>
                <div className='h-48 flex flex-col items-center sm:items-start'>
                    <h2 className='pb-[20px] text-red-600 font-semibold'>Exceptional Customer Service</h2>
                    <p className='text-sm text-center sm:text-start w-3/4 text-black'>Our team is passionate about providing outstanding customer service. From answering your inquiries to resolving any issues, we are here to support you every step of the way. We value your business and strive to exceed your expectations with personalized attention and prompt assistance.</p>
                </div>
                <div className='h-48 flex flex-col items-center sm:items-start'>
                    <h2 className='pb-[20px] text-red-600 font-semibold'>Trust and Reliability</h2>
                    <p className='text-sm text-center sm:text-start w-3/4 text-black'>With years of experience in the industry, Polima Foods is a name you can trust. Our proven track record of reliability and integrity means you can depend on us for consistent quality and dependable service.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyPolima