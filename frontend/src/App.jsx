import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteHomepage from "./pages/website/WebsiteHomepage.jsx";
import RoomsPage from "./pages/website/RoomsPage.jsx";
import RoomDetailPage from "./pages/website/RoomDetailPage.jsx";
import ServicesPage from "./pages/website/ServicesPage.jsx";
import ContactPage from "./pages/website/ContactPage.jsx";

const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route index path="/" element={<WebsiteHomepage />} />
                    <Route path="/rooms" element={<RoomsPage />} />
                    <Route path="/rooms/:roomId" element={<RoomDetailPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact-us" element={<ContactPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
