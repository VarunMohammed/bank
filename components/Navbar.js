"use client"

import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated import for Next.js 13+

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

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='fixed top-10 left-4 right-4 lg:top-10 lg:left-11 lg:right-11 bg-nav-black w-[calc(100%-2rem)] lg:w-[calc(100%-5.5rem)] h-[80px] px-[32px] py-[20px] lg:px-12 rounded-3xl border border-nav-border'>
            <div className='navcontent flex flex-row items-center h-full justify-between'>
                <Link href='/'>
                    <div className='flex flex-row items-center sm:gap-2 gap-1'>
                        <Image src='/bank-logo.png' alt='logo' width={40} height={40} className='cursor-pointer' />
                        <h1 className='tracking-tight text-2xl cursor-pointer text-white hover:text-neon-green'>YourBanK</h1>
                    </div>
                </Link>
                <div className='hidden sm:hidden md:flex flex-row gap-5'>
                    {
                        navLinks.map((link) => {
                            const isActive = pathname === link.linkDestination;
                            const linkStyle = isActive ? 'text-neon-green' : 'text-white';
                            return (
                                <Link key={link.linkTitle} href={link.linkDestination}>
                                    <p className={`${linkStyle} hover:text-neon-green`}>{link.linkTitle}</p>
                                </Link>
                            );
                        })
                    }
                </div>
                <div className='hidden sm:hidden md:flex flex-row items-center gap-4'>
                    <p>Sign Up</p>
                    <div className='bg-neon-green py-2 px-4 rounded-2xl'>
                        <p className='text-black tracking-tight'>Login</p>    
                    </div>
                </div>
                <div className='md:hidden bg-neon-green py-1.5 px-3 rounded-2xl'>
                    <Menu color='#000000'/>    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
