import { cn } from "@/utils/cn"
import { works } from "./dummy"

export const OurWorks = () => {
  return (
    <div className="bg-background csm:!py-15 flex px-8 py-10 md:px-16 md:!py-26">
      <div className="max-width mx-auto flex w-full flex-col">
        <p className="font-primary pb-5 text-start text-3xl font-medium text-black sm:text-4xl md:text-5xl">
          Our Works
        </p>
        <p className="text-global-color2 font-secondary text-title3 pb-15 text-start font-medium md:md:pr-[50%]">
          Commodo ultricies lacus, faucibus nisl, ut vulputate nullam mattis
          placerat dolor nec diam neque consequat ac, vel consectetur integer
          habitant pharetra vitae.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {works.map((el, index) => {
            return (
              <div
                key={index}
                className={cn(
                  index % 2
                    ? "sm:mt-20 sm:pl-14 md:mt-30 md:pl-24"
                    : "sm:pr-14 md:pr-24",
                  "mt-6 flex flex-col sm:mt-0",
                )}
              >
                <img src={el.img} />
                <p className="font-primary pt-6 text-start text-2xl font-medium sm:text-3xl md:text-4xl">
                  {el.title}
                </p>
                <p className="text-global-color2 font-secondary pt-3 text-start text-base font-light sm:text-lg">
                  {el.detail}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
