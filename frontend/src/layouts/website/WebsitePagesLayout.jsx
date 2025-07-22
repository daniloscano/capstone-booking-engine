import Footer from "../../components/website/footer/Footer.jsx";

const WebsitePagesLayout = ({ children }) => {
    return (
        <>
            { children }
            <Footer />
        </>
    );
};

export default WebsitePagesLayout;