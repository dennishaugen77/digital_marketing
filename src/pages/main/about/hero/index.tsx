import { cn } from "@/utils/cn"

export const Hero = () => {
  return (
    <div
      className={cn(
        "bg-global-color1 relative flex w-full flex-col bg-size-[50vw_auto] bg-right-bottom bg-no-repeat px-10 pt-40 pb-20",
      )}
      style={{
        backgroundImage: `url("/images/digital-marketing-agency-hero-img-bg-overlay.svg")`,
      }}
    >
      <div
        className={cn(
          "bg-global-color1/70 absolute top-0 left-0 h-full w-full",
        )}
      />
      <div className="relative my-auto flex">
        <div className="max-width mx-auto w-full">
          <div className="clg:mr-[25%] xl:mr-[50%]">
            <p className="clg:text-start clg:leading-20 font-primary text-4xl font-semibold text-white lg:text-6xl xl:text-[4.5rem] xl:leading-28">
              About
            </p>
            <p className="csm:!text-2xl clg:text-start font-secondary mt-5 text-lg font-semibold text-white">
              Sollicitudin eros nulla mus donec quisque convallis integer
              condimentum volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
