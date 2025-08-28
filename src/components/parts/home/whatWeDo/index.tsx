import { solutions } from "@/pages/main/home/dummy"

export const WhatWeDo = () => {
  return (
    <div className="bg-background flex px-10 pt-24 pb-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col md:flex-row">
        <p className="text-primary-light font-primary mt-2 text-start font-semibold uppercase md:w-1/4">
          What we do
        </p>
        <div className="flex-1">
          <div className="flex flex-col border-b-2 border-white">
            <p className="cxl:pr-[40%] lg:!text-title font-primary csm:!text-4xl mb-10 text-start text-3xl leading-17 font-semibold text-black">
              Full-service Internet Marketing Solutions
            </p>
            <p className="text-global-color2 font-secondary mb-10 text-start md:pr-10">
              Consequat enim mollis mauris vulputate phasellus neque, eros
              turpis et eu adipiscing id tempor, nascetur elit vitae molestie
              pulvinar viverra ut eu lectus mi velit cras integer tristique
              aliquam proin porta tellus elit neque mi velit sed pharetra morbi
              proin.
            </p>
          </div>
          <div className="cxs:!grid-cols-3 mt-10 grid w-full grid-cols-1 gap-7">
            {solutions.map((el, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div>{el.icon}</div>
                  <p className="font-primary mt-3 text-start text-2xl font-semibold text-black capitalize">
                    {el.title}
                  </p>
                  <p className="text-global-color2 font-secondary mt-3 text-start">
                    {el.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
