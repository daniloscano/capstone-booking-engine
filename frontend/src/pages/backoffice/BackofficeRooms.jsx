import BackofficeBaseLayout from "../../layouts/backoffice/BackofficeBaseLayout.jsx";
import RoomsContainer from "../../components/backoffice/roomsContainer/RoomsContainer.jsx";

const BackofficeBookings = () => {
    return (
        <>
            <BackofficeBaseLayout>
                <RoomsContainer />
            </BackofficeBaseLayout>
        </>
    );
};

export default BackofficeBookings;