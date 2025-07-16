import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import BookingFormContainer from "../../components/bookingFormContainer/BookingFormContainer.jsx";

const BookingFormPage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <h1>Modulo di Prenotazione</h1>
                <BookingFormContainer />
            </WebsiteBaseLayout>
        </>
    );
};

export default BookingFormPage;