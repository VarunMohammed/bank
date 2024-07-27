import Link from 'next/link'

const About = () => {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-12 flex flex-col gap-5 pb-12 items-center sm:items-start'>
            <div className='flex flex-col gap-2 items-center sm:items-start'>
                <h1 className='text-4xl text-black font-semibold'>Who <span className='text-red-600'>We </span>Are</h1>
                <p className='text-gray-700 text-center sm:text-start'>Polima Foods is a trusted provider of high-quality rice and flour, committed to nourishing families and communities with our premium products. Our dedication to quality starts from selecting the finest raw materials and continues through every stage of production, ensuring that what reaches your table is nothing short of excellence. We believe in sustainable practices and are committed to reducing our environmental footprint, making our products as kind to the planet as they are to your body.</p>
            </div>
            <Link href='/about'>
                <div className='w-32 bg-red-600 rounded-[82px] px-[20px] py-[14px] flex items-center justify-center'>
                    <p className='text-white tracking-tight'>Know More</p>
                </div>
            </Link>
        </div>
    )
}

export default About