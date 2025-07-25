import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import BookingEngineHeader from "../../components/website/bookingEngineHeader/BookingEngineHeader.jsx";
import BookingEngineContainer from "../../components/website/bookingEngineContainer/BookingEngineContainer.jsx";

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