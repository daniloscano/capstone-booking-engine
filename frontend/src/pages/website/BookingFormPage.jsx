import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import BookingFormContainer from "../../components/bookingFormContainer/BookingFormContainer.jsx";

const BookingFormPage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <BookingFormContainer />
            </WebsiteBaseLayout>
        </>
    );
};

export default BookingFormPage;