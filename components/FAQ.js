const FAQ = () => {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-12 flex flex-col'>
            <div className='flex flex-col items-center lg:items-start gap-3 pb-10'>
                <h1 className='text-4xl font-semibold tracking-tight text-black'><span className='text-red-600'>Frequently</span> Asked Questions</h1>
                <p className='text-center lg:text-start text-gray-900'>Still you have any questions? Contact our Team via support@yourbank.com</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-20'>
                <div className='bg-white border hover:border-black hover:border-opacity-40 w-auto rounded-lg p-[50px]'>
                    <p className='font-semibold text-red-600 text-lg'>What types of rice and flour do you offer?</p>
                    <div className='bg-gray-300 w-full h-[1px] my-[30px] sm:my-[30px]'></div>
                    <p className='text-black tracking-tight'>We offer a wide variety of rice, including long-grain (such as Basmati and Jasmine), short-grain, medium-grain, and specialty rice like Arborio and Black Rice. Each type is selected for its unique texture and flavor to suit different culinary needs. Our flour selection includes all-purpose flour, whole wheat flour, and specialty flours such as almond flour, coconut flour, and rye flour. These flours are ideal for baking, cooking, and a range of recipes.</p>
                </div>
                <div className='bg-white border hover:border-black hover:border-opacity-40 w-auto rounded-lg p-[50px]'>
                    <p className='font-semibold text-red-600 text-lg'>Are your products organic or non-GMO?</p>
                    <div className='bg-gray-300 w-full h-[1px] my-[30px] sm:my-[30px]'></div>
                    <p className='text-black tracking-tight'>Yes, we offer certified organic rice and flour that meet stringent organic farming standards. Look for the organic certification label on the product pages for details. We also provide non-GMO products. All relevant product information, including non-GMO certification, can be found in the product descriptions.</p>
                </div>
                <div className='bg-white border hover:border-black hover:border-opacity-40 w-auto rounded-lg p-[50px]'>
                    <p className='font-semibold text-red-600 text-lg'>What are the minimum order quantities for private labeling?</p>
                    <div className='bg-gray-300 w-full h-[1px] my-[30px] sm:my-[30px]'></div>
                    <p className='text-black tracking-tight'>Minimum order quantities vary based on the product and packaging requirements. Typically, the minimum order is between 1,000 to 5,000 units. For exact quantities and pricing, please contact our private labeling team at email@example.com or (123) 456-7890.
                    </p>
                </div>
                <div className='bg-white border hover:border-black hover:border-opacity-40 w-auto rounded-lg p-[50px]'>
                    <p className='font-semibold text-red-600 text-lg'>What are the costs associated with private labeling?</p>
                    <div className='bg-gray-300 w-full h-[1px] my-[30px] sm:my-[30px]'></div>
                    <p className='text-black tracking-tight'>Costs vary depending on product type, order quantity, packaging complexity, and design services. We provide a detailed quote based on your specific requirements. Contact us for a customized quote and to discuss pricing details.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ