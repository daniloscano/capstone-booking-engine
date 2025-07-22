import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import BookingFormContainer from "../../components/website/bookingFormContainer/BookingFormContainer.jsx";

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