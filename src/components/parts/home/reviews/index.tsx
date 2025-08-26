import { reviews } from "./dummy"

export const Reviews = () => {
  return (
    <div className="bg-primary-light relative mt-20 flex px-10 py-24">
      <div className="mx-auto mt-40 grid w-full max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3">
        {reviews.map((el, index) => {
          return (
            <div key={index} className="md:max-w-90">
              <div className="flex gap-0.5">
                {Array(5)
                  .fill(0)
                  .map((_, index) => {
                    return <img key={index} src="/svg/star.svg" width={16} />
                  })}
              </div>
              <p className="my-5 text-start text-white">{el.review}</p>
              <div className="flex items-center gap-2">
                <img src="/svg/user.svg" width={40} />
                <p className="font-secondary text-start text-white uppercase">
                  {el.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="absolute top-0 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 px-10">
        <div className="border-primary mx-auto grid w-full max-w-[800px] grid-cols-2 justify-between gap-5 rounded-lg border-2 bg-white p-6 md:flex md:max-w-[1200px] md:p-16">
          <div className="flex flex-col items-center md:flex-row">
            <div className="bg-primary flex h-11 w-12 items-start justify-center rounded-[300%] md:h-22">
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
            <div className="bg-primary font-secondary flex h-11 w-12 items-start justify-center rounded-[300%] md:h-22">
              <img src="/svg/facebook.svg" width={30} className="mt-2"></img>
            </div>
            <div className="flex flex-col items-center md:ml-3">
              <p className="text-start text-3xl font-bold md:text-6xl">4.6</p>
              <p className="font-secondary font-semibold">400+ Reviews</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <div className="bg-primary font-secondary flex h-11 w-12 items-start justify-center rounded-[300%] md:h-22">
              <img src="/svg/map.svg" width={30} className="mt-2"></img>
            </div>
            <div className="flex flex-col items-center md:ml-3">
              <p className="text-start text-3xl font-bold md:text-6xl">4.8</p>
              <p className="font-secondary font-semibold">100+ Reviews</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <div className="bg-primary font-secondary flex h-11 w-12 items-start justify-center rounded-[300%] md:h-22">
              <img src="/svg/star.svg" width={25} className="mt-2"></img>
            </div>
            <div className="flex flex-col items-center md:ml-3">
              <p className="text-start text-3xl font-bold md:text-6xl">4.7</p>
              <p className="font-secondary font-semibold">200+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
