import BottomCTA from "@components/BottomCTA";

export default function AboutPage() {
    return(
        <div className='bg-white px-[16px] md:px-[162px] pt-12 flex flex-col overflow-hidden'>
            <main className='pt-20'>
                <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                    <div className='flex flex-col gap-2 items-center lg:items-start lg:w-5/6'>
                        <h1 className='font-semibold text-4xl text-black'>About <span className='text-red-600'>Us</span></h1>
                        <p className='text-center lg:text-start text-gray-900 tracking-tight'>Founded in 1998, Polima, under the parent company Pallickal Agro Mills, has been a cherished name in the rice manufacturing industry. Our journey started in the lush, green fields of Kerala, with a vision to bring the genuine taste of Kerala Matta rice to families across the globe. Every grain we produce is a tribute to the land we call home and the hardworking farmers who nurture it.</p>
                    </div>
                </div>
            </main>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pb-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-5/6'>
                    <h1 className='font-semibold text-4xl text-black'>Our <span className='text-red-600'>Mission</span></h1>
                    <p className='text-center lg:text-start text-gray-900 tracking-tight'>At Polima, our mission is to bring the warmth and richness of Kerala’s agricultural traditions to your table. We are committed to sustainable farming practices that honor our land and our people. Our goal is to provide you with rice that is not only nutritious and delicious but also a testament to our commitment to quality and tradition.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='border border-red-500 border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-2xl tracking-tight font-semibold'>Sustainability</h2>
                    <p className='text-black text-sm tracking-tight'>Our commitment to sustainability goes beyond words. We embrace organic farming techniques and natural fertilizers, minimizing our environmental footprint. By protecting the land we cultivate, we ensure that future generations can continue to enjoy the bounty of Kerala’s fields.</p>
                </div>
                <div className='border border-red-500 border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-2xl tracking-tight font-semibold'>Community Engagement</h2>
                    <p className='text-black text-sm tracking-tight'>We believe in the power of community. By supporting local farmers and engaging in various socio-economic initiatives, we give back to the communities that are the backbone of our operations. Together, we grow, harvest, and thrive.</p>
                </div>
            </div>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-end justify-between pt-[60px]'>
                <div className='flex flex-col gap-2 items-center lg:items-start lg:w-3/4'>
                    <h1 className='font-semibold text-4xl text-black'>Why Choose <span className='text-red-600'>Us</span></h1>
                    {/*<p className='text-center lg:text-start text-gray-900'>At Polima, we take pride in our meticulous processing methods. Using state-of-the-art milling technology, we ensure that each grain of rice retains its natural goodness. From the paddy fields of Kerala to your plate, our process is designed to preserve the nutritional value and authentic taste of Kerala Matta rice.</p>*/}
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-14 pb-14'>
                <div className='border border-red-500 border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-2xl tracking-tight font-semibold'>Quality Assurance</h2>
                    <p className='text-black text-sm tracking-tight'>Our rigorous quality control ensures that every grain of rice meets our high standards, providing you with the best of Kerala.</p>
                </div>
                <div className='border border-red-500 border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-2xl tracking-tight font-semibold'>Sustainability</h2>
                    <p className='text-black text-sm tracking-tight'>We prioritize eco-friendly practices, ensuring that our farming methods are sustainable and kind to the earth.</p>
                </div>
                <div className='border border-red-500 border-l-[3px] border-r-[0px] border-t-[0px] border-b-[0px] p-[30px]'>
                    <h2 className='text-red-600 text-2xl tracking-tight font-semibold'>Customer Satisfaction</h2>
                    <p className='text-black text-sm tracking-tight'>Your satisfaction is our top priority. Our customer service team is always here to ensure your needs are met with warmth and care.</p>
                </div>
            </div>
        </div>
    )
}