import useSession from "../../hooks/useSession.js";

const BackofficeDashboard = () => {
    const session = useSession()

    return (
        <>
            <h1>Dashboard</h1>
            <h4>Benvenuto, {session.username}</h4>
        </>
    );
};

export default BackofficeDashboard;