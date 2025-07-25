import BackofficeBaseLayout from "../../layouts/backoffice/BackofficeBaseLayout.jsx";
import ServicesContainer from "../../components/backoffice/servicesContainer/ServicesContainer.jsx";

const BackofficeBookings = () => {
    return (
        <>
            <BackofficeBaseLayout>
                <ServicesContainer />
            </BackofficeBaseLayout>
        </>
    );
};

export default BackofficeBookings;