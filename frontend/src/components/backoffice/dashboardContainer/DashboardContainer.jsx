import { backofficeSections } from "./partials/backofficeSections.js";
import DashboardCard from "./partials/DashboardCard.jsx";

const DashboardContainer = () => {
    return (
        <>
            <section className="my-4 dashboard-container">
                <div className="container">
                    <div className="row">
                        {
                            backofficeSections.map((section, index) => (
                                <div
                                    key={`backoffice-section-${index}`}
                                    className="col col-12 col-md-4 p-5"
                                >
                                    <DashboardCard
                                        section={section}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default DashboardContainer;