import { useNavigate } from "react-router"
import { category, postList, recentPosts } from "./dummy"

export const Blogs = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-background flex py-16">
      <div className="max-width mx-auto flex w-full divide-x-1 divide-gray-300">
        <div className="flex w-[70%] flex-col divide-y-1 divide-gray-300 pr-15">
          {postList.map((el, index) => {
            return (
              <div key={index} className="mb-12 flex flex-col pb-6">
                <img src={el.img} className="mb-6" />
                <p className="text-global-color2 text-title1 text-start">
                  {el.title}
                </p>
                <div className="text-title3 mb-5 flex gap-1">
                  <p className="hover:text-primary cursor-pointer]">
                    Leave a comment
                  </p>
                  <p className="">/</p>
                  <p className="hover:text-primary cursor-pointer">Createive</p>
                  <span>/</span>
                  <p className="hover:text-primary cursor-pointer">akvarh</p>
                </div>

                <p className="text-global-color2 text-start">{el.preview}</p>

                <p
                  className="hover:text-primary mt-6 mb-3 cursor-pointer text-start text-black"
                  onClick={() => navigate(el.link)}
                >
                  {" "}
                  Read More »
                </p>
              </div>
            )
          })}
        </div>
        <div className="h-100 flex-grow pl-15">
          <div className="mb-6 flex flex-col">
            <p className="text-title2 text-global-color2 mb-6 text-start font-medium">
              Recent Posts
            </p>
            <div>
              {recentPosts.map((el, index) => {
                return (
                  <p
                    key={index}
                    className="text-global-color3 text-title3 hover:text-primary mb-1 cursor-pointer text-start font-light"
                  >
                    {el.value}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-title2 text-global-color2 mb-6 text-start font-medium">
              Categories
            </p>
            <div>
              {category.map((el, index) => {
                return (
                  <p
                    key={index}
                    className="text-global-color3 text-title3 hover:text-primary mb-1 cursor-pointer text-start leading-8 font-light"
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
