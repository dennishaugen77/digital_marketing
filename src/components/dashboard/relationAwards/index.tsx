import { cn } from "@/utils/cn"

export const RelationAwards = () => {
    return (
        <div className="max-w-[1200px] px-10 py-24 flex flex-col mx-auto w-full">
            <p className="uppercase text-primary font-semibold">Relation & Awards</p>
            
            <div className="flex flex-col gap-8 mt-11">
                <div className="md:flex  grid grid-cols-1 justify-center items-center md:gap-8">
                    {
                        logoListTop.map((el, index) => {
                            return (
                                <div key={index} className={cn(index === 0 && "shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]", " cursor-pointer mx-auto hover:shadow-[0px_24px_80px_-16px_rgba(0,0,0,0.15)] w-80 h-35 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out")}> 
                                    <img src={el} width={120} height={80}/>
                                </div>
                            )
                        })
                    }

                </div>

                <div className="md:flex grid grid-cols-1 justify-center items-center md:gap-8">
                    {
                        logoListBottom.map((el, index) => {
                            return (
                                <div key={index} className={cn(" hover:shadow-[0px_24px_80px_-16px_rgba(0,0,0,0.15)] cursor-pointer mx-auto w-80 h-35 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out")}> 
                                    <img src={el} width={120} height={80}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const logoListTop = [
    '/src/assets/images/logo1.svg',
    '/src/assets/images/logo2.svg',
    '/src/assets/images/logo3.svg',
    '/src/assets/images/logo4.svg',
]

const logoListBottom = [
    '/src/assets/images/logo5.svg',
    '/src/assets/images/logo6.svg',
    '/src/assets/images/logo7.svg',
]