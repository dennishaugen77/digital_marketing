
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from '@/provider/ThemeProvider'
import rightArror from '@/assets/icons/right-arrow.svg'

export const Homepage = () => {
    const { themeMode, switchTheme } = useTheme();

    return (
        <div className='w-full relative'>
            <Header/>

            <div className='w-full h-lvh relative bg-[url(./assets/images/digital-marketing-agency-hero-img-bg.jpg)] flex flex-col bg-cover bg-center'>
               <div className=' bg-global-color1/70 absolute w-full h-full'></div>
               <div className='relative px-10 my-auto flex'>
                    <div className='mx-auto max-w-7xl'>
                        <div className='mr-[40%] '>
                            <p className='text-start uppercase text-white'>welcome to delectus</p>
                            <p className='text-start text-[5rem] text-white leading-28'>Leading Internet Marketing Agency Based on Florida.</p>
                            <p className='text-white text-2xl text-start font-semibold'>Sollicitudin eros nulla mus donec a quisque convallis integer condimentum volutpat felis sed aliquet netus dolor dictumst pellentesque.</p>
                            <div className='flex items-center'>
                                <div className='bg-primary text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ease-in-out py-3 px-5 rounded-lg text-[0.9rem] font-semibold '>Get a Free Quote</div>
                                <div className='text-white py-3 pl-5 flex items-baseline gap-1'><p className='hover:text-white/75 cursor-pointer'>Learn More</p><img src={rightArror} width={12}></img></div>
                            </div>
                        </div>
                    </div>
               </div>
               
            </div>
            <div className='pt-24 px-10 pb-16 bg-background flex'>
                <div className='flex max-w-[1200px] w-full mx-auto '>
                    <p className='uppercase text-primary-light font-semibold w-1/4 mt-2 text-start'>What we do</p>
                    <div className='flex-1'>
                        <div className='flex flex-col border-b-2 border-white'>
                            <p className='pr-[40%] text-[3.5rem] font-semibold text-start text-black mb-10 leading-17'>Full-service Internet Marketing Solutions</p>
                            <p className='text-global-color2 text-start pr-10 mb-10'>Consequat enim mollis mauris vulputate phasellus neque, eros turpis et eu adipiscing id tempor, nascetur elit vitae molestie pulvinar viverra ut eu lectus mi velit cras integer tristique aliquam proin porta tellus elit neque mi velit sed pharetra morbi proin.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}



