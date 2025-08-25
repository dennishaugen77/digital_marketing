import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import { cn } from "@/utils/cn"

interface HeroDetail {
  key: string
  suffix: string
  title: string
  detail: string
  img: string
  backgroundStyle?: "services" | "default"
}

const heroDetails: Record<string, HeroDetail> = {
  services: {
    key: "services",
    suffix: "",
    title: "Services",
    detail:
      "Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.",
    img: "/images/digital-marketing-agency-hero-img-bg-overlay.svg",
    backgroundStyle: "services",
  },
  branding: {
    key: "branding",
    suffix: "services",
    title: "Branding",
    detail:
      "Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.",
    img: "/images/digital-marketing-agency-branding-header-bg-img.jpg",
    backgroundStyle: "default",
  },
  "digital-marketing": {
    key: "digital-marketing",
    suffix: "services",
    title: "Digital Marketing",
    detail:
      "Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.",
    img: "/images/digital-marketing-agency-marketing-header-bg-img.jpg",
    backgroundStyle: "default",
  },
  "seo-service": {
    key: "seo-services",
    suffix: "services",
    title: "Seo services",
    detail:
      "Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.",
    img: "/images/digital-marketing-agency-social-media-header-bg-img.jpg",
    backgroundStyle: "default",
  },
  "social-media": {
    key: "social-media",
    suffix: "services",
    title: "Social Media",
    detail:
      "Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.",
    img: "/images/digital-marketing-agency-hero-img-bg-overlay.svg",
    backgroundStyle: "default",
  },
}

export const Hero = () => {
  const [selectedTab, setSelectTab] = useState<HeroDetail>(heroDetails.services)
  const location = useLocation()

  useEffect(() => {
    const pathKey = location.pathname.split("/").pop() || "services"
    const foundTab = heroDetails[pathKey]
    if (foundTab) {
      setSelectTab(foundTab)
    }
  }, [location.pathname])

  const isServicesStyle = selectedTab.backgroundStyle === "services"

  return (
    <div
      className={cn(
        "relative flex w-full flex-col bg-cover bg-center px-10 pt-40 pb-20",
        isServicesStyle &&
          "bg-global-color1 bg-size-[50vw_auto] bg-right-bottom bg-no-repeat",
      )}
      style={{ backgroundImage: `url(${selectedTab.img})` }}
    >
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-full",
          !isServicesStyle && "bg-global-color1/70",
        )}
      />
      <div className="relative my-auto flex">
        <div className="max-width mx-auto w-full">
          <div className="clg:mr-[25%] xl:mr-[50%]">
            <p className="clg:text-start font-semibold text-white uppercase">
              {selectedTab.suffix}
            </p>
            <p className="clg:text-start clg:leading-20 text-4xl font-semibold text-white lg:text-6xl xl:text-[4.5rem] xl:leading-28">
              {selectedTab.title}
            </p>
            <p className="cxs:!text-2xl clg:text-start mt-5 text-lg font-semibold text-white">
              {selectedTab.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
