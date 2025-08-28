import { useTheme } from "@/provider/ThemeProvider"

export const Hero = () => {
  const { fontFamily } = useTheme()

  return (
    <div className="relative flex w-full flex-col bg-[url(/images/digital-marketing-agency-hero-img-bg.jpg)] bg-cover bg-center">
      <div className="bg-global-color1/70 absolute h-full w-full"></div>
      <div className="relative my-auto flex px-10">
        <div className="max-width mx-auto">
          <div className="clg:mr-[25%] clg:!mb-30 mt-25 mb-7 sm:mb-30 lg:mt-57 lg:!mb-44 xl:mr-[40%]">
            <p className="clg:text-start font-semibold text-white uppercase">
              welcome to delectus
            </p>
            <p className="clg:text-start clg:leading-20 font-primary mt-8 text-5xl font-semibold text-white lg:text-6xl xl:text-[4.5rem] xl:leading-26">
              Leading Internet Marketing Agency Based on Florida.
            </p>
            <p className="csm:text-[20px] clg:text-start font-secondary mt-5 text-lg font-semibold text-white">
              Sollicitudin eros nulla mus donec a quisque convallis integer
              condimentum volutpat felis sed aliquet netus dolor dictumst
              pellentesque.
            </p>
            <div className="cxs:!flex-row mt-15 flex flex-col items-center">
              <div className="bg-primary cxs:w-auto w-full cursor-pointer rounded-lg px-5 py-3 text-[0.9rem] font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
                Get a Free Quote
              </div>
              <div className="flex items-baseline gap-1 py-3 pl-5 text-white">
                <p className="cursor-pointer hover:text-white/75">Learn More</p>
                <img src={"/svg/right-arrow.svg"} width={12}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
