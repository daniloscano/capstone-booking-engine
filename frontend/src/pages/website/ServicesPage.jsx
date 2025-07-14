import WebsitePagesLayout from "../../layouts/website/WebsitePagesLayout.jsx";
import PageHeader from "../../components/pageHeader/PageHeader.jsx";
import {servicesPage} from "../../components/pageHeader/partials/pages.js";
import {restaurant, readingHall, spa} from "../../components/serviceSection/partials/services.js";
import ServiceSection from "../../components/serviceSection/ServiceSection.jsx";

const ServicesPage = () => {
    return (
        <>
            <WebsitePagesLayout>
                <PageHeader
                    page={servicesPage}
                />
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
            </WebsitePagesLayout>
        </>
    );
};

export default ServicesPage;