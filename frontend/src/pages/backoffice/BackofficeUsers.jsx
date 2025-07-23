import BackofficeBaseLayout from "../../layouts/backoffice/BackofficeBaseLayout.jsx";
import UsersContainer from "../../components/backoffice/usersContainer/UsersContainer.jsx";

const BackofficeBookings = () => {
    return (
        <>
            <BackofficeBaseLayout>
                <UsersContainer />
            </BackofficeBaseLayout>
        </>
    );
};

export default BackofficeBookings;