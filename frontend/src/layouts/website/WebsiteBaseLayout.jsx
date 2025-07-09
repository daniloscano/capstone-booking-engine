import Navigation from "../../components/navigation/Navigation.jsx";
import Footer from "../../components/footer/Footer.jsx";

const WebsiteBaseLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            { children }
            <Footer />
        </>
    );
};

export default WebsiteBaseLayout;