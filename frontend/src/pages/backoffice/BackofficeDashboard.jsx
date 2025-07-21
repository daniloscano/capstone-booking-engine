import useSession from "../../hooks/useSession.js";
import BackofficeBaseLayout from "../../layouts/backoffice/BackofficeBaseLayout.jsx";

const BackofficeDashboard = () => {
    const session = useSession()

    return (
        <>
            <BackofficeBaseLayout>
                <h1>Dashboard</h1>
                <h4>Benvenuto, {session.username}</h4>
            </BackofficeBaseLayout>
        </>
    );
};

export default BackofficeDashboard;