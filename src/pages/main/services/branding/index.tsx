import { Approach } from "@/components/parts/services/branding/Approach"
import { OurWorks } from "@/components/parts/services/branding/OurWorks"
import { Hero } from "../hero"
import { AuthorDetail } from "@/components/parts/services/branding/AuthorDetail"

export const Branding = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="bg-background flex flex-col">
        <div className="csm:!py-15 mx-auto flex w-full max-w-[1200px] flex-col px-10 py-10 sm:flex-row md:py-24">
          <div className="w-1/6 md:w-1/4"></div>
          <div className="flex flex-1 flex-col">
            <p className="font-primary text-start text-4xl font-medium text-black md:pr-[30%]">
              We are helping brands get where they need to be
            </p>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex flex-col sm:pr-20">
                <p className="text-global-color2 font-secondary text-start">
                  Euismod tincidunt euismod lectus etiam dolor nulla nec,
                  molestie mi non semper proin id donec sollicitudin massa,
                  egestas tempus, tortor neque, augue velit sit faucibus
                  facilisis massa aenean posuere dui vitae ac risus faucibus
                  turpis accumsan urna vitae commodo.
                </p>
              </div>
              <p className="text-global-color2 font-secondary text-start sm:pr-20">
                Dignissim tellus tempor sit faucibus mi diam posuere etiam at
                fermentum a vestibulum in eget cursus a id adipiscing
                scelerisque blandit neque, scelerisque velit commodo sit quam
                vel massa sit aliquam arcu nulla velit magna enim dolor enim eu.
              </p>
            </div>
            <div className="mt-10 flex cursor-pointer items-center gap-1">
              <p className="hover:text-primary font-secondary text-lg text-black sm:text-2xl">
                Let's work together
              </p>
              <img
                src="/svg/right-arrow-black.svg"
                width={18}
                className="mt-1"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <Approach />

      <OurWorks />

      <AuthorDetail />
    </div>
  )
}
