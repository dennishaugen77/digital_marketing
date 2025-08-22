import { FooterLogo } from '@/assets/svg/FooterLogo'

export const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-[#26262c]'>
                <div className='max-w-[1200px] flex md:flex-row flex-col mx-auto py-28 w-full px-10 gap-10 md:divide-x-1 md:divide-y-0 divide-y-1 divide-gray-300'>
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
            <div className='flex bg-background '>
            <div className="flex flex-col divide-y-2 divide-white max-w-7xl w-full mx-auto">
                <div className="px-10 pt-24 pb-16 w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                    <div className='max-w-50 mx-auto'>
                            <FooterLogo style={{ color: 'var(--color-primary)', margin: '0 auto' }}/>
                        <p className='sm:text-start text-xl text-global-color2 text-center'>Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum.</p>
                    </div>
                    <div className='max-w-50 mx-auto'>
                        <p className='sm:text-start text-center text-2xl text-black'>Service</p>
                        <div className='flex flex-col  mt-5 '>
                            {
                                serviceList.map((el, index) => {
                                    return (
                                        <p className='text-center hover:text-primary sm:text-start cursor-pointer py-0.5' key={index}>{el}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='max-w-50 mx-auto'>
                        <p className='sm:text-start text-center text-2xl text-black'>Agency</p>
                        <div className='flex flex-col mt-5 '>
                            {
                                agencyList.map((el, index) => {
                                    return (
                                        <p className='text-center hover:text-primary sm:text-start cursor-pointer py-0.5' key={index}>{el}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='max-w-50 mx-auto'>
                        <p className='sm:text-start text-center text-2xl text-black'>Contact Info</p>
                        <div className='flex flex-col mt-5 '>
                            {
                                contactList.map((el, index) => {
                                    return (
                                        <p className='text-center hover:text-primary sm:text-start cursor-pointer py-0.5' key={index}>{el}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="py-10 px-10 text-global-color2">© 2025 Digital Marketing Agency | Powered by Digital Marketing Agency</div>
            </div>
        </div>
        </div>
        
    )
}

const serviceList = [
    'SEO',
    'Digital Marketing',
    'Digital Strategy',
    'CRO',
    'Analytics'
] 

const agencyList = [
    'About Us',
    'Our Team',
    'Careers',
    'News & Blog',
    'Contact Us',
]

const contactList = [
    '123 Demo St, Lakeland, FL 45678, United States.',
    '+1 123-456-7890',
    'mail@example.com'
]