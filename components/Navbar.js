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

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='fixed bg-white w-screen lg:w-screen h-[80px] px-[32px] py-[20px] lg:px-12 border'>
            <div className='navcontent flex flex-row items-center h-full justify-center md:justify-between'>
                <Link href='/'>
                    <div className='flex flex-row items-center sm:gap-2 gap-1'>
                        <Image src='/PolimaLogo.png' alt='logo' width={120} height={40} className='cursor-pointer' />
                        {/*<h1 className='tracking-tight text-2xl cursor-pointer text-red-600 font-semibold hover:text-neon-green'>POLIMA FOODS</h1>*/}
                    </div>
                </Link>
                <div className='hidden sm:hidden md:flex flex-row gap-5'>
                    {
                        navLinks.map((link) => {
                            const isActive = pathname === link.linkDestination;
                            const linkStyle = isActive ? 'text-red-600' : 'text-gray-700';
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
                    <div className='bg-red-600 py-2 px-4 rounded-2xl'>
                        <p className='text-white tracking-tight'>Contact Us</p>
                    </div>
                </div>
                <div className='hidden border py-1.5 px-3 rounded-2xl'>
                    <Menu color='#FF0000'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
