import Image from 'next/image'

const Process = () => {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-12 flex flex-col'>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-3/4'>
                    <h1 className='font-semibold text-4xl text-black'>Our <span className='text-red-600'>Process</span></h1>
                    <p className='text-center lg:text-start text-gray-900'>At Polima, we take pride in our meticulous processing methods. Using state-of-the-art milling technology, we ensure that each grain of rice retains its natural goodness. From the paddy fields of Kerala to your plate, our process is designed to preserve the nutritional value and authentic taste of Kerala Matta rice.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='border border-red-500 border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-2xl tracking-tight font-semibold'>Sustainability</h2>
                    <p className='text-black text-sm tracking-tight'>Our commitment to sustainability goes beyond words. We embrace organic farming techniques and natural fertilizers, minimizing our environmental footprint. By protecting the land we cultivate, we ensure that future generations can continue to enjoy the bounty of Kerala’s fields.</p>
                </div>
                <div className='border border-red-500 border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-2xl tracking-tight font-semibold'>Community Engagement</h2>
                    <p className='text-black text-sm tracking-tight'>We believe in the power of community. By supporting local farmers and engaging in various socio-economic initiatives, we give back to the communities that are the backbone of our operations. Together, we grow, harvest, and thrive.</p>
                </div>
            </div>
        </div>
    )
}

export default Process