import Image from 'next/image'

const UseCases = () => {
    return (
        <div className='bg-light-black px-[16px] md:px-[162px] pt-12 flex flex-col pb-14'>
            <div className='flex flex-col gap-2 pb-10 items-center lg:items-start'>
                <h1 className='text-neon-green text-4xl font-semibold'>Use Cases</h1>
                <p className='text-center lg:text-start'>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[60px]'>
                <div className='bg-footer-black rounded-2xl p-[30px]'>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='p-[30px] flex flex-col items-center gap-3 bg-nav-black rounded-xl border border-nav-border'>
                            <Image src='/icon.png' alt='icon' width={78} height={78} />
                            <p className='text-center'>Managing Personal<br/>Finances</p>
                        </div>
                        <div className='p-[30px] flex flex-col items-center gap-3 bg-nav-black rounded-xl border border-nav-border'>
                            <Image src='/icon.png' alt='icon' width={78} height={78} />
                            <p className='text-center'>Managing Personal<br/>Finances</p>
                        </div>
                        <div className='p-[30px] flex flex-col items-center gap-3 bg-nav-black rounded-xl border border-nav-border'>
                            <Image src='/icon.png' alt='icon' width={78} height={78} />
                            <p className='text-center'>Managing Personal<br/>Finances</p>
                        </div>
                        <div className='p-[30px] flex flex-col items-center gap-3 bg-nav-black rounded-xl border border-nav-border'>
                            <Image src='/icon.png' alt='icon' width={78} height={78} />
                            <p className='text-center'>Managing Personal<br/>Finances</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col gap-2 pb-[30px] lg:pb-[62px] items-center lg:items-start'>
                        <h2 className='font-semibold text-lg'>For Individuals</h2>
                        <p className='text-sm text-gray-400 text-center lg:text-start'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 items-center lg:items-start justify-between pb-[62px]'>
                        <div className='flex flex-col items-center lg:items-start gap-2'>
                            <h1 className='text-4xl font-semibold tracking-tight text-neon-green'>78%</h1>
                            <p className='text-sm text-gray-400 text-center lg:text-start lg:w-3/4'>Secure Retirement Planning</p>
                        </div>
                        <div className='flex flex-col items-center lg:items-start gap-2'>
                            <h1 className='text-4xl font-semibold tracking-tight text-neon-green'>63%</h1>
                            <p className='text-sm text-gray-400 text-center lg:text-start lg:w-3/4'>Managable Debt Consolidation</p>
                        </div>
                        <div className='flex flex-col items-center lg:items-start gap-2'>
                            <h1 className='text-4xl font-semibold tracking-tight text-neon-green'>91%</h1>
                            <p className='text-sm text-gray-400 text-center lg:text-start lg:w-3/4'>Reducing financial burdens</p>
                        </div>
                    </div>
                    <p className='learnmore bg-footer-black inline-block px-4 py-2 rounded-lg cursor-pointer border border-neon-green border-opacity-30'>Learn More</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col gap-2 pb-[30px] lg:pb-[62px] items-center lg:items-start'>
                        <h2 className='font-semibold text-lg'>For Individuals</h2>
                        <p className='text-sm text-gray-400 text-center lg:text-start'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 items-center lg:items-start justify-between pb-[62px]'>
                        <div className='flex flex-col items-center lg:items-start gap-2'>
                            <h1 className='text-4xl font-semibold tracking-tight text-neon-green'>78%</h1>
                            <p className='text-sm text-gray-400 text-center lg:text-start lg:w-3/4'>Secure Retirement Planning</p>
                        </div>
                        <div className='flex flex-col items-center lg:items-start gap-2'>
                            <h1 className='text-4xl font-semibold tracking-tight text-neon-green'>63%</h1>
                            <p className='text-sm text-gray-400 text-center lg:text-start lg:w-3/4'>Managable Debt Consolidation</p>
                        </div>
                        <div className='flex flex-col items-center lg:items-start gap-2'>
                            <h1 className='text-4xl font-semibold tracking-tight text-neon-green'>91%</h1>
                            <p className='text-sm text-gray-400 text-center lg:text-start lg:w-3/4'>Reducing financial burdens</p>
                        </div>
                    </div>
                    <p className='learnmore bg-footer-black inline-block px-4 py-2 rounded-lg cursor-pointer border border-neon-green border-opacity-30'>Learn More</p>
                </div>
                <div className='bg-footer-black rounded-2xl p-[30px]'>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='p-[30px] flex flex-col items-center gap-3 bg-nav-black rounded-xl border border-nav-border'>
                            <Image src='/icon.png' alt='icon' width={78} height={78} />
                            <p className='text-center'>Managing Personal<br/>Finances</p>
                        </div>
                        <div className='p-[30px] flex flex-col items-center gap-3 bg-nav-black rounded-xl border border-nav-border'>
                            <Image src='/icon.png' alt='icon' width={78} height={78} />
                            <p className='text-center'>Managing Personal<br/>Finances</p>
                        </div>
                        <div className='p-[30px] flex flex-col items-center gap-3 bg-nav-black rounded-xl border border-nav-border'>
                            <Image src='/icon.png' alt='icon' width={78} height={78} />
                            <p className='text-center'>Managing Personal<br/>Finances</p>
                        </div>
                        <div className='p-[30px] flex flex-col items-center gap-3 bg-nav-black rounded-xl border border-nav-border'>
                            <Image src='/icon.png' alt='icon' width={78} height={78} />
                            <p className='text-center'>Managing Personal<br/>Finances</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCases;
