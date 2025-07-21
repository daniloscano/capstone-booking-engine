import {Link} from "react-router-dom";
import './dashboardCard.css'

const DashboardCard = ({ section }) => {
    return (
        <>
            <Link
                className="text-decoration-none"
                to={section.href}
            >
                <div
                    className="gap-2 p-4 rounded rounded-3 dashboard-card"
                >
                    <img
                        className="img-fluid dashboard-icon"
                        src={section.icon}
                        alt={section.iconAlt}
                    />
                    <h3
                        className="dashboard-card-title"
                    >
                        {section.title}
                    </h3>
                </div>
            </Link>
        </>
    );
};

export default DashboardCard;