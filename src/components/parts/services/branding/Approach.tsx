import { approachList } from "./dummy"

export const Approach = () => {
  return (
    <div className="bg-primary-light csm:!py-15 px-12 py-10 md:py-24">
      <div className="max-width divide- mx-auto flex w-full flex-col divide-y-2 divide-white/30">
        <div className="flex flex-col">
          <p className="font-primary text-xl text-white">Our Approach</p>
          <p className="sm:text-title font-primary mt-2 text-4xl font-medium text-white">
            Insight. Creativity. Technology.
          </p>
          <p className="font-secondary csm:!px-20 py-8 text-sm text-white sm:text-lg md:!px-40 lg:!px-70">
            Faucibus vestibulum mi adipiscing phasellus sagittis fringilla
            potenti volutpat quam elit fermentum, viverra faucibus ante
            fringilla.
          </p>
        </div>
        <div className="clg:!flex-row mt-10 flex w-full flex-col gap-15">
          {approachList.map((el, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <img src={el.icon} width={24} />
                <p className="font-primary text-2xl font-medium text-white">
                  {el.title}
                </p>
                <p className="font-secondary csm:!text-base text-sm text-white">
                  {el.detail}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
