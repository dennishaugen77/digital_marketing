import { useParams } from "react-router"
import { useMemo } from "react"
import { postList } from "./dummy"

export const BlogDetail = () => {
    const params = useParams()

    const currentDetail = useMemo(() => {
        return postList.find((el: any) => el.link.split('/').reverse()[0].slice(0) === params.param)
    }, [params])

    return (
        <div className="bg-background py-16 flex flex-col gap-6">
            <div className="max-width w-full bg-white py-[5.34rem] px-[6.67rem] mx-auto">
                <img src={currentDetail?.img}></img>
                <p className="text-start text-title1">{currentDetail?.title}</p>
                <div className="flex mb-5 gap-1 text-title3">
                    <p className="hover:text-primary cursor-pointer">Leave a comment</p>
                    <p className="">/</p>
                    <p className="hover:text-primary cursor-pointer ">Createive</p><span>/</span>
                    <p className="hover:text-primary cursor-pointer ">akvarh</p>
                </div>
                <p className="text-start text-title3 text-global-color2 mb-4">{currentDetail?.describe1}</p>
                <p className="text-start text-title3 text-global-color2 mb-4">{currentDetail?.describe2}</p>
                <div className="border-l-4 border-gray-100 py-6 px-4 mb-5">
                    <p className="text-start text-title3 text-global-color2 italic">{currentDetail?.describe3}</p>
                    <p className="text-start text-title3 text-global-color2 italic">{currentDetail?.describe4}</p>
                </div>
                <p className="text-start text-title3 text-global-color2">{currentDetail?.describe5}</p>
            </div>
            <div className="max-width w-full flex justify-between mx-auto">
                <p className="flex items-center gap-0.5"><img src="/src/assets/icons/svg/left-arrow-black.svg" width={13}/>Previous Post </p>
                <p className="flex items-center gap-0.5">Next Post<img src="/src/assets/icons/svg/right-arrow-black.svg" width={13}/></p>
            </div>
            <div className="max-width w-full flex justify-between  flex-col  py-[5.34rem] px-[6.67rem] mx-auto bg-white">
                <p className="text-title1 text-start mb-3">Leave a Comment</p>
                <p className="text-start mb-5">Your email address will not be published. Required fields are marked *</p>
                <textarea className="border-1 border-gray-200 focus:outline-1 focus:outline-dotted p-4 bg-background mb-5"  placeholder="Type here.."/>
                <div className="flex justify-between mb-5 gap-8">
                    <input placeholder="Name*" className="p-4 border-1 w-full border-gray-200 bg-background focus:outline-1 focus:outline-dotted"/>
                    <input placeholder="Email*" className="p-4 border-1 w-full border-gray-200 bg-background focus:outline-1 focus:outline-dotted"/>
                    <input placeholder="Website*" className="p-4 border-1 w-full border-gray-200 bg-background focus:outline-1 focus:outline-dotted"/>
                </div>
                <div className="flex gap-2 py-2 mb-5">
                    <input type="checkbox" id="my-checkbox"/>
                    <p className="text-global-color2">Save my name, email, and website in this browser for the next time I comment.</p>
                </div>
                <div className="flex">
                <div className="py-3 px-6 bg-primary text-white hover:text-black hover:bg-white cursor-pointer">Posts Comment »</div>

                </div>
            </div>
        </div>
    )
}