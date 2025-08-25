import { QuoteRight } from "@/assets/icons/QuoteRight"
import { Starfull } from "@/assets/icons/Starfull"
import { Starhalf } from "@/assets/icons/Starhalf"
import { Approach } from "@/components/parts/services/branding/Approach"
import { OurWorks } from "@/components/parts/services/branding/OurWorks"
import { Hero } from "../hero"

export const Branding = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="bg-background flex flex-col">
        <div className="mx-auto flex w-full max-w-[1200px] px-10 py-24">
          <div className="w-1/6 md:w-1/4"></div>
          <div className="flex flex-1 flex-col">
            <p className="pr-[30%] text-start text-4xl font-medium text-black">
              We are helping brands get where they need to be
            </p>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex flex-col pr-20">
                <p className="text-global-color2 text-start">
                  Euismod tincidunt euismod lectus etiam dolor nulla nec,
                  molestie mi non semper proin id donec sollicitudin massa,
                  egestas tempus, tortor neque, augue velit sit faucibus
                  facilisis massa aenean posuere dui vitae ac risus faucibus
                  turpis accumsan urna vitae commodo.
                </p>
              </div>
              <p className="text-global-color2 pr-20 text-start">
                Dignissim tellus tempor sit faucibus mi diam posuere etiam at
                fermentum a vestibulum in eget cursus a id adipiscing
                scelerisque blandit neque, scelerisque velit commodo sit quam
                vel massa sit aliquam arcu nulla velit magna enim dolor enim eu.
              </p>
            </div>
            <div className="mt-10 flex cursor-pointer items-center gap-1">
              <p className="hover:text-primary text-2xl text-black">
                Let's work together
              </p>
              <img
                src="/src/assets/icons/svg/right-arrow-black.svg"
                width={18}
                className="mt-1"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <Approach />

      <OurWorks />

      <div className="flex bg-white">
        <div className="max-width mx-auto flex w-full gap-12 px-15 py-25">
          <QuoteRight className="text-primary h-18 w-18"></QuoteRight>
          <div className="flex flex-col md:pr-[24%]">
            <p className="text-start text-3xl leading-7 font-semibold text-black">
              Volutpat commodo at dictum amet tincidunt facilisis id lorem eu
              vitae cursus auctor laoreet fermentum adipiscing.
            </p>
            <img
              src="/src/assets/icons/svg/user.svg"
              width={44}
              className="my-4"
            />
            <p className="text-start uppercase">matthew johnson</p>
            <div className="flex items-center">
              <Starfull className="text-primary" />
              <Starfull className="text-primary" />
              <Starfull className="text-primary" />
              <Starfull className="text-primary" />
              <Starhalf className="text-primary !h-5 !w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
