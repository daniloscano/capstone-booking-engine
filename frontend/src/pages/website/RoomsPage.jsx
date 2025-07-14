import WebsitePagesLayout from "../../layouts/website/WebsitePagesLayout.jsx";
import RoomsContainer from "../../components/roomsContainer/RoomsContainer.jsx";
import { roomsPage } from "../../components/pageHeader/partials/pages.js"
import PageHeader from "../../components/pageHeader/PageHeader.jsx";

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