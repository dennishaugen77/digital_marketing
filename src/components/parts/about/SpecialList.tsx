import { specialistDetail } from "./dummy"
import { QuoteRight } from "@/assets/icons/QuoteRight"

export const Specialist = () => {
  return (
    <div className="bg-background flex">
      <div className="max-width mx-auto flex w-full flex-col divide-y-1 divide-white px-15 py-26">
        <div className="flex flex-col md:flex-row md:pb-25">
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
          <div className="max-width mx-auto flex w-full flex-col gap-12 pt-25 md:flex-row md:px-15">
            <QuoteRight className="text-primary h-10 w-10 md:!h-18 md:!w-18"></QuoteRight>
            <div className="flex flex-col md:pr-[24%]">
              <p className="font-secondary text-start text-3xl leading-7 font-semibold text-black">
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
