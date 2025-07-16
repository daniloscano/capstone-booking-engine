import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import BookingEngineHeader from "../../components/bookingEngineHeader/BookingEngineHeader.jsx";
import BookingEngineContainer from "../../components/bookingEngineContainer/BookingEngineContainer.jsx";

const BookingEnginePage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <BookingEngineHeader />
                <BookingEngineContainer />
            </WebsiteBaseLayout>
        </>
    );
};

export default BookingEnginePage;