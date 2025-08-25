import { RightArrow } from "@/assets/icons/RightArrow"
import { Hero } from "./hero"
import { contactDetail } from "./dummy"

export const Contact = () => {
    return (
        <div className="flex flex-col">
            <Hero/>
            <div className=" bg-background flex py-25 px-15">
                <div className="max-width w-full mx-auto">
                    <div className="flex">
                        <div className="w-1/2 flex flex-col pr-30">
                            <p className="text-primary text-start uppercase">Let's Make it Happens</p>
                            <p className="text-title text-start font-semibold text-global-color3 mt-5">Don't Hesitate To Get in Touch.</p>
                            <p className="text-start text-global-color2 mt-5">Eu feugiat tincidunt vitae, tincidunt purus aliquam pharetra viverra massa vitae mi arcu tortor et cursus tempor netus sit vitae habitasse aliquam eu vel lacinia auctor sed nisl pellentesque morbi molestie condimentum.</p>
                            <p className="text-start text-global-color3 text-2xl font-medium flex items-center gap-2 cursor-pointer group hover:text-primary mt-5">Email Us<RightArrow className="text-global-color group-hover:text-primary !w-5"></RightArrow></p>
                        </div>
                        <div className="px-16 mt-15">
                            {
                                Object.entries(contactDetail).map(([key, value], index) => {
                                    return (
                                        <div key={index} className="mb-10 flex items-start ">
                                            <div className="pb-6 flex  gap-4"> 
                                                {value.icon}
                                                <div className="flex flex-col gap-4">
                                                    <p className="text-start uppercase text-global-color2 font-medium">{key}</p>
                                                    <p className="text-start text-global-color3 text-2xl">{value.val}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}