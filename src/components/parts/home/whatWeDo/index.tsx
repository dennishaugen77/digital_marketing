import { solutions } from "@/pages/main/home/dummy"

export const WhatWeDo = () => {
    return (
        <div className='pt-24 px-10 pb-16 bg-background flex'>
                <div className='flex flex-col md:flex-row max-w-[1200px] w-full mx-auto '>
                    <p className='uppercase text-primary-light font-semibold w-1/4 mt-2 text-start'>What we do</p>
                    <div className='flex-1'>
                        <div className='flex flex-col border-b-2 border-white'>
                            <p className='cxl:pr-[40%] lg:text-title text-4xl font-semibold text-start text-black mb-10 leading-17'>Full-service Internet Marketing Solutions</p>
                            <p className='text-global-color2 text-start pr-10 mb-10'>Consequat enim mollis mauris vulputate phasellus neque, eros turpis et eu adipiscing id tempor, nascetur elit vitae molestie pulvinar viverra ut eu lectus mi velit cras integer tristique aliquam proin porta tellus elit neque mi velit sed pharetra morbi proin.</p>
                        </div>
                        <div className='grid grid-cols-3 w-full mt-10 gap-7'>
                            {
                                solutions.map((el, index) => {
                                    return (
                                        <div key={index} className='flex flex-col'>
                                            <div className='mx-auto'>{el.icon}</div>
                                            <p className='text-start text-black text-2xl capitalize font-semibold mt-3'>{el.title}</p>
                                            <p className='text-start text-global-color2 mt-3'>{el.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}