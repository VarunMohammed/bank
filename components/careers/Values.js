const Values = () => {
    return(
        <div className='bg-light-black px-[16px] md:px-[162px] pt-48 flex flex-col pb-14'>
            <div className='flex flex-col items-center lg:items-start gap-2 pb-[80px]'>
                <h1 className='font-semibold text-4xl'>Our <span className='text-neon-green'>Values</span></h1>
                <p className='text-center lg:text-start lg:w-3/4'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='bg-footer-black border-l-[1px] border-neon-green px-[30px] py-8'>
                    <h2 className='text-5xl text-gray-500 tracking-tight pb-[30px]'>Integrity</h2>
                    <p>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
                </div>
                <div className='bg-footer-black border-l-[1px] border-neon-green px-[30px] py-8'>
                    <h2 className='text-5xl text-gray-500 tracking-tight pb-[30px]'>Customer Centricity</h2>
                    <p>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
                </div>
                <div className='bg-footer-black border-l-[1px] border-neon-green px-[30px] py-8'>
                    <h2 className='text-5xl text-gray-500 tracking-tight pb-[30px]'>Collaboration</h2>
                    <p>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
                </div>
                <div className='bg-footer-black border-l-[1px] border-neon-green px-[30px] py-8'>
                    <h2 className='text-5xl text-gray-500 tracking-tight pb-[30px]'>Innovation</h2>
                    <p>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>
                </div>
            </div>
        </div>
    )
}

export default Values