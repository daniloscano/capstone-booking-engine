import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import BookingEngineSection from "../../components/bookingEngineSection/BookingEngineSection.jsx";
import BookingEngineHeader from "../../components/bookingEngineHeader/BookingEngineHeader.jsx";

const BookingEnginePage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <BookingEngineHeader />
                <BookingEngineSection />
            </WebsiteBaseLayout>
        </>
    );
};

export default BookingEnginePage;