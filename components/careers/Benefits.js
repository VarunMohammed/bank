import Image from 'next/image'

const Benefits = () => {
    return(
        <div className='bg-light-black px-[16px] md:px-[162px] pt-12 flex flex-col pb-14'>
            <div className='flex flex-col items-center lg:items-start gap-2 pb-[80px]'>
                <h1 className='font-semibold text-4xl'>Our <span className='text-neon-green'>Benefits</span></h1>
                <p className='text-center lg:text-start lg:w-2/3'>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='bg-footer-black rounded-xl border border-neon-green border-opacity-15 p-[50px]'>
                    <div className='flex flex-row items-center gap-3 pb-[30px]'>
                        <Image src='/icon.png' alt='icon' width={78} height={78} />
                        <h2 className='text-lg tracking-tight'>Competitive Compensation</h2>
                    </div>
                    <p>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
                </div>
                <div className='bg-footer-black rounded-xl border border-neon-green border-opacity-15 p-[50px]'>
                    <div className='flex flex-row items-center gap-3 pb-[30px]'>
                        <Image src='/icon.png' alt='icon' width={78} height={78} />
                        <h2 className='text-lg tracking-tight'>Competitive Compensation</h2>
                    </div>
                    <p>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
                </div>
                <div className='bg-footer-black rounded-xl border border-neon-green border-opacity-15 p-[50px]'>
                    <div className='flex flex-row items-center gap-3 pb-[30px]'>
                        <Image src='/icon.png' alt='icon' width={78} height={78} />
                        <h2 className='text-lg tracking-tight'>Competitive Compensation</h2>
                    </div>
                    <p>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
                </div>
                <div className='bg-footer-black rounded-xl border border-neon-green border-opacity-15 p-[50px]'>
                    <div className='flex flex-row items-center gap-3 pb-[30px]'>
                        <Image src='/icon.png' alt='icon' width={78} height={78} />
                        <h2 className='text-lg tracking-tight'>Competitive Compensation</h2>
                    </div>
                    <p>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits