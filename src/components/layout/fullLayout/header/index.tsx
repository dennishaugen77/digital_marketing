import { SearchBar } from '@/components/atoms/searchBar'
import logo from '@/assets/svg/logo.svg'
import downArrowWhite from '@/assets/icons/svg/down-arrow-white.svg'
import downArrowBlack from '@/assets/icons/svg/down-arrow-black.svg'
import { navigations } from "./dummy"
import { useState } from 'react'
import { ListIcon } from '@/assets/icons/ListIcon'
import { cn } from '@/utils/cn'

export const Header = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const [openList, setList] = useState<boolean>(false);

    return (
        <div className='absolute top-0 w-full z-30 px-10'>
            <div className="relative w-full flex items-center justify-between max-w-7xl mx-auto">
                <div className='flex items-center gap-3'>
                    <div className='py-8 pr-3'><img src={logo} alt="logo" /></div>
                    <div className='h-20 cxl:!flex hidden'>
                        {
                            navigations.map((item, index) => {
                                return <div
                                    key={index}
                                    className='text-white px-5 flex items-center gap-2 relative'
                                    onMouseEnter={() => item.type === 'dropdown' ? setOpenDropdownIndex(index) : setOpenDropdownIndex(null)}
                                    onMouseLeave={() => setOpenDropdownIndex(null)}
                                >
                                    <p className='cursor-pointer'>
                                        { item.name }
                                        {
                                            (item.type === 'dropdown' && openDropdownIndex === index) && 
                                            <div className='absolute top-17 left-0 bg-white border-t-[3px] border-primary w-50'>
                                                {
                                                    item.subList?.map((el, elIndex) => {
                                                        return <p key={elIndex} className='hover:text-primary text-black cursor-pointer text-start pl-4 pr-7 py-3'>{el}</p>
                                                    })
                                                }
                                            </div>
                                        }
                                    </p>
                                    { item.type === 'dropdown' && <img src={downArrowWhite} width={20}/> }
                                </div>
                        })
                        }
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <SearchBar/>
                    <div className='bg-primary cxl:!block hidden text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ease-in-out py-3 px-5 rounded-lg text-sm font-semibold'>Get a Free Quote</div>
                    
                    <div className='cursor-pointer cxl:!hidden block' onClick={() => setList(!openList)}><ListIcon/></div>
                </div>
                <div className={cn('absolute top-22  w-full bg-white left-0', openList ? 'block' : 'hidden')}>
                    {
                        navigations.map((el, index) => {
                            return (
                                <div key={index} onClick={() => setList(false)}>
                                    <p className='text-xl cursor-pointer hover:text-primary text-start px-10 py-2 flex justify-between'>
                                        {el.name}
                                        { el.type==='dropdown' && <img src={downArrowBlack} width={20}/> }
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}