import { cn } from "@/utils/cn"
import { works } from "./dummy"

export const OurWorks = () => {
  return (
    <div className="bg-background flex md:px-16 px-8 py-26">
      <div className="max-width mx-auto flex w-full flex-col">
        <p className="font-primary pb-5 text-start text-5xl font-medium text-black">
          Our Works
        </p>
        <p className="text-global-color2 font-secondary pb-15 text-start text-lg font-medium md:md:pr-[50%]">
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
                <p className="font-primary pt-6 text-start text-4xl font-medium">
                  {el.title}
                </p>
                <p className="text-global-color2 font-secondary pt-3 text-start text-lg font-light">
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
