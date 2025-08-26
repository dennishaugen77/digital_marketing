import { SearchBar } from "@/components/atoms/searchBar"
import logo from "@/assets/svg/logo.svg"
import { FooterLogo } from "@/assets/icons/FooterLogo"
import { navigations } from "./dummy"
import { useState, useEffect, useMemo } from "react"
import { ListIcon } from "@/assets/icons/ListIcon"
import { cn } from "@/utils/cn"
import { useLocation, useNavigate } from "react-router"

export const Header = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  )
  const [openList, setList] = useState<boolean>(false)
  const [openResponsiveList, setResponsiveList] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setList(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const link = (link: string, e: React.MouseEvent<HTMLElement>) => {
    setOpenDropdownIndex(null)
    navigate(link)
    e.preventDefault()
    e.stopPropagation()
  }

  const linkMobile = (link: string, e: React.MouseEvent) => {
    setResponsiveList(false)
    setList(false)
    navigate(link)
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      className={cn(
        "top-0 z-30 w-full px-10",
        !location.pathname.split("/").includes("blog") && "absolute",
      )}
    >
      <div className="max-width relative mx-auto flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="py-8 pr-3">
            {location.pathname.split("/").includes("blog") ? (
              <FooterLogo
                style={{ color: "var(--color-primary)", margin: "0 auto" }}
              />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </div>
          <div className="cxl:!flex hidden h-20">
            {navigations.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex items-center gap-2 px-5 text-white"
                  onMouseEnter={() =>
                    item.type === "dropdown"
                      ? setOpenDropdownIndex(index)
                      : setOpenDropdownIndex(null)
                  }
                  onMouseLeave={() => setOpenDropdownIndex(null)}
                >
                  <div
                    className="cursor-pointer"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      link(item.link, e)
                    }
                  >
                    <p
                      className={cn(
                        location.pathname.split("/").includes("blog") &&
                          "text-black",
                        "font-secondary",
                      )}
                    >
                      {item.name}
                    </p>
                    {item.type === "dropdown" &&
                      openDropdownIndex === index && (
                        <div className="border-primary absolute top-17 left-0 w-50 border-t-[3px] bg-white">
                          {item.subList?.map((el, elIndex) => {
                            return (
                              <p
                                key={elIndex}
                                className="hover:text-primary font-secondary cursor-pointer py-3 pr-7 pl-4 text-start text-black"
                                onClick={(e: React.MouseEvent<HTMLElement>) =>
                                  link(el.link, e)
                                }
                              >
                                {el.title}
                              </p>
                            )
                          })}
                        </div>
                      )}
                  </div>
                  {item.type === "dropdown" &&
                    (!location.pathname.split("/").includes("blog") ? (
                      <img src={"/svg/down-arrow-white.svg"} width={20} />
                    ) : (
                      <img src={"/svg/down-arrow-black.svg"} width={20} />
                    ))}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <SearchBar />
          <div className="bg-primary cxl:!block font-secondary hidden cursor-pointer rounded-lg px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
            Get a Free Quote
          </div>

          <div
            className="cxl:!hidden block cursor-pointer"
            onClick={() => setList(!openList)}
          >
            <ListIcon
              className={cn(
                location.pathname.split("/").includes("blog")
                  ? "text-global-color3"
                  : "text-white",
              )}
            />
          </div>
        </div>
        <div
          className={cn(
            "absolute top-22 left-0 w-full bg-white",
            openList ? "block" : "hidden",
          )}
        >
          {navigations.map((el, index) => {
            return (
              <div
                key={index}
                className="flex flex-col"
                onClick={() => setList(false)}
              >
                <div
                  className={cn(
                    "hover:text-primary font-secondary flex cursor-pointer justify-between px-10 py-2 text-start text-xl",
                    openResponsiveList && index === 1 && "pb-0",
                  )}
                  onClick={(e) => navigate(el.link)}
                >
                  {el.name}
                  {el.type === "dropdown" && (
                    <div
                      className="border-dotted p-3 hover:border-1"
                      onClick={(e: React.MouseEvent<HTMLElement>) => {
                        setResponsiveList(!openResponsiveList)
                        e.stopPropagation()
                      }}
                    >
                      <img src={"/svg/down-arrow-black.svg"} width={20} />
                    </div>
                  )}
                </div>
                {openResponsiveList &&
                  el.subList?.map((val, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex gap-2 px-13 py-2"
                        onClick={(e: React.MouseEvent) =>
                          linkMobile(val.link, e)
                        }
                      >
                        <img src="/svg/chevron-right.svg" width={20} />
                        <p className="hover:text-primary cursor-pointer text-start">
                          {val.title}
                        </p>
                      </div>
                    )
                  })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
