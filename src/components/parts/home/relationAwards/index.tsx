import { cn } from "@/utils/cn"

export const RelationAwards = () => {
  return (
    <div className="flex w-full px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col py-24">
        <p className="text-primary font-primary font-semibold uppercase">
          Relation & Awards
        </p>

        <div className="mt-11 flex flex-col gap-6">
          <div className="flex items-center justify-center md:flex md:gap-8">
            {logoListTop.map((el, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    index === 0 && "shadow-[0px_0px_10px_0px_rgb(0,0,0,0.5)]",
                    "mx-auto flex h-35 cursor-pointer items-center justify-center rounded-md transition-all duration-300 ease-in-out hover:shadow-[0px_24px_80px_-16px_rgba(0,0,0,0.15)] !w-80",
                  )}
                >
                  <img src={el} width={100} height={80} />
                </div>
              )
            })}
          </div>

          <div className="flex">
            <div className=" mx-auto flex items-center justify-center md:flex md:gap-6">
              {logoListBottom.map((el, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      "mx-auto flex h-35 cursor-pointer items-center justify-center rounded-md transition-all duration-300 ease-in-out hover:shadow-[0px_24px_80px_-16px_rgba(0,0,0,0.15)] !w-80",
                    )}
                  >
                    <img src={el} width={100} height={80} />
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

const logoListTop = [
  "/images/logo1.svg",
  "/images/logo2.svg",
  "/images/logo3.svg",
  "/images/logo4.svg",
]

const logoListBottom = [
  "/images/logo5.svg",
  "/images/logo6.svg",
  "/images/logo7.svg",
]
