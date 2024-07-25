import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
    {
        'linkTitle': 'Home',
        'linkDestination': '/'
    },
    {
        'linkTitle': 'Careers',
        'linkDestination': '/careers'
    },
    {
        'linkTitle': 'About',
        'linkDestination': '/about'
    },
    {
        'linkTitle': 'Security',
        'linkDestination': '/security'
    },
];

const Footer = () => {
    return(
        <div className='w-full h-auto bg-footer-black flex flex-col items-center px-[16px] sm:px-[16px] md:px-[26px] lg:px-[162px] pt-[50px] sm:pt-[100px] pb-[30px] sm:pb-[50px]'> 
            <div className='flex flex-row gap-1 items-center'>
                <Image src='/bank-logo.png' alt='logo' width={40} height={40} className='cursor-pointer' />
                <h1 className='tracking-tight text-2xl cursor-pointer text-white hover:text-neon-green'>YourBanK</h1>
            </div>
            <div className='    flex flex-row gap-5 pt-[50px]'>
                {
                    navLinks.map((link) => {
                        return (
                            <Link key={link.linkTitle} href={link.linkDestination}>
                                <p className={`hover:text-neon-green`}>{link.linkTitle}</p>
                            </Link>
                        );
                    })
                }
            </div>
            <div className='bg-nav-border w-full h-0.5 my-[30px] sm:my-[50px]'></div>
            <div className='flex flex-row gap-5'>
                <div className='flex flex-row gap-1'>
                    <Mail color='#CAFF33' className='h-[18px]'/>
                    <p className='text-sm text-footer-text'>enquiry@yourbank.com</p>
                </div>
                <div className='flex flex-row gap-1'>
                    <Phone color='#CAFF33' className='h-[18px]'/>
                    <p className='text-sm text-footer-text'>+91 98765 43210</p>
                </div>
                <div className='flex flex-row gap-1'>
                    <MapPin color='#CAFF33' className='h-[18px]'/>
                    <p className='text-sm text-footer-text'>YourBanK</p>
                </div>
            </div>
            <div className='bg-nav-border w-full h-0.5 my-[30px] sm:my-[50px]'></div>
            <div className='flex flex-col sm:flex-row items-center justify-between bg-footer-secondary w-full gap-4 h-auto sm:h-[84px] rounded-xl sm:rounded-[100px] py-10 pl-[16px] pr-[24px]'>
                <div className='flex flex-row gap-3'>
                    <Link href='https://www.facebook.com'>
                        <div className='h-[48px] w-[48px] bg-neon-green rounded-full flex items-center justify-center'>
                            <Image src='/facebook.png' alt='facebook' width={25} height={25}/>
                        </div>
                    </Link>
                    <Link href='https://www.x.com'>
                        <div className='h-[48px] w-[48px] bg-neon-green rounded-full flex items-center justify-center'>
                            <Image src='/x.png' alt='X' width={25} height={25}/>
                        </div>
                    </Link>
                    <Link href='https://www.linkedin.com'>
                        <div className='h-[48px] w-[48px] bg-neon-green rounded-full flex items-center justify-center'>
                            <Image src='/linkedin.png' alt='LinkedIn' width={30} height={30}/>
                        </div>
                    </Link>
                </div>
                <p className='text-sm tracking-tight text-gray-400'>YourBanK All Rights Reserved</p>
                <div className='flex flex-row gap-2'>
                    <p className='text-sm tracking-tight text-gray-400 cursor-pointer'>Privacy Policy</p>
                    <p className='text-sm tracking-tight text-neon-green'>|</p>
                    <p className='text-sm tracking-tight text-gray-400 cursor-pointer'>Terms of Service</p>
                </div>
            </div>
        </div>
    )
}

export default Footer