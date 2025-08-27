import { useNavigate } from "react-router"
import { category, postList, recentPosts } from "./dummy"

export const Blogs = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-background flex px-10 py-16">
      <div className="max-width mx-auto flex w-full flex-col divide-y-1 divide-gray-300 lg:flex-row lg:!divide-x-1 lg:divide-y-0">
        <div className="flex flex-col lg:w-[70%] lg:pr-15">
          {postList.map((el, index) => {
            return (
              <div key={index} className="mb-12 flex flex-col pb-6">
                <img src={el.img} className="mb-6" />
                <p className="text-global-color2 text-title1 font-primary text-start">
                  {el.title}
                </p>
                <div className="text-title3 mb-5 flex flex-wrap gap-1">
                  <p className="hover:text-primary font-primary csx:!text-base cursor-pointer text-sm whitespace-nowrap">
                    Leave a comment
                  </p>
                  <p className="csx:!text-base text-sm">/</p>
                  <p className="hover:text-primary font-primary csx:!text-base cursor-pointer text-sm">
                    Creative
                  </p>
                  <p className="csx:!text-base text-sm">/</p>
                  <p className="hover:text-primary font-primary csx:!text-base cursor-pointer text-sm">
                    akvarh
                  </p>
                </div>

                <p className="text-global-color2 text-start">{el.preview}</p>

                <p
                  className="hover:text-primary font-primary mt-6 mb-3 cursor-pointer text-start text-black"
                  onClick={() => navigate(el.link)}
                >
                  {" "}
                  Read More »
                </p>
              </div>
            )
          })}
        </div>
        <div className="h-100 flex-grow py-7 lg:py-0 lg:pl-15">
          <div className="mb-6 flex flex-col">
            <p className="text-title2 text-global-color2 font-primary mb-6 text-start font-medium">
              Recent Posts
            </p>
            <div>
              {recentPosts.map((el, index) => {
                return (
                  <p
                    key={index}
                    className="text-global-color3 md:text-title3 hover:text-primary font-secondary mb-1 cursor-pointer text-start text-sm font-light"
                    onClick={() => navigate(el.link)}
                  >
                    {el.value}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-title2 text-global-color2 font-primary mb-6 text-start font-medium">
              Categories
            </p>
            <div>
              {category.map((el, index) => {
                return (
                  <p
                    key={index}
                    className="text-global-color3 md:text-title3 hover:text-primary font-secondary mb-1 cursor-pointer text-start text-sm leading-8 font-light"
                    onClick={() => navigate(el.link)}
                  >
                    {el.value}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
