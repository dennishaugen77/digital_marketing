import { QuoteRight } from "@/assets/icons/QuoteRight"
import { Starfull } from "@/assets/icons/Starfull"
import { Starhalf } from "@/assets/icons/Starhalf"

export const AuthorDetail = () => {
  return (
    <div className="flex bg-white">
      <div className="max-width mx-auto flex w-full flex-col gap-12 px-8 py-15 md:flex-row md:px-15 md:py-25">
        <QuoteRight className="text-primary !h-03 !w-10 md:!h-18 md:!w-18"></QuoteRight>
        <div className="flex flex-col md:pr-[24%]">
          <p className="font-secondary text-start text-2xl leading-7 font-semibold text-black md:text-3xl">
            Volutpat commodo at dictum amet tincidunt facilisis id lorem eu
            vitae cursus auctor laoreet fermentum adipiscing.
          </p>
          <img src="/svg/user.svg" width={44} className="my-4" />
          <p className="font-secondary text-global-color2 text-start text-sm font-medium uppercase">
            matthew johnson
          </p>
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
  )
}
