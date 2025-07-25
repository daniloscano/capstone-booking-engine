import WebsitePagesLayout from "../../layouts/website/WebsitePagesLayout.jsx";
import PageHeader from "../../components/website/pageHeader/PageHeader.jsx";
import {servicesPage} from "../../components/website/pageHeader/partials/pages.js";
import {restaurant, readingHall, spa} from "../../components/website/serviceSection/partials/services.js";
import ServiceSection from "../../components/website/serviceSection/ServiceSection.jsx";

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