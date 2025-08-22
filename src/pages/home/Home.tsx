
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useTheme } from '@/provider/ThemeProvider'
import { WhatWeDo } from '@/components/dashboard/whatWeDo'
import { Hero } from '@/components/layout/hero'
import { OurServices } from '@/components/dashboard/ourServices'
import { RelationAwards } from '@/components/dashboard/relationAwards'
import { Reviews } from '@/components/dashboard/reviews'
import { CustomizerDrawer } from '@/components/ui/CustomizerDrawer'

export const Homepage = () => {
    const { themeMode, switchTheme } = useTheme();

    return (
        <div className='w-full lex flex flex-col relative'>
            <Header/>

            {/* <CustomizerDrawer/> */}

            <Hero/>

            <WhatWeDo/>

            <div>
                <img src="/src/assets/images/digital-marketing-agency-about-us-full-width-img.jpg"></img>
            </div>

            <OurServices/>

            <RelationAwards/>

            <Reviews/>

            <div className='bg-[#26262c]'>
                <div className='max-w-[1200px] flex md:flex-row flex-col mx-auto py-28 w-full px-10 gap-10 md:divide-x-1 divide-y-1 divide-gray-300'>
                    <div className='md:w-1/2  flex flex-col md:pr-25 pb-10'>
                        <p className='text-white text-start text-4xl mb-4 font-semibold'>Ready to take  your internet marketing to the next level?</p>
                        <p className='text-white text-start font-semibold'>Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus lorem ac pharetra, nunc mi egestas diam id nisl consequat aliquam et nunc justo.</p>
                        <p className="text-white text-start mt-8">Risus tincidunt in laoreet risus dignissim montes, velit egestas eu nec et in tincidunt amet, etiam at turpis adipiscing volutpat amet, adipiscing purus elementum risus, vitae euismod leo amet eget quam enim blandit diam quis diam proin enim suspendisse massa.</p>
                    </div>
                    <div className='flex flex-col md:px-20 gap-5 flex-1'>
                        <p className='text-white text-start font-semibold text-4xl mb-5'>Let's talk</p>
                        <input placeholder='Full name' className='bg-white py-3 px-4'></input>
                        <input placeholder='Email address' className='bg-white py-3 px-4'></input>
                        <textarea placeholder='Your message' className='bg-white py-4 px-4'></textarea>
                        <div className='flex'>
                            <div className='bg-primary text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ease-in-out py-3 px-5 rounded-lg text-sm font-semibold'>Get a Free Quote</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}



