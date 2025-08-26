import { cn } from "@/utils/cn"
import { business } from "../../../components/parts/home/ourServices/dummy"
import { Hero } from "./hero"

export const Services = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="bg-background relative flex flex-col bg-[url(/images/digital-marketing-agency-arc-stroke-white-grad-2.svg)] bg-[length:50vw_auto] bg-left-bottom bg-no-repeat px-10 py-26 transition-all duration-300">
        <div className="absolute right-0 h-full w-full bg-[url(/images/digital-marketing-agency-arc-stroke-white-grad-1.svg)] bg-[length:45vw_auto] bg-right-top bg-no-repeat transition-all duration-300"></div>
        <div className="relative mx-auto flex csm:!flex-row flex-col w-full max-w-[1200px] items-center">
          <div className="flex csm:!w-1/2 flex-col csm:!pr-16">
            <p className="text-primary font-primary text-start font-semibold uppercase">
              Our services
            </p>
            <p className="lg:text-title font-primary mt-8 mb-2 text-start text-5xl leading-18 font-semibold text-black">
              Take Your Business to the next Level
            </p>
            <p className="text-global-color2 font-secondary mt-2 mb-16 text-start text-lg font-normal">
              Id senectus facilisi enim accumsan ac aliquam suspendisse dapibus
              morbi ut sed pellentesque elementum velit dictum
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
            {business.map((el, index) => {
              return (
                <div
                  key={index}
                  className="rounded-lg bg-white px-8 pt-3 pb-0 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex justify-center">{el.icon}</div>
                  <p className="font-primary mb-4 text-center text-xl font-semibold text-black">
                    {el.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-[1200px] items-center bg-white px-10 py-28">
        <div className="flex flex-col">
          {business.map((el, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "flex items-center csm:!flex-row flex-col-reverse",
                  index % 2 && "csm:!flex-row-reverse",
                  index !== 3 && "csm:!mb-20",
                )}
              >
                <div className="csm:!w-1/2 csm:!pr-10 csm:!pl-12">
                  <p className="font-primary text-3xl font-semibold csm:!mt-0 mt-5 csm:!text-center text-start">
                    {el.title}
                  </p>
                  <p className="text-global-color2 font-secondary csm:!my-7 mt-2 mb-5 csm:!text-center text-start">
                    {el.content}
                  </p>
                </div>
                <div className={cn("flex-1", !(index % 2) && "csm:!ml-14")}>
                  <img src={el.img} className="rounded-lg"></img>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
