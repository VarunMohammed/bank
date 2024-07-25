import Image from 'next/image'

const PressRelease = () => {
    return(
        <div className='bg-light-black px-[16px] md:px-[162px] pt-12 flex flex-col pb-14'>
            <div className='flex flex-col items-center lg:items-start gap-2 pb-10'>
                <h1 className='font-semibold text-4xl text-neon-green'>Press Releases</h1>
                <p className='text-center lg:text-start lg:w-2/3'>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='bg-footer-black p-[30px] border border-nav-border rounded-3xl'>
                    <Image src='/pressRelease.png' alt='PressRelease' width={200} height={30} className='w-full h-64 object-cover rounded-3xl pb-[50px]'/>
                    <div className='flex flex-col px-[30px] gap-[30px]'>
                        <h2 className='text-lg'>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h2>
                        <p className='text-sm text-gray-400'>YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
                    </div>
                </div>
                <div className='bg-footer-black p-[30px] border border-nav-border rounded-3xl'>
                    <Image src='/pressRelease.png' alt='PressRelease' width={200} height={30} className='w-full h-64 object-cover rounded-3xl pb-[50px]'/>
                    <div className='flex flex-col px-[30px] gap-[30px]'>
                        <h2 className='text-lg'>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h2>
                        <p className='text-sm text-gray-400'>YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
                    </div>
                </div>
                <div className='bg-footer-black p-[30px] border border-nav-border rounded-3xl'>
                    <Image src='/pressRelease.png' alt='PressRelease' width={200} height={30} className='w-full h-64 object-cover rounded-3xl pb-[50px]'/>
                    <div className='flex flex-col px-[30px] gap-[30px]'>
                        <h2 className='text-lg'>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h2>
                        <p className='text-sm text-gray-400'>YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
                    </div>
                </div>
                <div className='bg-footer-black p-[30px] border border-nav-border rounded-3xl'>
                    <Image src='/pressRelease.png' alt='PressRelease' width={200} height={30} className='w-full h-64 object-cover rounded-3xl pb-[50px]'/>
                    <div className='flex flex-col px-[30px] gap-[30px]'>
                        <h2 className='text-lg'>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h2>
                        <p className='text-sm text-gray-400'>YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PressRelease