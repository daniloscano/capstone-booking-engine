import {useAuth} from "../middlewares/ProtectedRoutes.jsx";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const useSession = () => {
    const session = useAuth()
    const decodedSession = session ? jwtDecode(session) : null

    const navigate = useNavigate()

    useEffect(() => {
        if (!session) {
            navigate("/backoffice/login", { replace: true })
        }
    }, [navigate, session]);

    return decodedSession
}

export default useSession;