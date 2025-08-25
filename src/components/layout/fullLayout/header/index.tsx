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
                        location.pathname.split("/").includes("blog") && "text-black", 
                          "font-secondary"
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
                                className="hover:text-primary cursor-pointer py-3 pr-7 pl-4 text-start text-black font-secondary"
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
          <div className="bg-primary cxl:!block hidden cursor-pointer rounded-lg px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black font-secondary">
            Get a Free Quote
          </div>

          <div
            className="cxl:!hidden block cursor-pointer"
            onClick={() => setList(!openList)}
          >
            <ListIcon />
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
              <div key={index} onClick={() => setList(false)}>
                <p className="hover:text-primary flex cursor-pointer justify-between px-10 py-2 text-start text-xl font-secondary">
                  {el.name}
                  {el.type === "dropdown" && (
                    <img src={"/svg/down-arrow-black.svg"} width={20} />
                  )}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
