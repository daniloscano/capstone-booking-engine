import {Link} from "react-router-dom";
import './footer.css'
import {navlinks} from "../navigation/partials/navLinks.js";
import NavigationLink from "../navigation/partials/NavigationLink.jsx";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid py-4 px-5 footer">
                    <div className="row gy-4">
                        <div className="col col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                            <Link
                                className="text-decoration-none fs-3 fw-bold brand-link"
                                to="/"
                            >
                                Hotel Eden
                            </Link>
                        </div>
                        <div className="col clo-12 col-lg-4 d-flex flex-column justify-content-around align-items-center gap-2">
                            {
                                navlinks.map((link, index) => (
                                    <NavigationLink
                                        key={`navigation-link-${index}`}
                                        navLink={link}
                                    />
                                ))
                            }
                        </div>
                        <div className="col col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center gap-4">
                            <button
                                className="rounded rounded-2 py-2 px-4 footer-btn"
                            >
                                <a
                                    className="text-decoration-none"
                                    href="tel:+393966374994"
                                >
                                    CHIAMACI
                                </a>
                            </button>
                            <button
                                className="rounded rounded-2 py-2 px-4 footer-btn"
                            >
                                <a
                                    className="text-decoration-none"
                                    href="mailto:hotel-eden@yopmail.com"
                                >
                                    SCRIVICI
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;