import { cn } from "@/utils/cn"
import { useEffect, useRef, useState } from "react"

export const SearchBar = () => {
  const [isSpread, setSpread] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isSpread &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSpread(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isSpread])

  return (
    <div>
      <div ref={containerRef} className="relative flex w-56 items-center">
        <input
          placeholder="Search"
          className={cn(
            "ml-auto overflow-hidden rounded-xs bg-white py-3 text-gray-300 outline-0 transition-[width,padding] duration-600 ease-in-out",
            isSpread ? "w-56 pr-8 pl-5" : "w-0 pr-0 pl-0",
          )}
        />
        <img
          src={'/svg/search.svg'}
          width={20}
          className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
          onClick={() => setSpread(!isSpread)}
        />
      </div>
    </div>
  )
}
