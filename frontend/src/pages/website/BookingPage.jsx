import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import BookingContainer from "../../components/website/bookingContainer/BookingContainer.jsx";

const BookingPage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <BookingContainer />
            </WebsiteBaseLayout>
        </>
    );
};

export default BookingPage;