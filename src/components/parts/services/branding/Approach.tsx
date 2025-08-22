import { approachList } from "./dummy"

export const Approach = () => {
    return (
        <div className="bg-primary-light py-24 px-12">
            <div className="max-width w-full mx-auto  flex flex-col divide-y-2 divide- divide-white/30">
                <div className="flex flex-col">
                    <p className="text-white text-xl">Our Approach</p>
                    <p className="text-title text-white font-medium mt-2    ">Insight. Creativity. Technology.</p>
                    <p className="text-white text-lg px-[24%] py-8">Faucibus vestibulum mi adipiscing phasellus sagittis fringilla potenti volutpat quam elit fermentum, viverra faucibus ante fringilla.</p>
                </div>
                <div className="flex  w-full mt-10 gap-15">
                    {
                        approachList.map((el, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <img src={el.icon} width={24}/>
                                    <p className="text-white text-2xl font-medium">{el.title}</p>
                                    <p className="text-white">{el.detail}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>        
    )
}


