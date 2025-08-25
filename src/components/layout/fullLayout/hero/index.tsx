import rightArror from "@/assets/icons/svg/right-arrow.svg"

export const Hero = () => {
  return (
    <div className="relative flex h-lvh w-full flex-col bg-[url(/images/digital-marketing-agency-hero-img-bg.jpg)] bg-cover bg-center">
      <div className="bg-global-color1/70 absolute h-full w-full"></div>
      <div className="relative my-auto flex px-10">
        <div className="mx-auto max-w-7xl">
          <div className="clg:mr-[25%] xl:mr-[40%]">
            <p className="clg:text-start font-semibold text-white uppercase">
              welcome to delectus
            </p>
            <p className="clg:text-start clg:leading-20 mt-8 text-4xl font-semibold text-white lg:text-6xl xl:text-[4.5rem] xl:leading-28">
              Leading Internet Marketing Agency Based on Florida.
            </p>
            <p className="cxs:text-2xl clg:text-start mt-5 text-lg font-semibold text-white">
              Sollicitudin eros nulla mus donec a quisque convallis integer
              condimentum volutpat felis sed aliquet netus dolor dictumst
              pellentesque.
            </p>
            <div className="mt-10 flex flex-col items-center lg:flex-row">
              <div className="bg-primary w-full cursor-pointer rounded-lg px-5 py-3 text-[0.9rem] font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black lg:w-auto">
                Get a Free Quote
              </div>
              <div className="flex items-baseline gap-1 py-3 pl-5 text-white">
                <p className="cursor-pointer hover:text-white/75">Learn More</p>
                <img src={rightArror} width={12}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
