import { FullLayout } from "@/components/layout/fullLayout"
import { Home } from "@/components/parts/home"
import { Services } from "@/pages/main/services"
import { Brading } from "./services/branding"
import { ROUTES } from "@/constants/routes"
import { Navigate, Route, Routes } from "react-router-dom"


export const MainRouting = () => {
    return (
        <FullLayout>
            <Routes>
                <Route index element={<Navigate to={ROUTES.MAIN.HOME.INDEX} replace/>}></Route>
                <Route path={ROUTES.MAIN.HOME.INDEX} element={<Home/>} />
                <Route path={ROUTES.MAIN.SERVICES.INDEX} element={<Services/>} />
                <Route path={ROUTES.MAIN.SERVICES.BRANDING} element={<Brading/>} />
            </Routes>
        </FullLayout>
    )
}