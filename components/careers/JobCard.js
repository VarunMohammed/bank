import Image from 'next/image'

const JobCard = () => {
    return(
        <div className='border border-nav-border rounded-xl p-[50px] items-start flex flex-col gap-[50px]'>
            <div>
                <h2 className='text-lg tracking-tight font-semibold pb-[14px]'>Relationship Manager</h2>
                <div className='flex flex-row gap-1'>
                    <p className='text-sm font-light border border-nav-border bg-footer-black py-1 px-3 rounded-xl tracking-tight'>Location: India</p>
                    <p className='text-sm font-light border border-nav-border bg-footer-black py-1 px-3 rounded-xl tracking-tight'>Department: Retail Banking</p>
                </div>
            </div>
            <div className='flex flex-col gap-[40px]'>
                <div>
                    <h3 className='text-lg font-semibold tracking-tight pb-[20px]'>About this Job</h3>
                    <p className='text-gray-400 tracking-tight'>As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.</p>
                </div>
                <div>
                    <h3 className='text-lg font-semibold tracking-tight pb-[20px]'>Requirements & Qualifications</h3>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src='/req.png' alt='logo' width={20} height={20} className='cursor-pointer' />
                            <p className='text-gray-400 tracking-tight'>Bachelors degree in Business, Finance, or a related field</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src='/req.png' alt='logo' width={20} height={20} className='cursor-pointer' />
                            <p className='text-gray-400 tracking-tight'>Bachelors degree in Business, Finance, or a related field</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src='/req.png' alt='logo' width={20} height={20} className='cursor-pointer' />
                            <p className='text-gray-400 tracking-tight'>Bachelors degree in Business, Finance, or a related field</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src='/req.png' alt='logo' width={20} height={20} className='cursor-pointer' />
                            <p className='text-gray-400 tracking-tight'>Bachelors degree in Business, Finance, or a related field</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src='/req.png' alt='logo' width={20} height={20} className='cursor-pointer' />
                            <p className='text-gray-400 tracking-tight'>Bachelors degree in Business, Finance, or a related field</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[145px] h-[50px] bg-neon-green rounded-[82px] px-[20px] py-[14px] flex items-center justify-center'>
                <p className='text-black tracking-tight'>Apply Now</p>
            </div>
        </div>
    )
}

export default JobCard