import Navigation from "../../components/website/navigation/Navigation.jsx";
import Footer from "../../components/website/footer/Footer.jsx";

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