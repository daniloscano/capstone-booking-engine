import {Sidebar} from "primereact/sidebar";
import {navlinks} from "./navLinks.js";
import NavigationLink from "./NavigationLink.jsx";
import {Link} from "react-router-dom";
import './mobileMenu.css'
import useMobileMenuStore from "../../../../stores/website/useMobileMenuStore.js";

const MobileMenu = () => {
    const { isMobileMenuVisible, setIsMobileMenuVisible } = useMobileMenuStore()

    const closeMobileMenu = () => {
        setIsMobileMenuVisible(false)
    }

    return (
        <>
            <Sidebar
                position="right"
                visible={isMobileMenuVisible}
                onHide={closeMobileMenu}
            >
                <div
                    className="d-flex flex-column justify-content-center align-items-center gap-5 mobile-menu-container"
                >
                    <div className="d-flex flex-column justify-content-center align-items-center gap-5 navigation-menu">
                        {
                            navlinks.map((link, index) => (
                                <NavigationLink
                                    key={`navigation-link-${index}`}
                                    navLink={link}
                                />
                            ))
                        }
                    </div>
                    <div className="navigation-actions">
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
                </div>
            </Sidebar>
        </>
    );
};

export default MobileMenu;