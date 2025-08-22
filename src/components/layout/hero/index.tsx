import rightArror from '@/assets/icons/svg/right-arrow.svg'

export const Hero = () => {
    return (
        <div className='w-full h-lvh relative bg-[url(./assets/images/digital-marketing-agency-hero-img-bg.jpg)] flex flex-col bg-cover bg-center'>
               <div className=' bg-global-color1/70 absolute w-full h-full'></div>
               <div className='relative px-10 my-auto flex'>
                    <div className='mx-auto max-w-7xl'>
                        <div className='xl:mr-[40%] clg:mr-[25%]'>
                            <p className='clg:text-start uppercase text-white font-semibold'>welcome to delectus</p>
                            <p className='clg:text-start xl:text-[5rem] lg:text-6xl text-4xl font-semibold text-white xl:leading-28 clg:leading-20  mt-8'>Leading Internet Marketing Agency Based on Florida.</p>
                            <p className='text-white cxs:text-2xl text-lg clg:text-start font-semibold mt-5'>Sollicitudin eros nulla mus donec a quisque convallis integer condimentum volutpat felis sed aliquet netus dolor dictumst pellentesque.</p>
                            <div className='flex lg:flex-row flex-col items-center mt-10'>
                                <div className='bg-primary text-white cursor-pointer lg:w-auto w-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out py-3 px-5 rounded-lg text-[0.9rem] font-semibold '>Get a Free Quote</div>
                                <div className='text-white py-3 pl-5 flex items-baseline gap-1'><p className='hover:text-white/75 cursor-pointer'>Learn More</p><img src={rightArror} width={12}></img></div>
                            </div>
                        </div>
                    </div>
               </div>
               
            </div>
    )
}