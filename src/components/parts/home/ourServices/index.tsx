import { business } from "./dummy"

export const OurServices = () => {
  return (
    <div className="bg-background relative flex bg-[url(./images/digital-marketing-agency-arc-stroke-white-grad-2.svg)] lg:bg-[length:50vw_auto] bg-[length:70vw_auto] bg-left-bottom bg-no-repeat px-10 transition-all duration-300">
      <div className="absolute right-0 h-full w-full bg-[url(./images/digital-marketing-agency-arc-stroke-white-grad-1.svg)] lg:bg-[length:45vw_auto] bg-[length:70vw_auto] bg-right-top bg-no-repeat transition-all duration-300"></div>
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col lg:py-26 sm:py-18 py-14">
        <p className="text-primary font-primary text-center font-semibold uppercase">
          Our services
        </p>
        <p className="lg:text-title font-primary mt-6 mb-2 text-center text-3xl font-medium text-black md:text-5xl">
          Take Your Business to the next Level
        </p>
        <p className="text-global-color2 cxl:px-60 clg:px-20 font-secondary mb-16 text-center text-xl font-normal">
          Id senectus facilisi enim accumsan ac aliquam suspendisse dapibus
          morbi ut sed pellentesque elementum velit dictum
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {business.map((el, index) => {
            return (
              <div
                key={index}
                className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-6 flex justify-start">{el.icon}</div>
                <p className="font-primary mb-4 text-start text-2xl font-semibold text-black">
                  {el.title}
                </p>
                <p className="text-global-color2 font-secondary text-start text-lg leading-relaxed">
                  {el.content}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
