import { WhatWeDo } from "./whatWeDo"
import { OurServices } from "./ourServices"
import { RelationAwards } from "./relationAwards"
import { Reviews } from "./reviews"
import { Hero } from "@/components/layout/fullLayout/hero"

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />

      <WhatWeDo />

      <div>
        <img src="/images/digital-marketing-agency-about-us-full-width-img.jpg"></img>
      </div>

      <OurServices />

      <RelationAwards />

      <Reviews />
    </div>
  )
}
