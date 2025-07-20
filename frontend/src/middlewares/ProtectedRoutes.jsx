import {Outlet} from "react-router-dom";
import BackofficeLoginPage from "../pages/backoffice/BackofficeLoginPage.jsx";

export const useAuth = () => {
    return JSON.parse(localStorage.getItem('token'))
}

const ProtectedRoutes = () => {
    const isAuthorized = useAuth()

    return isAuthorized ? <Outlet /> : <BackofficeLoginPage />
}

export default ProtectedRoutes;