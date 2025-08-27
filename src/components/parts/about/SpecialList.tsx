import { specialistDetail } from "./dummy"
import { QuoteRight } from "@/assets/icons/QuoteRight"

export const Specialist = () => {
  return (
    <div className="bg-background flex">
      <div className="max-width mx-auto flex w-full flex-col divide-y-1 divide-white px-10 md:py-26 py-15">
        <div className="flex flex-col md:flex-row md:pb-25 pb-15">
          <div className="md:w-1/2">
            <p className="md:text-title text-global-color3 font-primary text-start text-5xl font-semibold">
              {specialistDetail.title}
            </p>
          </div>
          <div className="text-global-color2 mt-3 flex flex-1 flex-col gap-4 md:mt-0">
            {specialistDetail.detail.map((el, index) => {
              return (
                <p key={index} className="font-secondary text-start">
                  {el}
                </p>
              )
            })}
          </div>
        </div>
        <div className="flex">
          <div className="max-width mx-auto flex w-full flex-col md:gap-12 gap-5 md:pt-25 pt-10 md:flex-row md:px-15">
            <QuoteRight className="text-primary h-4 w-4 md:!h-18 md:!w-18"></QuoteRight>
            <div className="flex flex-col md:pr-[24%]">
              <p className="font-secondary text-start md:text-3xl text-2xl leading-10 font-medium text-black">
                Since the beginning rhoncus ut enim, elit amet nisl, tempor
                etiam eget vestibulum, amet, sem porttitor ultrices tristique
                quis metus fringilla etiam tellus sed sit vestibulum blandit.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={specialistDetail.avatar}
                  width={44}
                  className="my-4 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-primary text-start font-semibold uppercase">
                    {specialistDetail.name}
                  </p>
                  <p className="text-global-color2 font-primary text-start text-xs">
                    {specialistDetail.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
