import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import Hero from "../../components/website/hero/Hero.jsx";
import TwoColsSection from "../../components/website/twoColsSection/TwoColsSection.jsx";
import {roomsSection, servicesSection} from "../../components/website/twoColsSection/partials/sections.js";
import ContactsSection from "../../components/website/contactsSection/ContactsSection.jsx";

const WebsiteHomepage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <main>
                    <Hero/>
                    <TwoColsSection
                        section={roomsSection}
                        imagePosition="left"
                    />
                    <TwoColsSection
                        section={servicesSection}
                        imagePosition="right"
                    />
                    <ContactsSection />
                </main>

            </WebsiteBaseLayout>
        </>
    );
};

export default WebsiteHomepage;