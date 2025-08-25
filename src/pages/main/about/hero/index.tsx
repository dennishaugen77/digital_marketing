import { cn } from "@/utils/cn"

export const Hero = () => {
    return (
      <div
        className={cn(
          "relative flex w-full flex-col px-10 pt-40 pb-20 bg-global-color1 bg-size-[50vw_auto] bg-right-bottom bg-no-repeat",
        )}
        style={{ backgroundImage: `url("/images/digital-marketing-agency-hero-img-bg-overlay.svg")` }}
      >
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-full bg-global-color1/70",
          )}
        />
        <div className="relative my-auto flex">
          <div className="max-width mx-auto w-full">
            <div className="clg:mr-[25%] xl:mr-[50%]">
              <p className="clg:text-start clg:leading-20 text-4xl font-semibold text-white lg:text-6xl xl:text-[4.5rem] xl:leading-28 font-primary">
                About 
              </p>
              <p className="cxs:!text-2xl clg:text-start mt-5 text-lg font-semibold text-white font-secondary">
                Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}