import { cn } from "@/utils/cn"
import { business } from "../../../components/parts/home/ourServices/dummy"

export const Services = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col py-26 px-10 bg-background relative bg-[url(./assets/images/digital-marketing-agency-arc-stroke-white-grad-2.svg)] bg-[length:50vw_auto] bg-left-bottom bg-no-repeat transition-all duration-300">
                <div className="absolute w-full h-full right-0 bg-[url(./assets/images/digital-marketing-agency-arc-stroke-white-grad-1.svg)] bg-[length:45vw_auto] bg-right-top bg-no-repeat transition-all duration-300"></div>
                <div className="relative flex w-full max-w-[1200px] mx-auto items-center">
                    <div className="flex flex-col w-1/2 pr-16">
                        <p className="uppercase text-primary font-semibold text-start">Our services</p>
                        <p className="lg:text-title leading-18 text-5xl font-semibold text-black mt-8 mb-2 text-start">Take Your Business to the next Level</p>
                        <p className="text-lg text-global-color2 font-normal text-start mb-16 mt-2">Id senectus facilisi enim accumsan ac aliquam suspendisse dapibus morbi ut sed pellentesque elementum velit dictum</p>
                    </div>
                                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                        {
                            business.map((el, index) => {
                                return (
                                    <div key={index} className="bg-white rounded-lg shadow-lg px-8 pb-0 pt-3 hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex justify-center">
                                            {el.icon}
                                        </div>
                                        <p className="font-semibold text-black mb-4 text-center text-xl">{el.title}</p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                </div>
            </div>
            <div className="relative bg-white flex w-full max-w-[1200px] mx-auto items-center py-28 px-10">
                <div className="flex flex-col">
                    {
                        business.map((el, index) => {
                            return (
                                <div key={index} className={cn("flex items-center", index%2 && ' flex-row-reverse', index !== 3 && 'mb-20 ')}>
                                    <div className="w-1/2 pl-12 pr-10">
                                        <p className="text-3xl font-semibold">{el.title}</p>
                                        <p className="text-global-color2 my-7">{el.content}</p>
                                    </div>
                                    <div className={cn("flex-1", !(index % 2) && ' ml-14')}>
                                        <img src={el.img} className="rounded-lg"></img>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}