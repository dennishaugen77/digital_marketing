import { cn } from "@/utils/cn"
import { works } from "./dummy"

export const OurWorks = () => {
    return (
        <div className="bg-background py-26 px-16 flex">
            <div className="max-width w-full mx-auto flex-col flex">
                <p className="text-black text-5xl font-medium text-start pb-5">Our Works</p>
                <p className="text-global-color2 text-lg text-start font-medium pr-[50%] pb-15">Commodo ultricies lacus, faucibus nisl, ut vulputate nullam mattis placerat dolor nec diam neque consequat ac, vel consectetur integer habitant pharetra vitae.</p>
                <div className="grid grid-cols-2">
                    {
                        works.map((el, index) => {
                            return (
                                <div key={index} className={cn(index%2 ? 'pl-24 mt-30': 'pr-24', "flex flex-col")}>
                                    <img src={el.img}/>
                                    <p className="text-4xl font-medium text-start pt-6">{el.title}</p>
                                    <p className="text-global-color2 text-lg text-start font-light pt-3">{el.detail}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}