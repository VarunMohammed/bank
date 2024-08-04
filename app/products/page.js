import ProductsBottomCTA from "@components/Products/ProductsBottomCTA";
import ProductsSection from "@components/Products/ProductsSection";
import Image from 'next/image'
import Process from "@components/Products/Process";

export default function ProductPage() {
    return(
        <div className='bg-white overflow-hidden'>
            <main className='w-screen bg-white lg:pb-20'>
                <img src='paddy.jpg' alt='paddy' className='lg:hidden'/>
            </main>
            <ProductsSection />
            <ProductsBottomCTA />
        </div>
    )
}