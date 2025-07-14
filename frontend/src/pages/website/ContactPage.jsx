import WebsitePagesLayout from "../../layouts/website/WebsitePagesLayout.jsx";
import PageHeader from "../../components/pageHeader/PageHeader.jsx";
import { contactsPage } from "../../components/pageHeader/partials/pages.js"
import ContactsInfo from "../../components/contactsInfo/ContactsInfo.jsx";

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