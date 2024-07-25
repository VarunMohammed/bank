import JobCard from "@components/careers/JobCard";

const Jobs = () => {
    return(
        <div className='bg-light-black px-[16px] md:px-[162px] pt-12 flex flex-col pb-14'>
            <div className='flex flex-col items-center lg:items-start gap-2 pb-10'>
                <h1 className='font-semibold text-4xl text-neon-green'>Job Openings</h1>
                <p className='text-center lg:text-start lg:w-2/3'>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    )
}

export default Jobs