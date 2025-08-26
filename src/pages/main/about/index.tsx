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

      <div className="mx-auto grid w-full max-w-[800px] grid-cols-2 justify-between gap-5 rounded-md bg-white p-16 md:flex md:max-w-[1200px]">
        <div className="flex flex-col items-center md:flex-row">
          <div className="bg-primary flex h-11 w-12 items-start justify-center rounded-[300%] md:h-20">
            <img src="/svg/google.svg" width={40}></img>
          </div>
          <div className="flex flex-col items-center md:ml-3">
            <p className="font-secondary text-start text-3xl font-bold md:text-6xl">
              4.8
            </p>
            <p className="font-secondary font-semibold">200+ Reviews</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="bg-primary flex h-11 w-12 items-start justify-center rounded-[300%] md:h-20">
            <img src="/svg/facebook.svg" width={30} className="mt-2"></img>
          </div>
          <div className="flex flex-col items-center md:ml-3">
            <p className="font-secondary text-start text-3xl font-bold md:text-6xl">
              4.6
            </p>
            <p className="font-secondary font-semibold">400+ Reviews</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="bg-primary flex h-11 w-12 items-start justify-center rounded-[300%] md:h-20">
            <img src="/svg/map.svg" width={30} className="mt-2"></img>
          </div>
          <div className="flex flex-col items-center md:ml-3">
            <p className="font-secondary text-start text-3xl font-bold md:text-6xl">
              4.8
            </p>
            <p className="font-secondary font-semibold">100+ Reviews</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="bg-primary flex h-11 w-12 items-start justify-center rounded-[300%] md:h-20">
            <img src="/svg/star.svg" width={25} className="mt-2"></img>
          </div>
          <div className="flex flex-col items-center md:ml-3">
            <p className="font-secondary text-start text-3xl font-bold md:text-6xl">
              4.7
            </p>
            <p className="font-secondary font-semibold">200+ Reviews</p>
          </div>
        </div>
      </div>

      <div className="bg-background flex flex-col divide-y-2 divide-white px-10 pt-24 pb-16">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col md:flex-row pb-20">
          <div className="flex flex-col md:w-1/2">
            <p className="text-primary-light font-primary mt-2 mb-4 text-start font-semibold uppercase">
              What we do
            </p>
            <p className="lg:text-title font-primary mb-10 text-start text-4xl leading-17 font-semibold text-black">
              Full-service Internet Marketing Solutions
            </p>
          </div>

          <div className="flex-1">
            <div className="flex flex-col border-b-2 border-white">
              <p className="text-global-color2 font-secondary mb-10 pr-10 text-start">
                Consequat enim mollis mauris vulputate phasellus neque, eros
                turpis et eu adipiscing id tempor, nascetur elit vitae molestie
                pulvinar viverra ut eu lectus mi velit cras integer tristique
                aliquam proin porta tellus elit neque mi velit sed pharetra
                morbi proin.
              </p>
            </div>
            <div className="mt-10 grid w-full csm:!grid-cols-3 grid-cols-1 gap-7">
              {solutions.map((el, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="mx-auto">{el.icon}</div>
                    <p className="font-primary mt-3 text-start text-2xl font-semibold text-black capitalize">
                      {el.title}
                    </p>
                    <p className="text-global-color2 font-secondary mt-3 text-start">
                      {el.content}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="relative flex px-10 pb-24">
          <div className="mx-auto mt-40 grid w-full max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3">
            {reviews.map((el, index) => {
              return (
                <div key={index} className="md:max-w-90">
                  <div className="flex gap-0.5">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => {
                        return <Starfull className="text-primary" />
                      })}
                  </div>
                  <p className="text-global-color3 font-secondary my-5 text-start">
                    {el.review}
                  </p>
                  <div className="flex items-center gap-2">
                    <img src={el.avatar} width={40} className="rounded-full" />
                    <p className="text-global-color3 font-secondary text-start uppercase">
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
