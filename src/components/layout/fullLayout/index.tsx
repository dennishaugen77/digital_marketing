import { Hero } from "./hero"
import { Header } from "./header"
import { Footer } from "./footer"
import { FC } from "react"

interface LayoutProps {
  children: React.ReactNode
}

export const FullLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex w-full flex-col">
      <Header />
      {/* <CustomizerDrawer/> */}

      {children}

      <Footer />
    </div>
  )
}
