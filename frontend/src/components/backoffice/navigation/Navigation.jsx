import {Link, useNavigate} from "react-router-dom";
import './navigation.css'
import useSession from "../../../hooks/useSession.js";

const Navigation = () => {
    const session = useSession()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        navigate("/backoffice/login", { replace: true })
    }

    return (
        <>
            <div
                className="container-fluid d-flex justify-content-between align-items-center py-4 px-5 backoffice-navigation">
                <div className="backoffice-navigation-brand">
                    <Link
                        className="text-decoration-none fs-2 fw-bold backoffice-brand-link"
                        to="/backoffice/dashboard"
                    >
                        Dashboard
                    </Link>
                </div>
                <div className="d-flex align-items-center gap-3 backoffice-navigation-actions">
                    <button className="py-2 px-4 rounded rounded-2 book-now-btn">
                        {session.username}
                    </button>
                    <button
                        onClick={logout}
                        className="py-2 px-4 rounded rounded-2 logout-btn"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navigation;