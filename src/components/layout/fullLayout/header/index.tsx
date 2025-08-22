import { SearchBar } from "@/components/atoms/searchBar"
import logo from "@/assets/svg/logo.svg"
import downArrowWhite from "@/assets/icons/svg/down-arrow-white.svg"
import downArrowBlack from "@/assets/icons/svg/down-arrow-black.svg"
import { navigations } from "./dummy"
import { useState, useEffect } from "react"
import { ListIcon } from "@/assets/icons/ListIcon"
import { cn } from "@/utils/cn"
import { useNavigate } from "react-router"

export const Header = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  )
  const [openList, setList] = useState<boolean>(false)
  const navigate = useNavigate()

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

  const link = (link: string, e: MouseEvent) => {
    navigate(link)
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div className="absolute top-0 z-30 w-full px-10">
      <div className="max-width relative mx-auto flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="py-8 pr-3">
            <img src={logo} alt="logo" />
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
                    onClick={(e: any) => link(item.link, e)}
                  >
                    {item.name}
                    {item.type === "dropdown" &&
                      openDropdownIndex === index && (
                        <div className="border-primary absolute top-17 left-0 w-50 border-t-[3px] bg-white">
                          {item.subList?.map((el, elIndex) => {
                            return (
                              <p
                                key={elIndex}
                                className="hover:text-primary cursor-pointer py-3 pr-7 pl-4 text-start text-black"
                                onClick={(e: any) => link(el.link, e)}
                              >
                                {el.title}
                              </p>
                            )
                          })}
                        </div>
                      )}
                  </div>
                  {item.type === "dropdown" && (
                    <img src={downArrowWhite} width={20} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <SearchBar />
          <div className="bg-primary cxl:!block hidden cursor-pointer rounded-lg px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
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
                <p className="hover:text-primary flex cursor-pointer justify-between px-10 py-2 text-start text-xl">
                  {el.name}
                  {el.type === "dropdown" && (
                    <img src={downArrowBlack} width={20} />
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
