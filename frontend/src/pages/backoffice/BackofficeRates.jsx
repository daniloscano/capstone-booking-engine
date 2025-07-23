import BackofficeBaseLayout from "../../layouts/backoffice/BackofficeBaseLayout.jsx";
import RatesContainer from "../../components/backoffice/ratesContainer/RatesContainer.jsx";

const BackofficeBookings = () => {
    return (
        <>
            <BackofficeBaseLayout>
                <RatesContainer />
            </BackofficeBaseLayout>
        </>
    );
};

export default BackofficeBookings;