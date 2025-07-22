import BookingEngineForm from "../bookingEngineForm/BookingEngineForm.jsx";
import QuoteSolutionsContainer from "../quoteSolutionsContainer/QuoteSolutionsContainer.jsx";

const BookingEngineContainer = () => {
    return (
        <>
            <section className="container my-4 booking-engine-container">
                <BookingEngineForm />
                <QuoteSolutionsContainer />
            </section>
        </>
    );
};

export default BookingEngineContainer;