import BackofficeBaseLayout from "../../layouts/backoffice/BackofficeBaseLayout.jsx";
import BookingsContainer from "../../components/backoffice/bookingsContainer/BookingsContainer.jsx";

const BackofficeBookings = () => {
    return (
        <>
            <BackofficeBaseLayout>
                <BookingsContainer />
            </BackofficeBaseLayout>
        </>
    );
};

export default BackofficeBookings;