import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import Hero from "../../components/hero/Hero.jsx";
import TwoColsSection from "../../components/twoColsSection/TwoColsSection.jsx";
import {roomsSection, servicesSection} from "../../components/twoColsSection/partials/sections.js";
import ContactsSection from "../../components/contactsSection/ContactsSection.jsx";

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