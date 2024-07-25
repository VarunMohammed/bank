import Image from 'next/image'

const Features = () => {
    return(
        <div className='bg-light-black px-[16px] md:px-[162px] pt-12 flex flex-col pb-14'>
            <div className='flex flex-col gap-3 lg:w-2/3 pb-6 lg:pb-16 items-center lg:items-start'>
                <h1 className='font-semibold text-4xl'>Our <span className='text-neon-green'>Features</span></h1>
                <p className='text-center lg:text-start'>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
            </div>
            <div className='wrapper flex flex-col lg:flex-row gap-6'>
                <div className='optionwrapper w-auto flex flex-col gap-4 bg-nav-black p-5 rounded-xl border border-nav-border'>
                    <div className='bg-footer-black py-3 px-6 border border-neon-green border-opacity-30 flex items-center justify-center rounded-3xl'>
                        <p className='text-neon-green'>Online Banking</p>
                    </div>
                    <div className='bg-nav-black py-3 border border-neon-green border-opacity-30 flex items-center justify-center rounded-3xl'>
                        <p>Financial Tools</p>
                    </div>
                    <div className='bg-nav-black py-3 border border-neon-green border-opacity-30 flex items-center justify-center rounded-3xl'>
                        <p className='tracking-tight'>Customer Support</p>
                    </div>
                </div>
                <div className='flex-1 bg-light-black h-auto'>
                    <div className='gridwrapper grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='border border-nav-border rounded-xl w-auto p-[50px]'>
                            <div className='flex flex-row items-center justify-between pb-[30px]'>
                                <p className='tracking-tight text-xl'>24 x 7 Account Access</p>
                                <Image src='/diagonalArrow.png' alt='arrow' width={18} height={18} />
                            </div>
                            <p className='text-slate-400'>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
                        </div>
                        <div className='border border-nav-border rounded-xl w-auto p-[50px]'>
                            <div className='flex flex-row items-center justify-between pb-[30px]'>
                                <p className='tracking-tight text-xl'>24 x 7 Account Access</p>
                                <Image src='/diagonalArrow.png' alt='arrow' width={18} height={18} />
                            </div>
                            <p className='text-slate-400'>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
                        </div>
                        <div className='border border-nav-border rounded-xl w-auto p-[50px]'>
                            <div className='flex flex-row items-center justify-between pb-[30px]'>
                                <p className='tracking-tight text-xl'>24 x 7 Account Access</p>
                                <Image src='/diagonalArrow.png' alt='arrow' width={18} height={18} />
                            </div>
                            <p className='text-slate-400'>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
                        </div>
                        <div className='border border-nav-border rounded-xl w-auto p-[50px]'>
                            <div className='flex flex-row items-center justify-between pb-[30px]'>
                                <p className='tracking-tight text-xl'>24 x 7 Account Access</p>
                                <Image src='/diagonalArrow.png' alt='arrow' width={18} height={18} />
                            </div>
                            <p className='text-slate-400'>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features