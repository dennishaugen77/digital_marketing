import { FullLayout } from "@/components/layout/fullLayout"
import { Home } from "@/components/parts/home"
import { Services } from "@/pages/main/services"
import { Branding } from "./services/branding"
import { ROUTES } from "@/constants/routes"
import { Navigate, Route, Routes, useParams } from "react-router-dom"
import { Blogs } from "./blogs"

// Reusable Service Page Component
const ServicePage = () => {
  const { serviceType } = useParams()

  // You can add logic here to render different content based on serviceType
  // For now, we'll use the Branding component as a template
  return <Branding />
}

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
        <Route path="/services/:serviceType" element={<ServicePage />} />

        <Route path={ROUTES.MAIN.Blogs.index} element={<Blogs/>} />
      </Routes>
    </FullLayout>
  )
}
