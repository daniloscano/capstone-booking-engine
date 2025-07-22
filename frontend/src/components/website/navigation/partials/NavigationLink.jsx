import {Link} from "react-router-dom"
import './navigationLink.css'

const NavigationLink = ({ navLink }) => {
    return (
        <>
            <Link
                className="navigation-link"
                to={navLink.href}
            >
                {navLink.section}
            </Link>
        </>
    );
};

export default NavigationLink;