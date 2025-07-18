import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import BookingContainer from "../../components/bookingContainer/BookingContainer.jsx";

const BookingPage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <h1>Booking</h1>
                <BookingContainer />
            </WebsiteBaseLayout>
        </>
    );
};

export default BookingPage;