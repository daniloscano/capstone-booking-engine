import BackofficeBaseLayout from "../../layouts/backoffice/BackofficeBaseLayout.jsx";
import QuoteRequestContainer from "../../components/backoffice/quoteRequestContainer/QuoteRequestContainer.jsx";

const BackofficeBookings = () => {
    return (
        <>
            <BackofficeBaseLayout>
                <QuoteRequestContainer />
            </BackofficeBaseLayout>
        </>
    );
};

export default BackofficeBookings;