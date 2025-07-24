import WebsiteBaseLayout from "../../layouts/website/WebsiteBaseLayout.jsx";
import RoomDetails from "../../components/website/roomDetails/RoomDetails.jsx";

const RoomDetailPage = () => {
    return (
        <>
            <WebsiteBaseLayout>
                <div className="d-flex flex-column page-wrapper">
                    <main>
                        <RoomDetails/>
                    </main>
                </div>
            </WebsiteBaseLayout>
        </>
    );
};

export default RoomDetailPage;