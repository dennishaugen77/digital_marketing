import footerLogo from '@/assets/svg/footer-logo.svg'
import { FooterLogo } from '@/assets/svg/FooterLogo'

export const Footer = () => {
    return (
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