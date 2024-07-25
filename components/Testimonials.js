import TestimonialCard from "@components/TestimonialCard";

const Testimonials = () => {
    return(
        <div className='bg-light-black px-[16px] md:px-[162px] pt-12 flex flex-col xl:flex-row'>
            <div className='pb-[40px] sm:pb-[0px] flex-col lg:items-start lg:mr-7'>
                <div className='flex flex-col gap-3 items-center xl:items-start'>
                    <h1 className='text-3xl lg:text-4xl tracking-tight font-semibold'>Our <span className='text-neon-green'>Testimonials</span></h1>
                    <p className='text-center xl:text-start text-gray-100 tracking-tight'>Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
                </div>
                <div className='mt-[20px] w-[75%] sm:w-[60%] md:w-[80%] lg:w-[50%] xl:w-[80%] 2xl:w-[50%] mx-auto mb-[40px] xl:mb-[0px] xl:mx-0 h-20 bg-nav-black rounded-[100px] border border-nav-border flex flex-row items-center justify-center gap-3'>
                    <div className='bg-neon-green px-6 py-3 rounded-3xl'><p className='text-black tracking-tight'>For Individuals</p></div>
                    <div className='bg-transparent px-6 py-3 rounded-3xl'><p className='text-white tracking-tight'>For Businesses</p></div>
                </div>
            </div>
            <TestimonialCard />
        </div>
    )
}

export default Testimonials