"use client"

import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated import for Next.js 13+
import { useState } from 'react'

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
        'linkTitle': 'Contact',
        'linkDestination': '/contact'
    },
    {
        'linkTitle': 'Private Labelling',
        'linkDestination': '/private-labelling'
    },
];

const Navbar = () => {
    const pathname = usePathname();
    const [mobileNav, setMobileNav] = useState(false)

    return (
        <div className='fixed w-screen h-[80px] px-[32px] py-[20px] lg:px-12 bg-transparent bg-opacity-40 z-10'>
            <div className='navcontent flex flex-row items-center h-full justify-between md:justify-between'>
                <div className='h-4 w-4 md:hidden'>

                </div>
                    <div className='flex flex-row items-center sm:gap-2 gap-1'>
                        <Link href='/'>
                            <Image src='/PolimaLogo.png' alt='logo' width={120} height={40} className='cursor-pointer' />
                        </Link>
                        {/*<h1 className='tracking-tight text-2xl cursor-pointer text-red-600 font-semibold hover:text-neon-green'>POLIMA FOODS</h1>*/}
                    </div>
                <div className='hidden sm:hidden md:flex flex-row gap-5 bg-black bg-opacity-60 border border-red-600 border-opacity-30 px-8 py-3 rounded-3xl backdrop-blur-md'>
                {
                    navLinks.map((link) => {
                        const isActive = pathname === link.linkDestination;
                        const linkStyle = isActive ? 'text-red-600 font-semibold' : 'text-white font-light';
                        return (
                            <Link key={link.linkTitle} href={link.linkDestination}>
                                <p className={`${linkStyle} hover:text-red-600`}>{link.linkTitle}</p>
                            </Link>
                        );
                    })
                 }
                </div>

                <div className='hidden sm:hidden md:flex flex-row items-center gap-4'>
                    {/*<p>Sign Up</p>*/}
                    <div className='bg-black bg-opacity-60 border border-red-600 border-opacity-80 py-2 px-4 rounded-3xl backdrop-blur-md'>
                        <p className='text-white tracking-tight'>Contact Us</p>
                    </div>
                </div>
                <div className='md:hidden py-1.5 px-1'>
                    <Menu color='#FF0000'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
