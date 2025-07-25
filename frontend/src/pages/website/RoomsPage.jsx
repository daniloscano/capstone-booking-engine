import WebsitePagesLayout from "../../layouts/website/WebsitePagesLayout.jsx";
import RoomsContainer from "../../components/website/roomsContainer/RoomsContainer.jsx";
import { roomsPage } from "../../components/website/pageHeader/partials/pages.js"
import PageHeader from "../../components/website/pageHeader/PageHeader.jsx";

const RoomsPage = () => {
    return (
        <>
            <WebsitePagesLayout>
                <PageHeader
                    page={roomsPage}
                />
                <RoomsContainer />
            </WebsitePagesLayout>
        </>
    );
};

export default RoomsPage;