import { Hero } from "./hero"
import { Specialist } from "@/components/parts/about/SpecialList"
import { solutions } from "../home/dummy"
import { reviews } from "@/components/parts/home/reviews/dummy"
import { Starfull } from "@/assets/icons/Starfull"

export const About = () => {
  return (
    <div className="flex flex-col">
      <Hero />

      <Specialist />

      <div className="bg-background flex">
        <img
          src="/images/digital-marketing-agency-about-us-full-width-img.jpg"
          className="mx-auto"
        ></img>
      </div>

      <div className="mx-auto grid w-full max-w-[800px] grid-cols-2 justify-between gap-5 rounded-md bg-white p-5 md:flex md:max-w-[1200px] md:p-16">
        <div className="flex flex-col items-center md:flex-row">
          <div className="bg-primary mb-auto flex items-start justify-center rounded-full p-[3px]">
            <img src="/svg/google.svg" width={47}></img>
          </div>
          <div className="flex flex-col items-center md:ml-3">
            <p className="font-secondary md:text-extra text-start text-3xl leading-14 font-bold">
              4.8
            </p>
            <p className="font-secondary font-semibold">200+ Reviews</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="bg-primary mb-auto flex items-start justify-center rounded-full p-2">
            <img src="/svg/facebook.svg" width={35}></img>
          </div>
          <div className="flex flex-col items-center md:ml-3">
            <p className="font-secondary md:text-extra text-start text-3xl leading-14 font-bold">
              4.6
            </p>
            <p className="font-secondary font-semibold">400+ Reviews</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="bg-primary mb-auto flex items-start justify-center rounded-full p-2">
            <img src="/svg/map.svg" width={35}></img>
          </div>
          <div className="flex flex-col items-center md:ml-3">
            <p className="font-secondary md:text-extra text-start text-3xl leading-14 font-bold">
              4.8
            </p>
            <p className="font-secondary font-semibold">100+ Reviews</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="bg-primary mb-auto flex items-start justify-center rounded-full p-2">
            <img src="/svg/star.svg" width={33}></img>
          </div>
          <div className="flex flex-col items-center md:ml-3">
            <p className="font-secondary md:text-extra text-start text-3xl leading-14 font-bold">
              4.7
            </p>
            <p className="font-secondary font-semibold">200+ Reviews</p>
          </div>
        </div>
      </div>

      <div className="bg-background flex flex-col divide-y-2 divide-white px-10 pt-24 pb-16">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col pb-10 md:flex-row md:pb-20">
          <div className="flex flex-col md:w-1/2">
            <p className="text-primary-light font-primary mt-2 mb-4 text-start font-semibold uppercase">
              What we do
            </p>
            <p className="lg:text-title font-primary mb-10 text-start text-4xl leading-10 font-semibold text-black md:leading-17">
              Full-service Internet Marketing Solutions
            </p>
          </div>

          <div className="flex-1">
            <div className="flex flex-col border-b-2 border-white">
              <p className="text-global-color2 font-secondary text-title3 mb-10 pr-10 text-start">
                Consequat enim mollis mauris vulputate phasellus neque, eros
                turpis et eu adipiscing id tempor, nascetur elit vitae molestie
                pulvinar viverra ut eu lectus mi velit cras integer tristique
                aliquam proin porta tellus elit neque mi velit sed pharetra
                morbi proin.
              </p>
            </div>
            <div className="csm:!grid-cols-3 mt-10 grid w-full grid-cols-1 gap-7">
              {solutions.map((el, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="mx-auto">{el.icon}</div>
                    <p className="font-primary text-start text-2xl font-semibold text-black capitalize md:mt-3">
                      {el.title}
                    </p>
                    <p className="text-global-color2 font-secondary text-title3 mt-3 text-start">
                      {el.content}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="relative flex md:px-10 md:pb-24">
          <div className="mx-auto mt-10 grid w-full max-w-[1200px] grid-cols-1 gap-y-10 sm:mt-20 md:mt-40 md:grid-cols-3 md:gap-4">
            {reviews.map((el, index) => {
              return (
                <div key={index} className="md:max-w-90">
                  <div className="flex gap-0.5">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => {
                        return <Starfull className="text-primary" key={index} />
                      })}
                  </div>
                  <p className="text-global-color3 font-secondary text-title3 my-5 text-start">
                    {el.review}
                  </p>
                  <div className="flex items-center gap-2">
                    <img src={el.avatar} width={40} className="rounded-full" />
                    <p className="text-global-color3 font-secondary text-start text-sm uppercase sm:text-base">
                      {el.name}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
