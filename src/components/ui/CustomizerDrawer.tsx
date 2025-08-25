import { useTheme } from "@/provider/ThemeProvider"
import { useEffect, useMemo, useState } from "react"
import { Customize } from '@/assets/icons/Customize'
import { cn } from "@/utils/cn"

export const CustomizerDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { themeMode, switchTheme, switchFont, fontFamily } = useTheme()
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(!isOpen)

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const fonts = useMemo(
    () => [
      {
        key: 'Heebo/Montserrat',
        value: 'Heebo / Montserrat',
      },
      {
        key: 'Playfair Display / Source Sans Pro',
        value: 'Playfair Display/Source Sans Pro'
      },
      {
        key: 'Poppins/Lato',
        value: 'Poppins / Lato'
      },
      {
        key: 'Montserrat/Lato',
        value: 'Montserrat / Lato',
      },
      {
        key: 'Rubik/Karia',
        value: 'Rubik / Karia',
      },
      {
        key: 'Roboto Condensed/Roboto',
        value: 'Roboto Condensed / Roboto',
      },
      {
        key: 'Merriweather/Inter',
        value: 'Merriweather / Inter'
      },
      {
        key: 'Vollkorn/Open Snas',
        value: 'Vollkorn / Open Snas',
      },
      {
        key: 'Open Sans/Work Sans',
        value: 'Open Sans / Work Sans'
      },
    ],
    []
  )

  const palettes: Array<{ key: string; colors: string[] }> = useMemo(
    () => [
      {
        key: "blue",
        colors: ["rgb(44, 44, 201)", "rgb(53, 53, 222)"]
      },
      {
        key: "dodger",
        colors: ["rgb(0, 94, 233)", "rgb(0, 103, 255)"],
      },
      {
        key: "green",
        colors: ["rgb(55, 146, 55)", "rgb(84, 180, 53)"],
      },
      {
        key: "red",
        colors: ["rgb(204, 25, 57)", "rgb(221, 24, 59)"],
      },
      {
        key: "choco",
        colors: ["rgb(233, 140, 0)", "rgb(253, 152, 0)"],
      },
      {
        key: "peru",
        colors: ["rgb(208, 154, 64)", "rgb(220, 165, 74)"],
      },
      {
        key: "seagreen",
        colors: ["rgb(23, 142, 121)", "rgb(27, 156, 133)"],
      },
      {
        key: "orangred",
        colors: ["rgb(241, 88, 8)", "rgb(255, 98, 16)"],
      },
      {
        key: "pink",
        colors: ["rgb(234, 85, 157)", "rgb(251, 95, 171)"],
      },
      {
        key: "indigo",
        colors: ["rgb(85, 17, 248)", "rgb(101, 40, 247)"],
      },
      {
        key: 'cardet',
        colors: ["rgb(41, 151, 170)", "rgb(58, 166, 185)"]
      }
    ],
    [],
  )

  const DrawerHeader = () => (
    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 shadow-sm">
      <div className="text-lg font-semibold text-gray-800">
        Digital Marketing Agency
      </div>
      <button
        aria-label="Close"
        onClick={close}
        className="text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
    </div>
  )

  const SectionTitle = ({ title }: { title: string }) => (
    <div className="mb-3 text-sm font-semibold text-gray-700 text-start">{title}</div>
  )

  const FontSamples = () => (
    <div className="grid grid-cols-4 gap-3">
      {fonts.map((font, idx) => (
        <div className="relative inline-block group">
          <div
            key={idx}
            className={cn(
              font.key === fontFamily && '!border-gray-500', 
              "flex h-10 items-center justify-center rounded-md border border-gray-300 text-gray-700 p-[1.5px]  hover:bg-gray-50")}
            onClick={() => switchFont(font.key)}
          >
            <div className={cn(
              font.key === fontFamily && 'border-1',
              " border-gray-200 w-full h-full flex items-center justify-center rounded-sm")}>
              <span className="select-none">Aa</span>
            </div>
          </div>
          <span className={cn(
            idx%4 === 0 && ' !left-0',
            idx%4 === 1 && ' !left-1/2',
            idx%4 === 3 && ' !right-1/2',
            idx%4 === 4 && ' !right-0',
            "absolute whitespace-nowrap z-100 hidden group-hover:block text-xs bg-gray-700 text-white  rounded py-1 px-2 -mt-10 bottom-0 transform translate-y-7")}>
            {font.value}
          </span>
        </div>
        
      ))}
    </div>
  )

  const ColorPalettes = () => (
    <div className="grid grid-cols-4 gap-3">
      {palettes.map((p, idx) => (
        <div
          key={idx}
          onClick={() => switchTheme(p.key)}
          className={cn(themeMode === p.key && "!border-gray-500" ,"cursor-pointer h-10 flex items-center  justify-center  rounded-md border !p-[1.5px] border-gray-300 hover:bg-gray-50")}
        >
          <div className={cn(
            p.key === themeMode && 'border-1',
            "flex items-center gap-2  w-full h-full justify-center border-gray-200 rounded-sm")}>
            {p.colors.map((c, i) => (
              <span
                key={i}
                className="inline-block h-3.5 w-3.5 rounded-full"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          
        </div>
      ))}
    </div>
  )

  return (
    <>
    <div className={cn("flex flex-col gap-3 fixed top-1/2 right-0 z-40 -translate-y-1/2 duration-300", isOpen && "-translate-x-58  z-41")}>
      <div
        className="!bg-primary relative rounded-l-md px-3 py-3 text-white shadow-lg cursor-pointer flex items-center gap-4"
      >
        <img src='/svg/cart.svg' width={24}/>
        <p className="text-white text-start">Buy now</p>
      </div>

      <div
        onClick={open}
        className={"!bg-white  rounded-l-md px-3 py-3 text-black hover:text-primary  shadow-lg cursor-pointer flex items-center gap-4"}
      >
        <Customize className="!w-5 !h-5"/>
        <p className=" text-start">Customize</p>
      </div>

    </div>
      

      {isOpen && (
        <div onClick={close} className="fixed inset-0 z-40 bg-black/40" />
      )}

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-[20rem] transform bg-white shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <DrawerHeader />
        <div className="h-full overflow-y-auto px-5 pt-4 pb-24">
          <p className="mb-6 text-start text-sm text-gray-600">
            Use the template as-is or try different colors and fonts from the
            options below.
          </p>

          <SectionTitle title="Try Other Fonts" />
          <FontSamples />

          <div className="my-6" />

          <SectionTitle title="Try Other Colors" />
          <ColorPalettes />
        </div>

        <div className="absolute right-0 bottom-0 left-0 border-t border-gray-200 bg-white p-5">
          <button className="!bg-primary h-12 w-full rounded-md font-semibold text-white shadow hover:opacity-90">
            Buy Now
          </button>
          <button className="hover:!bg-primary mt-3 flex h-12 w-full items-center justify-center rounded-md !border-1 text-primary !border-primary text-gray-700 hover:bg-gray-50 hover:text-white">
            Learn how to use this template
          </button>
        </div>
      </aside>
    </>
  )
}