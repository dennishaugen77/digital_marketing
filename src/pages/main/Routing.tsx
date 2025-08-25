import { FullLayout } from "@/components/layout/fullLayout"
import { Home } from "@/components/parts/home"
import { Services } from "@/pages/main/services"
import { Branding } from "./services/branding"
import { ROUTES } from "@/constants/routes"
import { Navigate, Route, Routes } from "react-router-dom"
import { BlogDetail } from "./blogs/BlogDetail"
import { Blogs } from "./blogs"

export const MainRouting = () => {
  return (
    <FullLayout>
      <Routes>
        <Route
          index
          element={<Navigate to={ROUTES.MAIN.HOME.INDEX} replace />}
        />
        <Route path={ROUTES.MAIN.HOME.INDEX} element={<Home />} />
        <Route path={ROUTES.MAIN.SERVICES.INDEX} element={<Services />} />

        {/* Dynamic service route - handles all service types */}
        <Route path="/services/:serviceType" element={<Branding />} />

        <Route path={ROUTES.MAIN.BLOGS.INDEX} element={<Blogs />} />
        <Route path={ROUTES.MAIN.BLOGS.PARAMS} element={<BlogDetail />} />
      </Routes>
    </FullLayout>
  )
}
