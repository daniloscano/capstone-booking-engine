import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import ServiceSection from "../../components/serviceSection/ServiceSection.jsx";
import {restaurant, readingHall, spa} from "../../components/serviceSection/partials/services.js";

const ServicesPage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <ServiceSection
                    imagePosition="right"
                    service={spa}
                />
                <ServiceSection
                    imagePosition="left"
                    service={restaurant}
                />
                <ServiceSection
                    imagePosition="right"
                    service={readingHall}
                />
            </WebsiteBaseLayout>
        </>
    );
};

export default ServicesPage;