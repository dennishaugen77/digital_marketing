import { SearchBar } from '@/components/searchBar'
import logo from '@/assets/svg/logo.svg'
import downArrow from '@/assets/icons/down-arrow.svg'
import { navigations } from "./dummy"
import { useState } from 'react'

export const Header = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    return (
        <div className='absolute top-0 w-full z-[100]'>
            <div className="relative w-full flex items-center justify-between max-w-6xl mx-auto">
                <div className='flex items-center gap-3'>
                    <div className='py-8 pr-3'><img src={logo} alt="logo" /></div>
                    <div className='flex h-20'>
                        {
                            navigations.map((item, index) => {
                                return <div
                                    key={index}
                                    className='text-white px-5 flex items-center gap-2 relative'
                                    onMouseEnter={() => item.type === 'dropdown' ? setOpenDropdownIndex(index) : setOpenDropdownIndex(null)}
                                    onMouseLeave={() => setOpenDropdownIndex(null)}
                                >
                                    <p className='cursor-pointer'>
                                        {item.name}
                                        {
                                        (item.type === 'dropdown' && openDropdownIndex === index) && <div className='absolute top-17 left-0 bg-white border-t-[3px] border-primary w-50'>
                                        {
                                            item.subList?.map((el, elIndex) => {
                                                return <p key={elIndex} className='hover:text-primary text-black cursor-pointer text-start pl-4 pr-7 py-3'>{el}</p>
                                            })
                                        }
                                    </div>
                                    }
                                    </p>
                                    {
                                        item.type === 'dropdown' && <img src={downArrow} width={20}/>
                                    }
                                </div>
                        })
                        }
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <SearchBar/>
                    <div className='bg-primary text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ease-in-out py-3 px-5 rounded-lg text-sm font-semibold'>Get a Free Quote</div>
                </div>
            </div>
        </div>
        
    )
}