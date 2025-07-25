import {navlinks} from "./partials/navLinks.js"
import NavigationLink from "./partials/NavigationLink.jsx"
import {Link} from "react-router-dom";
import './navigation.css'
import MobileMenu from "./partials/MobileMenu.jsx";
import useMobileMenuStore from "../../../stores/website/useMobileMenuStore.js";
import {Menu} from "lucide-react";

const Navigation = () => {
    const { setIsMobileMenuVisible } = useMobileMenuStore()

    const showMobileMenu = () => {
        setIsMobileMenuVisible(true)
    }

    return (
        <>
            <nav>
                <div className="container-fluid d-flex justify-content-between align-items-center py-4 px-5 navigation">
                    <div className="navigation-brand">
                        <Link
                            className="text-decoration-none fs-2 fw-bold brand-link"
                            to="/"
                        >
                            Hotel Eden
                        </Link>
                    </div>
                    <div className="d-none d-lg-flex justify-content-around align-items-center gap-5 navigation-menu">
                        {
                            navlinks.map((link, index) => (
                                <NavigationLink
                                    key={`navigation-link-${index}`}
                                    navLink={link}
                                />
                            ))
                        }
                    </div>
                    <div className="d-none d-lg-block navigation-actions">
                        <button
                            className="rounded rounded-1 py-2 px-4 book-now-btn"
                        >
                            <Link
                                className="text-decoration-none"
                                to="/booking-engine"
                            >
                                PRENOTA ORA
                            </Link>
                        </button>
                    </div>
                    <div className="d-flex d-lg-none">
                        <button
                            className="rounded rounded-1 py-2 px-4 book-now-btn"
                            onClick={showMobileMenu}
                        >
                            <Menu size={36} />
                        </button>
                    </div>
                    <MobileMenu />
                </div>
            </nav>
        </>
    );
};

export default Navigation;