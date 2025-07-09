import {navlinks} from "./partials/navLinks.js"
import NavigationLink from "./partials/NavigationLink.jsx"
import {Link} from "react-router-dom";
import './navigation.css'

const Navigation = () => {
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
                    <div className="d-flex justify-content-around align-items-center gap-5 navigation-menu">
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
                            PRENOTA ORA
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;