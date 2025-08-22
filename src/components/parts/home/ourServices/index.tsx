import { business } from './dummy'

export const OurServices = () => {
    return (
        <div className="flex py-26 px-10 bg-background relative bg-[url(./assets/images/digital-marketing-agency-arc-stroke-white-grad-2.svg)] bg-[length:50vw_auto] bg-left-bottom bg-no-repeat transition-all duration-300">
            <div className="absolute w-full h-full right-0 bg-[url(./assets/images/digital-marketing-agency-arc-stroke-white-grad-1.svg)] bg-[length:45vw_auto] bg-right-top bg-no-repeat transition-all duration-300"></div>
            <div className="relative flex flex-col w-full max-w-[1200px] mx-auto">
                <p className="uppercase text-primary font-semibold text-center">Our services</p>
                <p className="lg:text-title text-5xl font-semibold text-black mt-6 mb-2 text-center">Take Your Business to the next Level</p>
                <p className="text-lg text-global-color2 font-normal cxl:px-60 clg:px-20 text-center mb-16">Id senectus facilisi enim accumsan ac aliquam suspendisse dapibus morbi ut sed pellentesque elementum velit dictum</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        business.map((el, index) => {
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex justify-center mb-6">
                                        {el.icon}
                                    </div>
                                    <p className="font-semibold text-black mb-4 text-start text-2xl">{el.title}</p>
                                    <p className="text-global-color2 text-base leading-relaxed text-start">{el.content}</p>
                                </div>
                            )
                        })
                    }
                    
                </div>

            </div>
        </div>
    )
} 