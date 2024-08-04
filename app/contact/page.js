export default function ContactPage() {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-36 flex flex-col h-screen justify-center overflow-hidden'>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-3/4'>
                    <h1 className='font-semibold text-4xl text-black'>Contact <span className='text-red-600'>Us</span></h1>
                    <p className='text-center lg:text-start text-gray-900 tracking-tight'>We’d love to hear from you! Whether you have questions or need more information, our team is here to help.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 pb-12'>
                <div className='border border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-xl tracking-tight font-semibold'>Phone</h2>
                    <p className='text-black text-sm tracking-tight'>+91 73060 68897</p>
                </div>
                <div className='border border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-xl tracking-tight font-semibold'>Email</h2>
                    <p className='text-black text-sm tracking-tight'>info@polimarice.com</p>
                </div>
                <div className='border border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-xl tracking-tight font-semibold'>Website</h2>
                    <p className='text-black text-sm tracking-tight'>www.polimarice.com</p>
                </div>
                <div className='border border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-xl tracking-tight font-semibold'>Address</h2>
                    <p className='text-black text-sm tracking-tight'>Pallickal Agro Mills, Maratichodu, Matoor P.O, Kalady, Ernakulam, Kerala, PIN - 683574</p>
                </div>
            </div>
        </div>
    )
}