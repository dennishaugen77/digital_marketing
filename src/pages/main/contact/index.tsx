import { RightArrow } from "@/assets/icons/RightArrow"
import { Hero } from "./hero"
import { contactDetail } from "./dummy"

export const Contact = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="bg-background flex px-15 py-25">
        <div className="max-width mx-auto w-full">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:w-1/2 md:pr-30">
              <p className="text-primary font-primary text-start uppercase">
                Let's Make it Happens
              </p>
              <p className="cxl:!text-title text-global-color3 font-primary mt-5 text-start text-4xl font-semibold">
                Don't Hesitate To Get in Touch.
              </p>
              <p className="text-global-color2 font-secondary mt-5 text-start">
                Eu feugiat tincidunt vitae, tincidunt purus aliquam pharetra
                viverra massa vitae mi arcu tortor et cursus tempor netus sit
                vitae habitasse aliquam eu vel lacinia auctor sed nisl
                pellentesque morbi molestie condimentum.
              </p>
              <p className="text-global-color3 cxl:!text-2xl group hover:text-primary font-secondary mt-5 flex cursor-pointer items-center gap-2 text-start text-lg font-medium">
                Email Us
                <RightArrow className="text-global-color group-hover:text-primary cls:!w-5 !w-3"></RightArrow>
              </p>
            </div>
            <div className="mt-15 md:px-16">
              {Object.entries(contactDetail).map(([key, value], index) => {
                return (
                  <div
                    key={index}
                    className="cxl:mb-8 mb-5 flex items-start md:mb-10"
                  >
                    <div className="flex gap-4 pb-6">
                      {value.icon}
                      <div className="flex flex-col gap-4">
                        <p className="text-global-color2 font-primary text-start text-sm font-medium uppercase md:text-base">
                          {key}
                        </p>
                        <p className="text-global-color3 cxl:text-2xl font-secondary text-xm text-start">
                          {value.val}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
