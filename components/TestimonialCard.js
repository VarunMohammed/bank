import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const TestimonialCard = () => {
    return(
        <div className='flex flex-col items-center'>
            <div className='p-[20px] flex flex-col items-center border border-nav-border rounded-2xl'>
                <Image src='/quote.png' alt='quote' height={44} width={44} className='pb-[30px]'/>
                <p className='text-center pb-[30px]'>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
                <p className='text-neon-green'>John D</p>
            </div>
            <div className='pt-[30px] flex flex-row gap-3'>
                <div className='bg-nav-black h-[52px] w-[52px] rounded-full border border-nav-border flex items-center justify-center'>
                    <ArrowLeft className='text-neon-green'/>
                </div>
                <div className='bg-nav-black h-[52px] w-[52px] rounded-full border border-nav-border flex items-center justify-center'>
                    <ArrowRight className='text-neon-green'/>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard