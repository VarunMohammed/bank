import Link from 'next/link'

const ProductsBottomCTA = () => {
    return (
        <div className='w-screen h-auto bg-white px-[16px] sm:px-[16px] md:px-[26px] lg:px-[162px] flex items-center justify-center py-[80px]'>
            <div className='h-3/4 w-full border border-red-500 border-opacity-75 flex sm:flex-col md:flex-col flex-col lg:flex-row gap-6 py-[30px] px-[0px] sm:p-[80px] items-center justify-between rounded-3xl'>
                <div className='flex flex-col gap-4 w-3/4'>
                    <h2 className='text-4xl text-black text-center lg:text-start font-light'>
                        Start your own journey with <span className='text-red-600 font-semibold'>Private Labelling</span>
                    </h2>
                    <p className='text-gray-500 text-center lg:text-start'>
                        Unlock the potential of your brand with our custom private labeling services. At Polima Foods, we offer tailored solutions that allow you to create your unique line of rice and flour products. From product selection to packaging design, our team is here to support you every step of the way. Partner with us and start your journey to success today!
                    </p>
                </div>
                <Link href='/private-labelling'>
                    <div className='bg-red-600 h-10 px-4 flex items-center justify-center rounded-3xl'>
                        <p className='text-white tracking-tight'>Explore Now</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProductsBottomCTA;
