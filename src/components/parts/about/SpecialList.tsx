import { specialistDetail } from "./dummy"
import { QuoteRight } from "@/assets/icons/QuoteRight"

export const Specialist = () => {
    return (
        <div className="flex bg-background">
            <div className="max-width w-full mx-auto flex flex-col py-26 px-15 divide-y-1 divide-white">
                <div className="flex pb-25">
                    <div className="w-1/2">
                        <p className="text-start text-title font-medium text-global-color3">{specialistDetail.title}</p>
                    </div>
                    <div className="flex flex-col gap-4 flex-1 text-global-color2">
                        {
                            specialistDetail.detail.map((el, index) => {
                                return (
                                    <p key={index}>{el}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex">
                    <div className="max-width mx-auto flex w-full gap-12 px-15 pt-25">
                        <QuoteRight className="text-primary h-18 w-18"></QuoteRight>
                        <div className="flex flex-col md:pr-[24%]">
                            <p className="text-start text-3xl leading-7 font-semibold text-black">
                            Volutpat commodo at dictum amet tincidunt facilisis id lorem eu
                            vitae cursus auctor laoreet fermentum adipiscing.
                            </p>
                            <div className="flex gap-4 items-center">
                                <img src={specialistDetail.avatar} width={44} className="my-4 rounded-full" />
                                <div className="flex flex-col">
                                    <p className="text-start uppercase font-semibold">{specialistDetail.name}</p>
                                    <p className="text-start text-xs text-global-color2">{specialistDetail.role}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}