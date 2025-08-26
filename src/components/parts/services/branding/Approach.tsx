import { approachList } from "./dummy"

export const Approach = () => {
  return (
    <div className="bg-primary-light px-12 py-24">
      <div className="max-width divide- mx-auto flex w-full flex-col divide-y-2 divide-white/30">
        <div className="flex flex-col">
          <p className="font-primary text-xl text-white">Our Approach</p>
          <p className="sm:text-title text-4xl font-primary mt-2 font-medium text-white">
            Insight. Creativity. Technology.
          </p>
          <p className="font-secondary lg:!px-70 md:!px-40 csm:!px-20 px-10 py-8 text-lg text-white">
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
                <p className="font-secondary text-white">{el.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
