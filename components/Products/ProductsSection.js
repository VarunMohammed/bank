import Image from 'next/image'

const ProductsSection = () => {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-12 flex flex-col'>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-3/4'>
                    <h1 className='font-semibold text-4xl text-black'>Our <span className='text-red-600'>Products</span></h1>
                    <p className='text-center lg:text-start text-gray-900'>Explore our selection of premium rice and flour products, crafted with care to bring quality and nutrition to your table.</p>
                </div>
            </div>
            <div className='grid gdir-cols-1 lg:grid-cols-2 gap-16'>
                <div className='flex flex-col items-center lg:items-start gap-3'>
                    <Image src='/polimahero.png' alt='logo' width={150} height={300} className='cursor-pointer' />
                    <h2 className='text-red-600 tracking-tight text-xl font-semibold'>Polima Palakadan Matta Short Grain (Unda)</h2>
                    <p className='text-black tracking-tight text-center lg:text-start w-5/6 leading-snug'>Discover the richness of our short grain rice, known as Unda. With its distinctive red hue and robust flavor, this rice retains its bran layer, offering a wealth of nutrients. Perfect for traditional Kerala dishes like Kanji and Payasam, it brings an authentic touch to every meal. Imagine savoring a bowl of Kanji, just like Ammachi used to make, with the aroma filling your home and heart.</p>
                </div>
                <div className='flex flex-col items-center gap-3 lg:items-start'>
                    <Image src='/polimahero.png' alt='logo' width={150} height={300} className='cursor-pointer' />
                    <h2 className='text-red-600 tracking-tight text-xl font-semibold'>Polima Palakadan Matta Long Grain (Vadi)</h2>
                    <p className='text-black tracking-tight text-center lg:text-start w-5/6 leading-snug'>Our long grain rice, known as Vadi, is ideal for a wide range of culinary creations. Whether you’re making a fragrant biryani or a simple bowl of rice, Vadi’s unique texture and flavor will elevate your dish, making every meal a special occasion. It’s the same rice that’s been a staple at every festive feast and family gathering, bridging generations with its familiar taste.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductsSection