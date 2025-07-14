import WebsitePagesLayout from "../../layouts/website/WebsitePagesLayout.jsx";
import PageHeader from "../../components/pageHeader/PageHeader.jsx";
import { contactsPage } from "../../components/pageHeader/partials/pages.js"

const ContactPage = () => {
    return (
        <>
            <WebsitePagesLayout>
                <PageHeader
                    page={contactsPage}
                />
            </WebsitePagesLayout>
        </>
    );
};

export default ContactPage;