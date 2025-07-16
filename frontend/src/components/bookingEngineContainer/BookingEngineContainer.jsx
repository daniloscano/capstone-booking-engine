import BookingEngineForm from "../bookingEngineForm/BookingEngineForm.jsx";
import QuoteSolutionsContainer from "../quoteSolutionsContainer/QuoteSolutionsContainer.jsx";
import useQuoteRequestStore from "../../stores/useQuoteRequestStore.js";

const BookingEngineContainer = () => {
    const { quoteRequest } = useQuoteRequestStore()
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