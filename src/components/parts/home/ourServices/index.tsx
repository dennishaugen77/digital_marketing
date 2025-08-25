import { business } from "./dummy"

export const OurServices = () => {
  return (
    <div className="bg-background relative flex bg-[url(./assets/images/digital-marketing-agency-arc-stroke-white-grad-2.svg)] bg-[length:50vw_auto] bg-left-bottom bg-no-repeat px-10 py-26 transition-all duration-300">
      <div className="absolute right-0 h-full w-full bg-[url(./assets/images/digital-marketing-agency-arc-stroke-white-grad-1.svg)] bg-[length:45vw_auto] bg-right-top bg-no-repeat transition-all duration-300"></div>
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col">
        <p className="text-primary text-center font-semibold uppercase font-primary">
          Our services
        </p>
        <p className="lg:text-title mt-6 mb-2 text-center text-5xl font-semibold text-black font-primary">
          Take Your Business to the next Level
        </p>
        <p className="text-global-color2 cxl:px-60 clg:px-20 mb-16 text-center text-lg font-normal font-secondary">
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
                <div className="mb-6 flex justify-center">{el.icon}</div>
                <p className="mb-4 text-start text-2xl font-semibold text-black font-primary">
                  {el.title}
                </p>
                <p className="text-global-color2 text-start text-base leading-relaxed font-secondary">
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
