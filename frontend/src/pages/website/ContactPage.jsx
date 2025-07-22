import WebsitePagesLayout from "../../layouts/website/WebsitePagesLayout.jsx";
import PageHeader from "../../components/website/pageHeader/PageHeader.jsx";
import { contactsPage } from "../../components/website/pageHeader/partials/pages.js"
import ContactsInfo from "../../components/website/contactsInfo/ContactsInfo.jsx";

const ContactPage = () => {
    return (
        <>
            <WebsitePagesLayout>
                <PageHeader
                    page={contactsPage}
                />
                <ContactsInfo />
            </WebsitePagesLayout>
        </>
    );
};

export default ContactPage;