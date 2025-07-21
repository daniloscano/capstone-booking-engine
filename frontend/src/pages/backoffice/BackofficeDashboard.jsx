import BackofficeBaseLayout from "../../layouts/backoffice/BackofficeBaseLayout.jsx";
import DashboardContainer from "../../components/backoffice/dashboardContainer/DashboardContainer.jsx";

const BackofficeDashboard = () => {
    return (
        <>
            <BackofficeBaseLayout>
                <DashboardContainer />
            </BackofficeBaseLayout>
        </>
    );
};

export default BackofficeDashboard;