import { useNavigate } from "react-router"
import { category, postList, recentPosts } from "./dummy"

export const Blogs = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background flex py-16">
            <div className="flex max-width w-full mx-auto divide-x-1 divide-gray-300">
                <div className="w-[70%] flex flex-col divide-y-1 divide-gray-300 pr-15">
                    {
                        postList.map((el, index) => {
                            return <div key={index} className="flex flex-col mb-12 pb-6">
                                <img src={el.img} className="mb-6"/>
                                <p className="text-start text-global-color2 text-title1 ">{el.title}</p>
                                 <div className="flex mb-5 gap-1 text-title3">
                                    <p className="hover:text-primary cursor-pointer]">Leave a comment</p>
                                    <p className="">/</p>
                                    <p className="hover:text-primary cursor-pointer ">Createive</p><span>/</span>
                                    <p className="hover:text-primary cursor-pointer ">akvarh</p>
                                 </div>
                                
                                <p className="text-start text-global-color2">{el.preview}</p>

                                <p className="text-black hover:text-primary cursor-pointer text-start mt-6 mb-3" onClick={() => navigate(el.link)}> Read More »</p>
                            </div>
                        })
                    }
                </div>
                <div className="pl-15 flex-grow h-100">
                    <div className="flex flex-col mb-6">
                        <p className="text-title2 font-medium text-global-color2 text-start mb-6">Recent Posts</p>     
                        <div>
                            {
                                recentPosts.map((el, index) => {
                                    return (
                                        <p key={index} className="text-start text-global-color3 mb-1 text-title3 hover:text-primary cursor-pointer font-light">{el.value}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-title2 font-medium text-global-color2 text-start mb-6">Categories</p>     
                        <div>
                            {
                                category.map((el, index) => {
                                    return (
                                        <p key={index} className="text-start text-global-color3 mb-1 text-title3 hover:text-primary cursor-pointer leading-8 font-light">{el.value}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}