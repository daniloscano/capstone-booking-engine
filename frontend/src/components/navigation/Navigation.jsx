import {navlinks} from "./partials/navLinks.js"
import NavigationLink from "./partials/NavigationLink.jsx"
import './navigation.css'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav>
                <div className="container-fluid d-flex justify-content-between align-items-center p-4 navigation">
                    <div className="navigation-brand">
                        <Link
                            className="text-decoration-none fs-3 fw-bold"
                            to="/"
                        >
                            Hotel
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
                            className="btn btn-info rounded rounded-1"
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