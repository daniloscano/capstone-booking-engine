import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteHomepage from "./pages/website/WebsiteHomepage.jsx";
import RoomsPage from "./pages/website/RoomsPage.jsx";
import RoomDetailPage from "./pages/website/RoomDetailPage.jsx";
import ServicesPage from "./pages/website/ServicesPage.jsx";
import ContactPage from "./pages/website/ContactPage.jsx";
import BookingEnginePage from "./pages/website/BookingEnginePage.jsx";
import QuoteSolutionDetailsPage from "./pages/website/QuoteSolutionDetailsPage.jsx";
import BookingFormPage from "./pages/website/BookingFormPage.jsx";
import BookingPage from "./pages/website/BookingPage.jsx";
import BackofficeLoginPage from "./pages/backoffice/BackofficeLoginPage.jsx";
import ProtectedRoutes from "./middlewares/ProtectedRoutes.jsx";
import BackofficeDashboard from "./pages/backoffice/BackofficeDashboard.jsx";
import BackofficeBookings from "./pages/backoffice/BackofficeBookings.jsx";
import BackofficeQuoteRequests from "./pages/backoffice/BackofficeQuoteRequests.jsx";
import BackofficeRates from "./pages/backoffice/BackofficeRates.jsx";
import BackofficeRooms from "./pages/backoffice/BackofficeRooms.jsx";
import BackofficeServices from "./pages/backoffice/BackofficeServices.jsx";
import BackofficeUsers from "./pages/backoffice/BackofficeUsers.jsx";

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
                    <Route path="/booking-engine" element={<BookingEnginePage />} />
                    <Route path="/booking-engine/:solutionId" element={<QuoteSolutionDetailsPage />} />
                    <Route path="/booking-engine/:solutionId/:policyCode" element={<BookingFormPage />} />
                    <Route path="/booking/:bookingId" element={<BookingPage />} />

                    <Route path="/backoffice/login" element={<BackofficeLoginPage />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path="backoffice/dashboard" element={<BackofficeDashboard />} />
                        <Route path="backoffice/bookings" element={<BackofficeBookings />} />
                        <Route path="backoffice/quote-requests" element={<BackofficeQuoteRequests />} />
                        <Route path="backoffice/rates" element={<BackofficeRates />} />
                        <Route path="backoffice/rooms" element={<BackofficeRooms />} />
                        <Route path="backoffice/ancillaries" element={<BackofficeServices />} />
                        <Route path="backoffice/users" element={<BackofficeUsers />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
