import { backofficeSections } from "./partials/backofficeSections.js";
import useSession from "../../../hooks/website/useSession.js";
import DashboardCard from "./partials/DashboardCard.jsx";

const DashboardContainer = () => {
    const session = useSession()

    return (
        <>
            <section className="my-4 dashboard-container">
                <div className="container">
                    <h1>Benvenuto, {session.username}</h1>
                    <p>Stai lavorando come <b>{session.role === 'admin' ? 'Amministratore' : 'Operatore' }</b></p>
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