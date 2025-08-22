import { QuoteRight } from "@/assets/icons/QuoteRight"
import { Starfull } from "@/assets/icons/Starfull"
import { Starhalf } from "@/assets/icons/Starhalf"
import { Approach } from "@/components/parts/services/branding/Approach"
import { OurWorks } from "@/components/parts/services/branding/OurWorks"

export const Brading = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col bg-background">
                <div className="max-w-[1200px] w-full flex mx-auto py-24 px-10">
                    <div className="w-1/4"></div>
                    <div className="flex flex-col flex-1">
                        <p className=" text-4xl font-medium text-black text-start pr-[30%]">We are helping brands get where they need to be</p>
                        <div className="grid grid-cols-2 gap-3 mt-10">
                            <div className=" pr-20 flex flex-col">
                                <p className="text-start text-global-color2">Euismod tincidunt euismod lectus etiam dolor nulla nec, molestie mi non semper proin id donec sollicitudin massa, egestas tempus, tortor neque, augue velit sit faucibus facilisis massa aenean posuere dui vitae ac risus faucibus turpis accumsan urna vitae commodo.</p>
                                <div className="flex items-center gap-1 cursor-pointer mt-10">
                                    <p className="text-2xl text-black hover:text-primary">Let's work together</p>
                                    <img src="/src/assets/icons/svg/right-arrow-black.svg" width={18} className="mt-1"></img>
                                </div>
                            </div>
                            <p className="text-start text-global-color2 pr-20 ">Dignissim tellus tempor sit faucibus mi diam posuere etiam at fermentum a vestibulum in eget cursus a id adipiscing scelerisque blandit neque, scelerisque velit commodo sit quam vel massa sit aliquam arcu nulla velit magna enim dolor enim eu.</p>
                        </div>  
                    </div>
                </div>  
            </div>

            <Approach/>
            
            <OurWorks/>

            <div className="bg-white flex">
                <div className="max-width w-full mx-auto py-25 px-15 flex gap-12">
                    <QuoteRight className="text-primary w-18 h-18"></QuoteRight>
                    <div className="flex flex-col pr-[24%]">
                        <p className="text-black text-start text-3xl font-semibold leading-7">Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum adipiscing.</p>
                        <img src='/src/assets/icons/svg/user.svg' width={44} className="my-4"/>
                        <p className="text-start uppercase">matthew johnson</p>
                        <div className="flex items-center">
                        <Starfull className="text-primary"/>
                        <Starfull className="text-primary"/>
                        <Starfull className="text-primary"/>
                        <Starfull className="text-primary"/>
                        <Starhalf className="text-primary !w-5 !h-5"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}