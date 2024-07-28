import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
    {
        'linkTitle': 'Home',
        'linkDestination': '/'
    },
    {
        'linkTitle': 'Products',
        'linkDestination': '/products'
    },
    {
        'linkTitle': 'About',
        'linkDestination': '/about'
    },
    {
        'linkTitle': 'Private Labelling',
        'linkDestination': '/private-labelling'
    },
];

const Footer = () => {
    return(
        <div className='w-full h-auto bg-white flex flex-col items-center px-[16px] sm:px-[16px] md:px-[26px] lg:px-[162px] pt-[30px] sm:pt-[100px] pb-[30px] sm:pb-[50px] border border-t-[2px] border-l-[0px] border-r-[0px]'>
            <div className='flex flex-row gap-1 items-center'>
                <Image src='/PolimaLogo.png' alt='logo' width={150} height={40} className='cursor-pointer' />
                {/*<h1 className='tracking-tight text-2xl cursor-pointer text-red-600 font-semibold hover:text-black'>POLIMA FOODS</h1>*/}
            </div>
            <div className='    flex flex-row gap-5 pt-[50px]'>
                {
                    navLinks.map((link) => {
                        return (
                            <Link key={link.linkTitle} href={link.linkDestination}>
                                <p className={`text-slate-500 hover:text-red-600`}>{link.linkTitle}</p>
                            </Link>
                        );
                    })
                }
            </div>
            <div className='bg-gray-300 w-full h-[1px] my-[30px] sm:my-[50px]'></div>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex flex-row gap-1'>
                    <Mail color='#FF0000' className='h-[18px]'/>
                    <p className='text-sm text-black'>enquiry@polimarice.com</p>
                </div>
                <div className='flex flex-row gap-1'>
                    <Phone color='#FF0000' className='h-[18px]'/>
                    <p className='text-sm text-black'>+91 98765 43210</p>
                </div>
                <div className='flex flex-row gap-1'>
                    <MapPin color='#FF0000' className='h-[18px]'/>
                    <p className='text-sm text-black'>Angamaly</p>
                </div>
            </div>
            <div className='bg-gray-300 w-full h-[1px] my-[30px] sm:my-[50px]'></div>
            <div className='flex flex-col sm:flex-row items-center justify-between bg-red-600 w-full gap-4 h-auto sm:h-[84px] rounded-xl sm:rounded-[100px] py-10 pl-[16px] pr-[24px]'>
                <div className='flex flex-row gap-3'>
                    <Link href='https://www.facebook.com'>
                        <div className='h-[48px] w-[48px] bg-white rounded-full flex items-center justify-center'>
                            <Image src='/facebook.png' alt='facebook' width={25} height={25}/>
                        </div>
                    </Link>
                    <Link href='https://www.x.com'>
                        <div className='h-[48px] w-[48px] bg-white rounded-full flex items-center justify-center'>
                            <Image src='/x.png' alt='X' width={25} height={25}/>
                        </div>
                    </Link>
                    <Link href='https://www.linkedin.com'>
                        <div className='h-[48px] w-[48px] bg-white rounded-full flex items-center justify-center'>
                            <Image src='/linkedin.png' alt='LinkedIn' width={30} height={30}/>
                        </div>
                    </Link>
                </div>
                <p className='text-sm tracking-tight text-white'>Polima Foods. All Rights Reserved</p>
                <div className='flex flex-row gap-2'>
                    <p className='text-sm tracking-tight text-white cursor-pointer'>Privacy Policy</p>
                    <p className='text-sm tracking-tight text-black'>|</p>
                    <p className='text-sm tracking-tight text-white cursor-pointer'>Terms of Service</p>
                </div>
            </div>
        </div>
    )
}

export default Footer