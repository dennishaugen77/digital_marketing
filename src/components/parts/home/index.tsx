import { WhatWeDo } from "./whatWeDo"
import { OurServices } from "./ourServices"
import { RelationAwards } from "./relationAwards"
import { Reviews } from "./reviews"

export const Home = () => {
    return (
        <div className="flex flex-col">

            <WhatWeDo/>

            <div>
                <img src="/src/assets/images/digital-marketing-agency-about-us-full-width-img.jpg"></img>
            </div>

            <OurServices/>

            <RelationAwards/>

            <Reviews/>
        </div>
    )
}