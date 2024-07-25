const BottomCTA = () => {
    return (
        <div className='w-screen h-auto bg-light-black px-[16px] sm:px-[16px] md:px-[26px] lg:px-[162px] flex items-center justify-center py-[80px]'>
            <div className='h-3/4 w-full border border-neon-green border-opacity-10 flex sm:flex-col md:flex-col flex-col lg:flex-row gap-6 p-[30px] sm:p-[80px] items-center justify-between rounded-3xl'>
                <div className='flex flex-col gap-4 w-3/4'>
                    <h2 className='text-4xl text-center lg:text-start'>
                        Start your financial journey with <span className='text-neon-green'>YourBank today!</span>
                    </h2>
                    <p className='text-gray-400 text-center lg:text-start'>
                        Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service.
                    </p>
                </div>
                <div className='bg-neon-green h-10 px-4 flex items-center justify-center rounded-3xl'>
                    <p className='text-black tracking-tight'>Open Account</p>
                </div>
            </div>
        </div>
    );
}

export default BottomCTA;
