import { reviews } from "./dummy"

export const Reviews = () => {
    return (
        <div className="flex bg-primary-light py-24 px-10 relative mt-20">
            <div className=" max-w-[1200px] w-full mx-auto grid md:grid-cols-3 grid-cols-1 gap-4  mt-40">
                {
                    reviews.map((el, index) => {
                        return (
                            <div key={index} className="md:max-w-90" >
                                <div className="flex gap-0.5">
                                    {
                                        Array(5).fill(0).map((_, index) => {
                                            return <img key={index} src="/src/assets/icons/svg/star.svg" width={16}/>
                                        })
                                    }
                                </div>
                                <p className="text-white text-start my-5">{el.review}</p>
                                <div className="flex items-center gap-2">
                                    <img src="/src/assets/icons/svg/user.svg" width={40}/>
                                    <p className="text-start text-white uppercase">{el.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
                
            </div>
            <div className="absolute top-0 md:flex grid grid-cols-2 gap-5 justify-between -translate-y-1/2 left-1/2 -translate-x-1/2 p-16 bg-white border-primary border-2 w-full md:max-w-[1200px] max-w-[800px] rounded-lg">
                <div className="flex md:flex-row flex-col items-center">
                    <div className="w-12 md:h-22 h-11 rounded-[300%] bg-primary flex justify-center items-start">
                        <img src="/src/assets/icons/svg/google.svg" width={40}></img>  
                    </div>
                    <div className=" md:ml-3 flex flex-col items-center">
                        <p className="md:text-6xl text-3xl font-bold text-start">4.7</p>
                        <p className="font-semibold">200+ Reviews</p>
                    </div>
                    
                </div>
                <div className="flex md:flex-row flex-col items-center">
                    <div className="w-12 md:h-22 h-11 rounded-[300%] bg-primary flex justify-center items-start">
                        <img src="/src/assets/icons/svg/google.svg" width={40}></img>  
                    </div>
                    <div className=" md:ml-3 flex flex-col items-center">
                        <p className="md:text-6xl text-3xl font-bold text-start">4.7</p>
                        <p className="font-semibold">200+ Reviews</p>
                    </div>
                    
                </div>
                <div className="flex md:flex-row flex-col items-center">
                    <div className="w-12 md:h-22 h-11 rounded-[300%] bg-primary flex justify-center items-start">
                        <img src="/src/assets/icons/svg/google.svg" width={40}></img>  
                    </div>
                    <div className=" md:ml-3 flex flex-col items-center">
                        <p className="md:text-6xl text-3xl font-bold text-start">4.7</p>
                        <p className="font-semibold">200+ Reviews</p>
                    </div>
                    
                </div>
                <div className="flex md:flex-row flex-col items-center">
                    <div className="w-12 md:h-22 h-11 rounded-[300%] bg-primary flex justify-center items-start">
                        <img src="/src/assets/icons/svg/google.svg" width={40}></img>  
                    </div>
                    <div className=" md:ml-3 flex flex-col items-center">
                        <p className="md:text-6xl text-3xl font-bold text-start">4.7</p>
                        <p className="font-semibold">200+ Reviews</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}