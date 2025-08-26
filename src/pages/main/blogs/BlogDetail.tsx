import { useParams } from "react-router"
import { useMemo } from "react"
import { postList } from "./dummy"

export const BlogDetail = () => {
  const params = useParams()

  const currentDetail = useMemo(() => {
    return postList.find(
      (el: any) => el.link.split("/").reverse()[0].slice(0) === params.param,
    )
  }, [params])

  return (
    <div className="bg-background flex flex-col gap-6 py-16">
      <div className="max-width mx-auto w-full bg-white px-[6.67rem] py-[5.34rem]">
        <img src={currentDetail?.img}></img>
        <p className="text-title1 font-primary text-start">
          {currentDetail?.title}
        </p>
        <div className="text-title3 mb-5 flex gap-1">
          <p className="hover:text-primary font-secondary cursor-pointer">
            Leave a comment
          </p>
          <p className="">/</p>
          <p className="hover:text-primary font-primary cursor-pointer">
            Createive
          </p>
          <span>/</span>
          <p className="hover:text-primary font-primary cursor-pointer">
            akvarh
          </p>
        </div>
        <p className="text-title3 text-global-color2 font-primary mb-4 text-start">
          {currentDetail?.describe1}
        </p>
        <p className="text-title3 text-global-color2 font-primary mb-4 text-start">
          {currentDetail?.describe2}
        </p>
        <div className="mb-5 border-l-4 border-gray-100 px-4 py-6">
          <p className="text-title3 text-global-color2 font-primary text-start italic">
            {currentDetail?.describe3}
          </p>
          <p className="text-title3 text-global-color2 font-primary text-start italic">
            {currentDetail?.describe4}
          </p>
        </div>
        <p className="text-title3 text-global-color2 font-primary text-start">
          {currentDetail?.describe5}
        </p>
      </div>
      <div className="max-width mx-auto flex w-full justify-between">
        <p className="font-primary flex items-center gap-0.5">
          <img src="/src/assets/icons/svg/left-arrow-black.svg" width={13} />
          Previous Post{" "}
        </p>
        <p className="font-primary flex items-center gap-0.5">
          Next Post
          <img src="/src/assets/icons/svg/right-arrow-black.svg" width={13} />
        </p>
      </div>
      <div className="max-width mx-auto flex w-full flex-col justify-between bg-white px-[6.67rem] py-[5.34rem]">
        <p className="text-title1 font-primary mb-3 text-start">
          Leave a Comment
        </p>
        <p className="font-secondary mb-5 text-start">
          Your email address will not be published. Required fields are marked *
        </p>
        <textarea
          className="mb-5 border-1 border-gray-200 bg-gray-100 p-4 focus:outline-1 focus:outline-dotted"
          placeholder="Type here.."
        />
        <div className="mb-5 flex justify-between gap-8">
          <input
            placeholder="Name*"
            className="font-secondary w-full border-1 border-gray-200 bg-gray-100 p-4 focus:outline-1 focus:outline-dotted"
          />
          <input
            placeholder="Email*"
            className="font-secondary w-full border-1 border-gray-200 bg-gray-100 p-4 focus:outline-1 focus:outline-dotted"
          />
          <input
            placeholder="Website*"
            className="font-secondary w-full border-1 border-gray-200 bg-gray-100 p-4 focus:outline-1 focus:outline-dotted"
          />
        </div>
        <div className="mb-5 flex gap-2 py-2">
          <input type="checkbox" id="my-checkbox" />
          <p className="text-global-color2 font-secondary">
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>
        <div className="flex">
          <div className="bg-primary font-secondary cursor-pointer px-6 py-3 text-white hover:bg-white hover:text-black">
            Posts Comment »
          </div>
        </div>
      </div>
    </div>
  )
}
